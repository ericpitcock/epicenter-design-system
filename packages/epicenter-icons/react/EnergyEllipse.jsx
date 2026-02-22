export const EnergyEllipse = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8.00009 12.4999L13 5.99991V11.4999H16L11 17.9999V12.4999H8.00009Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

EnergyEllipse.displayName = 'EnergyEllipse';
