import json
import requests
import os

# Load the JSON data (assuming the file is named "icons.json")
with open("../icons.json", "r") as f:
    icons = json.load(f)

# Base URL pattern
base_url = "https://cdn.hugeicons.com/icons/"

# Ensure a directory exists to save the SVGs
os.makedirs("../downloaded_svgs", exist_ok=True)

# Loop over each icon object
for icon in icons:
    name = icon.get("name")
    # Build the URL using the provided pattern
    svg_url = f"{base_url}{name}-stroke-standard.svg"
    
    # Download the SVG file
    response = requests.get(svg_url)
    if response.status_code == 200:
        # Save the file locally
        filename = os.path.join("../downloaded_svgs", f"{name}-stroke-standard.svg")
        with open(filename, "wb") as svg_file:
            svg_file.write(response.content)
        print(f"Downloaded {filename}")
    else:
        print(f"Failed to download {svg_url}")