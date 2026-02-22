export const EthereumEllipse = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M15.4912 12.1908L12 13.5L8.50883 12.1908M8 12L12 6L16 12L12 18L8 12Z" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

EthereumEllipse.displayName = 'EthereumEllipse';
