import React from 'react';

const FileScript = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M20 15V9L13 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 2V7C13 8.10457 13.8954 9 15 9H20" strokeLinejoin="round" />
    <path d="M14.5 22L12 19.5L14.5 17M17.5 22L20 19.5L17.5 17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

FileScript.displayName = 'FileScript';

export default FileScript;
