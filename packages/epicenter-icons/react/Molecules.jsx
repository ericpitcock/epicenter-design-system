export const Molecules = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="13" r="4" strokeLinejoin="round" />
    <circle cx="12" cy="4" r="2" strokeLinejoin="round" />
    <circle cx="4" cy="20" r="2" strokeLinejoin="round" />
    <circle cx="20" cy="20" r="2" strokeLinejoin="round" />
    <path d="M12 9V6M18.5 18.5L15 16M5.5 18.5L9 16" strokeLinejoin="round" />
  </svg>
);

Molecules.displayName = 'Molecules';
