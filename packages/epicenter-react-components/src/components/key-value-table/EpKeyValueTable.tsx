import React, { useMemo } from 'react'
import EpFlex from '../flexbox/EpFlex'

export interface KeyValueSection {
  name: string
  data: Record<string, any>
}

export interface EpKeyValueTableProps {
  /** Table data - either a single object or array of section objects */
  data: Record<string, any> | KeyValueSection[]
  /** Use common width for all key columns based on longest key */
  commonKeyWidth?: boolean
  /** Show section headers */
  sectionHeaders?: boolean
  /** Custom value renderer */
  renderValue?: (key: string, value: any) => React.ReactNode
  /** Additional CSS classes */
  className?: string
}

/**
 * EpKeyValueTable - Simple key-value pair table
 * 
 * Displays data as key-value pairs with optional sections and custom value rendering.
 */
const EpKeyValueTable: React.FC<EpKeyValueTableProps> = ({
  data,
  commonKeyWidth = false,
  sectionHeaders = false,
  renderValue,
  className = ''
}) => {
  const processedData = useMemo((): KeyValueSection[] => {
    if (Array.isArray(data)) {
      return data
    }
    return [{ name: '', data }]
  }, [data])

  const keyColumnWidth = useMemo(() => {
    if (!commonKeyWidth) {
      return 'auto'
    }

    let maxKeyLength = 0

    for (const section of processedData) {
      for (const key in section.data) {
        maxKeyLength = Math.max(maxKeyLength, key.length)
      }
    }

    return `${maxKeyLength}ch`
  }, [commonKeyWidth, processedData])

  return (
    <EpFlex className={`ep-key-value-table flex-col gap-10${className ? ` ${className}` : ''}`}>
      {processedData.map((section, sectionIndex) => (
        <React.Fragment key={section.name || sectionIndex}>
          {sectionHeaders && section.name && (
            <h3 className="text-style--section">{section.name}</h3>
          )}
          <table>
            <tbody>
              {Object.entries(section.data).map(([key, value]) => (
                <tr key={key}>
                  <td
                    className="text--subtle"
                    style={{ width: keyColumnWidth }}
                  >
                    {key}
                  </td>
                  <td className="ep-flex gap-5">
                    {renderValue ? renderValue(key, value) : value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      ))}
    </EpFlex>
  )
}

export default EpKeyValueTable
