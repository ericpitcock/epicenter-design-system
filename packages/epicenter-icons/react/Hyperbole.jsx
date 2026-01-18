import React from 'react';

const Hyperbole = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M2 12H22M12 22L12 2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 8C18.2386 8 16 5.76142 16 3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 16C5.76142 16 8 18.2386 8 21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Hyperbole.displayName = 'Hyperbole';

export default Hyperbole;
