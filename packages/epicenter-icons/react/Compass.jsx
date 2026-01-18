import React from 'react';

const Compass = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M21.0001 13C21.0001 17.9706 16.9707 22 12.0001 22C7.02956 22 3.00012 17.9706 3.00012 13C3.00012 8.02944 7.02956 4 12.0001 4C16.9707 4 21.0001 8.02944 21.0001 13Z" />
    <path d="M12 4V2" strokeLinejoin="round" />
    <path d="M10 2H14" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 12L15 9.5L12.5 17.5L11 13.5L7 12Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Compass.displayName = 'Compass';

export default Compass;
