export const ChartRelationship = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M11 5L18 5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 10L14.5 14.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 11L5 18" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="6.5" cy="6.5" r="4.5" strokeLinejoin="round" />
    <circle cx="5" cy="20" r="2" strokeLinejoin="round" />
    <circle cx="16" cy="16" r="2" strokeLinejoin="round" />
    <circle cx="20" cy="5" r="2" strokeLinejoin="round" />
  </svg>
);

ChartRelationship.displayName = 'ChartRelationship';
