export const Lantern = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 25 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <rect height="11" strokeLinejoin="round" width="12" x="6.5" y="7.5" />
    <path d="M6.5 7.5C7.21663 5.40983 9.22856 4 11.4947 4H13.5053C15.7714 4 17.7834 5.40983 18.5 7.5H6.5Z" strokeLinejoin="round" />
    <path d="M18.5 18.5C17.7834 20.5902 15.7714 22 13.5053 22L11.4947 22C9.22855 22 7.21663 20.5902 6.5 18.5L18.5 18.5Z" strokeLinejoin="round" />
    <path d="M6.9 7.5H5.5L6.9 8.5M18.1 7.5H19.5L18.1 8.5" strokeLinejoin="round" />
    <path d="M18.1 18.5L19.5 18.5L18.1 17.5M6.9 18.5H5.5L6.9 17.5" strokeLinejoin="round" />
    <path d="M21.5 11L22.5 10.5M21.5 15L22.5 15.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.5 11L2.5 10.5M3.5 15L2.5 15.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.5 12V14" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.5 2V4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Lantern.displayName = 'Lantern';
