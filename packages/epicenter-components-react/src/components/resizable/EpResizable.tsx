import React, { useRef, useState, useMemo } from 'react'

export type ResizableDirection = 'column' | 'row'
export type DragEdge = 'left' | 'right' | 'top' | 'bottom'

export interface EpResizableProps {
  /** Additional CSS classes */
  className?: string
  /** Content for the fixed pane */
  content: React.ReactNode
  /** The direction of the resizable layout */
  direction?: ResizableDirection
  /** The initial size of the resizable pane */
  initialSize?: string
  /** The maximum size in pixels for the resizable pane */
  maxSize?: number
  /** The minimum size in pixels for the resizable pane */
  minSize?: number
  /** Callback when resize occurs */
  onResize?: (size: number) => void
  /** Content for the resizable pane */
  resizableContent: React.ReactNode
}

/**
 * EpResizable - Resizable split pane layout
 * 
 * Two-pane layout with draggable divider for resizing.
 * Supports horizontal (row) and vertical (column) layouts.
 */
export const EpResizable: React.FC<EpResizableProps> = ({
  direction = 'row',
  initialSize = '300px',
  minSize = 200,
  maxSize = 800,
  resizableContent,
  content,
  onResize,
  className = ''
}) => {
  const resizablePaneRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const [hasBeenDragged, setHasBeenDragged] = useState(false)
  const startPosRef = useRef(0)
  const currentSizeRef = useRef<number | null>(null)

  // Dynamically determine the correct drag edge
  const dragEdge = useMemo<DragEdge>(
    () => (direction === 'row' ? 'right' : 'bottom'),
    [direction]
  )

  // Maintain initialSize until first drag, then convert to px
  const computedSize = useMemo(
    () =>
      hasBeenDragged && currentSizeRef.current !== null
        ? `0 0 ${currentSizeRef.current}px`
        : `0 0 ${initialSize}`,
    [hasBeenDragged, initialSize]
  )

  const handleDragStart = (event: React.MouseEvent | React.TouchEvent) => {
    if (!resizablePaneRef.current) return

    if (!hasBeenDragged) {
      // Convert initialSize to px on first drag
      const { width, height } = resizablePaneRef.current.getBoundingClientRect()
      currentSizeRef.current = direction === 'row' ? width : height
    }

    setHasBeenDragged(true)
    isDraggingRef.current = true
    
    const clientPos = 'touches' in event ? event.touches[0] : event
    startPosRef.current = direction === 'row' ? clientPos.clientX : clientPos.clientY

    document.addEventListener('mousemove', handleDragging)
    document.addEventListener('mouseup', handleDragEnd)
    document.addEventListener('touchmove', handleDragging)
    document.addEventListener('touchend', handleDragEnd)
  }

  const handleDragging = (event: MouseEvent | TouchEvent) => {
    if (!isDraggingRef.current || currentSizeRef.current === null) return

    const clientPos = 'touches' in event ? event.touches[0] : event
    const currentPos = direction === 'row' ? clientPos.clientX : clientPos.clientY

    let delta = currentPos - startPosRef.current
    if (dragEdge === 'left' || dragEdge === 'top') delta = -delta

    let newSize = currentSizeRef.current + delta

    // Enforce min/max constraints
    newSize = Math.max(minSize, Math.min(maxSize, newSize))

    currentSizeRef.current = newSize
    onResize?.(newSize)

    // Directly update DOM for smooth dragging (refs don't trigger re-renders)
    if (resizablePaneRef.current) {
      resizablePaneRef.current.style.flex = `0 0 ${newSize}px`
    }

    startPosRef.current = currentPos
  }

  const handleDragEnd = () => {
    isDraggingRef.current = false
    document.removeEventListener('mousemove', handleDragging)
    document.removeEventListener('mouseup', handleDragEnd)
    document.removeEventListener('touchmove', handleDragging)
    document.removeEventListener('touchend', handleDragEnd)
  }

  return (
    <div className={`ep-resizable ep-resizable--${direction}${className ? ` ${className}` : ''}`}>
      <div
        ref={resizablePaneRef}
        className="ep-resizable__resizable-pane"
        style={{ flex: computedSize }}
      >
        {resizableContent}
        <div
          className={`ep-resizable__drag-handle ep-resizable__drag-handle--${dragEdge}`}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
        />
      </div>
      <div className="ep-resizable__content-pane">
        {content}
      </div>
    </div>
  )
}
