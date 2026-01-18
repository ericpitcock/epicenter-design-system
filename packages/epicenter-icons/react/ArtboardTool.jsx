import React from 'react';

const ArtboardTool = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M8 6H20C21.1046 6 22 6.89543 22 8V20C22 21.1046 21.1046 22 20 22H8C6.89543 22 6 21.1046 6 20V8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 6L4 6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 2V4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ArtboardTool.displayName = 'ArtboardTool';

export default ArtboardTool;
