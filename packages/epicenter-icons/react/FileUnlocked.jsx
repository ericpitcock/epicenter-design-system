import React from 'react';

const FileUnlocked = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M14.75 17V15.75C14.75 14.7835 15.5335 14 16.5 14C16.9768 14 17.4091 14.1907 17.7247 14.5M13 17V22H20V17H13Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 13V9L13 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 2V7C13 8.10457 13.8954 9 15 9H20" strokeLinejoin="round" />
  </svg>
);

FileUnlocked.displayName = 'FileUnlocked';

export default FileUnlocked;
