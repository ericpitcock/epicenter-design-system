import React from 'react';

const VolumeMinus = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M17.5 12H21.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.5 8.5H4.5C3.39543 8.5 2.5 9.39543 2.5 10.5V13.5C2.5 14.6046 3.39543 15.5 4.5 15.5H7.5L14.5 20V4L7.5 8.5Z" strokeLinejoin="round" />
  </svg>
);

VolumeMinus.displayName = 'VolumeMinus';

export default VolumeMinus;
