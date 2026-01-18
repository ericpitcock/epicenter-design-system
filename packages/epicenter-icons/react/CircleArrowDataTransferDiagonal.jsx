import React from 'react';

const CircleArrowDataTransferDiagonal = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M8 10.5V13.5L13.5 8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 13.5V10.5L10.5 16" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="10" strokeLinejoin="round" />
  </svg>
);

CircleArrowDataTransferDiagonal.displayName = 'CircleArrowDataTransferDiagonal';

export default CircleArrowDataTransferDiagonal;
