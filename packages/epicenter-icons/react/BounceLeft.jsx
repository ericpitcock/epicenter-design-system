import React from 'react';

const BounceLeft = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M9 10C11.1153 13.01 12.4407 18.066 13.0872 20.9991C14.4328 18.2908 17 15 20 17" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="6" cy="5" r="2" strokeLinejoin="round" />
  </svg>
);

BounceLeft.displayName = 'BounceLeft';

export default BounceLeft;
