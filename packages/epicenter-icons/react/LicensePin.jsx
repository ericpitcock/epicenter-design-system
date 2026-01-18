import React from 'react';

const LicensePin = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M7 7H15M7 12H12.5M7 17L11 17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.5 22H4.50002C3.39544 22 2.50001 21.1046 2.50002 20L2.50016 3.99998C2.50017 2.89542 3.39559 2 4.50016 2H17.5C18.6046 2 19.5 2.89543 19.5 4V10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.5 19H15.5L17 16.5L16.5 14H20.5L20 16.5L21.5 19H18.5ZM18.5 19V22" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

LicensePin.displayName = 'LicensePin';

export default LicensePin;
