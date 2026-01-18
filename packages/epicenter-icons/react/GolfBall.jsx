import React from 'react';

const GolfBall = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="9" r="7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.008 7L9.99902 7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 18C10.5 18 12 19.4617 12 22C12 19.4617 13.5 18 15 18" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

GolfBall.displayName = 'GolfBall';

export default GolfBall;
