export const HelpCircle = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5C14.5 10.5353 13.8707 11.4236 12.9737 11.8033C12.4651 12.0186 12 12.4477 12 13V13.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.0001 17H12.009" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

HelpCircle.displayName = 'HelpCircle';
