import React from 'react';

const Digg = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M9 5V6.01551M9 9.06204V16" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.99971 9H1.99994V16H5.99971V9ZM5.99971 9V5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.5038 16H11.5001V9H15.5001L15.5038 16ZM15.5038 16L15.504 19H11.4999" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.9998 16H18.0002V9H21.9998V16ZM21.9998 16L22.0003 19H17.9999" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Digg.displayName = 'Digg';

export default Digg;
