import React from 'react';

const YenSend = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M19 14.5L21.5 12L19 9.5M15 12H20.8912" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.5 4L8 10.6111M8 10.6111L13.5 4M8 10.6111V20" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.5 13.5H10.5M5.5 16.5H10.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

YenSend.displayName = 'YenSend';

export default YenSend;
