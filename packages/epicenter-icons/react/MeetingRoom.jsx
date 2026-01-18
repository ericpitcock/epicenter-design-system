import React from 'react';

const MeetingRoom = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M17 21.0001V5C17 3.89543 16.1046 3 15 3H5C3.89543 3 3 3.89543 3 5V21L17 21.0001Z" strokeLinejoin="round" />
    <path d="M17 6H19C20.1046 6 21 6.89543 21 8V20.9999H14.5" strokeLinejoin="round" />
    <path d="M13 11V13" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

MeetingRoom.displayName = 'MeetingRoom';

export default MeetingRoom;
