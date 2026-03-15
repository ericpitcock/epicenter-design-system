import { ComponentType, useEffect, useState } from 'react';

import iconsData from '../../../epicenter-icons/icons.json';

export const getComponentName = (iconName: string): string => {
  // Handle specific naming conflicts first
  // map what's in icons.json to the correct component name
  const conflicts: Record<string, string> = {
    'trade-mark': 'TrademarkCircle',
    'trademark': 'TrademarkRectangle',
    'finger-print-scan': 'FingerprintScan01',
    'fingerprint-scan': 'FingerprintScan02',
    'four-square': 'FourNumberSquare',
    'foursquare': 'FoursquareLogo',
    're:': 'ReColon',
    'c++': 'CPlusPlus',
    'rubik\'s-cube': 'RubikQuotesCube',
  };

  if (conflicts[iconName]) {
    return conflicts[iconName];
  }

  // Standard conversion: kebab-case to PascalCase
  let name = iconName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  // Handle numbers at the start
  if (/^\d/.test(name)) {
    name = 'Num' + name;
  }

  // Handle special characters
  name = name
    .replace(/Colon/g, 'Colon')
    .replace(/Dot/g, 'Dot')
    .replace(/Plus/g, 'Plus');

  return name;
};

// Generate all component names
export const getAllComponentNames = (): string[] => {
  return iconsData.map(icon => getComponentName(icon.name));
};

// Lazy-initialized singleton for component names
let _cachedComponentNames: string[] | null = null;

export const getComponentNames = (): string[] => {
  if (_cachedComponentNames === null) {
    const iconNames = iconsData.map(icon => icon.name);
    _cachedComponentNames = iconNames.map(getComponentName);
    _cachedComponentNames.unshift('None');
  }
  return _cachedComponentNames;
};

// For backward compatibility - compute on first access
export const componentNames = getComponentNames();

export { iconsData };

// --- Dynamic icon loading for Storybook controls ---

// Lazy glob import — modules are loaded on demand, not at startup
const iconModules = import.meta.glob('../../../epicenter-icons-react/*.jsx');

// Build a lookup map from component name to glob key (fast O(1) lookups)
const iconKeyMap: Record<string, string> = {};
for (const key of Object.keys(iconModules)) {
  const match = key.match(/\/([^/]+)\.jsx$/);
  if (match) iconKeyMap[match[1]] = key;
}

// Cache loaded components to avoid re-importing
const componentCache = new Map<string, ComponentType<any>>();

/**
 * Hook that dynamically loads an icon component by name.
 * Returns null if the name is 'None' or undefined, or while loading.
 */
export const useIconComponent = (iconName: string | undefined): ComponentType<any> | null => {
  const [Component, setComponent] = useState<ComponentType<any> | null>(() => {
    if (!iconName || iconName === 'None') return null;
    return componentCache.get(iconName) || null;
  });

  useEffect(() => {
    if (!iconName || iconName === 'None') {
      setComponent(null);
      return;
    }

    if (componentCache.has(iconName)) {
      setComponent(() => componentCache.get(iconName)!);
      return;
    }

    const key = iconKeyMap[iconName];
    if (!key) {
      setComponent(null);
      return;
    }

    let cancelled = false;
    iconModules[key]().then((module: any) => {
      if (cancelled) return;
      const comp = module[iconName] || null;
      if (comp) {
        componentCache.set(iconName, comp);
      }
      setComponent(() => comp);
    }).catch(() => {
      if (!cancelled) setComponent(null);
    });

    return () => { cancelled = true; };
  }, [iconName]);

  return Component;
};
