import React from 'react';

const BendTool = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="19" cy="4" r="2" strokeLinejoin="round" />
    <circle cx="5" cy="20" r="2" strokeLinejoin="round" />
    <path d="M5 18C5 10 10 4 17 4" strokeLinejoin="round" />
  </svg>
);

BendTool.displayName = 'BendTool';

export default BendTool;
