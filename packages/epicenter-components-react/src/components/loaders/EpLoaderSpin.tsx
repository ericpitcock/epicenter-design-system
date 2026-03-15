import React from 'react'

export const EpLoaderSpin: React.FC = () => (
  <svg
    className="ep-loader ep-loader--spin"
    viewBox="0 0 50 50"
    aria-hidden="true"
  >
    <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="90 150" strokeDashoffset="0">
      <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite" />
    </circle>
  </svg>
)

EpLoaderSpin.displayName = 'EpLoaderSpin'
