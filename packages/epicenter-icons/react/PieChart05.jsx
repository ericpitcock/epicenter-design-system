import React from 'react';

const PieChart05 = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="5" />
    <path d="M12 17L12 22" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 2L12 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

PieChart05.displayName = 'PieChart05';

export default PieChart05;
