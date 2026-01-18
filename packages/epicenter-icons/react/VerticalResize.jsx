import React from 'react';

const VerticalResize = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M4 10H20" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 14H20" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 10V6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 18V14" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 7L12 2L15 7L12 6L9 7Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 17L12 22L15 17L12 18L9 17Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

VerticalResize.displayName = 'VerticalResize';

export default VerticalResize;
