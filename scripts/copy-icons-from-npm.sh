#!/bin/bash
# copy-icons-from-npm.sh
#
# Copies published icon package files from node_modules into the local
# packages/ directories so that the Vite aliases (which point to the local
# dirs) resolve correctly on Netlify.
#
# Locally, the generated icons already live in packages/, so this script
# is only needed in CI / Netlify builds.

set -euo pipefail

ICONS_VUE_SRC="node_modules/@ericpitcock/epicenter-icons-vue"
ICONS_VUE_DEST="packages/epicenter-icons-vue"
ICONS_REACT_SRC="node_modules/@ericpitcock/epicenter-icons-react"
ICONS_REACT_DEST="packages/epicenter-icons-react"

echo "Copying Vue icon files from npm..."
if [ -d "$ICONS_VUE_SRC" ]; then
  cp "$ICONS_VUE_SRC"/*.js  "$ICONS_VUE_DEST/" 2>/dev/null || true
  cp "$ICONS_VUE_SRC"/*.d.ts "$ICONS_VUE_DEST/" 2>/dev/null || true
  cp "$ICONS_VUE_SRC"/base.scss "$ICONS_VUE_DEST/" 2>/dev/null || true
  echo "  Done."
else
  echo "  WARNING: $ICONS_VUE_SRC not found. Did npm install run?"
fi

echo "Copying React icon files from npm..."
if [ -d "$ICONS_REACT_SRC" ]; then
  cp "$ICONS_REACT_SRC"/*.jsx  "$ICONS_REACT_DEST/" 2>/dev/null || true
  cp "$ICONS_REACT_SRC"/*.js   "$ICONS_REACT_DEST/" 2>/dev/null || true
  cp "$ICONS_REACT_SRC"/*.d.ts "$ICONS_REACT_DEST/" 2>/dev/null || true
  cp "$ICONS_REACT_SRC"/base.scss "$ICONS_REACT_DEST/" 2>/dev/null || true
  echo "  Done."
else
  echo "  WARNING: $ICONS_REACT_SRC not found. Did npm install run?"
fi
