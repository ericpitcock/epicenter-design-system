import React from 'react';

const Fahrenheit = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="5" cy="6" r="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 4H12V20" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12H19" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Fahrenheit.displayName = 'Fahrenheit';

export default Fahrenheit;
