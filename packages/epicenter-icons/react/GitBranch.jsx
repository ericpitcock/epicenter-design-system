import React from 'react';

const GitBranch = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M7 19.0234H16.5C17.6046 19.0234 18.5 18.128 18.5 17.0234V11.0234M21 12.5234L18.5 10.0234L16 12.5234" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 7.02344L5 17.0234" strokeLinejoin="round" />
    <circle cx="5" cy="5.02344" r="2" strokeLinejoin="round" />
    <path d="M20.5 5.02344C20.5 6.12801 19.6046 7.02344 18.5 7.02344C17.3954 7.02344 16.5 6.12801 16.5 5.02344C16.5 3.91887 17.3954 3.02344 18.5 3.02344C19.6046 3.02344 20.5 3.91887 20.5 5.02344Z" strokeLinejoin="round" />
    <circle cx="5" cy="19.0234" r="2" strokeLinejoin="round" />
  </svg>
);

GitBranch.displayName = 'GitBranch';

export default GitBranch;
