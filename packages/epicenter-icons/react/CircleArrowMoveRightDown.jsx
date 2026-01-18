import React from 'react';

const CircleArrowMoveRightDown = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 16L10.0028 10.9994C10.0031 10.4474 10.4507 10 11.0028 10H16" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.5 8L16.5 10L14.5 12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 14.5L10 16.5L12 14.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CircleArrowMoveRightDown.displayName = 'CircleArrowMoveRightDown';

export default CircleArrowMoveRightDown;
