import React from 'react';

const SignalLowMedium = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M5 10L5 19M5 10L8 5H2L5 10Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 13V19" strokeLinecap="round" />
    <path d="M13 11V19" strokeLinecap="round" />
    <path d="M17 19H18" strokeLinecap="round" />
    <path d="M21 19H22" strokeLinecap="round" />
  </svg>
);

SignalLowMedium.displayName = 'SignalLowMedium';

export default SignalLowMedium;
