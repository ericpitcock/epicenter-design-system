import React from 'react';

const AlarmClock = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M20.5 12.5C20.5 17.1944 16.6944 21 12 21C7.30558 21 3.5 17.1944 3.5 12.5C3.5 7.80558 7.30558 4 12 4C16.6944 4 20.5 7.80558 20.5 12.5Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.88 18.7031L3.5 21.0031" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.14 18.668L20.5 20.998" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 3L2 6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 6L19 3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 8V12.5L14 14.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

AlarmClock.displayName = 'AlarmClock';

export default AlarmClock;
