export const CircleArrowUpDouble = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
    <path d="M9 11L12 8L15 11M9 16L12 13L15 16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CircleArrowUpDouble.displayName = 'CircleArrowUpDouble';
