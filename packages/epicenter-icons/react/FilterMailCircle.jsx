import React from 'react';

const FilterMailCircle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" strokeLinejoin="round" />
    <path d="M8.5 12.5L15.5 12.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.5 16H13.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.5 9H16.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

FilterMailCircle.displayName = 'FilterMailCircle';

export default FilterMailCircle;
