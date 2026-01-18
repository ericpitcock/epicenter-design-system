import React from 'react';

const EqualSign = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M4 8H20" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 16H20" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

EqualSign.displayName = 'EqualSign';

export default EqualSign;
