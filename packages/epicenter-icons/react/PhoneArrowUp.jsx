import React from 'react';

const PhoneArrowUp = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M14 2H10L10.5 3H13.5L14 2Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 11.5L12 8.5L15 11.5M12 9V15.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 2H7C6.17157 2 5.5 2.67157 5.5 3.5V20.5C5.5 21.3284 6.17157 22 7 22H17C17.8284 22 18.5 21.3284 18.5 20.5V3.5C18.5 2.67157 17.8284 2 17 2Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

PhoneArrowUp.displayName = 'PhoneArrowUp';

export default PhoneArrowUp;
