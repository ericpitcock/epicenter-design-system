import React from 'react';

const Archer = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M11 17L20 20.9961C19.4444 20.4406 18.4898 18.6401 19.1158 15.8814C19.8982 12.4331 21.4299 8.9031 16 7C14.0965 1.57136 10.5649 3.10174 7.11578 3.88403C4.35649 4.50985 2.55556 3.55544 2 3L6 12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 17.9974H2L5 14.998H8V17.9974L5 20.9967V17.9974Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 15L20 3M20 3H17M20 3V6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Archer.displayName = 'Archer';

export default Archer;
