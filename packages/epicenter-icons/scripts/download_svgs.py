import json
import requests
import os

# Get the script's directory and construct paths relative to it
script_dir = os.path.dirname(os.path.abspath(__file__))
icons_path = os.path.join(script_dir, "..", "icons.json")
download_dir = os.path.join(script_dir, "..", "downloaded_svgs")

# Load the JSON data (assuming the file is named "icons.json")
with open(icons_path, "r") as f:
    icons = json.load(f)

# Base URL pattern
base_url = "https://cdn.hugeicons.com/icons/"

# Ensure a directory exists to save the SVGs
os.makedirs(download_dir, exist_ok=True)

# Loop over each icon object
for icon in icons:
    name = icon.get("name")
    # Build the URL using the provided pattern
    svg_url = f"{base_url}{name}-stroke-standard.svg"
    filename = os.path.join(download_dir, f"{name}-stroke-standard.svg")
    
    # Skip if file already exists
    if os.path.exists(filename):
        print(f"Skipping {name} (already exists)")
        continue
    
    # Download the SVG file
    response = requests.get(svg_url)
    if response.status_code == 200:
        # Save the file locally
        with open(filename, "wb") as svg_file:
            svg_file.write(response.content)
        print(f"Downloaded {filename}")
    else:
        print(f"Failed to download {svg_url}")