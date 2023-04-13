const fs = require("fs");

// Read in the source JSON file
const source = JSON.parse(fs.readFileSync("test.json"));

// Extract the CSS property names and values from the source object
const properties = Object.entries(source)
  .map(([key, value]) => {
    const cssPropertyName = `--${key.replace(/_/g, "-")}`;
    return {
      cssPropertyName,
      default: value.default,
      light: value.light,
    };
  });

// Generate the default dark theme CSS
let output = properties
  .map(({ cssPropertyName, default: defaultValue }) => `:root {\n  ${cssPropertyName}: ${defaultValue};\n}\n`)
  .join("");

// Generate the light theme CSS
output += properties
  .map(({ cssPropertyName, light: lightValue }) => `html[data-theme="light"] {\n  ${cssPropertyName}: ${lightValue};\n}\n`)
  .join("");

// Write the output to a file
fs.writeFileSync("output.css", output);

// input
// {
//   "text": {
//     "color": {
//       "default": "var(--gray-20)",
//       "light": "var(--gray-50)"
//     }
//   }
// }

// output
// // default dark theme
// :root {
//   --text-color: var(--gray-20);
// }

// // light theme
// html[data-theme="light"] {
//   --text-color: var(--gray-50);
// }