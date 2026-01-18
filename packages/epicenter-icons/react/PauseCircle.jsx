import React from 'react';

const PauseCircle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.5 9L9.5 15M14.5 9V15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

PauseCircle.displayName = 'PauseCircle';

export default PauseCircle;
