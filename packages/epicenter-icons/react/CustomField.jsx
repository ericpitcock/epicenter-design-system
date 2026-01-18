import React from 'react';

const CustomField = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 10.5L16 8.5L18 10.5M14 13.5L16 15.5L18 13.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 12L10 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CustomField.displayName = 'CustomField';

export default CustomField;
