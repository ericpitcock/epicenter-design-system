import React from 'react';

const WebflowEllipse = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M7.5 9L8.5 16C10.5 14.8 12 10.8333 12.5 9L14 16C16 14.4 17.1667 10.6667 17.5 9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

WebflowEllipse.displayName = 'WebflowEllipse';

export default WebflowEllipse;
