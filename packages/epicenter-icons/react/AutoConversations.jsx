import React from 'react';

const AutoConversations = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M2 18L8 12L10 14L12 16L22 6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 6H22V10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 8H11" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

AutoConversations.displayName = 'AutoConversations';

export default AutoConversations;
