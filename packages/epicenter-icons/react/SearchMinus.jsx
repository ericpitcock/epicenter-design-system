import React from 'react';

const SearchMinus = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M17 17L21 21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.5 11L14.5 11" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

SearchMinus.displayName = 'SearchMinus';

export default SearchMinus;
