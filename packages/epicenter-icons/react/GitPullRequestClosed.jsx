import React from 'react';

const GitPullRequestClosed = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M6 8.02344L6 16.0234" strokeLinejoin="round" />
    <path d="M18 11.5234L18 16.0234" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="6" cy="18.0234" r="2" strokeLinejoin="round" />
    <circle cx="6" cy="6.02344" r="2" strokeLinejoin="round" />
    <circle cx="18" cy="18.0234" r="2" strokeLinejoin="round" />
    <path d="M20 4.02344L18 6.02344M18 6.02344L16 8.02344M18 6.02344L20 8.02344M18 6.02344L16 4.02344" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

GitPullRequestClosed.displayName = 'GitPullRequestClosed';

export default GitPullRequestClosed;
