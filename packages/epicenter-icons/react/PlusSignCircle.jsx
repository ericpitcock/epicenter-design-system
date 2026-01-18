import React from 'react';

const PlusSignCircle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 8V16M16 12H8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
  </svg>
);

PlusSignCircle.displayName = 'PlusSignCircle';

export default PlusSignCircle;
