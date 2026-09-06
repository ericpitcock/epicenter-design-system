// EpMap and EpDatePicker import their dependency's stylesheet for its side
// effect. Neither mapbox-gl nor flatpickr ships a declaration for the .css
// entry, and the bundler — not TypeScript — is what resolves it.
declare module '*.css'
