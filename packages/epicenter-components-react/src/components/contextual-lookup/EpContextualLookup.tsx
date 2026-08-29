import React, { forwardRef, useEffect, useRef, useState, ReactNode } from 'react';

import { ArrowUpRight01 } from '@ericpitcock/epicenter-icons-react/ArrowUpRight01.jsx';
import { Asterisk02 } from '@ericpitcock/epicenter-icons-react/Asterisk02.jsx';

import { EpButton } from '../button/EpButton';
import { EpDropdown, EpDropdownTrigger, EpDropdownContent } from '../dropdown/EpDropdown';
import { EpFlex } from '../flexbox/EpFlex';
import { EpKeyValueTable } from '../key-value-table/EpKeyValueTable';
import { EpLoaderSquares } from '../loaders/EpLoaderSquares';
import { EpMenu } from '../menu/EpMenu';
import { EpMenuItem } from '../menu/EpMenuItem';

export interface EnrichmentOption {
  [key: string]: unknown;
  label: string;
}

// Type alias, not interface: it must stay assignable to EpKeyValueTable's
// Record-typed data prop, which interfaces (no implicit index signature) are not.
export type EnrichmentResult = {
  data: Record<string, unknown>;
  name: string;
};

export interface EpContextualLookupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Extra content rendered next to the Source button in the preview. */
  action?: ReactNode;
  /** Per-source results keyed by option label; { error } marks a failed lookup. */
  enrichmentData?: Record<string, EnrichmentResult | { error: string }> | null;
  enrichmentOptions: EnrichmentOption[];
  label?: string;
  /** Called once per source when it is first hovered/focused (and again on retry). */
  onLookup?: (source: EnrichmentOption, value: string) => void;
  /** Custom trigger content; defaults to the label text. */
  trigger?: ReactNode;
  /** The value to look up; falls back to label. */
  value?: string;
}

export const EpContextualLookup = forwardRef<HTMLDivElement, EpContextualLookupProps>(
  (
    {
      label = '',
      value = '',
      enrichmentOptions,
      enrichmentData = null,
      trigger,
      action,
      onLookup,
      className = '',
      ...props
    },
    ref
  ) => {
    const [hoveredItem, setHoveredItem] = useState<EnrichmentOption | null>(null);
    const [showPreview, setShowPreview] = useState(false);
    const [requestedSources, setRequestedSources] = useState<ReadonlySet<string>>(new Set());

    const resolvedValue = value || label;

    // Mirrors the Vue onUpdated hook: a new lookup value invalidates all
    // requested/previewed state.
    const previousResolvedValue = useRef(resolvedValue);
    useEffect(() => {
      if (previousResolvedValue.current === resolvedValue) return;

      previousResolvedValue.current = resolvedValue;
      setRequestedSources(new Set());
      setHoveredItem(null);
      setShowPreview(false);
    }, [resolvedValue]);

    const currentSourceData = hoveredItem && enrichmentData
      ? enrichmentData[hoveredItem.label]
      : undefined;
    const hasError = currentSourceData != null && 'error' in currentSourceData;
    const displayData = !currentSourceData || hasError
      ? undefined
      : (currentSourceData as EnrichmentResult);

    const getSourceStatus = (option: EnrichmentOption): 'default' | 'loading' => {
      const data = enrichmentData?.[option.label];
      if (requestedSources.has(option.label) && !data) return 'loading';
      return 'default';
    };

    const handleHover = (item: EnrichmentOption) => {
      setHoveredItem(item);
      setShowPreview(true);

      if (enrichmentData?.[item.label]) return;
      if (requestedSources.has(item.label)) return;

      setRequestedSources((previous) => new Set(previous).add(item.label));
      onLookup?.(item, resolvedValue);
    };

    const handleRetry = () => {
      if (!hoveredItem) return;

      setRequestedSources((previous) => new Set(previous).add(hoveredItem.label));
      onLookup?.(hoveredItem, resolvedValue);
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
              {trigger ?? label}
              {/* Generated icons spread props after className, so a custom class
                  must restate ep-icon — React replaces rather than merges it. */}
              <Asterisk02 className="ep-icon lookup-asterisk" />
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
                      <span
                        className={`ep-button__async-label${getSourceStatus(option) === 'loading' ? ' ep-button__async-label--loading' : ''}`}
                      >
                        <span className="ep-button__async-text">{option.label}</span>
                        {getSourceStatus(option) === 'loading' && (
                          <span className="ep-button__async-loader">
                            <EpLoaderSquares />
                          </span>
                        )}
                      </span>
                    </EpButton>
                  </EpMenuItem>
                ))}
              </EpMenu>
              {showPreview && (hasError || displayData) && (
                <div className="enrichment-preview">
                  {hasError ? (
                    <EpFlex className="flex-col gap-10 enrichment-error">
                      <span>Failed to load enrichment data.</span>
                      <EpButton onClick={handleRetry}>
                        Retry
                      </EpButton>
                    </EpFlex>
                  ) : displayData && (
                    <EpFlex className="flex-col gap-10">
                      <EpKeyValueTable
                        data={[displayData]}
                        sectionHeaders
                      />
                      <EpFlex className="gap-10">
                        {action}
                        <EpButton iconRight={<ArrowUpRight01 className="ep-icon source-button-icon" />}>
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

EpContextualLookup.displayName = 'EpContextualLookup';

/** @deprecated Renamed to EpContextualLookup for parity with the Vue package. */
export const EpEnrichmentDropdown = EpContextualLookup;
/** @deprecated Renamed to EpContextualLookupProps. */
export type EpEnrichmentDropdownProps = EpContextualLookupProps;
