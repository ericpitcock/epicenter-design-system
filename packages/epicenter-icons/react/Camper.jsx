import React from 'react';

const Camper = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="17" cy="19" r="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="7" cy="19" r="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 7H22L20.5528 4.10557C20.214 3.428 19.5215 3 18.7639 3L4 3C2.89543 3 2 3.89543 2 5V14" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 7L7 7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 19H15M19 19V19C20.6569 19 22 17.6569 22 16V13L18.5937 7.8906C18.2228 7.3342 17.5983 7 16.9296 7H15C14.4477 7 14 7.44772 14 8V13M5 19H3C2.44772 19 2 18.5523 2 18V13H21.4149" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Camper.displayName = 'Camper';

export default Camper;
