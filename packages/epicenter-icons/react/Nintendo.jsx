import React from 'react';

const Nintendo = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M19 4.5H5C3.34315 4.5 2 5.84315 2 7.5V16.5C2 18.1569 3.34315 19.5 5 19.5H19C20.6569 19.5 22 18.1569 22 16.5V7.5C22 5.84315 20.6569 4.5 19 4.5Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 4.5V19.5" strokeLinecap="round" />
    <path d="M7 4.5V19.5" strokeLinecap="round" />
    <path d="M19.5012 15.5H19.4922" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.50899 8.5H4.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Nintendo.displayName = 'Nintendo';

export default Nintendo;
