import React, { useMemo } from 'react'
import { EpButton } from '../button/EpButton'
import { EpFlex } from '../flexbox/EpFlex'
import { EpFooter } from '../footer/EpFooter'
import { EpSelect } from '../select/EpSelect'

export interface EpTablePaginationProps {
  /** Current page number */
  currentPage: number
  /** Show individual page buttons */
  showPages?: boolean
  /** Results per page */
  resultsPerPage: number
  /** Total number of pages */
  totalPages: number
  /** Callback when page changes */
  onPageChange: (page: number) => void
  /** Callback when results per page changes */
  onResultsPerPageChange: (value: number) => void
  /** Additional CSS classes */
  className?: string
}

const resultsPerPageOptions = [
  { label: '10', value: 10 },
  { label: '20', value: 20 },
  { label: '50', value: 50 },
  { label: '100', value: 100 }
]

/**
 * EpTablePagination - Pagination controls for tables
 * 
 * Provides page navigation with optional page numbers, ellipsis truncation,
 * and results-per-page selector.
 */
export const EpTablePagination: React.FC<EpTablePaginationProps> = ({
  currentPage,
  showPages = false,
  resultsPerPage,
  totalPages,
  onPageChange,
  onResultsPerPageChange,
  className = ''
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
    if (totalPages <= truncationThreshold) {
      for (let i = 2; i < totalPages; i++) {
        range.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 2; i <= 4; i++) {
          range.push(i)
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 3; i < totalPages; i++) {
          range.push(i)
        }
      } else {
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          range.push(i)
        }
      }
    }
    return range
  }, [totalPages, currentPage])

  const prevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className={`ep-table-pagination${className ? ` ${className}` : ''}`}>
      <EpFooter rightGap="1rem" leftFlex="0 1 40rem">
        <EpFlex className="justify-end align-center gap-10 text--overflow-hidden" slot="left">
          Results per page
          <EpSelect
            value={resultsPerPage}
            selectId="resultsPerPage"
            options={resultsPerPageOptions}
            width="7.5rem"
            onChange={onResultsPerPageChange}
          />
        </EpFlex>
        <EpFlex slot="right">
          <EpButton
            disabled={currentPage === 1}
            aria-label="Previous page"
            onClick={prevPage}
            iconLeft={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M10 12l-4-4 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            }
          />
          {showPages && (
            <>
              <EpButton
                aria-label="First page"
                className={currentPage === 1 ? 'ep-button--selected' : ''}
                onClick={() => onPageChange(1)}
              >
                1
              </EpButton>
              {shouldShowStartEllipsis && <span>...</span>}
              {pageRange.map((page) => (
                <EpButton
                  key={page}
                  aria-label={`Page ${page}`}
                  className={currentPage === page ? 'ep-button--selected' : ''}
                  onClick={() => onPageChange(page)}
                >
                  {page.toString()}
                </EpButton>
              ))}
              {shouldShowEndEllipsis && <span>...</span>}
              {totalPages > 1 && (
                <EpButton
                  aria-label="Last page"
                  className={currentPage === totalPages ? 'ep-button--selected' : ''}
                  onClick={() => onPageChange(totalPages)}
                >
                  {totalPages.toString()}
                </EpButton>
              )}
            </>
          )}
          <EpButton
            aria-label="Next page"
            disabled={currentPage === totalPages}
            onClick={nextPage}
            iconRight={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            }
          />
        </EpFlex>
      </EpFooter>
    </div>
  )
}
