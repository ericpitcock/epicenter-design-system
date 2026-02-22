export const CircleArrowHorizontal = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
    <path d="M15 10L17 12L15 14M9 14L7 12L9 10M16.5 12H7.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CircleArrowHorizontal.displayName = 'CircleArrowHorizontal';
