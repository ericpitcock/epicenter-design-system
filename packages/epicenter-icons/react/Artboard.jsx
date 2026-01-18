import React from 'react';

const Artboard = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M15.5 7.5H8.5C7.94772 7.5 7.5 7.94772 7.5 8.5V15.5C7.5 16.0523 7.94772 16.5 8.5 16.5H15.5C16.0523 16.5 16.5 16.0523 16.5 15.5V8.5C16.5 7.94772 16.0523 7.5 15.5 7.5Z" />
    <path d="M7.5 5V3M16.5 5V3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.5 21V19M16.5 21V19" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 7.5L21 7.5M19 16.5H21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 7.5L5 7.5M3 16.5H5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Artboard.displayName = 'Artboard';

export default Artboard;
