import React from 'react';

const Beach = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M10.5127 9.00155L7.49406 16M5 6.66379C6.28804 3.61196 9.80033 2.1846 12.8449 3.47571C15.8895 4.76682 17.3135 8.28748 16.0254 11.3393L5 6.66379Z" strokeLinejoin="round" />
    <path d="M3 17C3 17 4.61581 16 7.5 16C12 16 15 18.5 21 18.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 21H21" strokeLinecap="round" />
  </svg>
);

Beach.displayName = 'Beach';

export default Beach;
