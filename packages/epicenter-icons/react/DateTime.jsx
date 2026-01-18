import React from 'react';

const DateTime = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M18.2671 18.7011L17 18V16.2668M21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 15.7909 14.7909 14 17 14C19.2091 14 21 15.7909 21 18Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.5 2V6M7.5 2V6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 12V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H11" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 10H21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

DateTime.displayName = 'DateTime';

export default DateTime;
