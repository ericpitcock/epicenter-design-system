import React from 'react';

const NotificationCircle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M21.5 6C21.5 7.933 19.933 9.5 18 9.5C16.067 9.5 14.5 7.933 14.5 6C14.5 4.067 16.067 2.5 18 2.5C19.933 2.5 21.5 4.067 21.5 6Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 12H12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 16H16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

NotificationCircle.displayName = 'NotificationCircle';

export default NotificationCircle;
