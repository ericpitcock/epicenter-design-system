import React from 'react';

const Flaticon = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M16 3L13.5 7H6.5L8.5 10H12L10.5 13L14 19L11 21L2 6L5 3H16Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 6L19 3L13.5 12.5L16 16.5L22 6Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Flaticon.displayName = 'Flaticon';

export default Flaticon;
