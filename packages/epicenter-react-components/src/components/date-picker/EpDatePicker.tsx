import React, {
  forwardRef,
  useEffect,
  useRef,
  useImperativeHandle,
  InputHTMLAttributes,
} from 'react';

type FlatpickrInstance = {
  destroy: () => void;
  setDate: (date: Date | string | Date[] | string[], triggerChange?: boolean) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
};

export interface EpDatePickerProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string | string[];
  onChange?: (dates: Date[], dateStr: string) => void;
  onOpen?: () => void;
  mode?: 'single' | 'multiple' | 'range';
  dateFormat?: string;
  positionX?: 'auto' | 'left' | 'right';
  positionY?: 'auto' | 'above' | 'below';
  enableCloseOnSelect?: boolean;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  className?: string;
}

export interface EpDatePickerRef {
  flatpickr: FlatpickrInstance | null;
}

export const EpDatePicker = forwardRef<EpDatePickerRef, EpDatePickerProps>(
  (
    {
      value,
      onChange,
      onOpen,
      mode = 'single',
      dateFormat = 'Y-m-d',
      positionX = 'auto',
      positionY = 'auto',
      enableCloseOnSelect = true,
      inputProps = {},
      className = '',
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const flatpickrRef = useRef<FlatpickrInstance | null>(null);

    useImperativeHandle(ref, () => ({
      get flatpickr() {
        return flatpickrRef.current;
      },
    }));

    useEffect(() => {
      let flatpickrModule: typeof import('flatpickr') | null = null;

      const initFlatpickr = async () => {
        if (!inputRef.current) return;

        try {
          // Dynamic import of Flatpickr
          const module = await import('flatpickr');
          flatpickrModule = module;
          const flatpickr = module.default;

          // Import Flatpickr CSS
          await import('flatpickr/dist/flatpickr.min.css');

          // Determine position
          let position: 'auto' | 'above' | 'below' | 'auto left' | 'auto right' | 'above left' | 'above right' | 'below left' | 'below right' = 'auto';
          
          if (positionY === 'auto' && positionX === 'auto') {
            position = 'auto';
          } else if (positionY === 'auto' && positionX === 'left') {
            position = 'auto left';
          } else if (positionY === 'auto' && positionX === 'right') {
            position = 'auto right';
          } else if (positionY === 'above' && positionX === 'auto') {
            position = 'above';
          } else if (positionY === 'above' && positionX === 'left') {
            position = 'above left';
          } else if (positionY === 'above' && positionX === 'right') {
            position = 'above right';
          } else if (positionY === 'below' && positionX === 'auto') {
            position = 'below';
          } else if (positionY === 'below' && positionX === 'left') {
            position = 'below left';
          } else if (positionY === 'below' && positionX === 'right') {
            position = 'below right';
          }

          flatpickrRef.current = flatpickr(inputRef.current, {
            mode,
            dateFormat,
            position,
            clickOpens: true,
            onChange: (selectedDates, dateStr) => {
              onChange?.(selectedDates, dateStr);
              if (enableCloseOnSelect && flatpickrRef.current) {
                flatpickrRef.current.close();
              }
            },
            onOpen: () => {
              onOpen?.();
            },
            defaultDate: value,
          });
        } catch (error) {
          console.error('Failed to load Flatpickr:', error);
        }
      };

      initFlatpickr();

      return () => {
        if (flatpickrRef.current) {
          flatpickrRef.current.destroy();
          flatpickrRef.current = null;
        }
      };
    }, [mode, dateFormat, positionX, positionY, enableCloseOnSelect, onChange, onOpen, value]);

    const mergedInputProps = {
      placeholder: 'Select date...',
      ...inputProps,
      ...props,
    };

    return (
      <div className={`ep-date-picker ${className}`.trim()}>
        <input
          ref={inputRef}
          type="text"
          className="ep-date-picker__input"
          {...mergedInputProps}
        />
      </div>
    );
  }
);

EpDatePicker.displayName = 'EpDatePicker';
