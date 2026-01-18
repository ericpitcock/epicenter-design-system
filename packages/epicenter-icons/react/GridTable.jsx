import React from 'react';

const GridTable = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 3V21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 3V21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.0001 9L3.00014 9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.0001 15L3.00014 15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

GridTable.displayName = 'GridTable';

export default GridTable;
