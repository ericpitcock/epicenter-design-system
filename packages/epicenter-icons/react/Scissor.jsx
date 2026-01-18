import React from 'react';

const Scissor = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 8L3 19" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.0003 16L11 12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 5.00011L8.5 10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Scissor.displayName = 'Scissor';

export default Scissor;
