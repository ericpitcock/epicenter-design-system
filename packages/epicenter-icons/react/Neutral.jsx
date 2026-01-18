import React from 'react';

const Neutral = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.00897 9H8M16 9H15.991" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 16H15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Neutral.displayName = 'Neutral';

export default Neutral;
