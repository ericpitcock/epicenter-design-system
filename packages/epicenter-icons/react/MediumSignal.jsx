import React from 'react';

const MediumSignal = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M17 19V5H20V19H17Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 8H10.5V19H12M12 8H13.5V19H12M12 8V19" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.5 12H4V19H5.5M5.5 12H7V19H5.5M5.5 12V19" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

MediumSignal.displayName = 'MediumSignal';

export default MediumSignal;
