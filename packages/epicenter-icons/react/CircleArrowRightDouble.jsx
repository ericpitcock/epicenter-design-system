export const CircleArrowRightDouble = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
    <path d="M13 9L16 12L13 15M8 9L11 12L8 15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CircleArrowRightDouble.displayName = 'CircleArrowRightDouble';
