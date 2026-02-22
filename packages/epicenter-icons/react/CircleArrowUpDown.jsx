export const CircleArrowUpDown = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
    <path d="M9 15.5V8.5M9 8.5L6.99997 10.5M9 8.5L11 10.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 13.5L15 15.5M15 15.5L13 13.5M15 15.5L15 8.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CircleArrowUpDown.displayName = 'CircleArrowUpDown';
