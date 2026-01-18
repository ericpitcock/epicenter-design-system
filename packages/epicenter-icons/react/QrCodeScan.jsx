import React from 'react';

const QrCodeScan = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 7H8C7.44772 7 7 7.44772 7 8V12C7 12.5523 7.44772 13 8 13H12C12.5523 13 13 12.5523 13 12V8C13 7.44772 12.5523 7 12 7Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 7V7.01" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 11V15C17 16.1046 16.1046 17 15 17H13" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 17H7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V8.5M8.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V15.5M15.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5V8.5M15.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V15.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

QrCodeScan.displayName = 'QrCodeScan';

export default QrCodeScan;
