import { ArrowRight01, Search01 } from '@ericpitcock/epicenter-icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import './Kmd.css';

interface Command {
  children?: Command[];
  icon?: React.ReactNode;
  id: string;
  onSelect?: () => void;
  section?: string;
  shortcut?: string[];
  title: string;
}

interface KmdProps {
  commands: Command[];
  onClose: () => void;
  open: boolean;
}

export const Kmd: React.FC<KmdProps> = ({ commands, open, onClose }) => {
  const [stack, setStack] = useState<Command[][]>([commands]);
  const [path, setPath] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Reset state when opening
  useEffect(() => {
    if (open) {
      setStack([commands]);
      setPath([]);
      setSearchQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open, commands]);

  // Current commands to display
  const currentCommands = stack[stack.length - 1];

  // Fuzzy search filter
  const filteredCommands = useMemo(() => {
    if (!searchQuery.trim()) return currentCommands;

    const query = searchQuery.toLowerCase();
    return currentCommands.filter((cmd) =>
      cmd.title.toLowerCase().includes(query)
    );
  }, [currentCommands, searchQuery]);

  // Group commands by section
  const groupedCommands = useMemo(() => {
    const groups: { [key: string]: Command[] } = {};
    filteredCommands.forEach((cmd) => {
      const section = cmd.section || 'Commands';
      if (!groups[section]) groups[section] = [];
      groups[section].push(cmd);
    });
    return groups;
  }, [filteredCommands]);

  // Flatten for keyboard navigation
  const flatCommands = useMemo(() => filteredCommands, [filteredCommands]);

  // Reset selection when filtered results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredCommands]);

  // Auto-scroll selected item into view
  useEffect(() => {
    if (!listRef.current) return;
    const selectedEl = listRef.current.querySelector(
      `[data-index="${selectedIndex}"]`
    ) as HTMLElement;
    if (selectedEl) {
      selectedEl.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      switch (e.key) {
        case 'Escape':
          if (stack.length > 1) {
            // Go back
            setStack((prev) => prev.slice(0, -1));
            setPath((prev) => prev.slice(0, -1));
            setSearchQuery('');
          } else {
            onClose();
          }
          e.preventDefault();
          break;

        case 'ArrowDown':
          setSelectedIndex((prev) =>
            prev < flatCommands.length - 1 ? prev + 1 : prev
          );
          e.preventDefault();
          break;

        case 'ArrowUp':
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
          e.preventDefault();
          break;

        case 'Enter':
          if (flatCommands[selectedIndex]) {
            handleSelectCommand(flatCommands[selectedIndex]);
          }
          e.preventDefault();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, flatCommands, selectedIndex, stack.length, onClose]);

  const handleSelectCommand = (cmd: Command) => {
    if (cmd.children && cmd.children.length > 0) {
      // Navigate into sub-menu
      setStack((prev) => [...prev, cmd.children!]);
      setPath((prev) => [...prev, cmd.title]);
      setSearchQuery('');
      setSelectedIndex(0);
    } else if (cmd.onSelect) {
      // Execute command
      cmd.onSelect();
      onClose();
    }
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="kmd-overlay"
          onClick={handleClickOutside}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="kmd-container"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="kmd-header">
              <Search01 className="kmd-search-icon" />

              {/* Breadcrumbs */}
              {path.length > 0 && (
                <div className="kmd-breadcrumbs">
                  {path.map((p, i) => (
                    <React.Fragment key={i}>
                      <span>{p}</span>
                      <ArrowRight01 className="kmd-breadcrumb-icon" />
                    </React.Fragment>
                  ))}
                </div>
              )}

              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for commands..."
                className="kmd-input"
              />
            </div>

            {/* Results List */}
            <div
              ref={listRef}
              className="kmd-results"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={stack.length}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {Object.entries(groupedCommands).map(([section, cmds]) => (
                    <div key={section}>
                      {/* Section Header */}
                      <div className="kmd-section-header">
                        <div className="kmd-section-title">
                          {section}
                        </div>
                      </div>

                      {/* Commands in Section */}
                      {cmds.map((cmd) => {
                        const globalIndex = flatCommands.indexOf(cmd);
                        const isSelected = globalIndex === selectedIndex;

                        return (
                          <div
                            key={cmd.id}
                            data-index={globalIndex}
                            onClick={() => handleSelectCommand(cmd)}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            className={`kmd-command-item ${isSelected ? 'selected' : ''}`}
                          >
                            {/* Icon */}
                            {cmd.icon && (
                              <div className="kmd-command-icon">
                                {cmd.icon}
                              </div>
                            )}

                            {/* Title */}
                            <div className="kmd-command-title">
                              {cmd.title}
                            </div>

                            {/* Has Children Indicator */}
                            {cmd.children && cmd.children.length > 0 && (
                              <ArrowRight01 className="kmd-command-chevron" />
                            )}

                            {/* Shortcut */}
                            {cmd.shortcut && (
                              <div className="kmd-shortcuts">
                                {cmd.shortcut.map((key, i) => (
                                  <div
                                    key={i}
                                    className="kmd-shortcut-key"
                                  >
                                    {key}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}

                  {/* No Results */}
                  {flatCommands.length === 0 && (
                    <div className="kmd-no-results">
                      No commands found
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="kmd-footer">
              <div className="kmd-footer-text">Search</div>
              <div className="kmd-footer-hints">
                <span>↵ to select</span>
                {stack.length > 1 ? (
                  <span>esc to go back</span>
                ) : (
                  <span>esc to close</span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
