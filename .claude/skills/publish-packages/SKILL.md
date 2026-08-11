---
name: publish-packages
description: Publish the Epicenter Design System packages (@ericpitcock/epicenter-styles, -components-vue, -components-react, -icons-vue, -icons-react) to GitHub Packages. Use whenever the user wants to cut a release, publish or republish one or more packages, bump versions, push builds to the local yalc store for testing, or debug a failed publish — including phrasings like "publish the library", "release a new version", "ship this to npm", "bump and publish", "yalc publish", "update the design system packages", or "why did npm publish 401/403".
---

# Publishing the Epicenter Design System

Five packages publish. Everything below assumes the repo root
`/Users/ericpitcock/Documents/www/epicenter-design-system`.

## The one thing that will bite you first: auth

The scope resolves to **GitHub Packages, not npmjs.org**. Root `.npmrc` (tracked):

```
//npm.pkg.github.com/:_authToken=${VITE_APP_GITHUB_TOKEN}
@ericpitcock:registry=https://npm.pkg.github.com/
```

`VITE_APP_GITHUB_TOKEN` is exported from `~/.zprofile` and `~/.zshrc`. A
**non-interactive shell does not load those**, so npm expands the variable to an
empty string and every registry call fails with 401/403 — even though the token
is perfectly valid. Wrap every npm command that touches the registry:

```bash
zsh -c '. ~/.zprofile && npm whoami --registry=https://npm.pkg.github.com/'
```

That should print `ericpitcock`. Run it as a preflight before anything else. Do
not "fix" this by editing `.npmrc` or pasting a token anywhere — the file is
tracked, and the env var indirection is deliberate (Netlify supplies it in CI).

## What publishes

| Package | Path | Build? | Notes |
|---|---|---|---|
| `@ericpitcock/epicenter-styles` | `packages/epicenter-styles` | yes | `dist/` is git-tracked |
| `@ericpitcock/epicenter-components-vue` | `packages/epicenter-components-vue` | yes | `dist/` is gitignored |
| `@ericpitcock/epicenter-components-react` | `packages/epicenter-components-react` | no | ships raw `src/` |
| `@ericpitcock/epicenter-icons-vue` | `packages/epicenter-icons-vue` | generated | ~9,200 files |
| `@ericpitcock/epicenter-icons-react` | `packages/epicenter-icons-react` | generated | ~9,200 files |

**Does not publish:** `packages/epicenter-icons` (`private: true` — it is the
generator, not a package) and the repo root (`private: true`).

No package depends on another through npm, so publish order is cosmetic. Use
styles → icons-vue → icons-react → components-vue → components-react.

## Version policy

All five move in lockstep to the same version. Prereleases use a numeric
identifier (`2.0.0-beta.1`, not `2.0.0-beta`) so the next one is a clean
increment.

- Prerelease → `npm publish --tag beta`
- Stable → `npm publish` (no tag)

**`--tag beta` is mandatory for prereleases.** npm assigns the `latest` dist-tag
to every publish unless a tag is given, prerelease or not. Without it a beta
becomes the default install for everyone.

Versions are **one-way** — GitHub Packages rejects republishing a version that
already exists (`EPUBLISHCONFLICT`). If you burn `2.0.0-beta.1`, the next
attempt is `2.0.0-beta.2`. This is why the yalc gate below exists.

Check what is already taken before choosing a number:

```bash
zsh -c '. ~/.zprofile && npm view @ericpitcock/epicenter-styles versions --registry=https://npm.pkg.github.com/'
```

## Builds, and the stale-dist trap

`epicenter-styles` and `epicenter-components-vue` both have a `build` script and
both now have `prepublishOnly: npm run build`, so `npm publish` and
`yalc publish` rebuild automatically. Do not remove those — before they existed
it was entirely possible to publish a `dist/` from days ago.

The vue build (`packages/epicenter-components-vue/scripts/build.mjs`) is a **file
copy, not a compilation**. Two consequences:

- It regenerates `src/components/index.ts` by globbing every `.vue` file and
  deriving the export name from the **filename**. Renaming a component's export
  means renaming its file and rebuilding — never hand-edit that index, it carries
  a "do not edit directly" header.
- Nothing type-checks. `tsconfig.json` is IDE-only; there is no `vue-tsc` step
  anywhere in the repo. A type error ships silently and only surfaces in a
  consuming app.

## The generated icon packages

`epicenter-icons-vue` and `epicenter-icons-react` contain ~9,200 generated files
each, all gitignored — only `package.json` and `README.md` are tracked. Before
publishing, confirm the content is actually on disk:

```bash
ls packages/epicenter-icons-vue | wc -l
```

A number in the thousands means you are fine. If it is ~2, hydrate first, using
whichever fits:

- **Icons unchanged** (the normal case) — copy from the installed npm copy:
  ```bash
  bash scripts/copy-icons-from-npm.sh
  ```
- **`packages/epicenter-icons/icons.json` changed** — regenerate:
  ```bash
  cd packages/epicenter-icons && npm run build
  ```
  Needs `python3` and network access to the hugeicons CDN. Only do this when the
  icon set actually changed; it is slow and network-dependent.

## Preflight

There is **no unit test suite** — Storybook is the validation environment.

1. Auth: `npm whoami` per the top section.
2. Lint: `npm run lint` at the root.
3. Build: happens via `prepublishOnly`, but run it explicitly if you want to
   inspect output first.
4. Tarball contents — run in each of the five package dirs:
   ```bash
   npm pack --dry-run
   ```
   Expect: styles → `dist/` only; components-vue → `dist/` only and **no
   `.stories.js`**; components-react → `src/` only (no `storybook/`, no
   `tsconfig.json`); icon packages → thousands of files plus `base.scss` and
   `README.md`.
5. Visual: `npm run storybook` (Vue, :6006) / `npm run storybook:react` (:6007)
   and look at whatever changed.

## The yalc gate — do not skip

Registry versions cannot be reused, so local link-testing is the only cheap
place to catch a bad artifact. **Bump versions first**, so the yalc store holds
the exact versions that will be published, then:

```bash
npm run yalc:publish-all
```

That builds styles and components-vue on the way through and pushes all five
into `~/.yalc`. In the consuming project:

```bash
yalc update
```

(`yalc add @ericpitcock/epicenter-components-vue` if it is not linked yet, or
`yalc publish --push` from a package dir to propagate into every linked project
at once.)

yalc copies using the same `files`/packing rules as npm, so what lands in
`~/.yalc` is a faithful preview of the published tarball. If an import resolves
under yalc, it resolves after publish.

**Stop here and get human sign-off before publishing.** Nothing is committed and
nothing is on the registry at this point, so anything found now is free to fix.

## Publish

After sign-off, from each package dir in order:

```bash
zsh -c '. ~/.zprofile && npm publish --tag beta'
```

Then verify each one:

```bash
zsh -c '. ~/.zprofile && npm view @ericpitcock/epicenter-components-vue dist-tags --registry=https://npm.pkg.github.com/'
```

**`npm view` lies here.** Bare `npm view <pkg>` prints *nothing at all* for a
package whose only releases are prereleases — it resolves `latest` first, and
there isn't one. That is not a failed publish. Ask the registry directly:

```bash
zsh -c '. ~/.zprofile && curl -s -H "Authorization: Bearer $VITE_APP_GITHUB_TOKEN" \
  "https://npm.pkg.github.com/@ericpitcock%2fepicenter-components-vue" \
  | node -e "let d=\"\";process.stdin.on(\"data\",c=>d+=c).on(\"end\",()=>{const j=JSON.parse(d);console.log(Object.keys(j.versions),j[\"dist-tags\"])})"'
```

**A first publish under `--tag beta` gets no `latest` tag.** Consequence: bare
`npm install @ericpitcock/epicenter-components-vue` fails outright — consumers
must write `@beta`. If a package's first-ever release is a prerelease and you
want plain installs to work, set the tag explicitly:

```bash
zsh -c '. ~/.zprofile && npm dist-tag add @ericpitcock/epicenter-components-vue@2.0.0-beta.1 latest'
```

Final smoke test, in a scratch dir outside the repo. **`--min-release-age=0` is
required** — `~/.npmrc` sets `min-release-age=3`, so npm refuses to install
anything published in the last three days and reports it as
`ENOVERSIONS: No versions available` or `ETARGET: No matching version … with a
date before <date>`. That looks exactly like a broken publish and is not one:

```bash
zsh -c '. ~/.zprofile && npm install --min-release-age=0 @ericpitcock/epicenter-components-vue@beta'
```

## Commits and tags

Keep the release legible as three commits, matching the repo's short lowercase
style: the feature work, the publish/config changes, then a bare version-bump
commit. Tag the bump commit `v<version>`.

Only push when asked. `master` tracks `pserver/master` (the local test server),
with `origin` on GitHub — pushing to the wrong one is easy.

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `401 unauthenticated` / `403 Forbidden` on any registry call | shell didn't load `~/.zprofile`, so `VITE_APP_GITHUB_TOKEN` expanded empty | wrap the command in `zsh -c '. ~/.zprofile && …'` |
| `403` that persists with the profile sourced | PAT expired or missing `write:packages` | regenerate the PAT on GitHub, update `~/.zprofile` and `~/.zshrc` |
| `EPUBLISHCONFLICT` | that version already exists on the registry | bump to the next version; you cannot overwrite |
| `404 Not Found` on publish | missing/mismatched `repository` field, or scope not routed to GitHub Packages | every package needs `repository` pointing at `github.com/ericpitcock/epicenter-design-system`; `publishConfig.registry` should be `https://npm.pkg.github.com/` |
| Tarball missing files | `files` field too narrow, or a build didn't run | check `npm pack --dry-run` and the `files` array |
| Tarball has `storybook/`, `tsconfig.json`, stray junk | `files` field absent | add one; every publishable package should have `files` |
| Icon package publishes with ~2 files | generated content isn't on disk (it's gitignored) | `bash scripts/copy-icons-from-npm.sh`, or regenerate from `packages/epicenter-icons` |
| A renamed component still exports under the old name | `src/components/index.ts` is generated from filenames | rename the `.vue` file itself, then rebuild |
| `ENOVERSIONS` / `ETARGET … with a date before <date>` right after a successful publish | `min-release-age=3` in `~/.npmrc` blocks anything published in the last 3 days | add `--min-release-age=0` to the verifying install; the publish is fine |
| `npm view <pkg>` prints nothing, exit code 0 | the package has no `latest` tag (prerelease-only), and bare `npm view` resolves `latest` | query the packument with curl, or `npm view <pkg>@beta` |
| Bare `npm install <pkg>` fails but `<pkg>@beta` works | no `latest` dist-tag — expected for a package whose only release is a prerelease | `npm dist-tag add <pkg>@<version> latest` if plain installs should work |
