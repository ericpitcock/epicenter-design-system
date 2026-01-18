import React from 'react';

const VolumeLow = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M9 8.5H6C4.89543 8.5 4 9.39543 4 10.5V13.5C4 14.6046 4.89543 15.5 6 15.5H9L16 20V4L9 8.5Z" strokeLinejoin="round" />
    <path d="M19 9C19.6254 9.81968 20 10.8634 20 12C20 13.1366 19.6254 14.1803 19 15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

VolumeLow.displayName = 'VolumeLow';

export default VolumeLow;
