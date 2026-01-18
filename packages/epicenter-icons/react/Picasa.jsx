import React from 'react';

const Picasa = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 16L21 16" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 16L16 3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 21L8 10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 10L9 3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.5 15L12 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Picasa.displayName = 'Picasa';

export default Picasa;
