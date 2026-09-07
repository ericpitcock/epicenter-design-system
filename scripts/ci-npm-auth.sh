#!/usr/bin/env bash
# Point npm at GitHub Packages for the @ericpitcock scope, in CI.
#
# This writes the token to the USER config (~/.npmrc) rather than to a project
# .npmrc, and that is the whole point. npm resolves project config from the
# current directory only — it does not walk up — so the `netlify` and
# `install-all` scripts, which `cd packages/<pkg> && npm install`, never see the
# repo root's config. The previous fix was a .npmrc per package carrying
# `_authToken=${VITE_APP_GITHUB_TOKEN}`, which worked in CI and broke every
# developer machine: with the variable unset the substitution resolves to an
# empty string, and an empty token in project config outranks the real one in
# ~/.npmrc. Publishing and installing both 401 from those directories.
#
# The user config is read from any working directory, so setting it once here
# covers every `cd` the build does, and leaves a developer's own credentials
# alone.
set -euo pipefail

if [ -z "${VITE_APP_GITHUB_TOKEN:-}" ]; then
  echo "ci-npm-auth: VITE_APP_GITHUB_TOKEN is not set." >&2
  echo "  Every @ericpitcock package would 401. Set it in the Netlify UI." >&2
  exit 1
fi

npm config set @ericpitcock:registry=https://npm.pkg.github.com/
npm config set //npm.pkg.github.com/:_authToken="${VITE_APP_GITHUB_TOKEN}"
echo "ci-npm-auth: npm user config points at GitHub Packages for @ericpitcock"
