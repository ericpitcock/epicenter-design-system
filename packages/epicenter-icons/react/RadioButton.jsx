export const RadioButton = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

RadioButton.displayName = 'RadioButton';
