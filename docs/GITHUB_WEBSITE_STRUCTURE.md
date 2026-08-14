# GitHub Website Structure

Generated: 2026-05-13T14:21:27Z

This package has been organized so the repository can be published directly as a GitHub Pages static site while still serving as a downloadable local package.

## Recommended GitHub Pages format

The best format for the GitHub website is:

- `index.html` at the repository root as the live WRF Config Studio application entry point.
- `.nojekyll` at the repository root so GitHub Pages serves static folders such as `vendor/`, `data/`, and underscored filenames without Jekyll processing.
- Markdown documentation in `docs/` so GitHub renders it directly in the repository and it can also be linked from the website.
- User-guide screenshots in `docs/images/user-guide/` so documentation images are separate from application image assets.
- Printable/downloadable documents in `docs/print/` so the website guide remains Markdown-first while keeping DOCX for users who want an offline or printable copy.
- Reference PDFs in `docs/references/` so the About panel and documentation links continue to resolve.
- Legacy source notes in `docs/archive/` so current users are not overwhelmed by old patch files, but traceability is preserved.

## Current root layout

```text
WRFConfigStudio-main/
├── index.html                 # GitHub Pages app entry point
├── README.md                  # GitHub repository landing page
├── .nojekyll                  # Static-site compatibility for GitHub Pages
├── launch_local_server.py     # Local package launcher
├── launch-local.*       # Windows, macOS, and Linux launch helpers
├── data/                      # Runtime and source catalog data
├── docs/                      # User-facing documentation and references
├── examples/                  # Bundled WRF reference/test-case material
├── img/ and images/           # Application image assets
├── src/                       # First-party application JavaScript
├── styles/                    # Application CSS
└── vendor/                    # Third-party browser dependencies
```

## Documentation layout

```text
docs/
├── README.md
├── QUICK_START.md
├── USER_GUIDE.md
├── TECHNICAL_REFERENCE.md
├── RELEASE_HISTORY.md
├── PROJECT_LINEAGE.md
├── GITHUB_WEBSITE_STRUCTURE.md
├── FILE_MAP.md
├── MANIFEST.txt
├── archive/
├── images/
│   └── user-guide/
├── print/
└── references/
```

## Notes

WRF Config Studio v1.0.0 is a browser-based static application. The app can be hosted online or run locally through the included local server helper. The application package is local, but the map background uses online map tiles in this release.
