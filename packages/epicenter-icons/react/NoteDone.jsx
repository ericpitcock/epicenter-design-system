import React from 'react';

const NoteDone = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M15.5 2V5M6.5 2V5M11 2V5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 14.5V5.5C19 4.39543 18.1046 3.5 17 3.5H5C3.89543 3.5 3 4.39543 3 5.5V20C3 21.1046 3.89543 22 5 22H12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 15H11M7 11H15" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 17L16 22L14 20" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

NoteDone.displayName = 'NoteDone';

export default NoteDone;
