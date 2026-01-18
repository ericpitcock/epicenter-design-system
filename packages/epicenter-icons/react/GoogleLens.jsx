import React from 'react';

const GoogleLens = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M21 14V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V11M13 21H6C4.34315 21 3 19.6569 3 18V15" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 3H14L15 4.5H9L10 3Z" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="13" r="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="19" cy="19" r="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

GoogleLens.displayName = 'GoogleLens';

export default GoogleLens;
