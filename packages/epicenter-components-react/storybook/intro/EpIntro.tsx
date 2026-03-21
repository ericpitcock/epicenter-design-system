import { Github } from '@ericpitcock/epicenter-icons-react/Github.jsx'
import { DocumentCode } from '@ericpitcock/epicenter-icons-react/DocumentCode.jsx'

import { EpButton, EpFlex, EpicenterLogo } from '@ericpitcock/epicenter-components-react'

import './EpIntro.scss'

const buttons = [
  {
    href: 'https://github.com/ericpitcock/epicenter-design-system',
    label: 'GitHub',
    icon: <Github />,
  },
  {
    href: '/docs',
    label: 'Docs',
    icon: <DocumentCode />,
  },
]

export function EpIntro() {
  return (
    <div className="intro">
      <div className="hero">
        <div className="logo-container">
          <EpicenterLogo style={{ '--logo-stroke-width': 4 } as React.CSSProperties} />
        </div>
        <div className="copy-block">
          <h1 className="font-size--jumbo">
            Epicenter Design System: React
          </h1>
          <p className="monospace">
            {'{ React } = componentsForApps'}
          </p>
          <EpFlex className="gap-10">
            {buttons.map((btn, index) => (
              <EpButton
                key={index}
                className="hero-btn"
                href={btn.href}
                size="large"
                iconLeft={btn.icon}
              >
                {btn.label}
              </EpButton>
            ))}
          </EpFlex>
        </div>
      </div>
    </div>
  )
}
