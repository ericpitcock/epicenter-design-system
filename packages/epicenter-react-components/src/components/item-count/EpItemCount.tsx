import React from 'react';

interface EpItemCountProps {
  /** The count of items to display */
  count: number;
  /** The singular form of the item name */
  singular: string;
  /** The plural form of the item name */
  plural: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * EpItemCount - A component for displaying item counts with proper pluralization
 */
const EpItemCount: React.FC<EpItemCountProps> = ({ 
  count, 
  singular, 
  plural, 
  className = '' 
}) => {
  const label = count === 1 ? singular : plural;
  
  return (
    <span className={className}>
      {count} {label}
    </span>
  );
};

EpItemCount.displayName = 'EpItemCount';

export default EpItemCount;
