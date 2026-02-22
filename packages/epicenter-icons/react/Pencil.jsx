export const Pencil = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 12V21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 6.5C14 6.5 13 7 12 7C11 7 10 6.5 10 6.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 21L18 12L12 3L6 12V21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 12L9 13.5L12 12L15 13.5L18 12" strokeLinejoin="round" />
  </svg>
);

Pencil.displayName = 'Pencil';
