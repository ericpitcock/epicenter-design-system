import React from 'react';

const OrientationPotraitToLandscape = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M10 4H4C2.89543 4 2 4.89543 2 6V20C2 21.1046 2.89543 22 4 22H10C11.1046 22 12 21.1046 12 20V6C12 4.89543 11.1046 4 10 4Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 22H18C19.1046 22 20 21.1046 20 20L20 14C20 12.8954 19.1046 12 18 12L15 12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.5 7V4C19.5 2.89543 18.6046 2 17.5 2H14.5M22 5.5L19.5 8L17 5.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

OrientationPotraitToLandscape.displayName = 'OrientationPotraitToLandscape';

export default OrientationPotraitToLandscape;
