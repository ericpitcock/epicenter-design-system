export const Grid = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M7 3V21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 3V21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 7L3 7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 17L3 17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Grid.displayName = 'Grid';
