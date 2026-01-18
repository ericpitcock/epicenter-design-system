import React from 'react';

const FileBookmark = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M13 2H18C19.1046 2 20 2.89543 20 4V15.0145L12.9986 22.0015H6C4.89543 22.0015 4 21.1061 4 20.0015V13" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 15H15C13.8954 15 13 15.8954 13 17V22" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 10V2H10V10L7 8L4 10Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

FileBookmark.displayName = 'FileBookmark';

export default FileBookmark;
