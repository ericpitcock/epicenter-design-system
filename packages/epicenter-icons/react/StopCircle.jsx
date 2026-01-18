import React from 'react';

const StopCircle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M14 8.5H10C9.17157 8.5 8.5 9.17157 8.5 10V14C8.5 14.8284 9.17157 15.5 10 15.5H14C14.8284 15.5 15.5 14.8284 15.5 14V10C15.5 9.17157 14.8284 8.5 14 8.5Z" strokeLinecap="round" />
  </svg>
);

StopCircle.displayName = 'StopCircle';

export default StopCircle;
