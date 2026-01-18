import React from 'react';

const BloodBottle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M14 5V2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 2H6C4.89543 2 4 2.89543 4 4V22" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 19H18C19.1046 19 20 18.1046 20 17V7.0003C20 5.89575 19.1046 5.00033 18.0001 5.0003L10.0001 5.00006C8.89547 5.00003 8 5.89547 8 7.00006V17C8 18.1046 8.89543 19 10 19Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 10.3722C14.8571 6.24278 13.5714 13.0046 20 10.3723" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 22C12.6569 22 14 20.6569 14 19" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

BloodBottle.displayName = 'BloodBottle';

export default BloodBottle;
