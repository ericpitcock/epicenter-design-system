import React from 'react';

const StreeringWheel = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 14C16.5 14.5 14.5 16.5 14 19" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 14C7.5 14.5 9.5 16.5 10 19" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 11C16.8847 10.3593 14.5097 10 12 10C9.49033 10 7.11528 10.3593 5 11" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.009 14H12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

StreeringWheel.displayName = 'StreeringWheel';

export default StreeringWheel;
