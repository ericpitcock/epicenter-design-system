import React from 'react';

const Yen = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M5 3L12 10.5L19 3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 10.5V21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5 13H17.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5 17H17.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Yen.displayName = 'Yen';

export default Yen;
