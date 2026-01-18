import React from 'react';

const ParkingAreaCircle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 13V7H13C14.6569 7 16 8.34315 16 10C16 11.6569 14.6569 13 13 13H9ZM9 13V18" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ParkingAreaCircle.displayName = 'ParkingAreaCircle';

export default ParkingAreaCircle;
