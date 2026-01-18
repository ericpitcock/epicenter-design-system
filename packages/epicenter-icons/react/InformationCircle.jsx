import React from 'react';

const InformationCircle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 16V11.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 8.01172V8.00172" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

InformationCircle.displayName = 'InformationCircle';

export default InformationCircle;
