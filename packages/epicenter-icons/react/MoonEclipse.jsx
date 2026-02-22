export const MoonEclipse = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 1.99997C15.0571 3.27423 18 7.52235 18 12C18 16.4776 15.0571 20.7257 11 22" strokeLinejoin="round" />
  </svg>
);

MoonEclipse.displayName = 'MoonEclipse';
