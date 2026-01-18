import React from 'react';

const Bash = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M7 7L9 9L7 11" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 11H14" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 21C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Bash.displayName = 'Bash';

export default Bash;
