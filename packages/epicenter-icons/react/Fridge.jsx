import React from 'react';

const Fridge = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z" strokeLinejoin="round" />
    <path d="M4 10H20" strokeLinecap="round" />
    <path d="M8 6H8.00898" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 17L8 14" strokeLinecap="round" />
  </svg>
);

Fridge.displayName = 'Fridge';

export default Fridge;
