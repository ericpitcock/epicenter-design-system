import React from 'react';

const TennisBall = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
    <path d="M5 5C8.99009 8.52068 9.0099 15.4618 5 19M19 19C14.9901 15.4618 15.0099 8.52068 19 5" />
  </svg>
);

TennisBall.displayName = 'TennisBall';

export default TennisBall;
