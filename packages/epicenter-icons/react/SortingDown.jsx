import React from 'react';

const SortingDown = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M6 6L8 8L10 6M8 2.5V7.39122" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 6L16 8L18 6M16 2.5V7.39122" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 19L12 21L14 19M12 15.5V20.3912" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5 15H17.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.5 11H20.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

SortingDown.displayName = 'SortingDown';

export default SortingDown;
