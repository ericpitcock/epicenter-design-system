import React, { useCallback, useRef, useState, useEffect, ReactNode, KeyboardEvent } from 'react';
import { ArrowTurnBackward } from '@ericpitcock/epicenter-icons-react/ArrowTurnBackward.jsx';

export interface EpInlineEditProps {
  /** If true, disables editing. */
  disabled?: boolean;
  /** The current value of the editable text */
  value: string;
  /** Callback when the value is saved */
  onSave?: (value: string) => void;
  /** Callback when the value changes */
  onChange?: (value: string) => void;
  /** Optional icon displayed on the left side of the editable text */
  iconLeft?: ReactNode;
}

/**
 * EpInlineEdit - An inline editable text component
 */
export const EpInlineEdit: React.FC<EpInlineEditProps> = ({
  disabled = false,
  value,
  onSave,
  onChange,
  iconLeft,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const originalValueRef = useRef('');
  const cancelledRef = useRef(false);
  const [hasChanged, setHasChanged] = useState(false);

  const onFocus = useCallback(() => {
    setIsEditing(true);
    originalValueRef.current = value;
    setHasChanged(false);
  }, [value]);

  const onInput = useCallback(() => {
    const current = contentRef.current?.textContent ?? '';
    setHasChanged(current !== originalValueRef.current);
  }, []);

  const save = useCallback(() => {
    const newValue = contentRef.current?.textContent ?? '';
    onChange?.(newValue);
    setIsEditing(false);
    setHasChanged(false);
    onSave?.(newValue);
  }, [onChange, onSave]);

  const onBlur = useCallback(() => {
    if (cancelledRef.current) {
      cancelledRef.current = false;
      return;
    }
    save();
  }, [save]);

  const onKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      contentRef.current?.blur();
    }
    if (event.key === 'Escape') {
      cancelledRef.current = true;
      if (contentRef.current) {
        contentRef.current.textContent = originalValueRef.current;
      }
      onChange?.(originalValueRef.current);
      setIsEditing(false);
      contentRef.current?.blur();
    }
  }, [onChange]);

  const onSaveClick = useCallback(() => {
    save();
    contentRef.current?.blur();
  }, [save]);

  const onCancelClick = useCallback(() => {
    cancelledRef.current = true;
    if (contentRef.current) {
      contentRef.current.textContent = originalValueRef.current;
    }
    onChange?.(originalValueRef.current);
    setIsEditing(false);
    setHasChanged(false);
    contentRef.current?.blur();
  }, [onChange]);

  // Sync contenteditable text when value changes externally
  useEffect(() => {
    if (contentRef.current && contentRef.current.textContent !== value) {
      contentRef.current.textContent = value;
    }
  }, [value]);

  const classes = [
    'ep-inline-edit',
    isEditing && 'ep-inline-edit--editing',
    disabled && 'ep-inline-edit--disabled',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {iconLeft && (
        <span className="ep-inline-edit__icon">{iconLeft}</span>
      )}
      <div
        ref={contentRef}
        className="ep-inline-edit__content"
        contentEditable={!disabled}
        spellCheck={false}
        suppressContentEditableWarning
        onFocus={onFocus}
        onBlur={onBlur}
        onInput={onInput}
        onKeyDown={onKeyDown}
      >
        {value}
      </div>
      {isEditing && hasChanged && (
        <div className="ep-inline-edit__actions ep-flex gap-10">
          <div
            className="ep-flex gap-5 align-center"
            onMouseDown={(e) => { e.preventDefault(); onSaveClick(); }}
          >
            Save
            <ArrowTurnBackward style={{ '--ep-icon-size': '1.4rem' } as React.CSSProperties} />
          </div>
          <div
            className="ep-flex gap-6 align-center"
            onMouseDown={(e) => { e.preventDefault(); onCancelClick(); }}
          >
            Cancel
            <svg
              width="21"
              height="12"
              viewBox="0 0 28 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" y="0.5" width="27" height="15" rx="2" stroke="currentColor" />
              <text
                x="14"
                y="11.5"
                textAnchor="middle"
                fill="currentColor"
                fontSize="9"
                fontFamily="sans-serif"
                fontWeight="500"
                letterSpacing="1"
              >ESC</text>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

EpInlineEdit.displayName = 'EpInlineEdit';
