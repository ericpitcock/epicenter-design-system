import React from 'react';

const Option = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M4 5H7.68121C8.48126 5 9.20434 5.47679 9.5195 6.21216L14.4805 17.7878C14.7957 18.5232 15.5187 19 16.3188 19H20" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 5H20" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Option.displayName = 'Option';

export default Option;
