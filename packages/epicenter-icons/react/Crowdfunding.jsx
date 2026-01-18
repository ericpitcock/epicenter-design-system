import React from 'react';

const Crowdfunding = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="5" r="3" strokeLinejoin="round" />
    <circle cx="12" cy="20" r="2" strokeLinejoin="round" />
    <circle cx="20" cy="20" r="2" strokeLinejoin="round" />
    <circle cx="4" cy="20" r="2" strokeLinejoin="round" />
    <path d="M20 15V14C20 13.4477 19.5523 13 19 13H5C4.44772 13 4 13.4477 4 14V15" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 11L12 15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Crowdfunding.displayName = 'Crowdfunding';

export default Crowdfunding;
