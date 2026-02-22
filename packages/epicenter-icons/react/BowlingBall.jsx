export const BowlingBall = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M15 6V6.01" strokeLinecap="round" />
    <path d="M18 9V9.01" strokeLinecap="round" />
    <path d="M14 10V10.01" strokeLinecap="round" />
  </svg>
);

BowlingBall.displayName = 'BowlingBall';
