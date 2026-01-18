import React from 'react';

const BarcodeScan = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M16 7V17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7V13" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 17V17.01" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 7V17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V8.5M8.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V15.5M15.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5V8.5M15.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V15.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

BarcodeScan.displayName = 'BarcodeScan';

export default BarcodeScan;
