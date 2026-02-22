export const FitToScreen = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M3 4V20" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 4V20" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 9L18 12L15 15M9 9L6 12L9 15M6.5 12H17.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

FitToScreen.displayName = 'FitToScreen';
