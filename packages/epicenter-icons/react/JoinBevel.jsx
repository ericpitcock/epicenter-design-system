import React from 'react';

const JoinBevel = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M2 14.5V2H11V13H22V22H9.5L2 14.5Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

JoinBevel.displayName = 'JoinBevel';

export default JoinBevel;
