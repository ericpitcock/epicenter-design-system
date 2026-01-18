import React from 'react';

const Winking = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <path clipRule="evenodd" d="M7.99884 9H8.00781H7.99884Z" fill="currentColor" fillRule="evenodd" />
    <path d="M7.99884 9H8.00781" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 7.5C14.5 8 14 9 14 9.49999C14.445 9.05496 14.9891 8.98307 15.5 9C16.1371 9.02111 16.7225 9.22252 17 9.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Winking.displayName = 'Winking';

export default Winking;
