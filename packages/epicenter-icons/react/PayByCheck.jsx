import React from 'react';

const PayByCheck = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M6.5 11H4C2.89543 11 2 11.8954 2 13V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V13C22 11.8954 21.1046 11 20 11V11" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 18H18" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 14H13L21 6L18 3L10 11V14Z" strokeLinejoin="round" />
  </svg>
);

PayByCheck.displayName = 'PayByCheck';

export default PayByCheck;
