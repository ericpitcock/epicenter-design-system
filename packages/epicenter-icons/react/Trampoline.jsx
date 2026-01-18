import React from 'react';

const Trampoline = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M2 10V18M12 16V20M22 10V18" strokeLinecap="round" strokeLinejoin="round" />
    <ellipse cx="12" cy="10" rx="10" ry="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Trampoline.displayName = 'Trampoline';

export default Trampoline;
