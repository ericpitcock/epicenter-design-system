import React from 'react';

const PieChart07 = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="5" />
    <path d="M7 12H2" strokeLinecap="round" />
    <path d="M22 12H17" strokeLinecap="round" />
    <path d="M12 17L12 22" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 2L12 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

PieChart07.displayName = 'PieChart07';

export default PieChart07;
