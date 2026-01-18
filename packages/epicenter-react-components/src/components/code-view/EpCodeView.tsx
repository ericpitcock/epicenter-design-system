import React, { useEffect, useRef, useState } from 'react'

export interface EpCodeViewProps {
  /** The code to display */
  code: string
  /** The language of the code */
  language: string
  /** The theme to use for highlighting */
  theme?: string
  /** Additional CSS classes */
  className?: string
}

/**
 * EpCodeView - Syntax-highlighted code viewer
 * 
 * Uses Shiki for syntax highlighting with customizable themes.
 */
const EpCodeView: React.FC<EpCodeViewProps> = ({
  code,
  language,
  theme = 'one-dark-pro',
  className = ''
}) => {
  const [highlightedCode, setHighlightedCode] = useState('')

  useEffect(() => {
    const highlightCode = async () => {
      try {
        const { codeToHtml } = await import('shiki')
        const html = await codeToHtml(code, {
          lang: language,
          theme: theme,
          colorReplacements: {
            '#282c34': 'var(--interface-surface)'
          }
        })
        setHighlightedCode(html)
      } catch (error) {
        console.error('Error highlighting code:', error)
        // Fallback to plain text
        setHighlightedCode(code)
      }
    }

    highlightCode()
  }, [code, language, theme])

  return (
    <div
      className={`ep-code-view${className ? ` ${className}` : ''}`}
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  )
}

export default EpCodeView
