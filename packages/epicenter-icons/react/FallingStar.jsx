export const FallingStar = (props) => (
  <svg
    className="ep-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M22 2L14 10M16 2L11 7M20 10L17 13" strokeLinecap="round" />
    <path d="M4 22L8 20.5L12 22L11.5 18L14 15L10.5 14L8 10.5L5.5 14L2 15L4.5 18L4 22Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

FallingStar.displayName = 'FallingStar';
