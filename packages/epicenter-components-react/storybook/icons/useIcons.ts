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
