import React from 'react';

export interface EpItemCountProps {
  /** Additional CSS classes */
  className?: string;
  /** The count of items to display */
  count: number;
  /** The plural form of the item name */
  plural: string;
  /** The singular form of the item name */
  singular: string;
}

/**
 * EpItemCount - A component for displaying item counts with proper pluralization
 */
export const EpItemCount: React.FC<EpItemCountProps> = ({ 
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
