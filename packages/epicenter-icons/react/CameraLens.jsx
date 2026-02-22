export const CameraLens = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="4" strokeLinejoin="round" />
    <path d="M12 8H21M16 12V21M8 12V3M12 16H3" strokeLinecap="round" />
  </svg>
);

CameraLens.displayName = 'CameraLens';
