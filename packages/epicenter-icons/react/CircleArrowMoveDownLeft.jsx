import React from 'react';

const CircleArrowMoveDownLeft = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinejoin="round" />
    <path d="M11 16L9 14L11 12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 8V12C15 13.1046 14.1046 14 13 14H9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CircleArrowMoveDownLeft.displayName = 'CircleArrowMoveDownLeft';

export default CircleArrowMoveDownLeft;
