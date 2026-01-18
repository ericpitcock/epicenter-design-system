import React from 'react';

const Background = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M19.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V4.5C21.5 3.39543 20.6046 2.5 19.5 2.5Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.5 20.5L20.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.698 15.8021L15.8058 2.69434" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.3058 8.19434L8.198 21.3021" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.5 21.5L21.5 13.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.5 10.5L10.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Background.displayName = 'Background';

export default Background;
