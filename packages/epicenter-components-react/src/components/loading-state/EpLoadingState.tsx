import React from 'react';

interface LoadingMessage {
  icon?: string;
  message?: string;
}

export interface EpLoadingStateProps {
  /** Message object containing icon and message text to display while loading */
  message?: LoadingMessage;
  /** Additional CSS classes */
  className?: string;
}

/**
 * EpLoadingState - A loading indicator component with optional message
 */
export const EpLoadingState: React.FC<EpLoadingStateProps> = ({ 
  message = { icon: '', message: '' }, 
  className = '' 
}) => {
  return (
    <div className={`ep-loading${className ? ` ${className}` : ''}`}>
      <div className="ep-loading__icon-container">
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentcolor"
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
              <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
      </div>
      <div className="ep-loading__message-container">
        <p>{message.message}</p>
      </div>
    </div>
  );
};

EpLoadingState.displayName = 'EpLoadingState';
