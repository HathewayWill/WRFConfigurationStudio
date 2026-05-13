# Content Review and Reorganization Report

Generated: 2026-05-13T14:21:27Z

## What was inspected

- 294 files were inventoried.
- 165 text/source/catalog files were read as text or structured text for placement and role.
- 129 binary files were preserved and classified by type and path.

## Best format for the GitHub website

The best website format is a static GitHub Pages layout with `index.html` at the repository root and `.nojekyll` enabled. Markdown is the best format for website documentation because GitHub renders it directly, it keeps image references portable, and it remains easy to edit in the repository. DOCX is best kept as a downloadable/printable companion under `docs/print/`, not as the primary website guide.

## Reorganization performed

- Kept the web app entry point at `index.html`.
- Kept `.nojekyll` at the repository root.
- Kept all `data/`, `src/`, `styles/`, `vendor/`, `examples/`, `img/`, and root launcher files.
- Moved user-guide screenshots from `docs/images/` to `docs/images/user-guide/`.
- Updated `docs/USER_GUIDE.md` image links to match the new screenshot folder.
- Moved the printable DOCX guide into `docs/print/`.
- Updated root `README.md` with direct documentation links.
- Rebuilt `docs/README.md` as a GitHub documentation landing page.
- Added `docs/GITHUB_WEBSITE_STRUCTURE.md`.
- Added `docs/FILE_MAP.md`.
- Regenerated `docs/MANIFEST.txt` with SHA256 checksums.

## No application behavior changes

No application source logic was intentionally changed. The reorganization is documentation and package-layout focused.
