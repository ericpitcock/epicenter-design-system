import React from 'react';

const BoardMath = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <rect height="14" rx="2" width="18" x="3" y="3" />
    <path d="M5 21L7 17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 21L17 17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 10H11" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 12.5L8 8L6.5 9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 12.5L17 8L15.5 9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 20L12 17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

BoardMath.displayName = 'BoardMath';

export default BoardMath;
