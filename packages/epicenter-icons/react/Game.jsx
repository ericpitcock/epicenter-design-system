export const Game = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M18 7H6C3.79086 7 2 8.79086 2 11V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V11C22 8.79086 20.2091 7 18 7Z" strokeLinejoin="round" />
    <path d="M10 16L8.5 14.5M8.5 14.5L7 13M8.5 14.5L7 16M8.5 14.5L10 13" strokeLinecap="round" />
    <path d="M17 15.5L17 13.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7V5.53078C12 4.92498 12.4123 4.39693 13 4.25V4.25C13.5877 4.10307 14 3.57502 14 2.96922V2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Game.displayName = 'Game';
