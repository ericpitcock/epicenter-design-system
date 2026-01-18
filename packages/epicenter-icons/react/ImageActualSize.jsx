import React from 'react';

const ImageActualSize = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="13.5" cy="10.5" r="8.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 22L7 17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 13V8L9 8.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.5 13V8L16.5 8.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.5 9V9.01M13.5 12V12.01" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ImageActualSize.displayName = 'ImageActualSize';

export default ImageActualSize;
