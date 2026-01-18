import React from 'react';

const BatteriesEnergy = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12.5 2L10 6H14L11.5 10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.5 6.00024H18.0005C18.5528 6.00024 19.0005 6.44796 19.0005 7.00024V10.4998M6.5 5.99994H6.00011C5.44778 5.99994 5.00005 6.44772 5.00011 7.00005L5.00048 10.4998" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 19H22M16 16H22" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M8 13H2V22H8V13Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 13H16V22H22V13Z" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M2 19H8M2 16H8" strokeLinecap="square" strokeLinejoin="round" />
  </svg>
);

BatteriesEnergy.displayName = 'BatteriesEnergy';

export default BatteriesEnergy;
