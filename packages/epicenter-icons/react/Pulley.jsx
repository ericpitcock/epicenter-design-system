import React from 'react';

const Pulley = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M15.5 3V7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 3H21" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="15.5" cy="10.5" r="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="8.5" cy="17.5" r="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 17.5V3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 17.5V10.5M19 17V10.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 21H21L20 17H18L17 21Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Pulley.displayName = 'Pulley';

export default Pulley;
