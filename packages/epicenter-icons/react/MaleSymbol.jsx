import React from 'react';

const MaleSymbol = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M3 15V21H9M3.5 20.5L10.5 13.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 9C21 12.3137 18.3137 15 15 15C11.6863 15 9 12.3137 9 9C9 5.68629 11.6863 3 15 3C18.3137 3 21 5.68629 21 9Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

MaleSymbol.displayName = 'MaleSymbol';

export default MaleSymbol;
