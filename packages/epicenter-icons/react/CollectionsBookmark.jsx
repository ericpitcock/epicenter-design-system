import React from 'react';

const CollectionsBookmark = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <rect height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" width="15" x="3" y="5.5" />
    <path d="M7 2.5H19C20.1046 2.5 21 3.39543 21 4.5V16.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 5.5V11.5L12.5 9.5L15 11.5V5.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CollectionsBookmark.displayName = 'CollectionsBookmark';

export default CollectionsBookmark;
