export const ExpandParagraph = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M2 7.5L5 4.5L8 7.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 16.5L5 19.5L8 16.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12H22M12 8H22M12 16H17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 5V19" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ExpandParagraph.displayName = 'ExpandParagraph';
