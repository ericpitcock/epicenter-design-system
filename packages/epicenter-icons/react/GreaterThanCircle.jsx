export const GreaterThanCircle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M10.5 9L13.5 12L10.5 15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

GreaterThanCircle.displayName = 'GreaterThanCircle';
