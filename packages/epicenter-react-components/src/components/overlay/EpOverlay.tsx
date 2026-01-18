import React, { ReactNode, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export interface EpOverlayProps {
  /**
   * The type of overlay to display.
   * @default 'modal'
   */
  type?: 'modal' | 'toast'
  /**
   * Controls the visibility of the overlay
   */
  visible?: boolean
  /**
   * Handler called when the overlay should be closed
   */
  onClose?: () => void
  /**
   * If true, automatically dismisses the overlay after the specified duration.
   * @default false
   */
  autoDismiss?: boolean
  /**
   * Duration in milliseconds before auto-dismissing (when autoDismiss is true).
   * @default 3000
   */
  duration?: number
  /**
   * If true, clicking the backdrop will close the overlay.
   * @default true
   */
  backdropClose?: boolean
  /**
   * Content to display inside the overlay dialog
   */
  children?: ReactNode
}

export const EpOverlay: React.FC<EpOverlayProps> = ({
  type = 'modal',
  visible = false,
  onClose,
  autoDismiss = false,
  duration = 3000,
  backdropClose = true,
  children
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (visible) {
      if (type === 'modal') {
        dialog.showModal()
      } else {
        dialog.show()
      }
    } else {
      dialog.close()
    }
  }, [visible, type])

  useEffect(() => {
    if (visible && autoDismiss) {
      const timer = setTimeout(() => {
        onClose?.()
      }, duration)
      
      return () => clearTimeout(timer)
    }
  }, [visible, autoDismiss, duration, onClose])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    // Only close if clicking directly on the dialog (backdrop)
    if (e.target === dialogRef.current && backdropClose) {
      onClose?.()
    }
  }

  if (!visible) return null

  return createPortal(
    <dialog
      ref={dialogRef}
      className="ep-dialog"
      role="dialog"
      aria-modal={type === 'modal' ? 'true' : undefined}
      onClick={handleBackdropClick}
    >
      {children}
    </dialog>,
    document.body
  )
}
