import React from 'react';

const LeftToRightListBullet = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M8 5H20" strokeLinecap="round" />
    <path d="M4 5H4.00898" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 12H4.00898" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 19H4.00898" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 12H20" strokeLinecap="round" />
    <path d="M8 19H20" strokeLinecap="round" />
  </svg>
);

LeftToRightListBullet.displayName = 'LeftToRightListBullet';

export default LeftToRightListBullet;
