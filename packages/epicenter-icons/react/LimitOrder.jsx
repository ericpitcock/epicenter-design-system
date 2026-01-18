import React from 'react';

const LimitOrder = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="14" r="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 11.5L5.5 7H3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 13.9998V14.0098M21 13.99V14" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 14V14.01M6 14.01V14.02" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 13.99V14" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

LimitOrder.displayName = 'LimitOrder';

export default LimitOrder;
