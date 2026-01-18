import React, { ReactNode, useEffect, useRef, useState } from 'react'

export type TooltipPosition =
  | 'top left'
  | 'top center'
  | 'top right'
  | 'right top'
  | 'right center'
  | 'right bottom'
  | 'bottom left'
  | 'bottom center'
  | 'bottom right'
  | 'left top'
  | 'left center'
  | 'left bottom'

export interface EpTooltipProps {
  /**
   * Delay in milliseconds before showing the tooltip on hover.
   * @default 0
   */
  delay?: number
  /**
   * Position of the tooltip relative to the trigger element.
   * @default 'top center'
   */
  position?: TooltipPosition
  /**
   * Whether to dismiss the tooltip when clicked.
   * @default false
   */
  dismissOnClick?: boolean
  /**
   * Whether the tooltip is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * Tooltip content to display on hover
   */
  tooltip?: ReactNode
  /**
   * Trigger element that shows the tooltip on hover
   */
  children?: ReactNode
}

const EpTooltip: React.FC<EpTooltipProps> = ({
  delay = 0,
  position = 'top center',
  dismissOnClick = false,
  disabled = false,
  tooltip,
  children
}) => {
  const [visible, setVisible] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const showTooltip = () => {
    if (disabled) return
    timeoutRef.current = setTimeout(() => {
      setVisible(true)
    }, delay)
  }

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setVisible(false)
  }

  const handleClick = () => {
    if (dismissOnClick) {
      hideTooltip()
    }
  }

  const positionClass = `ep-tooltip--${position.replace(' ', '-')}`

  return (
    <div
      className="ep-tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onClick={handleClick}
    >
      <div
        className={[
          'ep-tooltip',
          positionClass,
          visible && 'ep-tooltip--visible'
        ].filter(Boolean).join(' ')}
      >
        {tooltip}
      </div>
      {children}
    </div>
  )
}

export default EpTooltip
