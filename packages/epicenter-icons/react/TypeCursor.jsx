import React from 'react';

const TypeCursor = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M5.50195 16H4.00026C2.89559 16 2.00012 15.1044 2.00026 13.9997L2.00077 9.99976C2.00092 8.89529 2.89629 8.00002 4.00075 8.00001L5.50195 8M12.502 16L20.001 16C21.1056 16 22.001 15.1046 22.001 14V10C22.001 8.89543 21.1056 8 20.001 8H12.502" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.00195 3H9.00195M11.002 3H9.00195M9.00195 3V21M9.00195 21H7.00195M9.00195 21H11.002" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

TypeCursor.displayName = 'TypeCursor';

export default TypeCursor;
