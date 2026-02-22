export const Maze = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M14 3L14 9C14 10.1046 14.8954 11 16 11H17.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 15H15M11 15H15M15 15V21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 10H7C8.10457 10 9 9.10457 9 8V7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 15H6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.5 2.5H5.5C3.84315 2.5 2.5 3.84315 2.5 5.5V18.5C2.5 20.1569 3.84315 21.5 5.5 21.5H18.5C20.1569 21.5 21.5 20.1569 21.5 18.5V5.5C21.5 3.84315 20.1569 2.5 18.5 2.5Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Maze.displayName = 'Maze';
