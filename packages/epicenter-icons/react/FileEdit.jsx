import React from 'react';

const FileEdit = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M13 20V22H15L21 16L19 14L13 20Z" strokeLinejoin="round" />
    <path d="M19 11V9L12 2H5C3.89543 2 3 2.89543 3 4V20C3 21.1046 3.89543 22 5 22H10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 2V7C12 8.10457 12.8954 9 14 9H19" strokeLinejoin="round" />
  </svg>
);

FileEdit.displayName = 'FileEdit';

export default FileEdit;
