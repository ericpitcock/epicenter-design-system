import React from 'react';

const MarketOrder = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.5 12.5L5 17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 9.99976V10.0098M21 9.98999V9.99999" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 10V10.01M6 10.01V10.02" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 9.99V10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

MarketOrder.displayName = 'MarketOrder';

export default MarketOrder;
