"""
Shared utilities for icon component generation scripts.
"""


def svg_filename_to_component_name(filename):
    """
    Convert SVG filename to PascalCase component name.
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
