import React from 'react';

const Watch01 = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="7" />
    <path d="M12 10V12.005L13 13" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 6L15.3787 3.51493C15.1561 2.6246 14.3562 2 13.4384 2L10.5616 2C9.64382 2 8.84385 2.6246 8.62127 3.51493L8 6" />
    <path d="M16 18L15.3787 20.4851C15.1561 21.3754 14.3562 22 13.4384 22L10.5616 22C9.64382 22 8.84385 21.3754 8.62127 20.4851L8 18" />
  </svg>
);

Watch01.displayName = 'Watch01';

export default Watch01;
