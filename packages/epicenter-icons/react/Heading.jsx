import React from 'react';

const Heading = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M6 12H17M6 20V4M17 20V4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Heading.displayName = 'Heading';

export default Heading;
