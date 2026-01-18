import React from 'react';

const MenuCollapse = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M3 6H17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 12H13" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 18H17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 8L17 12L21 16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

MenuCollapse.displayName = 'MenuCollapse';

export default MenuCollapse;
