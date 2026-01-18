import React from 'react';

const Bank = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M11.9959 7H12.0049" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 9.99512V18.9998M9 9.99512V18.9998" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M15 9.99512V18.9998M19 9.99512V18.9998" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M21 19H3L3.0003 21.9999H21V19Z" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M3 7L12 2L21 7V9.99502H3V7Z" strokeLinejoin="round" />
  </svg>
);

Bank.displayName = 'Bank';

export default Bank;
