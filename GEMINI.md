# Epicenter Design System: Gemini Guide

You are working on the **Epicenter Design System**, a multi-framework (React & Vue) component library focused on high-density data visualization and enterprise application patterns.

## 🏗 Repository Structure

This is a monorepo containing multiple packages under `packages/`:

-   **`epicenter-styles`**: The foundation. SCSS-based styles and YAML-based design tokens.
-   **`epicenter-components-react`**: React component implementation (TypeScript/TSX).
-   **`epicenter-components-vue`**: Vue 3 component implementation (TypeScript/SFC).
-   **`epicenter-icons`**: Build pipeline for icons.
-   **`epicenter-icons-react` / `epicenter-icons-vue`**: Generated icon components.
-   **`docs`**: VitePress documentation site.

## 🛠 Tech Stack

-   **Frameworks**: Vue 3 (Composition API), React 18+.
-   **Styling**: SCSS, CSS Custom Properties, OKLCH/HSL for color tokens.
-   **Visualization**: D3.js, Highcharts, Mapbox GL.
-   **Documentation**: Storybook (separate React/Vue instances), VitePress.
-   **Utilities**: VueUse, Shiki (code highlighting), Faker.js.

## 🎨 Design System Principles

### Naming Conventions
-   All components are prefixed with `Ep` (e.g., `EpButton`, `EpTable`).
-   React components use PascalCase (e.g., `EpAsyncButton.tsx`).
-   Vue components use PascalCase SFCs (e.g., `EpButton.vue`).
-   CSS classes follow a modified BEM pattern (e.g., `.ep-button`, `.ep-button--large`, `.ep-button__icon`).

### Styling & Theming
-   **Custom Properties First**: Components should rely on CSS variables for sizing, colors, and spacing.
-   **Tokens**: Design tokens are defined in `packages/epicenter-styles/tokens/color/` as `.yaml` files.
-   **Theme Switching**: Supports `light` and `dark` modes via `html.light-theme` and `html.dark-theme` classes. Uses the modern `light-dark()` CSS function for tokens.

## 🔄 Critical Workflows

### Adding/Updating Components
1.  **Logic First**: Implement the core logic in both React and Vue packages to maintain parity.
2.  **Styles**: Add shared SCSS to `packages/epicenter-styles/scss/components/`.
3.  **Stories**: Every component **MUST** have a `.stories.tsx` (React) or `.stories.js` (Vue) file.
4.  **Parity**: Ensure props and event names are as consistent as possible between frameworks.

### Icon Pipeline
The icons in this project are generated from a custom pipeline:
1.  Add icon metadata to `packages/epicenter-icons/icons.json`.
2.  The pipeline downloads SVGs, cleans them, and generates framework-specific components.
3.  **Do not** manually edit files in `epicenter-icons-react` or `epicenter-icons-vue`.

### Style Build
-   The styles package has a `build.mjs` script that converts YAML tokens to SCSS variables.
-   Run `npm run build` in `packages/epicenter-styles` after changing tokens.

## 🤖 AI Guidelines for this Repo

-   **Parity Awareness**: When asked to fix a component or add a feature, check if the change should be applied to both the React and Vue versions.
-   **Tooling**: Use `npm run storybook` (Vue) or `npm run storybook:react` (React) to verify UI changes.
-   **Types**: Always export props interfaces from component files.
-   **Slots/Children**: In React, use `children` and specific `iconLeft/Right` props. In Vue, use `<slot />` and named slots (`#icon-left`).
-   **Icons**: When using icons in components, always import them from the respective framework icon package (e.g., `@ericpitcock/epicenter-icons-vue/ArrowDown01`).

## 🧪 Testing & Validation
-   Use Storybook as the primary development and testing environment.
-   Ensure components are responsive and handle high-density data (e.g., long table strings, many tags) gracefully.
