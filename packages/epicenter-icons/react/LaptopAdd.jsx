import React from 'react';

const LaptopAdd = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M22.5 20.5H1.5L3.5 16.5H20.5L22.5 20.5Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.5 16.5V5C20.5 4.17157 19.8284 3.5 19 3.5H5C4.17157 3.5 3.5 4.17157 3.5 5V16.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.5 10H12M12 10L14.5 10M12 10L12 7.5M12 10V12.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

LaptopAdd.displayName = 'LaptopAdd';

export default LaptopAdd;
