import React from 'react';

const Beater = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V10C3 11.1046 3.89543 12 5 12H19C20.1046 12 21 11.1046 21 10V7C21 5.89543 20.1046 5 19 5Z" strokeLinejoin="round" />
    <path d="M16.5 22V21.041M16.5 12V15.9142" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 2H17C17.5523 2 18 2.44772 18 3V5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 8.5H16.991M13.009 8.5H13" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 16H15C14.4477 16 14 16.4477 14 17V20C14 20.5523 14.4477 21 15 21H18C18.5523 21 19 20.5523 19 20V17C19 16.4477 18.5523 16 18 16Z" strokeLinejoin="round" />
  </svg>
);

Beater.displayName = 'Beater';

export default Beater;
