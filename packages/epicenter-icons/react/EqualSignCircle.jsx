export const EqualSignCircle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
    <path d="M8.5 10H15.5M8.5 14H15.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

EqualSignCircle.displayName = 'EqualSignCircle';
