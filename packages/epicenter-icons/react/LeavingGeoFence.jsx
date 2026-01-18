import React from 'react';

const LeavingGeoFence = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 16.5001L12 3.84494M15.5 6.50006L12 3L8.5 6.50006" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 15C3.7492 15.6327 3 16.4385 3 17.3158C3 19.3505 7.02944 21 12 21C16.9706 21 21 19.3505 21 17.3158C21 16.4385 20.2508 15.6327 19 15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

LeavingGeoFence.displayName = 'LeavingGeoFence';

export default LeavingGeoFence;
