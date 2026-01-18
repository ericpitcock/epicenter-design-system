import React from 'react';

const Pendulum = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M2 3L20 3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5 3V16" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.5 3V16" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="6.5" cy="18.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="11.5" cy="18.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="19.5" cy="18.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 16L17 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Pendulum.displayName = 'Pendulum';

export default Pendulum;
