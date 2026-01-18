import React from 'react';

const Num1stBracketCircle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M9 8C7.7945 8.85994 7 10.3304 7 12C7 13.6696 7.7945 15.1401 9 16M15 8C16.2055 8.85994 17 10.3304 17 12C17 13.6696 16.2055 15.1401 15 16" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
  </svg>
);

Num1stBracketCircle.displayName = 'Num1stBracketCircle';

export default Num1stBracketCircle;
