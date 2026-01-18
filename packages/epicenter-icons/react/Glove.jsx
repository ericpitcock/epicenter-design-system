import React from 'react';

const Glove = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 25 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M20 17L12.5 17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.48437 9.42066V14L6.95747 11.9534C6.2136 10.9563 4.73891 10.9183 3.94521 11.8758C3.39412 12.5406 3.3503 13.4928 3.83799 14.2059L7.88871 20.129C8.26147 20.6741 8.87924 21 9.53957 21H17.8184C18.7905 21 19.6218 20.301 19.7887 19.3434L21.417 10C22.0659 6.0864 18.818 3 14.8713 3C11.3439 3 8.48437 5.87463 8.48437 9.42066Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Glove.displayName = 'Glove';

export default Glove;
