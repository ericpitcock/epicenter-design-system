import React from 'react';

const BluetoothNotConnected = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M17.502 17.5L12.0014 21L12 12L6 17M12.0014 8V3L18 6.99997L14.502 10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 3L21 21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

BluetoothNotConnected.displayName = 'BluetoothNotConnected';

export default BluetoothNotConnected;
