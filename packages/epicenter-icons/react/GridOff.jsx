export const GridOff = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M7 21V7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 17L17 17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 3L21 21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 3V13M17 21V17M21 7L11 7M3 7H7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

GridOff.displayName = 'GridOff';
