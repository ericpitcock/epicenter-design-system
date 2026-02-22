export const Oven = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M6 5H10" strokeLinecap="round" />
    <path d="M3 8L21 8" />
    <path d="M2 22H22" strokeLinecap="round" />
    <path d="M21 22V4C21 2.89543 20.1046 2 19 2H5C3.89543 2 3 2.89543 3 4V22" strokeLinejoin="round" />
    <path d="M18.0001 5.00195H18" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 11H7C6.44772 11 6 11.4477 6 12V18C6 18.5523 6.44772 19 7 19H17C17.5523 19 18 18.5523 18 18V12C18 11.4477 17.5523 11 17 11Z" strokeLinejoin="round" />
  </svg>
);

Oven.displayName = 'Oven';
