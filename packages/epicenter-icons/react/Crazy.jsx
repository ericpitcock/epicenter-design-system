import React from 'react';

const Crazy = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
    <path d="M7 9.5C7 10.3284 7.67157 11 8.5 11C9.32843 11 10 10.3284 10 9.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 10C17 8.34315 16.3284 7 15.5 7C14.6716 7 14 8.34315 14 10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.633 13.5C17.1164 14.1528 17.1867 15.1365 16.4482 15.8211C14.9899 17.173 13.148 15.7039 12.2062 15.6704C11.2635 15.637 10.7624 16.555 8.86254 16.9554C7.70902 17.1985 7 16.5 7 15.6704" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Crazy.displayName = 'Crazy';

export default Crazy;
