//node js script that take external JSON design token file and convert it to CSS custom properties
// JSON example:
// {
//   "colors": {
//     "primary": {
//       "default": "#000000",
//       "light": "#111111"
//     },
//     "secondary": {
//       "default": "#333333",
//       "light": "#444444"
//     }
//   }
// }
// CSS output:
// :root {
//   --colors-primary: #000000;
//   --colors-secondary: #333333;
//}
// html[data-theme="light"] {
//   --colors-primary: #111111;
//   --colors-secondary: #444444;
//}
// needs node.js to run from terminal

const fs = require('fs');
const path = require('path');

const tokens = require('./tokens.json');

const css = Object.keys(tokens).reduce((acc, key) => {
  const token = tokens[key];
  const tokenKeys = Object.keys(token);

  const cssVar = tokenKeys.reduce((acc, tokenKey) => {
    const value = token[tokenKey].default;
    const cssVarName = `--${key}-${tokenKey}`;
    return `${acc}
  ${cssVarName}: ${value};`;
  }, '');

  const cssVarLight = tokenKeys.reduce((acc, tokenKey) => {
    const value = token[tokenKey].light;
    const cssVarName = `--${key}-${tokenKey}`;
    return `${acc}
  ${cssVarName}: ${value};`;
  }, '');

  return `${acc}
:root {${cssVar}
}
html[data-color-theme="light"] {${cssVarLight}
}`;
}, '');

fs.writeFileSync(path.join(__dirname, 'tokens.css'), css);
