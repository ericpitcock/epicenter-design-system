import React from 'react';

const LetterSpacing = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M2 22V2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 22V2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.9976 18L15.1179 13.5M7 18L8.86945 13.5M15.1179 13.5L11.9852 6L8.86945 13.5M15.1179 13.5H8.86945" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

LetterSpacing.displayName = 'LetterSpacing';

export default LetterSpacing;
