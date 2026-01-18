import React from 'react';

const LayerAdd = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M9 11C9 9.89543 9.89543 9 11 9H20C21.1046 9 22 9.89543 22 11V20C22 21.1046 21.1046 22 20 22H11C9.89543 22 9 21.1046 9 20V11Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 15.5L13 15.5M15.5 13V18" strokeLinecap="round" />
    <path d="M17 9V4C17 2.89543 16.1046 2 15 2H4C2.89543 2 2 2.89543 2 4V15C2 16.1046 2.89543 17 4 17H8.5" strokeLinejoin="round" />
  </svg>
);

LayerAdd.displayName = 'LayerAdd';

export default LayerAdd;
