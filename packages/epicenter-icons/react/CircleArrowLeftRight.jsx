import React from 'react';

const CircleArrowLeftRight = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
    <path d="M8.5 9.00003L15.5 9.00003M15.5 9.00003L13.5 7M15.5 9.00003L13.5 11" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.5 17L8.5 15M8.5 15L10.5 13M8.5 15L15.5 15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CircleArrowLeftRight.displayName = 'CircleArrowLeftRight';

export default CircleArrowLeftRight;
