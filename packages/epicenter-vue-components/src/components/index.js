// Dynamically import all components
const modules = import.meta.glob('./**/Ep*.vue', { eager: true })

// Create a named export object for individual imports
const components = {}
for (const path in modules) {
  const component = modules[path].default
  const name = component.name || path.split('/').pop().replace('.vue', '')
  components[name] = component
}

// Named exports for tree-shakable imports
export const { ...exports } = components

// Default export for global registration
export default components