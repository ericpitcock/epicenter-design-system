# React Icon Components

This directory contains automatically generated React icon components from the Epicenter Design System.

## Generated Icons

All icons are generated from the cleaned SVG files in `../cleaned_svgs/` using the `generate_react_components.py` script.

Total icons: **4,617**

## Usage

### Import Individual Icons

```jsx
import { Abacus, Activity01, Add01 } from '@epicenter/icons/react';

function MyComponent() {
  return (
    <div>
      <Abacus />
      <Activity01 />
      <Add01 />
    </div>
  );
}
```

### Import All Icons

```jsx
import * as Icons from '@epicenter/icons/react';

function MyComponent() {
  return (
    <div>
      <Icons.Abacus />
      <Icons.Activity01 />
    </div>
  );
}
```

### Custom Props

All icons accept standard SVG props and can be customized:

```jsx
import { Abacus } from '@epicenter/icons/react';

function MyComponent() {
  return (
    <Abacus 
      width={32}
      height={32}
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      onClick={() => console.log('Icon clicked')}
    />
  );
}
```

## Icon Structure

Each icon component:
- Accepts all standard SVG props via spread operator (`{...props}`)
- Has a default `className` of `ep-icon` for styling
- Has `aria-hidden="true"` for accessibility (icons are decorative by default)
- Has `focusable="false"` to prevent focus in IE
- Uses `strokeLinecap` and `strokeLinejoin` in React camelCase format
- Has a `displayName` set for better debugging

## Styling

You can style icons using CSS:

```css
.ep-icon {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
}
```

Or use inline styles:

```jsx
<Abacus style={{ width: '32px', height: '32px', color: '#ff0000' }} />
```

## Regenerating Icons

To regenerate all React icon components from the cleaned SVG files:

```bash
cd packages/epicenter-icons
python3 scripts/generate_react_components.py
```

This will:
1. Read all SVG files from `cleaned_svgs/`
2. Convert them to React components with proper naming
3. Generate individual `.jsx` files in the `react/` directory
4. Create an `index.js` file for easy imports

## Naming Conventions

Icon file names are converted from kebab-case to PascalCase:
- `abacus-stroke-standard.svg` → `Abacus.jsx`
- `ai-brain-01-stroke-standard.svg` → `AiBrain01.jsx`
- `1st-bracket-circle-stroke-standard.svg` → `Num1stBracketCircle.jsx` (numbers are prefixed with "Num")

## Notes

- Icons use SVG paths without `fill` or `stroke` attributes, allowing you to control colors via CSS
- All icons have a default `viewBox="0 0 24 24"`
- The `className="ep-icon"` can be overridden by passing a custom `className` prop
- Icons are functional components, not class components
