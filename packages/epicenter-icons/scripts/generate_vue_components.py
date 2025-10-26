import os
import re
import textwrap
from pathlib import Path
import xml.etree.ElementTree as ET

XLINK_NS = "http://www.w3.org/1999/xlink"

def svg_filename_to_component_name(filename):
    """
    Convert SVG filename to PascalCase Vue component name
    Example: 1st-bracket-circle-stroke-standard.svg -> FirstBracketCircle
    """
    name = filename.replace('.svg', '').replace('-stroke-standard', '')

    # Specific renames
    naming_conflicts = {
        'trade-mark': 'trademark-circle',
        'trademark': 'trademark-rectangle',
        'finger-print-scan': 'fingerprint-scan-01',
        'fingerprint-scan': 'fingerprint-scan-02',
        'four-square': 'four-number-square',
        'foursquare': 'foursquare-logo',
    }
    if name in naming_conflicts:
        name = naming_conflicts[name]

    special_chars = {
        ':': 'Colon', '.': 'Dot', '+': 'Plus', '@': 'At', '#': 'Hash',
        '$': 'Dollar', '%': 'Percent', '&': 'And', '!': 'Exclamation',
        '?': 'Question', '*': 'Star', '/': 'Slash', '\\': 'Backslash',
        '|': 'Pipe', '=': 'Equals', '<': 'Less', '>': 'Greater',
        '(': 'ParenOpen', ')': 'ParenClose', '[': 'BracketOpen',
        ']': 'BracketClose', '{': 'BraceOpen', '}': 'BraceClose',
        ';': 'Semicolon', ',': 'Comma', "'": 'Quote', '"': 'DoubleQuote',
        '`': 'Backtick', '~': 'Tilde', '^': 'Caret'
    }
    for char, replacement in special_chars.items():
        name = name.replace(char, f'-{replacement}')

    if name and name[0].isdigit():
        name = 'Num' + name

    parts = [p for p in name.split('-') if p]
    pascal_name = ''.join(word.capitalize() for word in parts)
    return pascal_name

# ---------- SVG -> h() helpers ----------

INDENT = '    '  # 4 spaces

def _strip_ns(tag: str) -> str:
    return tag.split('}', 1)[1] if '}' in tag else tag

def _normalize_attr_name(name: str) -> str:
    if name.startswith('{'):
        uri, local = name[1:].split('}', 1)
        if uri == XLINK_NS:
            return f'xlink:{local}'
        return local
    return name

def _js_escape(value: str) -> str:
    return "'" + (
        value.replace('\\', '\\\\')
             .replace("'", "\\'")
             .replace('\n', '\\n')
             .replace('\r', '')
    ) + "'"

def _attrs_to_js_obj(attrs: dict) -> str:
    items = []
    for k, v in attrs.items():
        name = _normalize_attr_name(k)
        if name in ('xmlns', 'xmlns:xlink'):
            continue
        items.append((name, v))
    # Sort for deterministic output
    items.sort(key=lambda kv: kv[0])
    if not items:
        return '{}'
    parts = [f"'{k}': {_js_escape(v)}" for k, v in items]
    return '{ ' + ', '.join(parts) + ' }'

def _render_node(el: ET.Element, level: int = 0) -> str:
    tag = _strip_ns(el.tag)
    attrs_js = _attrs_to_js_obj(el.attrib)

    # Collect children (elements + meaningful text nodes)
    children_parts = []
    if el.text and el.text.strip():
        children_parts.append(_js_escape(el.text.strip()))

    for child in list(el):
        children_parts.append(_render_node(child, level + 1))
        if child.tail and child.tail.strip():
            children_parts.append(_js_escape(child.tail.strip()))

    if children_parts:
        inner = (',\n').join(INDENT * (level + 1) + part for part in children_parts)
        return f"h('{tag}', {attrs_js}, [\n{inner}\n{INDENT * level}])"
    else:
        return f"h('{tag}', {attrs_js})"

# ---------- Component generation ----------

def create_js_component(svg_content: str, component_name: str) -> str:
    """
    Create a Vue 3 component using defineComponent + h(),
    with top-level children hoisted into constants.
    """
    try:
        root = ET.fromstring(svg_content)
    except ET.ParseError as e:
        raise ValueError(f'XML parse error for {component_name}: {e}')

    if _strip_ns(root.tag) != 'svg':
        raise ValueError(f"Root element is not <svg> for {component_name}")

    viewbox = root.attrib.get('viewBox')
    if not viewbox:
        m = re.search(r'viewBox="([^"]+)"', svg_content)
        viewbox = m.group(1) if m else '0 0 24 24'

    # Hoist each top-level child of <svg>
    hoisted_lines = []
    hoisted_refs = []
    for idx, child in enumerate(list(root)):
        constname = f"_hoisted{idx + 1}"
        hoisted_lines.append(f"const {constname} = {_render_node(child)}")
        hoisted_refs.append(constname)

    hoisted_block = "\n".join(hoisted_lines)
    children_block = ',\n'.join(hoisted_refs)
    indented_children = textwrap.indent(children_block, INDENT * 3)

    js_template = f"""import {{ defineComponent, h }} from 'vue'

{hoisted_block}

export default defineComponent({{
    name: '{component_name}',
    render() {{
        return h('svg', {{
            class: 'ep-icon',
            viewBox: '{viewbox}',
            'aria-hidden': 'true',
            focusable: 'false'
        }}, [
{indented_children}
        ])
    }}
}})
"""
    return js_template

# ---------- Batch conversion ----------

def convert_all_svgs():
    """
    Convert all cleaned SVG files to Vue components
    """
    input_dir = Path("cleaned_svgs")
    output_dir = Path("epicenter-icons")

    if not input_dir.exists():
        print("Error: cleaned_svgs directory not found")
        return

    output_dir.mkdir(exist_ok=True)

    svg_files = list(input_dir.glob("*.svg"))
    if not svg_files:
        print("No SVG files found in cleaned_svgs directory")
        return

    print(f"Found {len(svg_files)} SVG files to convert...")

    converted_count = 0
    component_names = []

    for svg_file in svg_files:
        try:
            with open(svg_file, 'r', encoding='utf-8') as f:
                svg_content = f.read()

            component_name = svg_filename_to_component_name(svg_file.name)

            if not re.match(r'^[A-Za-z][A-Za-z0-9]*$', component_name):
                print(f"Skipping invalid component name: {component_name} from {svg_file.name}")
                continue

            js_content = create_js_component(svg_content, component_name)

            js_file = output_dir / f"{component_name}.js"
            with open(js_file, 'w', encoding='utf-8') as f:
                f.write(js_content)

            component_names.append(component_name)
            converted_count += 1
            print(f"Converted: {svg_file.name} -> {component_name}.js")

        except Exception as e:
            print(f"Error processing {svg_file.name}: {e}")

    print(f"\nConversion complete! Successfully converted {converted_count} SVG files.")
    print(f"JS components saved to: {output_dir.absolute()}")
    print("\nUsage examples:")
    print("import { IconName } from './epicenter-icons'")
    print("import AllIcons from './epicenter-icons'")

if __name__ == "__main__":
    # Change to the parent directory (where cleaned_svgs is located)
    os.chdir(Path(__file__).parent.parent)
    convert_all_svgs()