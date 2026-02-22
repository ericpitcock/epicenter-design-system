export const Calculator = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M5.5 3V8M8 5.5L3 5.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 16L6 18M6 18L4 20M6 18L8 20M6 18L4 16" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 6L16 6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 18.5L16 18.5M20 15.5L16 15.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 12L2 12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 22L12 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Calculator.displayName = 'Calculator';
