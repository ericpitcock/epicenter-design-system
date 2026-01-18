import React from 'react';

const BerlinTower = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 15V22" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 10C17 12.7614 14.7614 15 12 15C9.23858 15 7 12.7614 7 10C7 7.23858 9.23858 5 12 5C14.7614 5 17 7.23858 17 10Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 5L12 2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 14L17.5 22" strokeLinecap="round" />
    <path d="M9 14L6.5 22" strokeLinecap="round" />
  </svg>
);

BerlinTower.displayName = 'BerlinTower';

export default BerlinTower;
