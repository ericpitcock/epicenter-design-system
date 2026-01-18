import React from 'react';

const BluetoothCircle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8.5 14.5L15.5 9.5L12 7V17L15.5 14.5L8.5 9.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

BluetoothCircle.displayName = 'BluetoothCircle';

export default BluetoothCircle;
