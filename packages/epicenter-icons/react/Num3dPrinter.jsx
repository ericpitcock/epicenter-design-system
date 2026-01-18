import React from 'react';

const Num3dPrinter = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M8 2H2V4.5H8V2Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 2H16V4.5H22V2Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 2H8V10H16V2Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.5 13H10.5L8 10H16L13.5 13Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.5 13H10.5V16L12 17.5L13.5 16V13Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 20V20C12 21.1046 11.1046 22 10 22H2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 5V5.01" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 7.5V7.51" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Num3dPrinter.displayName = 'Num3dPrinter';

export default Num3dPrinter;
