import React from 'react';

const Litecoin = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 2C6.47716 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" />
    <path d="M13 7L10 16H15M9 12.5L13.5 11.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Litecoin.displayName = 'Litecoin';

export default Litecoin;
