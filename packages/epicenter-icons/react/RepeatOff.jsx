import React from 'react';

const RepeatOff = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M8.5 12H15.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.7453 8C21.5362 9.13383 22 10.5128 22 12C22 15.866 18.866 19 15 19H5.5L8.5 21.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.25469 16C2.46381 14.8662 2 13.4872 2 12C2 8.13401 5.13401 5 9 5H18.5L15.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

RepeatOff.displayName = 'RepeatOff';

export default RepeatOff;
