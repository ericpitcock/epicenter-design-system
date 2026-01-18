import React from 'react';

const TicTacToe = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 2V22" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 12L2 12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 18.5C8 19.8807 6.88071 21 5.5 21C4.11929 21 3 19.8807 3 18.5C3 17.1193 4.11929 16 5.5 16C6.88071 16 8 17.1193 8 18.5Z" strokeLinejoin="round" />
    <path d="M16 3L21 8M21 3L16 8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

TicTacToe.displayName = 'TicTacToe';

export default TicTacToe;
