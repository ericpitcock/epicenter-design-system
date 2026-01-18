import React from 'react';

const Prescription = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M19 21L10 12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 19V3H9.5C11.9853 3 14 5.01472 14 7.5C14 9.98528 11.9853 12 9.5 12H5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 15L13 21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Prescription.displayName = 'Prescription';

export default Prescription;
