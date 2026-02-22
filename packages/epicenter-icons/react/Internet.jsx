export const Internet = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <ellipse cx="12" cy="12" rx="4" ry="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 12H22" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Internet.displayName = 'Internet';
