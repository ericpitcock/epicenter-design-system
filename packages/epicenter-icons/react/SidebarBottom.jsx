import React from 'react';

const SidebarBottom = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M20 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3Z" strokeLinejoin="round" />
    <path d="M2 14.5L22 14.5" strokeLinejoin="round" />
    <path d="M6 17.5H7M10 17.5H11" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

SidebarBottom.displayName = 'SidebarBottom';

export default SidebarBottom;
