import React from 'react';

const Curtains = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M22 3H2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 14C5.5985 13.2925 6.76719 11.3937 7 9M19 14C18.4015 13.2925 17.2328 11.3937 17 9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 3V21H8C8 18.5 7.6 16.0669 6 14M3 14.5C9 14.5 12 8.5 12 3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 3V14.5M21 14.5V21H16C16 18.5 16.4 16.0669 18 14M21 14.5C15 14.5 12 8.5 12 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Curtains.displayName = 'Curtains';

export default Curtains;
