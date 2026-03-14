import React from 'react'

import { EpHeader } from '../header/EpHeader'

export interface EpBrowserFrameProps {
  /**
   * The alt text for the image.
   */
  imageAlt?: string
  /**
   * The source of the image to display in the browser frame.
   */
  imageSrc?: string
  /**
   * The URL to display in the browser frame.
   * @default 'http://website.com'
   */
  url?: string
  /**
   * The width of the browser frame.
   * @default '100%'
   */
  width?: string
}

export const EpBrowserFrame: React.FC<EpBrowserFrameProps> = ({
  width = '100%',
  url = 'http://website.com',
  imageSrc = '',
  imageAlt = ''
}) => {
  const userIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  )

  return (
    <div
      className="browser-frame"
      style={{ width }}
    >
      <EpHeader>
        <div slot="left" className="window-buttons">
          <div className="window-button window-button--close" />
          <div className="window-button window-button--minimize" />
          <div className="window-button window-button--maximize" />
        </div>
        <div slot="center" className="search">
          {url}
        </div>
        <div slot="right">
          {userIcon}
        </div>
      </EpHeader>
      <div className="image-container">
        <img
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <style>{`
        .browser-frame {
          height: auto;
          display: flex;
          flex-direction: column;
          border-radius: var(--border-radius--large);
          border: 1px solid var(--border-color);
          background: var(--interface-surface);
          overflow: hidden;
        }

        .browser-frame .ep-header {
          flex: 1 1 5rem;
          max-height: 5rem;
          --ep-header-container-padding: 0 2rem;
          --ep-header-container-bg-color: var(--interface-foreground);
          --ep-header-left-flex: 0;
          --ep-header-center-flex: 3;
          --ep-header-right-flex: 0;
        }

        .window-buttons {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 0.7rem;
          width: 100%;
          height: 100%;
        }

        .window-button {
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 50%;
        }

        .window-button--close {
          background: #ff5f57;
        }

        .window-button--minimize {
          background: #febc2e;
        }

        .window-button--maximize {
          background: #28c840;
        }

        .search {
          display: flex;
          align-items: center;
          width: 100%;
          height: 3rem;
          padding-left: 1.5rem;
          background: var(--interface-overlay);
          border: 1px solid var(--border-color--lighter);
          border-radius: 1.5rem;
          color: var(--text-color--subtle);
          cursor: default;
        }

        .image-container {
          flex-grow: 1;
          overflow: hidden;
        }

        .image-container img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  )
}
