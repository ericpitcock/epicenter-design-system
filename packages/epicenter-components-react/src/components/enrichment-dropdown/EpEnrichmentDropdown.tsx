import React, { forwardRef, useState, ReactNode } from 'react';

import { EpButton } from '../button/EpButton';
import { EpDropdown, EpDropdownTrigger, EpDropdownContent } from '../dropdown/EpDropdown';
import { EpFlex } from '../flexbox/EpFlex';
import { EpKeyValueTable } from '../key-value-table/EpKeyValueTable';
import { EpLoadingState } from '../loading-state/EpLoadingState';
import { EpMenu } from '../menu/EpMenu';
import { EpMenuItem } from '../menu/EpMenuItem';

// Placeholder icons - replace with actual icons when available
const ArrowUpRight01 = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const Asterisk02 = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M12 2v20M5.5 8.5l13 7M5.5 15.5l13-7" />
  </svg>
);

export interface EnrichmentOption {
  [key: string]: unknown;
  label: string;
}

export interface EpEnrichmentDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  action?: ReactNode;
  enrichmentData?: Record<string, unknown> | null;
  enrichmentOptions: EnrichmentOption[];
  label?: string;
  trigger?: ReactNode;
}

export const EpEnrichmentDropdown = forwardRef<HTMLDivElement, EpEnrichmentDropdownProps>(
  (
    {
      label = '',
      enrichmentOptions,
      enrichmentData = null,
      trigger,
      action,
      className = '',
      ...props
    },
    ref
  ) => {
    const [hoveredItem, setHoveredItem] = useState<EnrichmentOption | null>(null);
    const [loading, setLoading] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const hasBeenHoveredRef = React.useRef<string[]>([]);

    const handleHover = (item: EnrichmentOption) => {
      if (hasBeenHoveredRef.current.includes(item.label)) {
        setHoveredItem(item);
        setShowPreview(true);
        return;
      }

      hasBeenHoveredRef.current.push(item.label);
      setHoveredItem(item);
      setShowPreview(true);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 400);
    };

    const handleOpenChange = (open: boolean) => {
      if (!open) setShowPreview(false);
    };

    return (
      // Styles are shared with the Vue EpContextualLookup under this block class.
      <div ref={ref} className={`ep-contextual-lookup ${className}`.trim()} {...props}>
        <EpDropdown autoFocus={false} onOpenChange={handleOpenChange}>
          <EpDropdownTrigger>
            <div className="trigger-wrapper">
              {trigger ? trigger : label}
              <Asterisk02 className="lookup-asterisk" />
            </div>
          </EpDropdownTrigger>
          <EpDropdownContent>
            <div className="ep-enrichment-content">
              <EpMenu className="ep-menu-subtle">
                {enrichmentOptions.map((option, index) => (
                  <EpMenuItem
                    key={index}
                    type="item"
                    onMouseOver={() => handleHover(option)}
                    onFocus={() => handleHover(option)}
                  >
                    <EpButton className="ep-button--menu-item">
                      {option.label}
                    </EpButton>
                  </EpMenuItem>
                ))}
              </EpMenu>
              {showPreview && (
                <div className="enrichment-preview">
                  {loading && (
                    <EpLoadingState
                      message={{
                        icon: 'oval',
                        message: 'Fetching data…',
                      }}
                    />
                  )}
                  {!loading && enrichmentData && hoveredItem && (
                    <EpFlex className="flex-col gap-10">
                      <EpKeyValueTable
                        data={enrichmentData[hoveredItem.label] as Record<string, unknown>}
                        sectionHeaders
                      />
                      <EpFlex className="gap-10">
                        {action}
                        <EpButton iconRight={<ArrowUpRight01 className="source-button-icon" />}>
                          Source
                        </EpButton>
                      </EpFlex>
                    </EpFlex>
                  )}
                </div>
              )}
            </div>
          </EpDropdownContent>
        </EpDropdown>
      </div>
    );
  }
);

EpEnrichmentDropdown.displayName = 'EpEnrichmentDropdown';
