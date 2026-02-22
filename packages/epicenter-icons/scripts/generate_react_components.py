import os
import re
from pathlib import Path
import xml.etree.ElementTree as ET

XLINK_NS = "http://www.w3.org/1999/xlink"

def svg_filename_to_component_name(filename):
    """
    Convert SVG filename to PascalCase React component name
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

# ---------- SVG -> JSX helpers ----------

def _strip_ns(tag: str) -> str:
    """Remove namespace from tag"""
    return tag.split('}', 1)[1] if '}' in tag else tag

def _normalize_attr_name(name: str) -> str:
    """Normalize attribute names for React (camelCase, xlink:href -> xlinkHref)"""
    if name.startswith('{'):
        uri, local = name[1:].split('}', 1)
        if uri == XLINK_NS:
            # Convert xlink:href to xlinkHref for React
            return f'xlink{local.capitalize()}'
        return local
    
    # Convert SVG attributes to React camelCase
    react_attr_map = {
        'stroke-linecap': 'strokeLinecap',
        'stroke-linejoin': 'strokeLinejoin',
        'stroke-width': 'strokeWidth',
        'fill-rule': 'fillRule',
        'clip-rule': 'clipRule',
        'stroke-dasharray': 'strokeDasharray',
        'stroke-dashoffset': 'strokeDashoffset',
        'stroke-miterlimit': 'strokeMiterlimit',
        'stroke-opacity': 'strokeOpacity',
        'fill-opacity': 'fillOpacity',
    }
    
    return react_attr_map.get(name, name)

def _attrs_to_jsx(attrs: dict, indent: str = '  ') -> str:
    """Convert attributes to JSX format"""
    items = []
    for k, v in attrs.items():
        name = _normalize_attr_name(k)
        if name in ('xmlns', 'xmlns:xlink'):
            continue
        items.append((name, v))
    
    # Sort for deterministic output
    items.sort(key=lambda kv: kv[0])
    
    if not items:
        return ''
    
    parts = []
    for k, v in items:
        # Escape quotes in attribute values
        escaped_v = v.replace('"', '&quot;')
        parts.append(f'{k}="{escaped_v}"')
    
    return ' ' + ' '.join(parts)

def _render_element_to_jsx(el: ET.Element, indent_level: int = 2) -> str:
    """Convert an XML element to JSX"""
    tag = _strip_ns(el.tag)
    indent = '  ' * indent_level
    
    attrs_str = _attrs_to_jsx(el.attrib, indent)
    
    # Check if element has children
    children = list(el)
    text = (el.text or '').strip()
    
    if not children and not text:
        # Self-closing tag
        return f'{indent}<{tag}{attrs_str} />'
    else:
        # Opening and closing tags
        lines = [f'{indent}<{tag}{attrs_str}>']
        
        if text:
            lines.append(f'{indent}  {text}')
        
        for child in children:
            lines.append(_render_element_to_jsx(child, indent_level + 1))
            if child.tail and child.tail.strip():
                lines.append(f'{indent}  {child.tail.strip()}')
        
        lines.append(f'{indent}</{tag}>')
        return '\n'.join(lines)

# ---------- Component generation ----------

def create_react_component(svg_content: str, component_name: str) -> str:
    """
    Create a React component using JSX
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

    # Render all children
    children_jsx = []
    for child in list(root):
        children_jsx.append(_render_element_to_jsx(child, 2))
    
    children_block = '\n'.join(children_jsx)

    jsx_template = f"""export const {component_name} = (props) => (
  <svg
    className="ep-icon"
    viewBox="{viewbox}"
    aria-hidden="true"
    focusable="false"
    {{...props}}
  >
{children_block}
  </svg>
);

{component_name}.displayName = '{component_name}';
"""
    return jsx_template

# ---------- Batch conversion ----------

def convert_all_svgs():
    """
    Convert all cleaned SVG files to React components
    """
    input_dir = Path("cleaned_svgs")
    output_dir = Path("react")

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

            jsx_content = create_react_component(svg_content, component_name)

            jsx_file = output_dir / f"{component_name}.jsx"
            with open(jsx_file, 'w', encoding='utf-8') as f:
                f.write(jsx_content)

            component_names.append(component_name)
            converted_count += 1
            print(f"Converted: {svg_file.name} -> {component_name}.jsx")

        except Exception as e:
            print(f"Error processing {svg_file.name}: {e}")

    # Create index file for easy imports
    index_content = "// Auto-generated index file for React icon components\n\n"
    for name in sorted(component_names):
        index_content += f"export {{ {name} }} from './{name}.jsx';\n"
    
    index_file = output_dir / "index.js"
    with open(index_file, 'w', encoding='utf-8') as f:
        f.write(index_content)

    print(f"\nConversion complete! Successfully converted {converted_count} SVG files.")
    print(f"React components saved to: {output_dir.absolute()}")
    print(f"Index file created: {index_file.absolute()}")
    print("\nUsage examples:")
    print("import { Abacus } from './react'")
    print("import * as Icons from './react'")

if __name__ == "__main__":
    # Change to the parent directory (where cleaned_svgs is located)
    os.chdir(Path(__file__).parent.parent)
    convert_all_svgs()
