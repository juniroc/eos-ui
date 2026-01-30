import os
import re
import bs4
from bs4 import BeautifulSoup
import sys

# Source and Destination Directories
SOURCE_DIR = "/Users/nu-j/Downloads/dev/apps/eos-ui/src/components/htmlSamples"
DEST_BASE_DIR = "/Users/nu-j/Downloads/dev/apps/eos-ui/src/components/documentCreate/template"

# Reference Component for NumericInput
NUMERIC_INPUT_CONTENT = """'use client';

import { ChangeEvent, CSSProperties, useState } from 'react';

type Props = {
  style: CSSProperties;
};

const NumericInput = ({ style }: Props) => {
  const [value, setValue] = useState('');

  const onlyDigits = (str: string) => str.replace(/[^0-9]/g, '');

  const formatNumber = (numStr: string) => {
    if (!numStr) {
      return '';
    }
    return Number.parseInt(numStr, 10).toLocaleString('ko-KR');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(formatNumber(onlyDigits(e.target.value)));
  };

  const handleBlur = () => {
    setValue(formatNumber(onlyDigits(value)));
  };

  return (
    <input
      className="form-input form-input-numeric"
      style={style}
      type="text"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default NumericInput;
"""

import unicodedata

def get_component_name(filename):
    """
    Maps Korean filename to English Component Name (FormXX_N).
    """
    # Normalize to NFC for consistent dictionary lookup on Mac
    filename = unicodedata.normalize('NFC', filename)

    name_map = {
        "부가세15호-도장.html": "Form15",
        "부가세16호(갑)-을표추가.html": "Form16",
        "부가세16호(을)-페이지추가.html": "Form16_2",
        "부가세19호(갑)-도장+을표.html": "Form19",
        "부가세19호(을)-페이지추가.html": "Form19_2",
        "부가세19호(병)-버튼포함.html": "Form19_3",
        "부가세20호-도장.html": "Form20",
        "부가세21호(1)-도장.html": "Form21_1",
        "부가세21호(2)-도장.html": "Form21_2",
        "부가세25호-페이지추가.html": "Form25_1",
        "부가세27호-도장.html": "Form27",
        "부가세28호-페이지추가.html": "Form28_1",
        "부가세32호-페이지추가.html": "Form32_1",
        "부가세33호-도장.html": "Form33",
        "부가세38호(갑)-을표추가.html": "Form38_1",
        "부가세38호(을)-페이지추가.html": "Form38_2",
        "부가세39호(갑)-을표추가.html": "Form39_1",
        "부가세39호(을)-페이지추가.html": "Form39_2",
        "부가세40호(갑)-을표추가.html": "Form40_1",
        "부가세40호(을)-페이지추가.html": "Form40_2",
        "부가세41호(갑)-도장+을표.html": "Form41_1",
        "부가세41호(을)-페이지추가.html": "Form41_2",
        "부가세42호-페이지추가.html": "Form42_1",
        "부가세47(갑)-을표추가.html": "Form47_1",
        "부가세47(을)-페이지추가.html": "Form47_2",
        "조특법69(갑)-도장+을표.html": "Form69_1_1",
        "조특법69(을)-페이지추가.html": "Form69_1_2",
        "조특법69호의2(갑)-도장+을표.html": "FormJoteuk69_2_1",
        "조특법69호의2(을)-페이지추가.html": "Form69_2_2",
    }

    if filename in name_map:
        return name_map[filename]

    # Fallback Parsing Logic (Safe defaults)
    # Extract number
    match = re.search(r'([0-9]+)', filename)
    num = match.group(1) if match else "00"

    prefix = "FormJoteuk" if "조특법" in filename else "Form"
    suffix = ""

    if "(갑)" in filename:
        suffix = ""
    elif "(을)" in filename:
        suffix = "_2"
    elif "(병)" in filename:
        suffix = "_3"
    elif "(1)" in filename:
        suffix = "_1"
    elif "(2)" in filename:
        suffix = "_2"

    return f"{prefix}{num}{suffix}"


def parse_style_str(style_str):
    """
    Parses a CSS style string (e.g., "width:10pt; color:red;") into a Python dict.
    """
    styles = {}
    if not style_str:
        return styles

    for part in style_str.split(';'):
        if ':' in part:
            key, val = part.split(':', 1)
            key = key.strip()
            val = val.strip()

            # Convert kebab-case to camelCase
            key_camel = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), key)

            # Special handling for unitless numbers that look like they need units?
            # React handles numbers as px usually, but here inputs are pt mostly.
            # We keep values as strings mostly.

            if key_camel:
                styles[key_camel] = val
    return styles

def style_dict_to_jsx(style_dict):
    """
    Converts a Python dict of styles to a JSX string representation.
    e.g. {{ width: '10pt', color: 'red' }}
    """
    if not style_dict:
        return None

    props = []
    for k, v in style_dict.items():
        # Escape single quotes in value
        v_esc = v.replace("'", "\\'")
        props.append(f"{k}: '{v_esc}'")

    return "{{ " + ", ".join(props) + " }}"

def process_html_file(filepath):
    """
    Reads HTML, extracts styles, converts body to JSX.
    """
    with open(filepath, 'r', encoding='utf-8') as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, 'html.parser')

    # 1. Extract CSS
    style_tag = soup.find('style')
    css_content = ""
    if style_tag:
        css_content = style_tag.string

    # 2. Extract Body Content
    # Usually the content is inside <body>.
    # Reference Form15 has a wrapper <div className="form-15">

    body = soup.find('body')
    if not body:
        return None, None

    # Convert HTML tags to JSX
    # We will traverse and rebuild string or use a library.
    # Building a string traversal is robust for this specific task.

    jsx_lines = []

    def traverse(node, indent_level=0):
        if isinstance(node, bs4.element.NavigableString):
            text = str(node).strip()
            if text:
                # Escape braces for JSX
                text = text.replace('{', '{{').replace('}', '}}')
                # Check for special entities if needed, but bs4 handles most.
                indent = "  " * indent_level
                jsx_lines.append(f"{indent}{text}")
            return

        tag_name = node.name
        if not tag_name:
            return

        # Map tag attributes
        attrs = []

        # Handle className
        if node.has_attr('class'):
            classes = node['class']
            if isinstance(classes, list):
                class_str = " ".join(classes)
            else:
                class_str = classes
            attrs.append(f'className="{class_str}"')

        # Handle style
        if node.has_attr('style'):
            style_str = node['style']
            style_dict = parse_style_str(style_str)
            jsx_style = style_dict_to_jsx(style_dict)
            if jsx_style:
                attrs.append(f"style={jsx_style}")

        # Handle other attributes (colSpan, rowSpan, etc.)
        for k, v in node.attrs.items():
            if k in ['class', 'style']:
                continue

            jsx_key = k
            if k == 'colspan': jsx_key = 'colSpan'
            elif k == 'rowspan': jsx_key = 'rowSpan'
            elif k == 'cellspacing': jsx_key = 'cellSpacing'
            elif k == 'cellpadding': jsx_key = 'cellPadding'
            elif k == 'bgcolor': jsx_key = 'bgColor' # React supports this but modern usage warns. Reference uses className="bg-[#...]" but also inline styles. Let's keep existing attributes for fidelity.
            elif k == 'for': jsx_key = 'htmlFor'
            elif k == 'tabindex': jsx_key = 'tabIndex'
            elif k == 'readonly': jsx_key = 'readOnly'
            elif k == 'autocomplete': jsx_key = 'autoComplete'
            elif k == 'autofocus': jsx_key = 'autoFocus'

            # Numeric Input Check
            # Check if this input is a numeric input
            if tag_name == 'input' and 'class' in node.attrs:
                classes = node['class']
                if 'form-input-numeric' in classes:
                    # This is a NumericInput
                    # Extract style and return <NumericInput ... />
                    # We skip the standard input generation below
                    pass

            if v is None:
                attrs.append(jsx_key) # Boolean attribute
            else:
                attrs.append(f'{jsx_key}="{v}"')

        indent = "  " * indent_level

        # Self-closing tags
        if tag_name in ['input', 'img', 'br', 'hr', 'meta', 'link']:
            # Special Handling for Inputs
            if tag_name == 'input' and node.has_attr('class') and ('form-input-numeric' in node.attrs['class']):
                # Render NumericInput
                # We need to construct props string manually or reuse logic
                 # style prop is already in attrs list as style={{...}}

                # Filter out 'type="text"' and 'className=...' if we want to rely on NumericInput's internal class
                # Reference NumericInput takes `style`. It applies its own className.
                # But reference usage: <NumericInput style={{...}} />

                # Find style attr
                style_prop = next((a for a in attrs if a.startswith('style=')), None)

                parts = ["NumericInput"]
                if style_prop:
                    parts.append(style_prop)

                jsx_lines.append(f"{indent}<{' '.join(parts)} />")
            else:
                jsx_lines.append(f"{indent}<{tag_name} {' '.join(attrs)} />")
        else:
            jsx_lines.append(f"{indent}<{tag_name} {' '.join(attrs)}>")
            for child in node.children:
                traverse(child, indent_level + 1)
            jsx_lines.append(f"{indent}</{tag_name}>")

    # Traverse all children of body
    for child in body.children:
        traverse(child, 3) # Start at indent 3 for function body

    return "\n".join(jsx_lines), css_content

def generate_css_file(css_content, component_slug):
    """
    Wraps CSS in tailwind layers and scopes it.
    """
    if not css_content:
        return ""

    # 1. Clean up messy bs4 extraction
    css_content = css_content.replace('&gt;', '>')

    lines = []
    lines.append(f"/* {component_slug} Styles */")
    lines.append("@tailwind base;")
    lines.append("@tailwind components;")
    lines.append("@tailwind utilities;")
    lines.append("")
    lines.append("@layer base {")
    lines.append(f"  .{component_slug} {{")
    lines.append("    width: 624pt;")
    lines.append("    margin: 0 auto;")
    lines.append("    padding-bottom: 20pt;")
    lines.append("  }")
    lines.append("")
    lines.append(f"  .{component_slug} * {{")
    lines.append("    margin: 0;")
    lines.append("    padding: 0;")
    lines.append("    text-indent: 0;")
    lines.append("  }}")
    lines.append("}")
    lines.append("")

    # Process original CSS to scope it
    # This is a naive parser. It assumes standard formatting from the HTML samples.
    # We want to prefix all selectors with .{component_slug}

    lines.append("@layer components {")

    # Split by } to get blocks
    blocks = css_content.split('}')
    for block in blocks:
        if not block.strip():
            continue

        if '{' not in block:
            continue

        selector_str, rules = block.split('{', 1)
        selector_str = selector_str.strip()
        rules = rules.strip()

        # Handle multiple selectors separated by comma
        selectors = [s.strip() for s in selector_str.split(',')]
        scoped_selectors = []

        for sel in selectors:
            if sel == '*' or sel == 'body':
                # Already handled in base layer or wrapper
                continue

            # Skip if it's just setting width/margin on body container which we handled
            if sel == 'body':
                 continue

            # Scope it
            scoped_selectors.append(f".{component_slug} {sel}")

        if scoped_selectors:
            lines.append(f"  {', '.join(scoped_selectors)} {{")
            lines.append(f"    {rules}")
            lines.append("  }")

    lines.append("}")

    return "\n".join(lines)


def main():
    if not os.path.exists(DEST_BASE_DIR):
        os.makedirs(DEST_BASE_DIR)

    files = os.listdir(SOURCE_DIR)

    for filename in files:
        if not filename.endswith('.html'):
            continue

        # 1. Determine Component Name
        component_name = get_component_name(filename)
        # Convert to kebab-case for CSS class
        slug = re.sub(r'(?<!^)(?=[A-Z])', '-', component_name).lower()
        if not slug.startswith('form-'): # Ensure prefix
             slug = 'form-' + slug if not slug.startswith('form') else slug

        print(f"Processing {filename} -> {component_name} ({slug})")

        # 2. Prepare Directory
        comp_dir = os.path.join(DEST_BASE_DIR, component_name)
        if not os.path.exists(comp_dir):
            os.makedirs(comp_dir)

        # 3. Parse content
        src_path = os.path.join(SOURCE_DIR, filename)
        jsx_body, css_raw = process_html_file(src_path)

        if not jsx_body:
            print(f"Skipping {filename} - empty body")
            continue

        # 4. Write TSX
        tsx_content = f"""'use client';
import './{component_name.lower()}.css';
import NumericInput from '@/components/documentCreate/template/{component_name}/NumericInput';

export default function {component_name}() {{
  return (
    <div className="{slug}">
{jsx_body}
    </div>
  );
}}
"""
        with open(os.path.join(comp_dir, f"{component_name}.tsx"), 'w', encoding='utf-8') as f:
            f.write(tsx_content)

        # 5. Write CSS
        css_content = generate_css_file(css_raw, slug)
        with open(os.path.join(comp_dir, f"{component_name.lower()}.css"), 'w', encoding='utf-8') as f:
            f.write(css_content)

        # 6. Write NumericInput
        with open(os.path.join(comp_dir, "NumericInput.tsx"), 'w', encoding='utf-8') as f:
            f.write(NUMERIC_INPUT_CONTENT)

    print("Conversion Complete.")

if __name__ == "__main__":
    main()
