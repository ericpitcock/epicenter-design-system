import React from 'react';

const DishWasher = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M22 4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4Z" strokeLinejoin="round" />
    <path d="M2 8H22" />
    <path d="M5 5H9" strokeLinecap="round" />
    <path d="M19 5.0001V5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 18C10.6569 18 12 16.6569 12 15C12 13.3431 10.6569 12 9 12C7.34315 12 6 13.3431 6 15C6 16.6569 7.34315 18 9 18Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 18L15.0084 15.5M15.0084 15.5V12.0998C15.0084 12.0387 15.0625 11.9917 15.1229 12.0026C15.5495 12.079 16.3501 12.2911 16.8569 12.8032C17.0336 12.9819 17.115 13.2274 17.1589 13.4743L17.4984 15.3826C17.5093 15.4438 17.462 15.5 17.3995 15.5H15.0084Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

DishWasher.displayName = 'DishWasher';

export default DishWasher;
