import { EpFlex, EpInput, EpPagination, EpSelect } from '@ericpitcock/epicenter-components-react';
import React, { useEffect, useMemo, useState } from 'react';

import { getComponentName, iconsData } from '../helpers/useIcons';
import '../../../storybook-shared/icon-browser.css'
import '../../../epicenter-icons-react/base.scss';

// Lazy glob import — modules are loaded on demand, not at startup
const iconModules = import.meta.glob('../../../epicenter-icons-react/*.jsx');

const PROBLEMATIC_ICONS = [
  'Access', 'Advertisiment', 'Affiliate', 'AiBook', 'AiBrain03', 'AiChat02',
  'AiInnovation02', 'AiLock', 'AiMail', 'AiSearch', 'AiSecurity02', 'AlbumNotFound01',
  'AlbumNotFound02', 'Alms', 'AlphabetGreek', 'AlphabetHebrew', 'AlphabetHindi',
  'ArrowAllDirection', 'ArrowDown05', 'ArrowExpand', 'ArrowReloadHorizontal',
  'ArrowReloadVertical', 'ArrowShrink', 'ArrowShrink01', 'ArrowShrink02',
  'ArrowTurnBackward', 'ArrowTurnDown', 'ArrowTurnForward', 'ArrowTurnUp',
  'ArtificialIntelligence04', 'ArtificialIntelligence05', 'ArtificialIntelligence06',
  'AugmentedRealityAr', 'Avalanche', 'BaseballHelmet', 'Behance02', 'BodyWeight',
  'Bookshelf01', 'BubbleChatDownload01', 'Bug02', 'BulletproofVest', 'Cactus',
  'Cardiogram02', 'Carrot', 'CellularNetwork', 'ChairBarber', 'CircleArrowLeft03',
  'CircleLock01', 'CircleLockCheck02', 'CircleUnlock01', 'CloudSavingDone02', 'Code',
  'Compass01', 'Complaint', 'Cone02', 'Course', 'Crab', 'CreditCardNotFound',
  'CreditCardPos', 'CreditCardValidation', 'CricketHelmet', 'CursorPointer01',
  'DataRecovery', 'Delete01', 'Delete02', 'Delete03', 'Delete04', 'DeletePutBack',
  'DesktopComputer', 'DeviceAccess', 'DomainVerification', 'DoneAll', 'Drag01',
  'Drag02', 'DropDownList', 'DropDownTriangle', 'DropDownUp', 'DropDownDown',
  'EarPods', 'EidMubarak', 'EmergencyBed', 'EnergyEvolution', 'EqualSign',
  'FactoryOverall', 'FantasyGame', 'FastWind', 'FileBlocked', 'FileCoin',
  'FileCorrupt', 'FileFavourite', 'FileSearch', 'FileStar', 'FingerprintScan',
  'FirstAid', 'FlashLightOff', 'Flower', 'Folder', 'FolderAdd', 'FolderCloud',
  'FolderEdit', 'FolderLibrary', 'FolderMinnus', 'FolderSearch', 'FolderSecurity',
  'Food02', 'FootballPitch', 'ForgotPassword', 'FrontBack', 'FullScreenExit',
  'FullScreenMode', 'GameControllerOld', 'GasStation', 'GridView', 'GrowthMap',
  'GuitarTube', 'HeartCheck', 'Home03', 'HomeWifi', 'HouseBlank', 'IdentityCard',
  'ImageComposition', 'Impatient', 'InfiniteScroll', 'InformationCircle',
  'InformationDiamond', 'InformationSquare', 'JobLink', 'JoinRound', 'Key01',
  'Key02', 'Keyhole', 'LeftToRightListDash', 'LeftToRightListNumber', 'Library',
  'LicenseDraft', 'LicenseMaintenance', 'LicensePin', 'LocationAdd01',
  'LocationAdd02', 'LocationFavourite01', 'LocationFavourite02', 'LocationRemove01',
  'LocationRemove02', 'LockKey', 'LockPassword', 'LogIn01', 'LogIn02', 'LogIn03',
  'LogIn04', 'LookDown', 'LookRight', 'LookUp', 'MagicWand01', 'MagicWand02',
  'MagicWand03', 'MailAdd01', 'MailAdd02', 'MailAtSign01', 'MailAtSign02',
  'MailBlock01', 'MailBlock02', 'MailDownload01', 'MailDownload02', 'MailEdit01',
  'MailEdit02', 'MailLock01', 'MailLock02', 'MailLove01', 'MailLove02',
  'MailMinus01', 'MailMinus02', 'MailOpen', 'MailOpen01', 'MailOpen02',
  'MailOpenLove', 'MailReceive01', 'MailReceive02', 'MailRemove01', 'MailRemove02',
  'MailSearch01', 'MailSearch02', 'MailSetting01', 'MailSetting02', 'MailUpload01',
  'MailUpload02', 'MailValidation01', 'MailValidation02', 'MinusSign',
  'MinusSignCircle', 'MinusSignSquare', 'MobileNavigator01', 'MobileNavigator02',
  'MobileProgramming01', 'MobileProgramming02', 'MobileProtection', 'MobileSecurityt',
  'MouseRightClick01', 'MouseRightClick02', 'MouseRightClick03', 'MouseRightClick04',
  'MouseRightClick05', 'MouseRightClick06', 'MusicalNote01', 'MusicalNote02',
  'NewJob', 'Nextjs', 'NotificationBlock01', 'NotificationBlock02',
  'NotificationBlock03', 'PalmVein', 'Passport01', 'PasswordValidation',
  'PhoneOff01', 'PhoneOff02', 'PhoneOff03', 'PlayListAdd', 'PlayListFavourite01',
  'PlayListFavourite02', 'PlayListMinus', 'PlayListRemove', 'PlusSignCircle',
  'PlusSignSquare', 'ProductLoading', 'PushUpBar', 'Quilljs', 'Quiz01',
  'RandomNumberGenerator', 'Search01', 'Search02', 'SearchAdd', 'SearchArea',
  'SearchFavourite', 'SearchFocus', 'SearchMinus', 'SearchRemove', 'SearchReplace',
  'SearchSquare', 'Seat01', 'Seat02', 'Seat03', 'SecurityCheck', 'Share01',
  'Share02', 'Share03', 'Share04', 'Share05', 'Share06', 'Share07', 'Share08',
  'SoftwareUninstall'
];

interface IconBrowserComponentProps {
  color?: string;
  hideProblematic?: boolean;
  showProblematicOnly?: boolean;
  size?: number;
  strokeWidth?: number;
}

interface IconData {
  category: string;
  featured: boolean;
  name: string;
  tags: string;
  version: string;
}

const NotFoundIcon: React.FC = () => (
  <div
    style={{
      width: 'var(--ep-icon-width, 24px)',
      height: 'var(--ep-icon-height, 24px)',
      background: '#f3f4f6',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '10px',
      color: '#9ca3af',
    }}
  >
    ❌
  </div>
);

// Build a lookup map from component name to glob key (fast O(1) lookups)
const iconKeyMap: Record<string, string> = {};
for (const key of Object.keys(iconModules)) {
  const match = key.match(/\/([^/]+)\.jsx$/);
  if (match) iconKeyMap[match[1]] = key;
}

// Async loader — resolves a single icon module on demand
const loadIconComponent = async (componentName: string): Promise<React.FC<any>> => {
  const key = iconKeyMap[componentName];
  if (!key) return NotFoundIcon;
  try {
    const module = (await iconModules[key]()) as any;
    return module[componentName] || NotFoundIcon;
  } catch {
    return NotFoundIcon;
  }
};

export const IconBrowserComponent: React.FC<IconBrowserComponentProps> = ({
  size = 72,
  color = '#000000',
  strokeWidth = 1,
  showProblematicOnly = false,
  hideProblematic = true,
}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(50);
  const [copiedIcon, setCopiedIcon] = useState('');
  // Cache of lazily-loaded icon components keyed by component name
  const [loadedIcons, setLoadedIcons] = useState<Record<string, React.FC<any>>>({});

  const iconStyle = useMemo(() => ({
    '--ep-icon-width': `${size || 24}px`,
    '--ep-icon-height': `${size || 24}px`,
    '--ep-icon-text-color': color || '#000000',
    '--ep-icon-stroke-width': (strokeWidth || 1.5).toString(),
  } as React.CSSProperties), [size, color, strokeWidth]);

  const filteredIcons = useMemo(() => {
    let filtered = [...iconsData];

    if (search && search.trim()) {
      const searchTerm = search.toLowerCase().trim();
      filtered = filtered.filter((icon: IconData) => {
        const nameMatch = icon.name.toLowerCase().includes(searchTerm);
        const tagMatch = icon.tags && typeof icon.tags === 'string' &&
          icon.tags.toLowerCase().includes(searchTerm);
        return nameMatch || tagMatch;
      });
    }

    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter((icon: IconData) => icon.category === selectedCategory);
    }

    if (showProblematicOnly) {
      const problematicNames = PROBLEMATIC_ICONS.map(getComponentName);
      filtered = filtered.filter((icon: IconData) => {
        const componentName = getComponentName(icon.name);
        return problematicNames.indexOf(componentName) !== -1;
      });
    }

    if (hideProblematic) {
      const problematicNames = PROBLEMATIC_ICONS.map(getComponentName);
      filtered = filtered.filter((icon: IconData) => {
        const componentName = getComponentName(icon.name);
        return problematicNames.indexOf(componentName) === -1;
      });
    }

    return filtered;
  }, [search, selectedCategory, showProblematicOnly, hideProblematic]);

  const paginatedIcons = useMemo(() => {
    const start = (currentPage - 1) * resultsPerPage;
    const end = start + resultsPerPage;
    return filteredIcons.slice(start, end);
  }, [filteredIcons, currentPage, resultsPerPage]);

  const totalPages = useMemo(() =>
    Math.ceil(filteredIcons.length / resultsPerPage),
    [filteredIcons.length, resultsPerPage]
  );

  const categories = useMemo(() =>
    ['All', ...new Set(iconsData.map((icon: IconData) => icon.category))].sort()
      .map(category => ({ label: category, value: category })),
    []
  );

  // Lazily load icon components for the current page
  useEffect(() => {
    let cancelled = false;
    const names = paginatedIcons.map((icon: IconData) => getComponentName(icon.name));
    const missing = names.filter(n => !(n in loadedIcons));
    if (missing.length === 0) return;

    Promise.all(missing.map(async (name) => [name, await loadIconComponent(name)] as const))
      .then(results => {
        if (cancelled) return;
        setLoadedIcons(prev => {
          const next = { ...prev };
          for (const [name, comp] of results) next[name] = comp;
          return next;
        });
      });
    return () => { cancelled = true; };
  }, [paginatedIcons]);

  const copyIconName = async (iconName: string) => {
    const componentName = getComponentName(iconName);
    try {
      await navigator.clipboard.writeText(componentName);
      setCopiedIcon(iconName);
      setTimeout(() => {
        setCopiedIcon('');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleResultsPerPageChange = (value: number) => {
    setResultsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <div className="icon-browser">
      <div className="controls">
        <EpFlex className="justify-between align-center gap-30">
          <EpFlex className="gap-10">
            <div className="category-select">
              <EpSelect
                value={selectedCategory}
                selectId="icon-category-select"
                options={categories}
                size="xlarge"
                onChange={(value) => handleCategoryChange(value as string)}
              />
            </div>
            <EpInput
              value={search}
              placeholder="Search icons by name, tags, or category..."
              size="xlarge"
              clearable
              onChange={(value) => handleSearchChange(value as string)}
            />
          </EpFlex>
          <p className="icon-count">
            {filteredIcons.length} of {iconsData.length}
          </p>
        </EpFlex>
      </div>
      <div className="icon-grid">
        {paginatedIcons.map((icon: IconData) => {
          const componentName = getComponentName(icon.name);
          const isLoaded = componentName in loadedIcons;
          const IconComponent = isLoaded ? loadedIcons[componentName] : null;

          return (
            <div
              key={icon.name}
              className={`icon-card ${copiedIcon === icon.name ? 'icon-card--copied' : ''}`}
              onClick={() => copyIconName(icon.name)}
            >
              <div className="icon-display">
                {IconComponent ? <IconComponent style={iconStyle} /> : null}
              </div>
              <div className="icon-name">{componentName}</div>
              <div className="icon-category">{icon.category}</div>
              {copiedIcon === icon.name && (
                <div className="copied-indicator">Copied!</div>
              )}
            </div>
          );
        })}
      </div>
      {totalPages > 1 && (
        <EpPagination
          currentPage={currentPage}
          totalPages={totalPages}
          resultsPerPage={resultsPerPage}
          buttonClass="ep-button-var--secondary"
          showPages
          onPageChange={handlePageChange}
          onResultsPerPageChange={handleResultsPerPageChange}
        />
      )}
    </div>
  );
};
