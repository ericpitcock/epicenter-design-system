import React from 'react';

const WaveTriangle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M3.00006 12H8.00006L12.0001 19V5L15.9997 12H20.9997" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

WaveTriangle.displayName = 'WaveTriangle';

export default WaveTriangle;
