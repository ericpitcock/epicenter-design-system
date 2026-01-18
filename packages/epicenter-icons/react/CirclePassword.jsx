import React from 'react';

const CirclePassword = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M13.9928 15L14 15M10 15L10.0072 15" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.5 9.5V6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5V9.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CirclePassword.displayName = 'CirclePassword';

export default CirclePassword;
