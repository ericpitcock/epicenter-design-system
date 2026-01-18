import React from 'react';

const GitPullRequestDraft = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M6 8.02344L6 16.0234" strokeLinejoin="round" />
    <circle cx="6" cy="18.0234" r="2" strokeLinecap="square" strokeLinejoin="round" />
    <circle cx="6" cy="6.02344" r="2" strokeLinecap="square" strokeLinejoin="round" />
    <circle cx="18" cy="18.0234" r="2" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M18 11.0234H18.009M18 6.02344H18.009" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

GitPullRequestDraft.displayName = 'GitPullRequestDraft';

export default GitPullRequestDraft;
