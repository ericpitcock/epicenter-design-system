import React from 'react';

const Safari = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" strokeLinejoin="round" />
    <path d="M12 2V4.5M12 22V19.5M22 12H19.5M2 12H4.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 10L16 8L14 14M10 10L8 16L14 14M10 10L14 14" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Safari.displayName = 'Safari';

export default Safari;
