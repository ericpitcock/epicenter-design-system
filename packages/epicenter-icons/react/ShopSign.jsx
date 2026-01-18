import React from 'react';

const ShopSign = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M3.5 15.5H10.5" strokeLinejoin="round" />
    <path d="M2 21.5L7 2.5M7 2.5L12 21.5H22L18 2.5H7Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ShopSign.displayName = 'ShopSign';

export default ShopSign;
