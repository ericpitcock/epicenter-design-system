import React from 'react';

const Podcast = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M4.51555 17C3.55827 15.5699 3 13.8501 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 13.8501 20.4417 15.5699 19.4845 17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11V13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13V11Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 16L12 20" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 21L12 19L14 21H10Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Podcast.displayName = 'Podcast';

export default Podcast;
