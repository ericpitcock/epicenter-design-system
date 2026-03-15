import React, { useEffect, useRef, useState, ReactNode } from 'react';

export interface EpColorRandomizerProps {
  /** Array of color values to randomly assign. */
  colors: string[];
  /** Content to render with the random color */
  children?: ReactNode;
}

// --- Shared state across all instances (module-level) ---
const bags = new Map<string, string[]>();
const instanceColors = new Map<symbol, string>();

function shuffled(arr: string[]): string[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function drawColor(colors: string[]): string {
  const key = JSON.stringify(colors);
  if (!bags.has(key) || bags.get(key)!.length === 0) {
    bags.set(key, shuffled(colors));
  }
  return bags.get(key)!.pop()!;
}

/**
 * EpColorRandomizer - Assigns a random color from a palette using bag randomization
 */
export const EpColorRandomizer: React.FC<EpColorRandomizerProps> = ({
  colors,
  children,
}) => {
  const instanceId = useRef(Symbol());
  const [assignedColor, setAssignedColor] = useState('');

  useEffect(() => {
    const color = drawColor(colors);
    setAssignedColor(color);
    instanceColors.set(instanceId.current, color);

    return () => {
      instanceColors.delete(instanceId.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span className="ep-color-randomizer" style={{ color: assignedColor }}>
      {children}
    </span>
  );
};

EpColorRandomizer.displayName = 'EpColorRandomizer';
