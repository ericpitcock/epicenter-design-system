import React from 'react';

const HorizontalResize = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M10 20V4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 20V4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 12L7 9L6 12L7 15L2 12Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 12L17 9L18 12L17 15L22 12Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 12H6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 12H14" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

HorizontalResize.displayName = 'HorizontalResize';

export default HorizontalResize;
