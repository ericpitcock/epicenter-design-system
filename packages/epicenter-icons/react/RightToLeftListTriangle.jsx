export const RightToLeftListTriangle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M17 5.5L21 3V8L17 5.5Z" strokeLinejoin="round" />
    <path d="M17 18.5L21 16V21L17 18.5Z" strokeLinejoin="round" />
    <path d="M3 5.5L13 5.5" strokeLinecap="round" />
    <path d="M3 12L13 12" strokeLinecap="round" />
    <path d="M3 18.5L13 18.5" strokeLinecap="round" />
  </svg>
);

RightToLeftListTriangle.displayName = 'RightToLeftListTriangle';
