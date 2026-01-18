import React from 'react';

const Engine = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M2 9V15" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 15.4648V9C5 8.44772 5.44771 8 6 8H15C15.5523 8 16 8.44772 16 9V11H19V9C19 8.44772 19.4477 8 20 8H21C21.5523 8 22 8.44772 22 9V17C22 17.5523 21.5523 18 21 18H20C19.4477 18 19 17.5523 19 17V14H16V17C16 17.5523 15.5523 18 15 18H8.30278C8.10535 18 7.91234 17.9416 7.74808 17.8321L5.4453 16.2969C5.1671 16.1114 5 15.7992 5 15.4648Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12H2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.5 8V5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 5H14" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Engine.displayName = 'Engine';

export default Engine;
