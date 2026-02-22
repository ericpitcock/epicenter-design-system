export const Text = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M14.5 21H9.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 3L12 21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 5.5V4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V5.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Text.displayName = 'Text';
