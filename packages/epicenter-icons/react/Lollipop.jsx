import React from 'react';

const Lollipop = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="8" r="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 14V22" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 7.99776C7 6.5439 9 5.66871 10.2857 6.11842C11.7609 6.63438 12.0271 8.35853 13.5 8.88051C15 9.4121 16 7.99776 18 7.99776" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Lollipop.displayName = 'Lollipop';

export default Lollipop;
