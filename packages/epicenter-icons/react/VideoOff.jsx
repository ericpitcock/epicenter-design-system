import React from 'react';

const VideoOff = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M2 2L22 22" strokeLinecap="round" />
    <path d="M18 14V6.5C18 5.39543 17.1046 4.5 16 4.5H8.5M4 4.5C2.89543 4.5 2 5.39543 2 6.5V17.5C2 18.6046 2.89543 19.5 4 19.5H16C16.9319 19.5 17.715 18.8626 17.937 18" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 17V6.5L18 9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

VideoOff.displayName = 'VideoOff';

export default VideoOff;
