import React from 'react';

const ChartBubble02 = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="5" cy="8" r="3" strokeLinejoin="round" />
    <circle cx="9" cy="17" r="4" strokeLinejoin="round" />
    <circle cx="17" cy="8" r="5" strokeLinejoin="round" />
  </svg>
);

ChartBubble02.displayName = 'ChartBubble02';

export default ChartBubble02;
