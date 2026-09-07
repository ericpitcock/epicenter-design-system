#!/usr/bin/env bash
# Make sure npm can reach GitHub Packages for the @ericpitcock scope, then get
# out of the way. Safe to run anywhere: CI, a developer machine, the test server.
#
# Why this exists rather than an _authToken in a project .npmrc:
#
# npm resolves project config from the current directory only — it does not walk
# up — so the build scripts, which `cd packages/<pkg> && npm install`, never see
# the repo root's config. The previous fix was a .npmrc per package carrying
# `_authToken=${VITE_APP_GITHUB_TOKEN}`. That worked in CI and broke every
# developer machine: with the variable unset the substitution resolves to an
# empty string, and an empty token in project config outranks the real one in
# ~/.npmrc, so publish and install both 401. Writing to the USER config instead
# fixes that — it is read from any working directory, so one call covers every
# `cd` a build makes.
#
# The three cases, in order:
#   1. Token in the environment (CI)      -> write it to the user config.
#   2. No token, but auth already works   -> leave the developer's setup alone.
#   3. No token and no working auth       -> fail loudly, before a confusing 401.
set -euo pipefail

REGISTRY="https://npm.pkg.github.com/"

if [ -n "${VITE_APP_GITHUB_TOKEN:-}" ]; then
  npm config set @ericpitcock:registry="$REGISTRY"
  npm config set "//npm.pkg.github.com/:_authToken=${VITE_APP_GITHUB_TOKEN}"
  echo "ci-npm-auth: npm user config points at GitHub Packages for @ericpitcock"
  exit 0
fi

if npm whoami --registry="$REGISTRY" >/dev/null 2>&1; then
  echo "ci-npm-auth: VITE_APP_GITHUB_TOKEN unset, but existing npm auth works — leaving it alone"
  exit 0
fi

echo "ci-npm-auth: cannot authenticate to $REGISTRY" >&2
echo "  Every @ericpitcock package will 401." >&2
echo "  CI: set VITE_APP_GITHUB_TOKEN (Netlify UI, or the deploy hook's exports)." >&2
echo "  Local: put a token with read:packages in ~/.npmrc, e.g." >&2
echo "    npm config set //npm.pkg.github.com/:_authToken=<token>" >&2
exit 1
