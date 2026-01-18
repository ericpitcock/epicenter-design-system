import React from 'react';

const AlphabetArabic = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M9 4L9 11" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 14H22C22 12 18.5 9.5 16.5 9.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 4V19C13 19.5523 12.5523 20 12 20H10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 4V19C5 19.5523 4.55228 20 4 20H2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

AlphabetArabic.displayName = 'AlphabetArabic';

export default AlphabetArabic;
