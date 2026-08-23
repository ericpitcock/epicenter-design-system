#!/bin/bash
# copy-icons-from-npm.sh
#
# Hydrates the local icon packages for CI / Netlify builds, where the generated
# icon modules are not in the repo (they are gitignored) but the Vite aliases
# point at packages/.
#
# Only the *generated* files come from npm: the per-icon modules and their
# types. base.scss does NOT — it is hand-authored source living at
# packages/epicenter-icons/base.scss, and it is what defines the --ep-icon-*
# contract the design system configures icons through.
#
# Copying base.scss from npm used to overwrite that source with whatever
# version happened to be published, silently reverting the contract and
# breaking every component that sets --ep-icon-*. If you need the published
# base.scss, bump the dependency and republish; do not source it here.

set -euo pipefail

ICONS_SRC="packages/epicenter-icons"
ICONS_VUE_SRC="node_modules/@ericpitcock/epicenter-icons-vue"
ICONS_VUE_DEST="packages/epicenter-icons-vue"
ICONS_REACT_SRC="node_modules/@ericpitcock/epicenter-icons-react"
ICONS_REACT_DEST="packages/epicenter-icons-react"

echo "Copying Vue icon modules from npm..."
if [ -d "$ICONS_VUE_SRC" ]; then
  cp "$ICONS_VUE_SRC"/*.js   "$ICONS_VUE_DEST/" 2>/dev/null || true
  cp "$ICONS_VUE_SRC"/*.d.ts "$ICONS_VUE_DEST/" 2>/dev/null || true
  echo "  Done."
else
  echo "  WARNING: $ICONS_VUE_SRC not found. Did npm install run?"
fi

echo "Copying React icon modules from npm..."
if [ -d "$ICONS_REACT_SRC" ]; then
  cp "$ICONS_REACT_SRC"/*.jsx  "$ICONS_REACT_DEST/" 2>/dev/null || true
  cp "$ICONS_REACT_SRC"/*.js   "$ICONS_REACT_DEST/" 2>/dev/null || true
  cp "$ICONS_REACT_SRC"/*.d.ts "$ICONS_REACT_DEST/" 2>/dev/null || true
  echo "  Done."
else
  echo "  WARNING: $ICONS_REACT_SRC not found. Did npm install run?"
fi

# base.scss always comes from source, after the npm copy, so it cannot be
# clobbered. This is the same copy the icons package's own `copy:assets` does.
echo "Installing base.scss from source ($ICONS_SRC/base.scss)..."
cp "$ICONS_SRC/base.scss" "$ICONS_VUE_DEST/base.scss"
cp "$ICONS_SRC/base.scss" "$ICONS_REACT_DEST/base.scss"
echo "  Done."
