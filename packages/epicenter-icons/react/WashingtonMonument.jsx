import React from 'react';

const WashingtonMonument = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M3 21.9834H21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 21.9834L19.228 19.6695C19.0918 19.2613 18.7098 18.986 18.2794 18.986H5.72056C5.29023 18.986 4.90815 19.2613 4.77196 19.6695L4 21.9834" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 5.99664H15" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 19V13" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.08594 18.9855L9.03137 5.46081L11.9757 1.98904C11.9796 1.98438 11.9867 1.98427 11.9908 1.9888L15.1291 5.46081L17.0859 18.9855" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

WashingtonMonument.displayName = 'WashingtonMonument';

export default WashingtonMonument;
