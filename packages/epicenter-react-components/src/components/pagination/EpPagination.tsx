import React, { ReactNode, useMemo } from 'react'
import EpButton from '../button/EpButton'
import EpFlex from '../flexbox/EpFlex'
import EpSelect from '../select/EpSelect'

export interface ResultsPerPageOption {
  label: string
  value: number
}

export interface EpPaginationProps {
  /**
   * The current active page number.
   */
  currentPage: number
  /**
   * Total number of pages available.
   */
  totalPages: number
  /**
   * If true, displays individual page number buttons instead of just prev/next.
   * @default false
   */
  showPages?: boolean
  /**
   * Custom CSS class to apply to pagination buttons.
   */
  buttonClass?: string
  /**
   * Number of results to display per page. When provided, shows a dropdown to change this value.
   */
  resultsPerPage?: number | null
  /**
   * Options for the results per page dropdown.
   */
  resultsPerPageOptions?: ResultsPerPageOption[]
  /**
   * Custom icon for the previous page button
   */
  iconPrev?: ReactNode
  /**
   * Custom icon for the next page button
   */
  iconNext?: ReactNode
  /**
   * Content displayed on the left side of the pagination controls
   */
  leftContent?: ReactNode
  /**
   * Content displayed on the right side of the pagination controls
   */
  rightContent?: ReactNode
  /**
   * Handler called when page changes
   */
  onPageChange?: (page: number) => void
  /**
   * Handler called when results per page changes
   */
  onResultsPerPageChange?: (value: number) => void
}

const defaultResultsPerPageOptions: ResultsPerPageOption[] = [
  { label: '10 / page', value: 10 },
  { label: '20 / page', value: 20 },
  { label: '50 / page', value: 50 },
  { label: '100 / page', value: 100 }
]

const EpPagination: React.FC<EpPaginationProps> = ({
  currentPage,
  totalPages,
  showPages = false,
  buttonClass = '',
  resultsPerPage = null,
  resultsPerPageOptions = defaultResultsPerPageOptions,
  iconPrev,
  iconNext,
  leftContent,
  rightContent,
  onPageChange,
  onResultsPerPageChange
}) => {
  const truncationThreshold = 9

  const shouldShowStartEllipsis = useMemo(() => {
    return totalPages > truncationThreshold && currentPage > 3
  }, [totalPages, currentPage])

  const shouldShowEndEllipsis = useMemo(() => {
    return totalPages > truncationThreshold && currentPage < totalPages - 2
  }, [totalPages, currentPage])

  const pageRange = useMemo(() => {
    const range: number[] = []

    // Show all pages if under threshold
    if (totalPages <= truncationThreshold) {
      for (let i = 2; i < totalPages; i++) {
        range.push(i)
      }
      return range
    }

    // Show first few pages when near start
    if (currentPage <= 3) {
      return [2, 3, 4]
    }

    // Show last few pages when near end
    if (currentPage >= totalPages - 2) {
      return [totalPages - 3, totalPages - 2, totalPages - 1]
    }

    // Show pages around current page when in middle
    return [currentPage - 1, currentPage, currentPage + 1]
  }, [currentPage, totalPages])

  const prevPage = () => {
    if (currentPage > 1) {
      onPageChange?.(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange?.(currentPage + 1)
    }
  }

  const defaultIconPrev = iconPrev || (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  const defaultIconNext = iconNext || (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return (
    <div className="ep-pagination">
      <EpFlex className="justify-between gap-30">
        {leftContent || (
          resultsPerPage !== null ? (
            <EpFlex className="justify-end align-center gap-10">
              <EpSelect
                selectId="resultsPerPage"
                options={resultsPerPageOptions}
                value={resultsPerPage}
                onChange={(value) => onResultsPerPageChange?.(Number(value))}
                placeholder=""
                style={{ '--ep-input-width': 'fit-content' } as React.CSSProperties}
              />
            </EpFlex>
          ) : null
        )}
        <EpFlex className="align-center gap-10">
          <EpButton
            disabled={currentPage === 1}
            aria-label="Previous page"
            className={buttonClass}
            onClick={prevPage}
            iconLeft={defaultIconPrev}
          />
          {showPages ? (
            <>
              <EpButton
                aria-label="First page"
                className={[
                  buttonClass,
                  currentPage === 1 && 'ep-button--selected'
                ].filter(Boolean).join(' ')}
                onClick={() => onPageChange?.(1)}
              >
                1
              </EpButton>
              {shouldShowStartEllipsis && <span>...</span>}
              {pageRange.map(page => (
                <EpButton
                  key={page}
                  aria-label={`Page ${page}`}
                  className={[
                    buttonClass,
                    currentPage === page && 'ep-button--selected'
                  ].filter(Boolean).join(' ')}
                  onClick={() => onPageChange?.(page)}
                >
                  {page}
                </EpButton>
              ))}
              {shouldShowEndEllipsis && <span>...</span>}
              {totalPages > 1 && (
                <EpButton
                  aria-label="Last page"
                  className={[
                    buttonClass,
                    currentPage === totalPages && 'ep-button--selected'
                  ].filter(Boolean).join(' ')}
                  onClick={() => onPageChange?.(totalPages)}
                >
                  {totalPages}
                </EpButton>
              )}
            </>
          ) : (
            <span className="ep-pagination-info">
              Page {currentPage} of {totalPages}
            </span>
          )}
          <EpButton
            aria-label="Next page"
            disabled={currentPage === totalPages}
            className={buttonClass}
            onClick={nextPage}
            iconRight={defaultIconNext}
          />
        </EpFlex>
        {rightContent}
      </EpFlex>
    </div>
  )
}

export default EpPagination
