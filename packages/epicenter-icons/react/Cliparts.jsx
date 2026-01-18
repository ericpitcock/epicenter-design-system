import React from 'react';

const Cliparts = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 22C17.5228 22 22 17.5228 22 12L12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 2V8C12 10.2091 13.7909 12 16 12H22" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Cliparts.displayName = 'Cliparts';

export default Cliparts;
