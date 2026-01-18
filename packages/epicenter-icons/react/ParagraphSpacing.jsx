import React from 'react';

const ParagraphSpacing = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M3 2H21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 22H21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.5 8.5L12 6L14.5 8.5M9.5 15.5L12 18L14.5 15.5M12 6.5V17.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ParagraphSpacing.displayName = 'ParagraphSpacing';

export default ParagraphSpacing;
