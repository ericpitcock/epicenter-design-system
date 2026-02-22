export const RightToLeftBlockQuote = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M7 6L15 6" strokeLinecap="round" />
    <path d="M5 12L15 12" strokeLinecap="round" />
    <path d="M7 18L15 18" strokeLinecap="round" />
    <path d="M19 3L19 21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

RightToLeftBlockQuote.displayName = 'RightToLeftBlockQuote';
