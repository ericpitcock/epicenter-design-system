import React from 'react';

const PoliceStation = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M8 7H7C6.44772 7 6 7.44772 6 8V22H18V8C18 7.44772 17.5523 7 17 7H16" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 12H3C2.44772 12 2 12.4477 2 13V22H6M18 12H21C21.5523 12 22 12.4477 22 13V22H18" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 4C9.5 4 11.5 2.5 12 2C12.5 2.5 14.5 4 16 4C16 6 16 9 12 11C8 9 8 6 8 4Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 22V18.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.5 15H10.5M13.5 15H14.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

PoliceStation.displayName = 'PoliceStation';

export default PoliceStation;
