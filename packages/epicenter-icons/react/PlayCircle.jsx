import React from 'react';

const PlayCircle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9 14.4086V9.59138C9 8.73892 10.0738 8.21659 10.9079 8.66336L15.4043 11.072C16.1986 11.4975 16.1986 12.5025 15.4043 12.928L10.9079 15.3366C10.0738 15.7834 9 15.2611 9 14.4086Z" strokeLinejoin="round" />
  </svg>
);

PlayCircle.displayName = 'PlayCircle';

export default PlayCircle;
