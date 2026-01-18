import React from 'react';

const AlertCircle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 8V12.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 15.9883V15.9983" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

AlertCircle.displayName = 'AlertCircle';

export default AlertCircle;
