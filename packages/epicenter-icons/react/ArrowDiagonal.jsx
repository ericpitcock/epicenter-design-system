export const ArrowDiagonal = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M21 3L3 21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 3H21V8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 21H3V16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ArrowDiagonal.displayName = 'ArrowDiagonal';
