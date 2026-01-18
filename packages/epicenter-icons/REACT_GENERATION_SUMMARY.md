# React Icon Generation - Summary

## Overview
Successfully created a script to generate React icon components from SVG files for the Epicenter Design System.

## Script Details
- **Location**: `packages/epicenter-icons/scripts/generate_react_components.py`
- **Purpose**: Converts cleaned SVG files to React JSX components
- **Input**: `packages/epicenter-icons/cleaned_svgs/*.svg`
- **Output**: `packages/epicenter-icons/react/*.jsx`

## Results
- **Total Icons Generated**: 4,617
- **Format**: React functional components with JSX
- **File Extension**: `.jsx`

## Key Features

### 1. React Component Structure
Each generated component:
- Uses functional component syntax
- Accepts and spreads props for customization
- Includes displayName for debugging
- Exports as default

### 2. SVG Attribute Conversion
- Converts hyphenated SVG attributes to React camelCase:
  - `stroke-linecap` → `strokeLinecap`
  - `stroke-linejoin` → `strokeLinejoin`
  - `stroke-width` → `strokeWidth`
  - `fill-rule` → `fillRule`
  - And more...

### 3. Accessibility
- `aria-hidden="true"` (icons are decorative by default)
- `focusable="false"` (prevents focus in IE)
- Custom className `ep-icon` for styling

### 4. Index File
- Auto-generated `index.js` with named exports
- Allows `import { IconName } from './react'`
- Supports tree-shaking

## Example Component

```jsx
import React from 'react';

const Abacus = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="..." strokeLinecap="round" strokeLinejoin="round" />
    <path d="..." strokeLinecap="round" strokeLinejoin="round" />
    <path d="..." strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Abacus.displayName = 'Abacus';

export default Abacus;
```

## Usage Examples

### Basic Usage
```jsx
import { Abacus } from '@epicenter/icons/react';

function MyComponent() {
  return <Abacus />;
}
```

### With Custom Props
```jsx
import { Abacus } from '@epicenter/icons/react';

function MyComponent() {
  return (
    <Abacus 
      width={32}
      height={32}
      stroke="currentColor"
      strokeWidth={2}
      onClick={() => console.log('clicked')}
    />
  );
}
```

### Import All Icons
```jsx
import * as Icons from '@epicenter/icons/react';

function MyComponent() {
  return <Icons.Abacus />;
}
```

## Naming Convention
SVG filenames are converted from kebab-case to PascalCase:
- `abacus-stroke-standard.svg` → `Abacus.jsx`
- `ai-brain-01-stroke-standard.svg` → `AiBrain01.jsx`
- `1st-bracket-circle-stroke-standard.svg` → `Num1stBracketCircle.jsx`

Numbers at the start are prefixed with "Num" to create valid JavaScript identifiers.

## Regenerating Icons
To regenerate all icons from source SVGs:

```bash
cd packages/epicenter-icons
python3 scripts/generate_react_components.py
```

## Files Created
1. `scripts/generate_react_components.py` - Generation script
2. `react/*.jsx` - 4,617 React component files
3. `react/index.js` - Barrel export file
4. `react/README.md` - React-specific documentation

## Comparison with Vue Components
| Feature | Vue Components | React Components |
|---------|---------------|------------------|
| File Extension | `.js` | `.jsx` |
| Syntax | `defineComponent` + `h()` | Functional components |
| Props | Automatic | Spread operator |
| Attributes | Hyphenated | camelCase |
| Hoisting | Top-level constants | Inline |
| Import | Direct file import | Named exports |

## Notes
- The Vue components remain unchanged in `epicenter-icons/` directory
- React components are completely separate in the `react/` directory
- Both use the same source SVGs from `cleaned_svgs/`
- Script maintains same naming conventions as Vue version
- All SVG attributes are properly converted to React format
