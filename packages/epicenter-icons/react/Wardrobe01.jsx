import React from 'react';

const Wardrobe01 = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M6 20V22M18 20V22" strokeLinecap="round" strokeLinejoin="round" />
    <rect height="18" rx="3" strokeLinecap="round" strokeLinejoin="round" width="18" x="3" y="2" />
    <path d="M12 20V2" strokeLinejoin="round" />
    <path d="M3 14H12M3 8H12" strokeLinejoin="round" />
    <path d="M15 11.5L15 10.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Wardrobe01.displayName = 'Wardrobe01';

export default Wardrobe01;
