import React from 'react';

const FullSignal = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M18.5 5H17V19H18.5M18.5 5H20V19H18.5M18.5 5V19" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 8H10.5V19H12M12 8H13.5V19H12M12 8V19" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.5 12H4V19H5.5M5.5 12H7V19H5.5M5.5 12V19" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

FullSignal.displayName = 'FullSignal';

export default FullSignal;
