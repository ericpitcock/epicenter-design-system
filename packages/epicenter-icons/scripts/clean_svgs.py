import os
import re
from pathlib import Path

def clean_svg_content(content):
    """
    Clean SVG content by removing specified attributes and minifying to single line
    """
    # Remove width, height from <svg> tag only (not from other elements like rect)
    content = re.sub(r'(<svg[^>]*)\s+width="[^"]*"', r'\1', content)
    content = re.sub(r'(<svg[^>]*)\s+height="[^"]*"', r'\1', content)
    
    # Replace hardcoded fill colors with "currentColor" to make them CSS controllable
    # Keep fill="none" as is
    content = re.sub(r'\s+fill="(?!none")[^"]*"', ' fill="currentColor"', content)
    
    # Remove hardcoded stroke colors and stroke-width, but keep linecap/linejoin
    content = re.sub(r'\s+stroke="[^"]*"', '', content)
    content = re.sub(r'\s+stroke-width="[^"]*"', '', content)
    
    # Minify: remove newlines, extra spaces, and compress to single line
    content = re.sub(r'\n\s*', '', content)  # Remove newlines and leading spaces
    content = re.sub(r'>\s+<', '><', content)  # Remove spaces between tags
    content = re.sub(r'\s+', ' ', content)  # Replace multiple spaces with single space
    content = content.strip()
    
    return content

def clean_all_svgs():
    """
    Clean all SVG files in the downloaded_svgs directory and save to cleaned_svgs
    """
    input_dir = Path("downloaded_svgs")
    output_dir = Path("cleaned_svgs")
    
    if not input_dir.exists():
        print("Error: downloaded_svgs directory not found")
        return
    
    # Create output directory if it doesn't exist
    output_dir.mkdir(exist_ok=True)
    
    svg_files = list(input_dir.glob("*.svg"))
    
    if not svg_files:
        print("No SVG files found in downloaded_svgs directory")
        return
    
    print(f"Found {len(svg_files)} SVG files to clean...")
    print(f"Output directory: {output_dir}")
    
    cleaned_count = 0
    
    for svg_file in svg_files:
        try:
            # Read original content
            with open(svg_file, 'r', encoding='utf-8') as f:
                original_content = f.read()
            
            # Clean the content
            cleaned_content = clean_svg_content(original_content)
            
            # Write cleaned content to output directory
            output_file = output_dir / svg_file.name
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(cleaned_content)
            
            cleaned_count += 1
            print(f"Cleaned: {svg_file.name} -> {output_file}")
            
        except Exception as e:
            print(f"Error processing {svg_file.name}: {e}")
    
    print(f"\nCleaning complete! Successfully cleaned {cleaned_count} SVG files.")
    print(f"Cleaned files saved to: {output_dir.absolute()}")

if __name__ == "__main__":
    # Change to the parent directory (where downloaded_svgs is located)
    os.chdir(Path(__file__).parent.parent)
    clean_all_svgs()