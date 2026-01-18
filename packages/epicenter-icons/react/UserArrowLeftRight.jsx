import React from 'react';

const UserArrowLeftRight = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.5 11L22 8.5L19.5 6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.5 11L2 8.5L4.5 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

UserArrowLeftRight.displayName = 'UserArrowLeftRight';

export default UserArrowLeftRight;
