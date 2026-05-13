[2026-05-04] WRF Config Studio v1.0.0-local-server-port-fix
- Fixed local launcher crash when port 8000 is already in use.
- launch_local_server.py now automatically uses the next available port.
- START_LOCAL_SERVER.bat, START_LOCAL_SERVER.sh, and START_LOCAL_SERVER.command now pass optional port arguments through to the Python launcher.
- Added docs/LOCAL_SERVER_PORT_FIX_V1.0.0.md.
- No map, export, WRFDA, OBSPROC, ARW context, or UI behavior changes.


[2026-05-04] WRF Config Studio v1.0.0-wps-footer-button-cleanup
- Removed duplicate legacy bottom-right Save / Copy / Close controls.
- Renamed the left WPS footer Save button to Save namelist.wps.
- No export, map, WRFDA, OBSPROC, ARW context, Lambert, browser compatibility, or touch/trackpad behavior changes.


[2026-05-02] WRF Config Studio v1.0.0-ui-version-final
- Fixed remaining live UI badges that still displayed v1.1.0-beta-arw-context.
- Forced WPS tools/sidebar badges to read from the centralized WRF Config Studio version.
- Confirmed user-facing runtime UI version labels use v1.0.0.
- ARW Technical Note scientific-context support remains in the v1.0.0 mainline.
- No map, export, WRFDA, OBSPROC, Lambert, browser compatibility, or touch/trackpad behavior changes.


[2026-05-02] WRF Config Studio v1.0.0-mainline-arw-context
- Promoted ARW Technical Note scientific-context support into the v1.0.0 mainline.
- User-facing UI version remains v1.0.0.
- Removed ARW context beta wording from the UI.
- Kept the ARW Technical Note PDF at docs/references/v4_technote.pdf.
- Kept data/runtime/namelist.arw_technical_note_context.json.
- Kept ARW scientific-context blocks in the namelist.input Documentation tab.
- Kept reference-only topic badges in the namelist.input Editor tab.
- No save blocking, auto-fixing, compatibility enforcement, export behavior, WRFDA handling, OBSPROC split, or map behavior changes.


[2026-05-02] WRF Config Studio v1.0.0
- Created separate mainline package from v1.0.0 mainline.
- Added NCAR/TN-556+STR ARW v4 Technical Note PDF as docs/references/v4_technote.pdf.
- Added data/runtime/namelist.arw_technical_note_context.json.
- Added ARW Technical Note scientific-context blocks in the namelist.input Documentation tab.
- Added reference-only topic badges to mapped variables in the namelist.input Editor tab.
- Added Documentation-tab link to ARW Technical Note v4.
- Consolidated the ARW context note into TECHNICAL_REFERENCE.md and archived the standalone source note.
- No save blocking, auto-fixing, compatibility enforcement, export behavior, WRFDA handling, OBSPROC split, map behavior, or mainline v1.0.0 behavior changes.


# WRF Config Studio Release History

Generated: 2026-05-04T23:20:07Z

This document consolidates the previous `ALL_PATCH_NOTES.txt`, `CHANGELOG.txt`, and `CONSOLIDATED_RELEASE_HISTORY.md` files into one current release history.

[2026-05-02] WRF Config Studio v1.0.0-online-only-map
- Removed the bundled Offline Vector Base Map from the base-layer selector.
- Removed automatic online-to-offline map fallback behavior.
- Removed tile-error and browser-offline event switching to the offline map layer.
- Updated About text and current user documentation to describe online-only map tiles.
- Added docs/ONLINE_ONLY_MAP_MODE_V1.0.0.md.
- No domain geometry, WPS export, namelist.input export, namelist.obsproc export, WRFDA handling, OBSPROC split, Lambert behavior, browser compatibility shim, or touch/trackpad behavior changes.


## Current v1.0.0 release highlights

- Rebranded public application name to **WRF Config Studio**.
- Preserved Jiří Richter / original WRF Domain Wizard credit.
- Added NOAA/FSL WRF SI GUI lineage acknowledgment.
- Preserved desktop browser compatibility shims.
- Preserved full 360-degree map/graticule and dateline wrapping behavior.
- Fixed remaining user-facing version badges.
- Fixed Lambert parallels mode application through **Update**.
- Split OBSPROC export out of `namelist.input`.
- Kept WRFDA groups in `namelist.input`.
- Updated user guide and quick start documentation.

## Timestamped patch notes

[2026-05-01] WRF Config Studio v1.0.0-noaa-about-credit
- Added NOAA/FSL WRF Standard Initialization GUI lineage acknowledgment to the About/Credits panel.
- Added a local About-panel link to docs/references/WRF_GUI_original_source_69852.pdf.
- Added docs/NOAA_FSL_GUI_ACKNOWLEDGMENT_V1.0.0.md.
- Updated USER_GUIDE.md and root README.md to acknowledge the NOAA/FSL GUI contribution.
- Preserved Jiří Richter / original WRF Domain Wizard credit and dedication.
- No map, domain, Lambert, namelist, WRFDA, OBSPROC, export, browser compatibility, or touch/trackpad behavior changes.

[2026-05-01] WRF Config Studio v1.0.0-user-guide-update
- Updated docs/USER_GUIDE.md for the current v1.0.0 behavior.
- Added docs/QUICK_START.md.
- Documented the OBSPROC export split: WRFDA remains in namelist.input, OBSPROC exports as namelist.obsproc.
- Documented obsproc_record* to record* conversion during namelist.obsproc export.
- Documented Save namelist.input, Save namelist.obsproc, and Save both workflow.
- Documented Lambert parallels Update behavior and desktop touch/trackpad support.

[2026-05-01] WRF Config Studio v1.0.0-obsproc-export-split
- Split OBSPROC export from namelist.input export.
- namelist.input export now excludes obsproc_record* groups.
- namelist.obsproc export now includes obsproc_record* groups and writes them as &record* groups.
- WRFDA wrfvar* groups and WRFDA support groups remain in namelist.input.
- Added Save namelist.obsproc and Save both buttons to the namelist editor footer.
- The Text tab now previews namelist.input only and notes the OBSPROC split behavior.
- Added docs/OBSPROC_EXPORT_SPLIT_V1.0.0.md.
- No map, WPS export, registry catalog, browser compatibility, or touch/trackpad behavior changes.

[2026-05-01] WRF Config Studio v1.0.0-lambert-update-fix
- Fixed Lambert parallels mode not being applied when pressing Update.
- Update now applies a pending Lambert parallels mode to truelat1 and truelat2 before the native domain redraw runs.
- Lambert parallels mode now restores the stored selected mode instead of resetting to Legacy when the tools panel is reinjected.
- Updated the UI cue to say Auto-fill projection and Update both apply the selected Lambert mode.
- No map wrapping, namelist catalog, export, browser compatibility, or touch/trackpad behavior changes.

[2026-04-30] WRF Config Studio v1.0.0-ui-version-fix
- Fixed remaining user-facing pre-rebrand version badges that showed V3.0.0.
- Updated Domain Intelligence badge to read from the centralized WRF Config Studio version.
- Updated WRF domain sidebar fallback version logic to use v1.0.0.
- Updated namelist runtime engine internal version label.
- Added docs/UI_VERSION_FIX_V1.0.0.md.
- No map, namelist, registry, catalog, export, browser compatibility, or touch/trackpad behavior changes.

[2026-04-30] WRF Config Studio v1.0.0-rebrand
- Rebranded public application name from WRF Domain Wizard to WRF Config Studio.
- Updated visible UI version to v1.0.0.
- Added src/core/app-version.js compatibility aliases so legacy version hooks continue to work.
- Updated package README, docs README, launch helper text, and documentation notes.
- Added docs/REBRAND_V1.0.0.md and docs/USER_GUIDE_V1.0.0_SUPPLEMENT.md.
- Preserved original WRF Domain Wizard credit and original Jiří Richter project link.
- No map, namelist, registry, catalog, export, browser compatibility, or touch/trackpad behavior changes.

[2026-04-28] V3.1.0-touch-trackpad-interaction-fix
- Improved desktop touch-screen and trackpad interaction behavior.
- Added Leaflet map options for smoother fractional zoom and less aggressive wheel/trackpad zoom.
- Added touch/pointer event support for new-domain drawing, domain dragging, and resize handles.
- Added touch-action and overscroll-behavior CSS so the browser does not steal map gestures during domain drawing.
- Enlarged domain handles on coarse-pointer screens.
- Mobile/touch-phone layout remains outside the supported target; this patch is for desktop touch screens and trackpads.
- No namelist, registry, catalog, WPS export, or namelist.input export logic changes.

[2026-04-28] V3.1.0-documentation-link-style-fix
- Fixed namelist.input Documentation tab link rendering.
- Moved WRF Best Practices (WPS) and WRF Best Practices (WRF) into the same Bootstrap list-group as the other documentation links.
- Added rel="noopener noreferrer" to external documentation links.
- Removed an empty duplicate best-practices link in the About/reference list.
- No namelist, registry, map, export, or runtime behavior changes.

[2026-04-30] V3.1.0-docs-section-rebuild
- Rebuilt docs/ from the consolidated documentation set.
- Preserved original source documentation under docs/originals/.
- Preserved the original WRF GUI PDF reference under docs/references/.
- Regenerated docs manifest and package documentation index.
- No namelist, registry, map, export, or runtime behavior changes.

[2026-04-28] V3.1.0-ARW context-full-catalog-merged-fixes
- Merged OBSPROC record groups into data/runtime/namelist.input.catalog.json so the existing editor panel displays them.
- Preserved data/runtime/namelist.obsproc.catalog.json as the standalone OBSPROC catalog.
- Exposed OBSPROC groups as obsproc_record1 through obsproc_record9 to avoid group-name collisions.
- Updated group index and broad catalog metadata.
- Kept everything visible with no UI filtering.
- Kept compatibility validation inactive/reference-only.
- No map, WPS export, namelist.input save/export, or browser compatibility logic changes.

[2026-04-28] V3.1.0-ARW context-full-catalog
- Added full-catalog ARW context runtime files.
- Set all namelist.input catalog entries visible with no filtering.
- Preserved prior hidden/advanced status as uiStatusOriginal.
- Kept dependency hints and compatibility metadata as reference-only metadata.
- Added OBSPROC record catalog from uploaded tutorial namelist.obsproc files.
- Added docs/V3.1.0_BETA_FULL_CATALOG.md.
- No map, WPS export, namelist save/export, or browser compatibility logic changes.

[2026-04-28] V3.0.0-desktop-browser-compatibility
- Added src/core/browser-compat.js desktop browser compatibility shim.
- Added fallbacks for Element.matches, Element.closest, NodeList.forEach, HTMLCollection.forEach, Array.from, Object.assign, CustomEvent, requestAnimationFrame, URL/webkitURL, and clipboard copy.
- Inserted compatibility shim before app-version.js and first-party application scripts.
- Added docs/DESKTOP_BROWSER_COMPATIBILITY.md.
- Target browsers: desktop Chrome, Edge, Firefox, and Safari on Windows, macOS, and Linux.
- Mobile/touch browser compatibility is intentionally excluded from this pass.
- No namelist, registry, map geometry, or export logic changes.

[2026-04-28] V3.0.0-full-wrap-lon-ui-safe
- Safely normalized WPS/editor longitude fields after repeated-world map display.
- Fixes invalid red longitude fields such as 195 or -195 while preserving wrapped map rendering.
- Rebuilt from the last working full-wrap package and preserved WRFDomain onAdd/update methods.
- No namelist.input, registry, metadata, or export behavior changes.

[2026-04-27] V3.0.0-full-wrap-merged
- Merged the full-wrap domain rendering fix into src/core/wrf-domain-wizard.js.
- Full 360-degree graticule rendering is preserved.
- Domain primary geometry shifts into the visible world copy.
- Display-only adjacent world-copy domain polygons are rendered for visual continuity.
- Corner markers, resize markers, lock marker, and selected grid lines follow the display-world shift.
- No namelist, registry, metadata, or export behavior changes.

[2026-04-27] V3.0.0-full-360-repeat-graticule
- Reworked graticule rendering so meridians and latitude lines repeat across visible 360-degree world copies.
- Longitude labels now show canonical values while being placed in the visible repeated world.
- Removed reliance on worldCopyJump for this behavior.
- Keeps the map in a full repeated 360-degree display instead of clipping the overlay to a single [-180, 180] copy.
- No namelist, registry, editor, or export behavior changes.

[2026-04-27] V3.0.0-domain-world-copies
- Added visual world-copy rendering for WRF domain polygons.
- Domains now draw non-editable copies at adjacent ±360° longitude offsets when visible, matching repeated basemap behavior.
- The primary editable domain remains unchanged; copies are display-only and do not affect WPS/namelist output.
- No namelist, registry, editor, or export behavior changes.

[2026-04-27] V3.0.0-vector-world-wrap
- Deep fix for dateline/world-edge panning.
- Domain polygons, corner handles, resize handles, lock marker, and selected gridlines are shifted into the currently visible Leaflet world copy.
- This fixes the case where the basemap repeats across the world edge but WRF domain vectors stayed in only one longitude copy.
- No namelist, registry, editor, or export behavior changes.

[2026-04-27] V3.0.0-centralized-version-browser-safe
- Added src/core/app-version.js as the single public UI version source.
- Updated visible UI version labels to read from data-wrf-version-text hooks.
- Fixed browser safety by using window/globalThis instead of unsafe global references.
- Normalized active public UI version to V3.0.0.
- No domain, map, namelist, registry, or export behavior changes.

[2026-04-27] V3.0.0-leaflet-domain-drag-fix
- Fixed Leaflet SVG path error triggered while dragging or resizing domains.
- Stopped domain drag/resize mouse events from bubbling into Leaflet path handlers.
- Added null guards for drag/resize contexts.
- Deferred online-to-offline basemap fallback switching until active pointer/map interactions finish.
- No registry, namelist editor, metadata, or export behavior changes.

[2026-04-27] V3.0.0-registry-metadata-rebuild

Scope:
- Full V3.0.0 rebuild from the latest working V2 line.
- Stable V2.0.0.0 renamed package remains untouched.
- Add Registry metadata as reference and discovery layer.
- Keep user control as the governing design rule.

Changed / added:
- README.md
- index.html
- src/namelist/namelist-runtime-engine.js
- src/namelist/namelist-input-editor.js
- src/tools/wps-tools.js
- data/runtime/namelist.registry.merged.v3.json
- data/runtime/namelist.registry.group_index.v3.json
- data/runtime/namelist.input.catalog.json metadata annotations
- data/registry/*
- docs/REGISTRY_METADATA_AUDIT_V3.0.0.md
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Registry audit:
- Source registry files: 40
- Parsed registry records: 11262
- Parsed rconfig records: 2075
- Unique namelist variables: 1877
- Groups: 47
- Potential conflicts retained for review: 19

Behavior policy:
- No compatibility validation.
- No forced auto-fixes.
- Required-field save warning remains active.
- Suggested starting values remain user-editable.
- Registry metadata is additive and non-enforcing.

[2026-04-27] V2.0.3-save-warning-before-export

Scope:
- Fix save-warning order and malformed blank-array export text.
- Keep the editor metadata-driven and user-controlled.
- Keep compatibility validation inactive.

Changed files:
- index.html
- README.md
- src/namelist/namelist-input-editor.js
- src/namelist/namelist-runtime-engine.js
- src/tools/wps-tools.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Behavior:
- Save checks required blank fields before opening the export modal.
- Users can cancel and return to the editor before export text is displayed.
- Users can continue intentionally if they want to export a partial configuration.
- Array fields with any blank entry are omitted from generated namelist.input text instead of being written as comma-only values.
- Valid zero values and false logical values still export normally.

[2026-04-27] V2.0.2-required-save-warning

Scope:
- Public release rebuild for V2.0.2.
- Ensure visible UI version labels, first-party runtime version constants, README, changelog, and patch notes match V2.0.2.
- Preserve V2.0.1 radt suggestion behavior.
- Preserve save-time required-field warning behavior.
- Keep compatibility validation inactive.

Changed files:
- index.html
- README.md
- src/namelist/namelist-runtime-engine.js
- src/namelist/namelist-input-editor.js
- src/tools/wps-tools.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Behavior:
- The namelist.input editor remains metadata-driven and user-controlled.
- Required blank physics fields are not force-filled.
- On save/export, the editor warns if required values are still missing.
- Users may cancel to return to the editor or continue intentionally.
- Suggested helpers remain active:
  - domains.time_step from d01 dx using 6 × dx_km.
  - time_control.run_* from WPS start_date/end_date.
  - physics.radt from innermost active dx using 1 minute per km.

[2026-04-27] V2.0.1-radt-suggestion
- Added suggested physics.radt from the innermost active domain dx.
- Uses the WRF starting guideline radt ≈ 1 minute per km of innermost grid spacing.
- Applies the same suggested radt value across all active domains.
- Only fills radt when blank, zero/default-like, or still auto-managed by the suggestion system.
- Preserves manual user edits once radt is changed.
- Added field-level and documentation-panel metadata notes explaining the radiation timestep rule.
- Preserved V2.0.0 online-first/offline-vector fallback packaging and metadata-only editor behavior.

[2026-04-27 00:20:00 America/Chicago | 2026-04-27 05:20:00 UTC] V2.0.1-online-first-offline-vector-fallback
- Kept the normal online OpenStreetMap basemap as the default map layer.
- Added automatic fallback to a bundled lightweight Offline Vector Base Map when online tiles fail or the browser goes offline.
- Clarified that offline fallback uses local vector reference data, not downloaded or redistributed OpenStreetMap tile archives.
- Updated online/offline documentation and About text.
- Preserved V2.0.1 metadata-only editor behavior, time_step suggestion, runtime-duration suggestion, and clean artifact packaging.

[2026-04-27 00:00:00 America/Chicago | 2026-04-27 05:00:00 UTC] V2.0.1-public-online-offline-release
- Public release mapping: V2.0.1 corresponds to the stable internal V2.0.1 baseline.
- Updated user-facing version labels from internal development numbering to V2.0.1.
- Added a bundled lightweight Offline Vector Base Map fallback so domain drawing and namelist workflows remain usable when online tiles fail or network access is unavailable.
- Updated runtime paths to bundled local data folders for browser-safe packaging.
- Added cross-platform local server launch helpers for Windows, macOS, and Linux.
- Added online/offline browser compatibility documentation.
- Preserved metadata-only editor behavior, time_step suggestion, runtime-duration suggestion, and clean artifact packaging.

[2026-04-26 22:05:00 America/Chicago | 2026-04-27 03:05:00 UTC] V2.0.1-runtime-duration-suggestion

Baseline:
- WRFDomainWizard-web_v4.0.0.9_time-step-suggestion.zip

Scope:
- Add suggested runtime duration from namelist.wps timestamps.
- Preserve v4.0.0.9 time_step suggestion behavior.
- Keep compatibility validation inactive.
- Keep artifact package clean: no root *_changed_files.txt or *_file_map.txt files.

Changed files:
- index.html
  - Updated visible UI version labels to V2.0.1.
- src/namelist/namelist-runtime-engine.js
  - Updated engine version to V2.0.1-runtime-duration-suggestion.
  - Added run duration suggestion using WPS start_date/end_date timestamps.
  - Calculates run_days, run_hours, run_minutes, and run_seconds from UTC-normalized timestamp difference.
  - Enables and marks the run_* fields as suggested when populated automatically.
  - Treats run_* as a managed group: editing any run_* field preserves all manual runtime values and stops further automatic run-duration updates.
  - Compatibility rules remain disabled; catalog metadata remains available.
- src/namelist/namelist-input-editor.js
  - Added start_minute, start_second, end_minute, and end_second to the WPS-mastered snapshot sent to the runtime engine.
  - Added field-level and documentation-panel notes explaining suggested runtime behavior.
  - Updated manual-edit tracking so any run_* edit clears suggested state for the whole run_* group.
- src/tools/wps-tools.js
  - Updated WPS tools version label to V2.0.1.
- docs/CHANGELOG.txt
  - Prepended V2.0.1 release summary.
- docs/ALL_PATCH_NOTES.txt
  - Prepended this detailed patch entry.

Behavior:
- If namelist.wps start_date and end_date are available, the editor computes the elapsed duration.
- Suggested values are written to:
  - time_control.run_days
  - time_control.run_hours
  - time_control.run_minutes
  - time_control.run_seconds
- The values are suggestions, not locks.
- Manual edits are preserved once any run_* field is changed by the user.
- Existing start_* and end_* synchronization from WPS is preserved.
- v4.0.0.9 time_step suggestion from 6 × d01 dx_km is preserved.

Validation performed:
- node --check src/namelist/namelist-runtime-engine.js
- node --check src/namelist/namelist-input-editor.js
- node --check src/tools/wps-tools.js
- zip integrity check

[2026-04-26 22:35:00 America/Chicago | 2026-04-27 03:35:00 UTC] v4.0.0.9-time-step-suggestion

Scope:
- Add a metadata-only suggested time_step helper while leaving compatibility validation inactive.
- Preserve the clean v4.0.0.8 artifact state with no loose root build artifacts.

Changed files:
- index.html
  - Updated visible UI version labels to v4.0.0.9.
- src/namelist/namelist-runtime-engine.js
  - Updated engine version to v4.0.0.9-time-step-suggestion.
  - Added suggested time_step calculation from d01 dx using time_step = round(6 × dx_m / 1000).
  - Applies the suggestion only when domains.time_step is blank and has not been user-edited.
  - Stores suggestion metadata in state.suggestedFields and state.suggestionNotes.
  - Keeps compatibility validation disabled.
- src/namelist/namelist-input-editor.js
  - Marks domains.time_step as suggested when auto-filled.
  - Shows a user-facing note explaining the 6 × dx_km starting rule.
  - Records user edits so future WPS sync/open cycles do not overwrite manual time_step choices.
- src/tools/wps-tools.js
  - Updated WPS tools version label to v4.0.0.9.
- docs/ALL_PATCH_NOTES.txt
  - Added this detailed patch entry.
- docs/CHANGELOG.txt
  - Added this release summary entry.

Behavioral intent:
- Use d01 / coarsest dx as the time_step suggestion source.
- Fill domains.time_step only if blank.
- Treat the value as a suggested starting point, not a locked or enforced compatibility rule.
- Preserve user edits once the user manually changes the field.

Not changed:
- data/raw/*
- data/runtime/*
- styles/*
- vendor/*
- examples/*
- active compatibility validation remains removed/inactive

Validation performed:
- node --check src/namelist/namelist-runtime-engine.js
- node --check src/namelist/namelist-input-editor.js
- zip integrity check

[2026-04-26 22:10:00 America/Chicago | 2026-04-27 03:10:00 UTC] v4.0.0.8-clean-artifact-removal
Release target:
- v4.0.0.8-clean-artifact-removal

Scope:
- Clean package artifact only.
- No source code, data, CSS, vendor, examples, or runtime behavior changes.
- Consolidate root build lineage artifacts into docs/ALL_PATCH_NOTES.txt and docs/CHANGELOG.txt, then remove those loose root artifacts from the shipped zip.

Files changed:
- docs/ALL_PATCH_NOTES.txt
- docs/CHANGELOG.txt

Root files removed from shipped zip:
- WRFDomainWizard-web_v4.0.0.0_namelist-floating-scroll-icons_changed_files.txt
- WRFDomainWizard-web_v4.0.0.0_namelist-pdf-defaults_changed_files.txt
- WRFDomainWizard-web_v4.0.0.0_namelist-pdf-defaults_file_map.txt
- WRFDomainWizard-web_v4.0.0.1_runtime-engine-foundation_changed_files.txt
- WRFDomainWizard-web_v4.0.0.1_runtime-engine-foundation_file_map.txt
- WRFDomainWizard-web_v4.0.0.2_export-comma-serializer_changed_files.txt
- WRFDomainWizard-web_v4.0.0.2_export-comma-serializer_file_map.txt
- WRFDomainWizard-web_v4.0.0.4_auto-fix-system_changed_files.txt
- WRFDomainWizard-web_v4.0.0.4_auto-fix-system_file_map.txt
- WRFDomainWizard-web_v4.0.0.5_required-field-highlighting_changed_files.txt
- WRFDomainWizard-web_v4.0.0.5_required-field-highlighting_file_map.txt
- WRFDomainWizard-web_v4.0.0.6_metadata-only-editor_changed_files.txt
- WRFDomainWizard-web_v4.0.0.6_metadata-only-editor_file_map.txt
- WRFDomainWizard-web_v4.0.0.7_docs-normalization_changed_files.txt
- WRFDomainWizard-web_v4.0.0.7_docs-normalization_file_map.txt

Change summary:
- Removed loose root *_changed_files.txt and *_file_map.txt build artifacts from the distributable package.
- Preserved their relevant lineage information inside the consolidated patch history and changelog.
- Left the v4.0.0.6 metadata-only editor runtime behavior intact.
- Left the v4.0.0.7 documentation-normalized history intact.

[2026-04-26 21:55:00 America/Chicago | 2026-04-27 02:55:00 UTC] v4.0.0.7-docs-normalization
Release target:
- v4.0.0.7-docs-normalization

Scope:
- Documentation normalization only.
- No code, data, CSS, HTML, vendor, example, or runtime behavior changes.

Files changed:
- docs/ALL_PATCH_NOTES.txt
- docs/CHANGELOG.txt

Files removed from docs after their contents were merged here:
- docs/AUTO_FIX_SYSTEM_v4.0.0.4.txt
- docs/REQUIRED_FIELD_HIGHLIGHTING_v4.0.0.5.txt
- docs/COMPATIBILITY_LAYER_REMOVED_v4.0.0.6.txt

Files kept at repository root as lineage artifacts:
- *_changed_files.txt
- *_file_map.txt

Change summary:
- Consolidated version-specific loose patch documentation into docs/ALL_PATCH_NOTES.txt and docs/CHANGELOG.txt.
- Preserved the changed-files and file-map lineage files at the repository root.
- Left the v4.0.0.6 metadata-only editor code state untouched.

[2026-04-26 21:37:00 America/Chicago | 2026-04-27 02:37:00 UTC] v4.0.0.6-metadata-only-editor
Release target:
- v4.0.0.6-metadata-only-editor

Scope:
- Remove active compatibility validation from the namelist.input editor.
- Preserve user access to all metadata, descriptions, defaults, sources, subsections, and options.

Files rebuilt:
- index.html
- src/namelist/namelist-runtime-engine.js
- src/namelist/namelist-input-editor.js
- src/tools/wps-tools.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Change summary:
- Disabled active compatibility validation.
- Disabled auto-fix actions.
- Hid the compatibility colors toggle.
- Removed the compatibility summary panel from the editor render path.
- Kept all catalog metadata and user-selectable namelist options available.
- Preserved runtime-engine seeding, WPS overlay, and export comma serializer behavior.

Merged source note:
WRF Config Studio v4.0.0.6 metadata-only namelist editor

Purpose
-------
This patch removes the active compatibility layer introduced in v4.0.0.3-v4.0.0.5.
The namelist.input editor now keeps metadata, descriptions, defaults, sources,
subsections, and all selectable options available to the user without generating
compatibility errors, warnings, auto-fix actions, or row highlights.

Runtime behavior
----------------
- Compatibility validation returns no active issues.
- Auto-fix actions are disabled.
- The compatibility summary panel is hidden.
- The compatibility color toggle is hidden.
- Existing metadata files remain packaged for user reference and future work.
- The v4.0.0.2 comma serializer behavior is preserved.
- The v4.0.0.1 runtime-engine default seeding and WPS overlay behavior are preserved.
- Blank Users Guide default fields still start blank, but this build does not raise
  compatibility-style errors for them.

Files changed
-------------
- index.html
- src/namelist/namelist-runtime-engine.js
- src/namelist/namelist-input-editor.js
- src/tools/wps-tools.js

Future compatibility work
-------------------------
Compatibility validation should return in a later branch only after the rule runner,
field targeting, refresh cycle, and user workflow have been fully isolated and tested.

[2026-04-26 21:20:00 America/Chicago | 2026-04-27 02:20:00 UTC] v4.0.0.5-required-field-highlighting
Release target:
- v4.0.0.5-required-field-highlighting

Scope:
- Improve visual feedback for blank required fields and max_dom structure issues.

Files rebuilt:
- index.html
- src/namelist/namelist-runtime-engine.js
- src/namelist/namelist-input-editor.js
- src/tools/wps-tools.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Change summary:
- Expanded wildcard required-blank issues into exact row-level issues so blank required fields light up in the editor.
- Expanded wildcard max_dom structure issues into exact row-level issues.
- Kept the summary panel concise by filtering rowOnly issues out of the top compatibility summary.
- Updated UI version labels to v4.0.0.5.

Merged source note:
WRF Config Studio v4.0.0.5 required-field highlighting patch

Problem fixed:
- v4.0.0.4 correctly reported REQ-BLANK-001 in the Compatibility engine summary, but the issue used fields:["*"].
- Wildcard summary issues are not enough for the row renderer to know which exact controls should be highlighted.

Patch:
- namelist-runtime-engine.js now expands REQ-BLANK-001 into row-only field-level issues:
  - REQ-BLANK-001:<field.key>
  - fields:[<field.key>]
  - rowOnly:true
- STRUCT-ENTRY-001 also emits row-only field-level issues for exact max_dom length targets.
- The compatibility summary panel still shows the high-level summary issues only.
- Individual rows now receive exact error issues and should render with compatibility-bad styling.

Preserved:
- v4.0.0.1 runtime engine foundation
- v4.0.0.2 export comma serializer
- v4.0.0.3 compatibility rules
- v4.0.0.4 auto-fix system

[2026-04-26 21:05:00 America/Chicago | 2026-04-27 02:05:00 UTC] v4.0.0.4-auto-fix-system
Release target:
- v4.0.0.4-auto-fix-system

Scope:
- Add user-directed auto-fix hooks to the temporary compatibility layer.

Files rebuilt:
- index.html
- src/namelist/namelist-runtime-engine.js
- src/namelist/namelist-input-editor.js
- src/tools/wps-tools.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Change summary:
- Upgraded the runtime engine version to v4.0.0.4-auto-fix-system.
- Added a compatibility rule registry.
- Added validate() issue generation.
- Added applyFix(issueId) for user-directed fixes.
- Added getRules() for rule inspection.
- Added compatibility issue summary panel, field-level issue display, and Apply Fix button wiring.
- Preserved v4.0.0.2 export comma behavior and v4 runtime-engine startup seeding behavior.

Merged source note:
WRF Config Studio v4.0.0.4 auto-fix system

Build target:
- v4.0.0.4-auto-fix-system

Baseline:
- Built on top of the current v4 runtime-engine/export-comma mainstate.
- Preserves the v4.0.0.2 trailing-comma serializer behavior.
- Keeps fixes user-directed: the engine suggests fixes, but does not silently change values.

Runtime engine additions:
- Added compatibility rule metadata: id, type, category, fields, message, fixable, and fixLabel.
- Added engine.validate() to emit normalized issues.
- Added engine.applyFix(issueId) to apply a specific suggested fix.
- Added engine.getRules() for debugging and handoff inspection.

Auto-fix rules included:
- CU-DX-001: dx >= 10000 and cu_physics = 0 -> set cu_physics = 1.
- CU-DX-002: dx <= 3000 and cu_physics > 0 -> set cu_physics = 0.
- CU-DX-003: 3000 < dx < 10000 -> optional scale-aware suggestion, set cu_physics = 3.
- PBL-KM-001: PBL enabled with incompatible km_opt -> set km_opt = 4.
- PBL-KM-002: LES-style km_opt with PBL enabled -> set km_opt = 4.
- DIFF-SFS-001: sfs_opt active without diff_opt=2 and km_opt=2/3 -> set sfs_opt = 0.
- STRUCT-MAXDOM-001: max_dom invalid -> set max_dom = 1.
- STRUCT-ENTRY-001: max_dom array length mismatch -> reconcile array lengths.
- FIRE-001: fire enabled warning -> set ifire = 0.

Rules intentionally not auto-fixed:
- REQ-BLANK-001: required blank fields still require a user choice.
- TIME-RUN-001: informational only.
- HVC-001: informational only.

Editor integration:
- The compatibility panel appears when the compatibility display toggle is enabled.
- Issues show an Apply Fix button only when the engine provides a safe fix payload.
- Field-level issue summaries are displayed alongside the affected fields.
- Row/field display remains presentation-only. Rule decisions live in namelist-runtime-engine.js.

[2026-04-26 20:55:00 America/Chicago | 2026-04-27 01:55:00 UTC] v4.0.0.3-runtime-engine-compatibility
Release target:
- v4.0.0.3-runtime-engine-compatibility

Scope:
- Experimental compatibility validation layer in the runtime engine.

Files rebuilt:
- index.html
- src/namelist/namelist-runtime-engine.js
- src/namelist/namelist-input-editor.js
- src/namelist/row_highlight.js
- src/tools/wps-tools.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Change summary:
- Added initial runtime compatibility rule evaluation.
- Added cumulus/grid-spacing warnings and errors.
- Added PBL/diffusion/km_opt checks.
- Added structure checks for max_dom entry counts.
- Added required blank-field checks.
- Added time-control and hybrid-coordinate informational checks.
- Kept the layer detection-only at this stage, with no automatic user input modification.

Status note:
- This compatibility layer was later disabled in v4.0.0.6 because it introduced more editor friction than benefit.
- The raw compatibility metadata remains available for future use, but no active validation runs in v4.0.0.6 or v4.0.0.7.

[2026-04-26 20:48:00 America/Chicago | 2026-04-27 01:48:00 UTC] v4.0.0.2-export-comma-serializer
Release target:
- v4.0.0.2-export-comma-serializer

Scope:
- Fix namelist.input save/export formatting.

Files rebuilt:
- index.html
- src/namelist/namelist-input-editor.js
- src/namelist/namelist-runtime-engine.js
- src/tools/wps-tools.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Change summary:
- Patched the namelist.input save/export serializer so every emitted selected assignment line ends with a trailing comma.
- Blank selected fields still do not export until a value is provided, preserving the v4.0.0.1 blank-default behavior.
- Preserved v4.0.0.1 runtime-engine foundation.


[2026-04-26 20:40:00 America/Chicago | 2026-04-27 01:40:00 UTC] v4.0.0.1-runtime-engine-foundation
- Added src/namelist/namelist-runtime-engine.js as the single startup-state orchestrator for namelist.input defaults, max_dom array expansion, and WPS-mastered overlays.
- Updated index.html to load the runtime engine between row_highlight.js and namelist-input-editor.js.
- Updated namelist-input-editor.js so performStartupSeeding(), initializeState(), reconcileArrayLengths(), and applyWpsMasteredDomainValues() delegate to the engine when available, while preserving the legacy fallback path.
- Updated visible UI version labels from v4.0.0.0 to v4.0.0.1.
- Updated WPS tools version constant to v4.0.0.1.
- Preserved uploaded v4.0.0.0 zip as the main-state baseline and made this a narrow additive patch.

[2026-04-26 09:47:48 America/Chicago | 2026-04-26 14:47:48 UTC] SAVE-DIALOG ISOLATION AND INDEX FIX REBUILD
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input save-dialog isolation
- duplicate ID cleanup in index.html
- close/reopen state persistence

Files rebuilt:
- index.html
- src/namelist/namelist-input-editor.js
- src/core/wrf-domain-wizard.js
- src/tools/wps-tools.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Change summary:
- Removed duplicate generic modal button IDs by renaming WPS and legacy namelist dialog controls.
- Rebuilt namelist.input save flow to queue the save dialog after the editor modal hides, then restore the editor when the save dialog closes.
- Added capture/restore logic for current editor selection and focused field.

[2026-04-25 22:26:11 America/Chicago | 2026-04-26 03:26:11 UTC] CONDENSED RUNTIME CATALOG REBUILD
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- runtime file consolidation
- namelist editor startup loading
- no change to stable WPS editor behavior

Files rebuilt:
- data/runtime/namelist.input.catalog.json
- src/namelist/namelist-input-editor.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Added a single condensed runtime catalog for the namelist editor.
- Startup now prefers the condensed catalog instead of separately loading multiple runtime metadata files.
- Preserved fallback multi-file loading for safety, but reduced the normal runtime file fan-out.

[2026-04-25 22:15:49 America/Chicago | 2026-04-26 03:15:49 UTC] SEMANTICS-WIRED STARTUP REBUILD
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- startup default resolution
- semantics file integration
- blank default preservation

Files rebuilt:
- src/namelist/namelist-input-editor.js
- data/runtime/namelist.input.metadata_semantics.json
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Wired metadata semantics into the runtime load path.
- Rebuilt catalog default selection so semantically blank Users Guide defaults do not fall through to registry zero.
- Preserved blank dropdown options and blank values during startup seeding and array reconciliation.

[2026-04-25 22:05:30 America/Chicago | 2026-04-26 03:05:30 UTC] BLANK SELECTION OPTION REBUILD
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- selection-field blank option rendering
- logical-field blank option rendering
- blank default preservation

Files rebuilt:
- src/namelist/namelist-input-editor.js
- data/runtime/namelist.input.metadata_semantics.json
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Added explicit blank options to selection and logical dropdown fields.
- Updated scalar parsing so blank dropdown values remain unset.
- Preserved the metadata rule that blank defaults remain blank in the UI.

[2026-04-25 20:59:20 America/Chicago | 2026-04-26 01:59:20 UTC] METADATA SEMANTICS REBUILD
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- metadata semantics
- blank-default handling
- recommendation/help scaffolding
- no workflow changes in this pass

Files rebuilt:
- data/runtime/namelist.input.source_priority.json
- data/runtime/namelist.input.metadata_semantics.json
- index.html
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Added a clean semantics layer to distinguish blank Users Guide cells from real defaults.
- Recorded that blank Users Guide defaults mean no published default, not zero.
- Preserved option-menu and help metadata semantics independently from default-value semantics.
- Added initial semantics scaffolding for recommendation-heavy dynamics and physics fields and user-required ocean profile fields.

[2026-04-25 20:54:19 America/Chicago | 2026-04-26 01:54:19 UTC] ABOUT SECTION LINK UPDATE
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- About section documentation links only

Files rebuilt:
- index.html
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Change summary:
- Added the WRF namelist.input best-practices link under the existing namelist.wps best-practices link in the About section.
- No workflow or editor-state behavior changed in this pass.

[2026-04-25 20:51:12 America/Chicago | 2026-04-26 01:51:12 UTC] STABLE CORE STATE REBUILD
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- WPS feeder restoration
- Lambert mode startup default
- polar projection field visibility
- preserve text-tab ordering

Files rebuilt:
- src/namelist/namelist-input-editor.js
- src/core/wrf-domain-wizard.js
- src/tools/wps-tools.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Rebuilt WPS-fed domain reading to use all existing grid rows.
- Forced Lambert parallels mode startup default back to Legacy.
- Rebuilt projection visibility logic so polar projection exposes pole_lat and pole_lon controls.
- Kept namelist.input text serialization order aligned to editor order.

[2026-04-25 20:28:03 America/Chicago | 2026-04-26 01:28:03 UTC] TEXT TAB ORDER ALIGNMENT REBUILD
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input text generation ordering
- no change to stable namelist.wps editor behavior

Files rebuilt:
- src/namelist/namelist-input-editor.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Rebuilt text generation to use the same ordered field list as the editor renderer.
- Variable serialization within each group now follows the visible editor ordering rules instead of raw catalog iteration order.

[2026-04-25 20:25:55 America/Chicago | 2026-04-26 01:25:55 UTC] CLEAN REBUILD ARRAY RENDER
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input large-array rendering
- subsection state persistence
- no change to stable namelist.wps editor behavior

Files rebuilt:
- src/namelist/namelist-input-editor.js
- styles/wrf-domain-wizard.css
- styles/wrf-domain-wizard.min.css
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Rebuilt the namelist input renderer around compact editing for large non-domain repeated-entry fields.
- Added dedicated scalar and compact-array parsing helpers.
- Preserved domain-array rendering for max_dom and max_domains fields only.
- Maintained subsection expanded-state persistence during compatibility-driven rerenders.

[2026-04-25 20:21:20 America/Chicago | 2026-04-26 01:21:20 UTC] SUBSECTION STATE AND ENTRY LABEL FIX
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- subsection collapse persistence
- repeated-entry label clarity
- no change to stable namelist.wps editor behavior

Files changed:
- src/namelist/namelist-input-editor.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Added subsectionExpanded state tracking keyed by group and subsection.
- Bound subsection <details> toggle events so compatibility rerenders preserve open/closed state.
- Restricted d01/d02 style labels to true domain-entry fields only.
- Non-domain repeated-entry variables now display neutral or entry-type-specific labels instead of misleading domain labels.

[2026-04-25 20:10:01 America/Chicago | 2026-04-26 01:10:01 UTC] USERS GUIDE SUBSECTION ORDER REBUILD
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input subsection ordering
- subsection visual hierarchy
- no change to stable namelist.wps sidebar behavior

Files changed:
- src/namelist/namelist-input-editor.js
- styles/wrf-domain-wizard.css
- styles/wrf-domain-wizard.min.css
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Added subsection order metadata from the subsection map into merged catalog fields.
- Updated field render sorting to group by subsection order before enabled/core/explicit ordering.
- Styled subsection blocks with indentation and a subtle left border to separate them from main group headers.

[2026-04-25 20:04:44 America/Chicago | 2026-04-26 01:04:44 UTC] CLEAN DEFAULT SEEDING REBUILD
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input startup seeding
- default source fallback resolution
- clean code organization inside the namelist editor runtime

Files changed:
- src/namelist/namelist-input-editor.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Reorganized default seeding into dedicated editor methods instead of implicit inline initialization.
- Added usable-default checks so null Users Guide defaults fall through to README or Registry values.
- Startup now performs a clear sequence: seed defaults, reconcile array lengths, overlay WPS-mastered values, render.

Behavior note:
- namelist.wps editor behavior from v3.2.2.4-ARW context-grid-panel-visibility-fix is intentionally preserved.

[2026-04-25 19:55:21 America/Chicago | 2026-04-26 00:55:21 UTC] GRID PANEL VISIBILITY FIX
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.wps sidebar grid display
- layout-only fix

Files changed:
- styles/wrf-domain-wizard.css
- styles/wrf-domain-wizard.min.css
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Change summary:
- Added layout spacing so the lower action buttons do not crowd out the Grids section.
- Set the `#grids` block back to visible flow layout instead of inner auto scrolling.
- Added a small top margin for the first visible grid panel.

[2026-04-25 19:51:27 America/Chicago | 2026-04-26 00:51:27 UTC] USERS GUIDE DEFAULT SEEDING RUNTIME UPDATE
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input startup seeding
- merged metadata default precedence
- no regression to WPS-mastered overlay intent

Files changed:
- src/namelist/namelist-input-editor.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Reworked merged catalog default selection so startup values prefer Users Guide defaults first.
- Added source-priority JSON consumption in the namelist editor loader.
- Kept WPS-mastered runtime overlay after seeding so WPS-derived fields still replace seeded defaults where applicable.

[2026-04-25 19:43:35 America/Chicago | 2026-04-26 00:43:35 UTC] SOURCE PRIORITY BASELINE ARTIFACT
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- source hierarchy artifact
- core-group precedence seed
- no deep runtime rewiring yet

Files added:
- data/runtime/namelist.input.source_priority.json
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Behavior notes:
- This pass adds the source-priority baseline artifact requested for the next merge layer.
- The artifact is seeded for the five core groups only.
- Runtime behavior from v3.2.2.1 is preserved; the editor is not yet fully rewired to consume this file automatically.

[2026-04-25 12:00:33 America/Chicago | 2026-04-25 17:00:33 UTC] STRUCTURE BASELINE NAMELIST RUNTIME FIX
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- structure-baseline runtime correction
- namelist.input editor launch path

Files changed:
- index.html
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Root cause:
- The structure-baseline rebuild moved the namelist runtime files into src/namelist/,
  but index.html only loaded namelist-input-editor.js.
- The editor still depends on namelist-input-data.js and row_highlight.js at runtime.

Fix:
- Restored loading of src/namelist/namelist-input-data.js
- Restored loading of src/namelist/row_highlight.js
- Kept the new structure layout intact

[2026-04-25 11:58:15 America/Chicago | 2026-04-25 16:58:15 UTC] STRUCTURE BASELINE REBUILD
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- project organization
- vendor/app/data/docs separation
- no intended feature regression from the prior ARW context

Files and layout changes:
- lib/* moved to vendor/css and vendor/js
- webfonts/* moved to vendor/webfonts
- js/* first-party files moved under src/
- css/* first-party files moved under styles/
- json/* reorganized into data/raw and data/runtime
- reports and handoff notes consolidated under docs/

Behavior notes:
- Runtime behavior is preserved from v3.2.1.6-ARW context as closely as possible.
- This pass is intended to reduce future regression risk by clarifying file ownership.
- Planned follow-up extraction targets are documented in docs/MIGRATION_CHECKLIST.md and src/*/README.md scaffold files.

[2026-04-25 10:35:32 America/Chicago | 2026-04-25 15:35:32 UTC] DEEP HELPER TOOLTIP WIRING FIX
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- WPS helper tooltip internals
- no export logic changes

Files touched:
- js/wrf-domain-wizard.js
- css/wrf-domain-wizard.css
- css/wrf-domain-wizard.min.css
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Rebuilt helper label HTML so geog_data_path uses the same data-wps-help label path as the other helper fields.
- Strengthened tooltip refresh logic to strip tooltip attributes from all non-label descendants in the helper block before rebinding only the labels.
- This removes the remaining native/browser-style tooltip fallback that was still appearing for geog_data_path.

[2026-04-25 10:32:21 America/Chicago | 2026-04-25 15:32:21 UTC] FULL HELPER TOOLTIP NORMALIZATION
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- WPS helper tooltip consistency
- no export logic changes

Files touched:
- js/wrf-domain-wizard.js
- css/wrf-domain-wizard.css
- css/wrf-domain-wizard.min.css
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Rebuilt WPS helper tooltip handling around data-wps-help values instead of relying on raw title attributes.
- Explicitly stripped title attributes from helper inputs and labels before binding Bootstrap tooltips.
- Applied one shared tooltip template so every helper label, including geog_data_path, matches the same dark styled hover box.

[2026-04-25 10:29:05 America/Chicago | 2026-04-25 15:29:05 UTC] GEOG_DATA_PATH TOOLTIP CONSISTENCY FIX
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- WPS helper label tooltip consistency
- no export logic changes

Files touched:
- js/wrf-domain-wizard.js
- css/wrf-domain-wizard.css
- css/wrf-domain-wizard.min.css
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Normalized geog_data_path helper tooltip handling to match the other WPS helper labels.
- Converted helper label tooltip text to Bootstrap-managed tooltip content to avoid inconsistent native browser title popups.

[2026-04-25 10:26:26 America/Chicago | 2026-04-25 15:26:26 UTC] HELPER TOOLTIP TARGETING REFINEMENT
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- WPS helper tooltip behavior
- no export logic changes

Files touched:
- js/wrf-domain-wizard.js
- css/wrf-domain-wizard.css
- css/wrf-domain-wizard.min.css
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Removed tooltip targets from the WPS helper input controls.
- Kept tooltip targets only on the helper field labels.
- Adjusted helper tooltip placement to reduce overlap with the field values.

[2026-04-25 10:22:34 America/Chicago | 2026-04-25 15:22:34 UTC] FULL REBUILD SAVE FIX
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- seamless integrated rebuild
- WPS save/export stability

Files touched:
- js/wrf-domain-wizard.js
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Reworked the dx/dy expansion helper in the WPS export flow so it reads from its own local #wps-form reference.
- Eliminated the out-of-scope form dependency that caused Save to fail with ReferenceError: form is not defined.
- Preserved the full-domain dx/dy export behavior and helper tooltip additions in a seamless rebuild.

[2026-04-25 10:20:24 America/Chicago | 2026-04-25 15:20:24 UTC] WPS DX/DY EXPANSION AND HELPER TOOLTIPS
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- WPS export usability
- helper-field tooltip guidance

Files touched:
- js/wrf-domain-wizard.js
- css/wrf-domain-wizard.css
- css/wrf-domain-wizard.min.css
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Expanded exported geogrid dx/dy to full-domain arrays derived from the live parent_grid_ratio chain.
- Added help tooltips for:
  - start_date
  - end_date
  - interval_seconds
  - geog_data_path
- Tooltip content now explains date-string format, interval_seconds meaning, and example geog-data paths.

[2026-04-25 10:13:40 America/Chicago | 2026-04-25 15:13:40 UTC] INTEGRATED BETA BUILD BASELINE
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- build consolidation
- integrated baseline packaging
- no new feature delta beyond the carried-forward v3.2.0.x ARW context fixes

Files touched:
- package-wide version strings
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Promoted the accumulated v3.2.0.x ARW context patch series into a single integrated build baseline: v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- This release is intended to behave like a seamless build rather than a visible stack of patch-level ARW contexts.
- Carried forward the stabilized ARW context work across:
  - namelist.input ordering and save/export behavior
  - WPS helper-field editing and export patching
  - WPS-to-namelist.input propagation
  - responsive editor layout improvements
  - local bundled test/doc references

Notes:
- This is still a ARW context release.
- Functionality matches the latest stabilized v3.2.0.12-ARW context state, but with a new integrated release identity.

[2026-04-25 10:12:06 America/Chicago | 2026-04-25 15:12:06 UTC] NAMELIST.WPS SAVE RUNTIME FIX
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- WPS save/export workflow reliability
- no UI layout changes

Files touched:
- js/wrf-domain-wizard.js
- index.html
- js/wps-tools.js
- js/namelist-input-editor.js
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Fixed a ReferenceError in patchWpsNamelistTextWithCustomFields where intervalSeconds was used during WPS Save without being declared in that function scope.
- Added a safer guard so interval_seconds replacement only runs when a helper value actually exists.

[2026-04-25 10:10:50 America/Chicago | 2026-04-25 15:10:50 UTC] NAMELIST.INPUT SAVE BUTTON FIX
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input export workflow reliability
- no layout or propagation changes

Files touched:
- js/namelist-input-editor.js
- index.html
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Ensured the namelist.input export modal exists in the shipped HTML.
- Rebound the Save button with a dedicated handler namespace.
- Changed Save to call modal('show') explicitly when the export dialog is present.
- Added a direct browser-download fallback when the modal cannot be opened.
- Added a Blob-download fallback even if saveAs is unavailable.

[2026-04-25 08:42:59 America/Chicago | 2026-04-25 13:42:59 UTC] EXAMPLE-ORDER SECTION SORTING
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input editor group ordering
- no propagation or projection changes

Files touched:
- js/namelist-input-editor.js
- index.html
- js/wps-tools.js
- js/wrf-domain-wizard.js
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Added explicit section ordering to the namelist.input editor.
- The editor render order and the group jump control now follow the example namelist section flow for the major workflow groups.
- Explicit section order now prefers:
  &time_control
  &domains
  &physics
  &fdda
  &dynamics
  &bdy_control
  &grib2
  &namelist_quilt
- Existing explicit variable ordering inside core groups remains in place.

[2026-04-25 08:31:31 America/Chicago | 2026-04-25 13:31:31 UTC] WPS DATE/TIME PROPAGATION FIX
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- WPS helper-field propagation into namelist.input
- no projection changes

Files touched:
- js/namelist-input-editor.js
- js/wrf-domain-wizard.js
- index.html
- js/wps-tools.js
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Extended live WPS propagation into namelist.input for time-control date components.
- start_date now feeds start_year, start_month, start_day, and start_hour across all active domains.
- end_date now feeds end_year, end_month, end_day, and end_hour across all active domains.
- Added a visible interval_seconds helper field in the WPS share/geogrid helper block and synced it into namelist.input time_control.interval_seconds.
- Preserved existing WPS-derived propagation for max_dom, dx/dy, grid_id, parent structure, specified, and nested.

[2026-04-25 08:25:01 America/Chicago | 2026-04-25 13:25:01 UTC] WRAP REGRESSION CORRECTION
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input modal layout correction
- CSS-only row layout adjustment

Files touched:
- css/wrf-domain-wizard.css
- css/wrf-domain-wizard.min.css
- index.html
- js/wps-tools.js
- js/namelist-input-editor.js
- js/wrf-domain-wizard.js
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Replaced the previous broad flex-wrap behavior with a grid-based field row layout.
- Kept description and compatibility text wrapping, but forced those blocks to stack below the main controls.
- Prevented wide description text from pushing value controls into awkward horizontal layouts.
- Tightened multi-domain input row sizing so repeated domain fields remain readable.

[2026-04-25 08:22:25 America/Chicago | 2026-04-25 13:22:25 UTC] RESPONSIVE WRAPPING FIX
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input modal responsive layout polish
- CSS-only wrapping and flow adjustments

Files touched:
- css/wrf-domain-wizard.css
- css/wrf-domain-wizard.min.css
- index.html
- js/wps-tools.js
- js/namelist-input-editor.js
- js/wrf-domain-wizard.js
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Enabled text wrapping for namelist.input descriptions, compatibility messages, and documentation panel content.
- Prevented flex children from forcing overflow by allowing shrink-to-fit behavior with min-width: 0 where appropriate.
- Added responsive row flow so label/value blocks stack more cleanly as the modal narrows.
- Added small-screen wrapping for max_dom multi-value rows so domain labels and inputs remain readable.

[2026-04-25 07:57:47 America/Chicago | 2026-04-25 12:57:47 UTC] NAMELIST.INPUT STARTUP REGRESSION FIX
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input editor runtime fix
- no domain math changes

Files touched:
- js/namelist-input-editor.js
- index.html
- js/wps-tools.js
- js/wrf-domain-wizard.js
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Fixed a runtime regression where EXPLICIT_FIELD_ORDER was referenced during field rendering but was not defined in the shipped bundle.
- This regression prevented the namelist.input editor from opening even when served correctly over localhost.
- Preserved the intended example-order sorting behavior by restoring the missing constant.

[2026-04-25 07:51:02 America/Chicago | 2026-04-25 12:51:02 UTC] WPS DATE/PATH EDITING AND EXAMPLE-ORDER FIELD SORT
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- WPS editor UX
- namelist.input editor ordering and synchronization
- no projection changes

Files touched:
- js/wrf-domain-wizard.js
- js/namelist-input-editor.js
- css/wrf-domain-wizard.css
- js/wps-tools.js
- index.html
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Added helper inputs in the WPS editor for:
  - share.start_date
  - share.end_date
  - geogrid.geog_data_path
- WPS export dialog now uses those helper values to patch generated namelist.wps text.
- time_control.interval_seconds in namelist.input now syncs from the live WPS interval_seconds field.
- Added explicit per-group core variable ordering so enabled variables follow the example namelist sequence.

Behavior intentionally preserved:
- WPS-derived domain synchronization for max_dom, grid_id, dx/dy, parent structure, specified, and nested
- namelist.input save dialog workflow
- enabled-first ordering
- default-enabled core variable whitelist

[2026-04-25 07:41:16 America/Chicago | 2026-04-25 12:41:16 UTC] NAME_LIST INPUT UI POLISH PASS
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input editor visual polish
- export dialog polish
- no domain math or projection changes

Files touched:
- index.html
- css/wrf-domain-wizard.css
- js/wps-tools.js
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Polished namelist.input modal framing and tab presentation.
- Added sticky toolbar behavior for the namelist.input editor.
- Improved variable group card styling and spacing.
- Improved hover/focus states for editor inputs and save dialog textarea.
- Improved subsection presentation and summary readability.
- Clarified export button tooltip wording for the namelist.input Save workflow.

Behavior intentionally preserved:
- save dialog workflow from v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix
- enabled-first variable ordering
- WPS-derived domain synchronization
- default-enabled core variable whitelist

- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix
  - Fixed the namelist.input Save action to open a text export popup with Download and Copy controls instead of immediately downloading.
  - Fixed WPS-to-namelist.input parent_id fallback so chained nests preserve parent relationships when syncing domain values.
  - Sorted enabled namelist.input variables to the top of each group and pushed unchecked variables to the bottom.
  - Improved namelist.input readability by lowering overlay alpha and strengthening foreground text contrast.

[2026-04-25 07:25:12 America/Chicago | 2026-04-25 12:25:12 UTC] WPS-DERIVED DOMAINS AND BOUNDARY CONTROL FIX
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input editor domain synchronization refinement
- no projection or basemap changes

Files touched:
- js/namelist-input-editor.js
- js/wps-tools.js
- index.html
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Extended live namelist.wps synchronization for the editor.
- Added WPS-derived handling for:
  - domains.max_dom
  - domains.grid_id
  - domains.dx
  - domains.dy
  - domains.e_we
  - domains.e_sn
  - domains.parent_id
  - domains.i_parent_start
  - domains.j_parent_start
  - domains.parent_grid_ratio
  - domains.parent_time_step_ratio
  - bdy_control.specified
  - bdy_control.nested
- Nested dx/dy now derive from the outer-domain spacing divided by parent_grid_ratio down the nest chain.
- grid_id now derives as 1..max_dom.
- specified/nested now derive from the live WPS parent/nest structure.

Behavior intentionally preserved:
- curated default-enabled field whitelist remains active
- noah_mp remains off by default
- parent_time_step_ratio still mirrors parent_grid_ratio
- local examples/test-case references remain in the package About section

User-visible result:
- live three-domain WPS setups now populate correct max_dom, grid_id, nested dx/dy, parent fields, and specified/nested flags in the namelist.input editor
- catalog defaults no longer leak into these WPS-owned or WPS-derived fields

[2026-04-25 07:21:27 America/Chicago | 2026-04-25 12:21:27 UTC] DEFAULT-ENABLED CORE FIELD WHITELIST
Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input editor usability refinement
- no projection or basemap changes

Files touched:
- js/namelist-input-editor.js
- js/wps-tools.js
- index.html
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Added a DEFAULT_ENABLED_FIELDS whitelist for the namelist.input editor.
- Fresh editor state now enables only the requested workflow fields instead of enabling every variable in a core group.
- Requested defaults now cover:
  - selected &time_control fields
  - selected &domains fields
  - selected &physics fields
  - selected &dynamics fields
  - selected &bdy_control fields
  - selected &namelist_quilt fields
- &fdda and &grib2 remain present as groups but do not auto-enable their internal options.

Behavior intentionally preserved:
- user values remain editable
- catalog defaults still populate values when no user/live state exists
- WPS-mastered fields still sync from live namelist.wps / Domain Wizard state
- parent_time_step_ratio still mirrors parent_grid_ratio
- noah_mp remains off by default

User-visible result:
- the editor opens with the intended core workflow subset already enabled
- non-whitelisted variables in those same groups remain disabled until the user enables them
- domain geometry fields still follow the live WPS/domain setup rather than a static template

[2026-04-24 20:27:16 America/Chicago | 2026-04-25 01:27:16 UTC] STABLE MAINLINE MAINTENANCE
Release target:
- v3.1.1.0 stable mainline

Scope:
- Verified maintenance fix only
- No feature expansion
- No ARW context merge

Files touched in delivered stable package:
- js/wps-tools.js
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Problem fixed:
- Tools panel crashed during startup/render with:
  ReferenceError: disposeBootstrapTooltips is not defined
- Crash path observed in Chrome while serving locally with python -m http.server
- Failing call path:
  renderToolsPanel() -> refreshToolsPanel() -> disposeBootstrapTooltips(panel)

Fix applied:
- Restored disposeBootstrapTooltips(root) in js/wps-tools.js
- Cleanup now hides/disposes Bootstrap or jQuery tooltip instances before tools-panel rerender
- Removes orphan .tooltip DOM nodes left behind by previous renders
- Allows refreshToolsTooltips(panel) to initialize only the current tooltip-bearing controls after rerender

Behavior intentionally unchanged:
- domain geometry math
- projection calculations
- basemap/provider behavior
- stable overlay styling
- namelist.input editor data/model logic

User-visible result:
- tools panel initializes without the ReferenceError
- dynamic tooltips no longer block panel render because the helper function is present again
- tooltip lifecycle behavior matches the documented rerender cleanup rule

[2026-04-24 20:27:16 America/Chicago | 2026-04-25 01:27:16 UTC] BETA BRANCH AUDIT AND ABANDONMENT RECORD
Branch target:
- v3.2.0-ARW context-polar-map

Summary of ARW context-only work attempted:
- polar projection/background switching
- light-palette replacements for imagery-like view
- standard background-name alignment with the main display
- restore-view and switch-back handling when moving between polar and lambert recommendations
- coastline/local basemap experiments
- unified background-selection workflow across standard and polar modes
- pane-order and overlay-priority cleanup attempts

Outcome:
- ARW context branch did not reach stable-mainline rendering quality
- polar basemap remained a custom approximation rather than a true stable-equivalent basemap system
- branch was abandoned
- last stable mainline restored as the active baseline

Stable/mainline rule reaffirmed:
- Stable mainline is v3.1.1.0
- ARW Context work is not merged into stable mainline
- Future work should start from the stable package unless a new branch is intentionally created

v3.0.0
- Improved Lambert parallels mode tooltip formatting with clear spacing between each option.
- Enabled HTML rendering for the Domain Intelligence tooltip content so line breaks display correctly.
- Updated visible UI version strings to v3.0.0.

v3.0.0
- Fixed sticky black Bootstrap tooltips by changing tooltip trigger behavior from hover+focus to hover-only across the app.
- Reinitialized Bootstrap tooltips with consistent camera-style options using container=body, trigger=hover, and html=false.
- Updated wps-tools.js and core tooltip initialization paths so dynamic Domain Intelligence controls and core UI controls dismiss correctly on mouse leave.

v3.0.0
- Fixed duplicate Bootstrap tooltip instances by disposing tooltips before reinitialization across the app.
- Fixed the Lambert parallels mode hover so it uses a single tooltip source instead of stacked duplicate text.
- Kept all buttons and metadata on the same black-background, white-text tooltip system as the camera button.
- Updated visible UI version text to v3.0.0.

v3.0.0
- Removed ARW context naming from the tools layer and package file names.
- Renamed js/wps-ARW context-tools.js to js/wps-tools.js.
- Renamed css/wps-ARW context.css to css/wps-tools.css.
- Updated all internal references to the renamed tools files.
- Migrated storage keys from wrfdw.ARW context.* to wrfdw.tools.* with backward compatibility reads.
- Updated visible UI version text to v3.0.0.

v3.0.0
- Fixed remaining Domain Intelligence hover metadata so dynamically rendered controls now initialize Bootstrap tooltips after panel refresh.
- Lambert parallels mode label, dropdown, and auto-fill-on-projection-change tooltip now use the same black-background, white-text tooltip style as the camera button.
- Updated visible UI version labels to v3.0.0.

v3.0.0
- Unified hover metadata styling so all titled buttons and controls use the same black Bootstrap tooltip style as the camera button.
- Removed native-only tooltip exclusions from runtime tooltip initialization so titles render consistently across the app.
- Kept Lambert parallels mode dropdown labels as: Legacy (default), Domain-optimized, and WRF standard (30/60).
- Updated visible UI version labels to v3.0.0.

v3.0.0-ARW context2
- Fixed ARW context-page responsiveness by removing the heavy full-page MutationObserver loop from the ARW context domain-intelligence helper.
- Added supported lat-lon guidance for both regional and global modes in the ARW context projection advisor.
- Added a lat-long_global sample namelist.wps to the ARW context branch.

v3.0.0-ARW context1
- ARW Context branch only. Added WPS domain intelligence panel with projection advisor, auto-fill projection helper, nest snapping helper, and live domain-rule validation based on WPS guide projection and nesting rules.
- Separate from mainline behavior.

v2.0.5
- Added a selected-domain lock toggle on the domain edge to freeze that domain in place while allowing movement of nests inside it.
- Lock control is shown only for the currently selected domain.
- Updated visible UI version labels to v2.0.5.

v2.0.5
- Dateline handle alignment fix.
- Corner and edge resize markers now use the same unwrapped longitude space as the rendered domain polygon.
- Updated visible UI version labels to v2.0.5.


[v1.2.0]
- Reworked WPS domain interaction toward a geogrid-first model.
- Normalized longitude inputs and projection parameters before redraw.
- Added safe validation/revert for invalid domain states during drag or update.
- Disabled freeform main-grid polygon drag/resize for Lambert and polar modes; use domain parameters and center marker instead.
- Updated visible UI version strings to v1.2.0.

v1.0.0
- startup activation now follows the em_real example namelist variable list instead of enabling entire core groups
- core groups remain expanded in the UI, but only example-listed variables start toggled on
- invalid field names are filtered from the fresh namelist.input editor catalog before render/export
- blank values are skipped during export to avoid malformed namelist lines
- updated visible UI version strings to v1.0.0

v1.0.1
- added a fresh namelist.input editor module
- powered the new editor from namelist.input.registry_metadata_catalog.v1.json
- added per-variable enable toggles, text export, search, and save/copy actions
- kept the existing namelist.wps editor intact from the clean v0.9.9 build

v0.9.9
- WPS-only build: UI now exposes only namelist.wps workflow.

v0.9.8
- removed the namelist setup modal at runtime and forced direct entry into the manual full namelist editor

[2026-04-17] v0.9.7
- Added per-variable side toggles to turn namelist options on and off
- Kept the full namelist catalog editor active for manual editing across all available groups and variables

[2026-04-17] v0.9.7
Full namelist catalog exposure:
- Enabled rendering of all loaded Registry-backed groups and variables, with the core runtime groups listed first.
- Aligned export with the full catalog so non-curated variables now survive round-trip editing.
- Defaulted group startup state to collapsed so the expanded metadata footprint stays usable.

[2026-04-16 01:45] v0.9.0
Release packaging:
- Created the v0.9.0 release package from the latest stable build.
- Kept the single consolidated patch note workflow.
- Updated visible version strings to v0.9.0 across the packaged app where applicable.

[2026-04-16 01:35] v0.9.0
Hybrid_opt final UI cleanup:
- Added an explicit select-values catalog entry for dynamics/hybrid_opt.
- hybrid_opt now renders as a metadata-backed dropdown instead of a bare integer field.
- Labels now come from the registry meaning:
  0 = Original WRF coordinate
  1 = Terrain-following using hybrid formulation
  2 = Klemp cubic form with etac
- This fixes the last visible issue where hybrid_opt showed a raw "0" line and an unlabeled option list.

WRF Config Studio Patch Notes Consolidated
========================================


===== PATCH_NOTES_ALLOWED_VALUES_v0.7.4.txt =====
WRFDomainWizard Patch Notes - v0.7.4
===================================

This build enforces dropdown menus for variables with supported finite value sets.

Sources used to build dropdowns:
2. finite one_of values implied by compatibility rules
3. logical True/False mapping

Goal:
- allow only supported selections for enumerated parameters such as PBL, surface-layer, radiation, and similar scheme selectors
- avoid letting unsupported arbitrary values be selected in those fields


===== PATCH_NOTES_CLEAN_TRIGGERS_v0.8.4.txt =====
WRFDomainWizard Patch Notes - v0.8.4
===================================

This build fixes false compatibility conflicts caused by default-seeded values being treated as active triggers.

New behavior:
- A compatibility trigger is only active when the trigger variable is explicitly changed away from its default value,
  or when it is the variable currently being edited.
- Hidden default values no longer generate conflict cards or row-level conflict messages.

This specifically cleans up false conflicts for cu_physics when kfeta_trigger, thBinSize,
minDeepFreq, and minShallowFreq are present only through defaults.


===== PATCH_NOTES_COMPATIBILITY.txt =====

Included changes:
- Added compatibility evaluation and UI color outlines to js/wrf-domain-wizard.js.
- Added compatibility legend and pill styles to css/wrf-domain-wizard.css.
- Hardened JSON loading with response.ok checks.
- Reset stale namelist state when opening from namelist.wps.
- Replaced the fragile openNamelistInputAsync path with a safer implementation.

Color semantics:
- Green: current selection satisfies hard compatibility rules.
- Yellow: soft or workflow caveat, or rule cannot be fully checked inside the editor.
- Red: current selection conflicts with an active hard rule.


===== PATCH_NOTES_CURATED_EDITOR_v0.6.2.txt =====
WRFDomainWizard Patch Notes - v0.6.2
===================================


New behavior:
- The editor only renders the curated sections and curated variable lists.
- Empty sections:
  &fdda
  &grib2
  are shown as empty by design.

This applies regardless of whether the user chooses:
- Beginner – CONUS
- Beginner – Tropical
- Advanced


===== PATCH_NOTES_DEEP_DIVE_v0.8.5.txt =====
WRFDomainWizard Patch Notes - v0.8.5
===================================

This build was produced after a deep-dive review of the uploaded source JS and JSON metadata files.

Fixes included:
- compatibility trigger activation now uses explicitly stored namelist values and compares them against stored defaults
- cu_physics no longer shows ancillary trigger warnings from hidden defaulted variables like kfeta_trigger or CuP controls
- parent_grid_ratio and parent_time_step_ratio are treated as integers rather than prose-derived dropdowns
- num_land_cat is treated as an integer rather than the bogus placeholder 'set'
- bdy_control is normalized by domain role so specified/nested are not both true or both false


===== PATCH_NOTES_DEFAULTS_SEEDED_v0.5.5.txt =====
WRFDomainWizard Patch Notes - v0.5.5
===================================


New behavior:
1. Load variable definitions and default sources.
2. Build a full default namelist object using registry/readme/manual-backed defaults.
3. Expand max_dom variables to the active domain count.
4. Overlay WPS-derived domain geometry as read-only fields.
5. Render the editor from the seeded namelist object.

Result:
- The editor opens with real defaults already populated.
- Users can change non-WPS-locked variables immediately.


===== PATCH_NOTES_DOC_BACKED_UPGRADE.txt =====
Documentation-backed upgrade patch

Added after reading the full uploaded WRF User Guide chapter 3, 5, and 6 PDFs offline via text extraction.

Included upgrades:
- parent_grid_ratio recommendation warning in the WPS domain editor
  * time_step versus DX
  * parent_grid_ratio versus feedback
  * sst_update companion settings and sf_ocean_physics conflict
  * bucket_mm / bucket_J radiation compatibility
  * adaptive time stepping companion recommendations
  * coarse-grid versus convection-scale cumulus advisories
- smarter starter-template suggestion hook preserved and extended


===== PATCH_NOTES_DOMAIN_SIZE_WARNING.txt =====
Added a domain size warning in the WPS domain editor when e_we or e_sn is below 100 grid points. The warning is non-blocking and highlights the grid panel.

===== PATCH_NOTES_DROPDOWN_AUDIT_v0.7.5.txt =====
WRFDomainWizard Patch Notes - v0.7.5
===================================

This build expands dropdown coverage after an audit against the uploaded Registry, Users Guide, manual, and README-derived JSON files.

Dropdown inference now uses:
1. explicit select.values catalogs,
2. finite value sets from compatibility rules,
3. finite value patterns parsed from description text, such as:
   - set to =1 to ...
   - 1: option A 2: option B
   - -1 = inactive

Open-ended numeric fields remain editable text/number inputs.


===== PATCH_NOTES_EXPLICIT_TRIGGER_FILTERING_v0.8.3.txt =====
WRFDomainWizard Patch Notes - v0.8.3
===================================

This build fixes false compatibility conflicts caused by hidden default-only trigger variables.

Problem:
- The compatibility engine was using effective values (including defaults) when checking whether a trigger was active.
- That made hidden variables like kfeta_trigger=1 and CuP defaults such as thBinSize=1, minDeepFreq=1, and minShallowFreq=1 appear active even when the user had not set them.

Fix:
- A rule trigger now activates only when the trigger variable is explicitly set in the namelist object, or when the variable is the currently edited override.

Result:
- cu_physics and similar rows no longer show false conflicts from hidden default-only options.


===== PATCH_NOTES_FULLFIX_v0.4.3.txt =====
Rebuilt from WRFDomainWizard-web_version_display(1).zip with full-row compatibility fill and a backfilled CHANGELOG.


===== PATCH_NOTES_LOGICAL_DROPDOWNS_v0.7.9.txt =====
Logical fields now use True/False dropdowns in side-by-side multi-domain layouts.


===== PATCH_NOTES_MASTER_MANIFEST_v0.4.4.txt =====
Patched against wrf_namelist_master_manifest and wrf_namelist_master_full.
Added 22 Users Guide variables missing from the registry-driven editor path.
Normalized alias/name mismatches and repaired several compatibility rule references.


===== PATCH_NOTES_METADATA_DROPDOWNS_v0.8.0.txt =====
Metadata-rich dropdown labels patch
- show '#: description' labels for curated finite-choice parameters using Users Guide-backed metadata.


===== PATCH_NOTES_NAMELIST_EDITOR_v0.5.3.txt =====
WRFDomainWizard Patch Notes - v0.5.3
====================================


Root cause:
- Some Registry-backed variables could resolve to undefined or null values during UI construction.
- The editor previously threw a hard error instead of applying a safe fallback.

Fixes:
- Safe fallback values added for all supported field types
- Input field updates now tolerate undefined/null values
- WPS sidebar namelist button now reports editor-open failures through an error dialog and the browser console


===== PATCH_NOTES_NUMERIC_SELECTION_EXPORT_v0.7.6.txt =====
WRFDomainWizard Patch Notes - v0.7.6
===================================

This build fixes namelist export typing for dropdown-backed variables.

Before:
- numeric selections could be stored/exported as strings
- output looked like:
  mp_physics = '6', '6'

Now:
- numeric selections export as numbers:
  mp_physics = 6, 6
- logical selections export as .true. / .false.
- real string selections such as physics_suite stay quoted:
  physics_suite = 'tropical'


===== PATCH_NOTES_PRESET_SELECTOR_v0.6.1.txt =====
WRFDomainWizard Patch Notes - v0.6.1
===================================

This build is a full rebuild from the last working package.

New behavior:
- Users must choose:
  - Beginner – CONUS
  - Beginner – Tropical
  - Advanced

Mode behavior:
- Beginner – CONUS: applies the strict NCAR-style CONUS starter template
- Beginner – Tropical: applies the tropical starter template
- Advanced: keeps the curated core sections workflow without applying a starter template

This build preserves the earlier working app files and patches rather than using a minimal scaffold.


===== PATCH_NOTES_RULES_v0.7.3.txt =====
Expanded curated-core compatibility coverage.
- Added explicit allowed-off rules for cu_physics=0 and shcu_physics=0.
- Added CuP-only rules for thBinSize, minDeepFreq, minShallowFreq (require cu_physics=10).
- Fixed isftcflx parsing to require sf_sfclay_physics=1.
- Updated compatibility metadata and summaries.


===== PATCH_NOTES_RULE_ACTIVATION_FILTERING_v0.8.2.txt =====
Rule activation filtering patch for compatibility inspector. Only currently active rules are shown for the selected variable. Inactive potential rules are hidden. Timestamp: 2026-04-15 23:39 UTC


===== PATCH_NOTES_SAFE_CURATED_v0.7.0.txt =====
WRFDomainWizard Patch Notes - v0.7.0
===================================

This build uses the safe option for curated rendering.

What changed:
- Rebuilt from the full uploaded package, not a scaffold.
- Restored the original editor initialization behavior.
- Curated filtering is now applied safely inside the existing lifecycle.

Core sections:
- &time_control
- &domains
- &physics
- &dynamics
- &bdy_control
- &fdda
- &grib2
- &namelist_quilt

Empty by design:
- &fdda
- &grib2


===== PATCH_NOTES_SAFE_CURATED_v0.7.1.txt =====


===== PATCH_NOTES_SAFE_CURATED_v0.7.2.txt =====
Patched _updateGroupView to tolerate groups without a namelist-input-set-variable-count badge.


===== PATCH_NOTES_SIDE_BY_SIDE_ALL_DOMAINS_v0.7.8.txt =====
WRFDomainWizard Patch Notes - v0.7.8
===================================

This build fixes the remaining side-by-side layout issue for max_dom selection and logical controls.

What was wrong:
- the patched selection renderer returned malformed HTML for dropdown-backed multi-domain fields
- browsers then nested the controls incorrectly, which made d01/d02/d03 appear stacked

What changed:
- selection/logical controls now return properly wrapped field HTML
- multi-domain select controls now use fixed-width flex cells to align under d01/d02/d03 headers


===== PATCH_NOTES_SIDE_BY_SIDE_DOMAINS_v0.7.7.txt =====
WRFDomainWizard Patch Notes - v0.7.7
===================================


New behavior:
- Multi-domain values render side by side.
- Small domain headers (d01, d02, ...) appear above those values.
- This is a UI-only layout improvement and does not change namelist export behavior.


===== PATCH_NOTES_SMART_FILTERING_v0.5.0.txt =====
Smart filtering upgrade v0.5.0

This build uses Registry source-file metadata to hide package-specific variables by default.

Default mode:
- Relevant variables only

Always visible:
- WPS-derived read-only values
- Variables already set in the namelist

Package-aware visibility:
- Noah-MP variables reveal when sf_surface_physics selects Noah-MP or noah_mp settings are already set
- Chemistry variables reveal when chem_opt is enabled or chem settings are already set
- Lake, fire, CAM, stochastic, AFWA, diagnostics, tracker, and tornado variables reveal when their matching package is active

Fallback:
- Users can switch to "Show all Registry variables" to inspect every variable from the bundled Registry catalog.


===== PATCH_NOTES_SMART_FILTERING_v0.5.1.txt =====
Fixed smart Registry filtering patch placement inside the active JavaScript bundle scope so the namelist editor opens correctly.


===== PATCH_NOTES_SPARSE_TEXT_v0.5.7.txt =====
WRFDomainWizard Patch Notes - v0.5.7
===================================

This build corrects the previous package that did not visibly update.

Behavior in this build:
- The editor starts from actual defaults so users can edit immediately.
- The Text tab omits unchanged defaults, matching normal WRF practice.
- The sparse text output is limited to:
  &time_control
  &domains
  &physics
  &dynamics
  &bdy_control
  &fdda
  &grib2
  &namelist_quilt
- &fdda and &grib2 are emitted as empty stubs by default.


===== PATCH_NOTES_STABILITY_v0.8.7.txt =====
WRFDomainWizard Patch Notes - v0.8.7
===================================

This build focuses on stability after the v0.8.6 null-safe update surfaced:
- bdy_control logical pre-render field writes to missing DOM nodes
- compatibility option-scan recursion leading to maximum call stack exceeded
- unreadable UI Error Log colors

Fixes:
- null-safe _setInputFieldValue and _updateVariableFieldValue wrappers
- recursion guard around compatibility selection option scans
- readable UI Error Log text and button colors
- refreshed JSON metadata bundles from latest uploads


===== PATCH_NOTES_TEMPLATE_STARTERS.txt =====
Template starter patch
======================


Included templates:
- Beginner: CONUS
- Beginner: Tropical
- Custom: uploaded jun01 starter
- Blank / manual

Behavior:
- Tropical is suggested when geogrid.ref_lat is within +/-23.5 degrees.
- Otherwise CONUS is suggested.
- If the editor has only WPS-derived geometry and no user-entered editable values yet, the suggested template is auto-applied.
- WPS-derived geometry remains read-only and is preserved when applying any template.

Files added/changed:
- js/wrf-domain-wizard.js
- css/wrf-domain-wizard.css
- PATCH_NOTES_TEMPLATE_STARTERS.txt


Upgrade: Compatibility details panel
- Click any namelist row to inspect active rules and requirements.
- Filter rows to show all, only ruled rows, or only conflicts.
- Selected variable is highlighted with a blue focus ring.


===== PATCH_NOTES_UI_ERROR_LOG_v0.6.3.txt =====
WRFDomainWizard Patch Notes - v0.6.3
===================================

This build adds an in-app UI Error Log to help debug button-click failures and runtime problems.

New behavior:
- A floating "Show UI Error Log" button is available in the UI.
- Failed actions can write detailed logs containing:
  - timestamp
  - action label
  - message
  - source
  - stack trace
- Unhandled runtime errors and unhandled promise rejections are captured automatically.



===== PATCH_NOTES_VARIABLE_CORRECTNESS_v0.8.1.txt =====
This build fixes num_land_cat control type and expands/fixes cu_physics dropdown metadata.


===== PATCH_NOTES_VERSION_DISPLAY.txt =====
Version display added to UI on 2026-04-14.

Changes:
- Added visible version badge to Domains sidebar header on index page.
- Updated page titles to include version string v0.4.2.


===== PATCH_NOTES_WPS_SERIALIZER_v0.5.2.txt =====
Fixed WPS namelist serializer crash on undefined optional geogrid values.


===== PATCH_NOTES_RENDER_ORDER_REWRITE_v0.8.8.txt =====
WRFDomainWizard Patch Notes - v0.8.8
===================================

This build rewrites the namelist editor loading flow.

New order:
1. Load variables and defaults
2. Apply starter template into the namelist data only
3. Overlay WPS-derived read-only values into the namelist data
4. Render the editor controls
5. Hydrate the visible controls from the namelist data

This prevents template and WPS seeding from trying to write to DOM nodes before those nodes exist.

==================================================
[2026-04-16 01:25] v0.8.9 - Safe ID hydration
- Replaced querySelector('input#...') and querySelector('select#...') field lookups with document.getElementById(fieldId) so IDs beginning with digits no longer throw SyntaxError.
- Base _setInputFieldValue now guards missing nodes safely.
- Pre-render missing-field skips are silent to avoid flooding the UI error log.

[2026-04-16T01:35:00Z] v0.8.10
- Fixed wrapped selector path that still used querySelector("input#..."), which failed for ids beginning with digits like 03input
- Changed wrapped hydration/field update lookup to document.getElementById(fieldId)
- Reduced expected pre-render missing-node error log spam
- Audited Tropical starter template and changed sf_sfclay_physics to 1 to match bl_pbl_physics=1 compatibility requirements


--------------------------------------------------
[2026-04-16 01:35] - Version 0.8.11

Fixed:
- removed remaining invalid CSS selector pre-check in wrapped _setInputFieldValue path
- replaced querySelector-based field existence guard with getElementById for ids like 03input
- eliminated lingering UI Error Log entry for 'input#03input' invalid selector


[v0.9.1]


v0.9.2 (2026-04-16 03:30 UTC)
- Physics metadata completion pass.
- Added explicit enum labels for major finite-value &physics variables sourced from the Users Guide and existing editor metadata.
- No new visible groups were rendered; this pass preserves the stable .9.0 UI surface while preparing future progressive Advanced-mode expansion.


[v0.9.3] Added physics subsection foundation data only. No UI expansion; prepares grouped parent-child rendering for future collapsed/progressive physics UI.


[v0.9.4] 2026-04-16 03:45 UTC
- First visible physics subsection rendering added.
- Only the current curated physics variables were regrouped visually under collapsed parent subsections.
- No broader UI expansion, export changes, or group ownership changes were introduced in this step.

[v0.9.5] Physics progressive reveal
- Added physics-only progressive reveal under collapsed subsections.
- bldt shows only when bl_pbl_physics is active.
- cudt shows only when cu_physics is active.
- surface_input_source, num_soil_layers, and num_land_cat show only when a land-surface model is active.
- sf_urban_physics shows only for Noah/Noah-MP land-surface selections.


v2.0.0
- Rebuilt from the stable WPS code guides and preserved the working WPS button layout and UI error log.
- Removed SRTM / external elevation overlay feature and deleted bundled SRTM assets from the rebuild.
- Removed rotated lat-lon and lat-lon_global sample content, and kept lambert, mercator, polar, and lat-long_regional samples.
- Rebuilt namelist.input as a hybrid old/new editor using registry, users guide, readme, manual, subsections, inventory, and compatibility metadata.

[v3.0.0-ARW context3]
- Fixed ARW context domain intelligence UX by adding explicit projection auto-suggest messaging and a one-click switch action.
- Added hover-help info markers for ARW context features so users can understand auto-fill, snapping, and projection recommendation behavior.
- Prepared ARW context documentation wording to support a later mainline merge with fuller changelog coverage.

[v3.0.0-ARW context4]
- Domain intelligence controls moved onto a single action row.
- ARW Context help now uses camera-style dark title tooltips on the checkbox, action buttons, help buttons, and projection suggestion controls.


[v3.0.0-ARW context5]
- Removed ARW context help ? buttons.
- Moved feature explanations onto the actual controls using the same dark browser tooltip style used by the camera button.
- Added tooltips for Update, Save, Reset, Show UI Error Log, and export dialog Save/Copy/Close actions.
- Updated ARW context version labels to v3.0.0-ARW context5.

=== v3.0.0 MAINLINE MERGE ===
This release merges the tested ARW context domain-intelligence workflow into the mainline build.

Key behavior changes:
- The WPS sidebar now includes a Domain intelligence panel.
- Auto-fill projection fills projection parameters and immediately updates the map.
- Snap nest values corrects nested-domain sizing and placement and immediately updates the map.
- Switch to suggested projection changes map_proj, fills projection parameters, and immediately updates the map.
- Manual field edits still use the Update button.

UI changes:
- Update moved into the domain-intelligence action row because it belongs to the domain-edit workflow.
- Save, Reset, and Camera remain in the bottom utility row.
- The UI error log remains a secondary troubleshooting utility in the map footer.
- Native dark browser tooltips are used on the actual controls instead of separate help icons.

Validation and guidance now included:
- Projection advice for lambert, mercator, polar, and lat-lon.
- Nest alignment checks for e_we, e_sn, i_parent_start, and j_parent_start.
- Suggested projection switching when the current projection is likely suboptimal.

Workflow guidance:
- Use Auto-fill projection when you want the current projection parameters repaired or refreshed.
- Use Snap nest values when resizing or moving nested domains.
- Use Update after manual edits typed directly into the form.

v3.0.0
- Added Credits & Dedication section in the visible About pane honoring Jiří Richter

v3.0.0
- Fixed initial Lambert domain creation so the selected Lambert parallels mode is applied on first create instead of leaving truelat1 = truelat2.

v3.0.0.2
- Fixed first-create Lambert defaults so truelat1/truelat2 no longer remain equal before pressing Auto-fill Projection

v3.0.0.3
- Patched the core Lambert default projection path so first-created Lambert domains apply the selected Lambert parallels mode instead of forcing truelat1 = truelat2 = ref_lat

v3.0.0.4
- Fixed orphan Bootstrap tooltip cleanup so removed Domain Intelligence controls no longer leave black tooltip boxes behind

v3.1.0.0
- Full projection helper rebuild from v3.0.0.4
- Normalized Lambert mode storage and values
- Added visible cue that Lambert mode changes what Auto-fill projection applies
- Restored Mercator recommendation rendering for low-latitude Lambert domains
- Removed refresh-time Lambert self-healing from the tools layer

v3.1.1.0
- Merged Suggest projection button into mainline next to map_proj
- Restored inline projection recommendation rendering in Domain Intelligence
- Removed remaining ARW context-labelled live identifiers from the tools layer


---

## Earlier consolidated release-history source

# WRF Config Studio Consolidated Release History

Generated: 2026-05-04T23:20:07Z

This document consolidates `ALL_PATCH_NOTES.txt` and `CHANGELOG.txt` into one timestamp-preserving release history.

## Latest package entries

[2026-04-28] V3.1.0-touch-trackpad-interaction-fix
- Improved desktop touch-screen and trackpad interaction behavior.
- Added Leaflet map options for smoother fractional zoom and less aggressive wheel/trackpad zoom.
- Added touch/pointer event support for new-domain drawing, domain dragging, and resize handles.
- Added touch-action and overscroll-behavior CSS so the browser does not steal map gestures during domain drawing.
- Enlarged domain handles on coarse-pointer screens.
- Mobile/touch-phone layout remains outside the supported target; this patch is for desktop touch screens and trackpads.
- No namelist, registry, catalog, WPS export, or namelist.input export logic changes.

[2026-04-28] V3.1.0-documentation-link-style-fix
- Fixed namelist.input Documentation tab link rendering.
- Moved WRF Best Practices (WPS) and WRF Best Practices (WRF) into the same Bootstrap list-group as the other documentation links.
- Added rel="noopener noreferrer" to external documentation links.
- Removed an empty duplicate best-practices link in the About/reference list.
- No namelist, registry, map, export, or runtime behavior changes.

[2026-04-30] V3.1.0-docs-section-rebuild
- Rebuilt docs/ from the consolidated documentation set.
- Preserved original source documentation under docs/originals/.
- Preserved the original WRF GUI PDF reference under docs/references/.
- Regenerated docs manifest and package documentation index.
- No namelist, registry, map, export, or runtime behavior changes.



## [v3.0.0-ARW context5] - Removed ARW context help ? buttons.

Source: `ALL_PATCH_NOTES.txt`

- Moved feature explanations onto the actual controls using the same dark browser tooltip style used by the camera button.
- Added tooltips for Update, Save, Reset, Show UI Error Log, and export dialog Save/Copy/Close actions.
- Updated ARW context version labels to v3.0.0-ARW context5.

=== v3.0.0 MAINLINE MERGE ===
This release merges the tested ARW context domain-intelligence workflow into the mainline build.

Key behavior changes:
- The WPS sidebar now includes a Domain intelligence panel.
- Auto-fill projection fills projection parameters and immediately updates the map.
- Snap nest values corrects nested-domain sizing and placement and immediately updates the map.
- Switch to suggested projection changes map_proj, fills projection parameters, and immediately updates the map.
- Manual field edits still use the Update button.

UI changes:
- Update moved into the domain-intelligence action row because it belongs to the domain-edit workflow.
- Save, Reset, and Camera remain in the bottom utility row.
- The UI error log remains a secondary troubleshooting utility in the map footer.
- Native dark browser tooltips are used on the actual controls instead of separate help icons.

Validation and guidance now included:
- Projection advice for lambert, mercator, polar, and lat-lon.
- Nest alignment checks for e_we, e_sn, i_parent_start, and j_parent_start.
- Suggested projection switching when the current projection is likely suboptimal.

Workflow guidance:
- Use Auto-fill projection when you want the current projection parameters repaired or refreshed.
- Use Snap nest values when resizing or moving nested domains.
- Use Update after manual edits typed directly into the form.

v3.0.0
- Added Credits & Dedication section in the visible About pane honoring Jiří Richter

v3.0.0
- Fixed initial Lambert domain creation so the selected Lambert parallels mode is applied on first create instead of leaving truelat1 = truelat2.

v3.0.0.2
- Fixed first-create Lambert defaults so truelat1/truelat2 no longer remain equal before pressing Auto-fill Projection

v3.0.0.3
- Patched the core Lambert default projection path so first-created Lambert domains apply the selected Lambert parallels mode instead of forcing truelat1 = truelat2 = ref_lat

v3.0.0.4
- Fixed orphan Bootstrap tooltip cleanup so removed Domain Intelligence controls no longer leave black tooltip boxes behind

v3.1.0.0
- Full projection helper rebuild from v3.0.0.4
- Normalized Lambert mode storage and values
- Added visible cue that Lambert mode changes what Auto-fill projection applies
- Restored Mercator recommendation rendering for low-latitude Lambert domains
- Removed refresh-time Lambert self-healing from the tools layer

v3.1.1.0
- Merged Suggest projection button into mainline next to map_proj
- Restored inline projection recommendation rendering in Domain Intelligence
- Removed remaining ARW context-labelled live identifiers from the tools layer

## [v3.0.0-ARW context4] - Domain intelligence controls moved onto a single action row.

Source: `ALL_PATCH_NOTES.txt`

- ARW Context help now uses camera-style dark title tooltips on the checkbox, action buttons, help buttons, and projection suggestion controls.

## [v3.0.0-ARW context3] - Fixed ARW context domain intelligence UX by adding explicit projection auto-suggest messaging and a one-click switch action.

Source: `ALL_PATCH_NOTES.txt`

- Added hover-help info markers for ARW context features so users can understand auto-fill, snapping, and projection recommendation behavior.
- Prepared ARW context documentation wording to support a later mainline merge with fuller changelog coverage.

## [v1.2.0] - Reworked WPS domain interaction toward a geogrid-first model.

Source: `CHANGELOG.txt`

- Normalized longitude inputs and projection parameters before redraw.
- Added safe validation/revert for invalid domain states during drag or update.
- Disabled freeform main-grid polygon drag/resize for Lambert and polar modes; use domain parameters and center marker instead.
- Updated visible UI version strings to v1.2.0.

v1.0.0
- startup activation now follows the em_real example namelist variable list instead of enabling entire core groups
- core groups remain expanded in the UI, but only example-listed variables start toggled on
- invalid field names are filtered from the fresh namelist.input editor catalog before render/export
- blank values are skipped during export to avoid malformed namelist lines
- updated visible UI version strings to v1.0.0

v1.0.1
- added a fresh namelist.input editor module
- powered the new editor from namelist.input.registry_metadata_catalog.v1.json
- added per-variable enable toggles, text export, search, and save/copy actions
- kept the existing namelist.wps editor intact from the clean v0.9.9 build

v0.9.9
- WPS-only build: UI now exposes only namelist.wps workflow.

v0.9.8
- removed the namelist setup modal at runtime and forced direct entry into the manual full namelist editor

v0.9.7 - 2026-04-17
- Added per-variable side toggles to turn namelist options on and off
- Kept the full namelist catalog editor active for manual editing across all available groups and variables

v0.9.7 - 2026-04-17
- The editor now renders the full Registry-backed namelist catalog, ordered with the core runtime groups first and the remaining groups after them.
- Group startup defaults now open in a collapsed state to keep the full catalog manageable while still exposing all metadata-backed variables.

v0.9.5 - 2026-04-16
- Added physics-only progressive reveal on top of collapsed subsections while keeping the rest of the editor behavior aligned with v0.9.x.
- Hid dependent physics rows until their parent selections are active, including bldt, cudt, land-surface dependent fields, and urban control visibility.

v0.9.4 - 2026-04-16 03:45 UTC
- Added first visible physics-only collapsed subsection layout while keeping the rest of the editor in the stable 0.9.x behavior.
- Grouped current curated physics controls under parent subsections: Starter / Suite, Microphysics, Radiation, Surface Layer, Land Surface, Urban, PBL, and Cumulus.
- No changes to export logic or non-physics rendering.

v0.9.3 (2026-04-16 04:10 UTC)
- Added a canonical physics subsection map to prepare collapsed + progressive physics UI without widening the visible editor surface.
- Annotated all Registry-owned physics variables with a stable subsection assignment while preserving v0.9.x rendering behavior.

v0.9.2 (2026-04-16 03:30 UTC)
- Expanded &physics finite-option metadata without widening the visible UI beyond the stable curated .9.x scope.
- Added labeled dropdown catalogs for visible physics controls such as surface_input_source, num_soil_layers, and num_land_cat.
- Added hidden/advanced &physics enum metadata in preparation for later progressive Advanced-mode integration.
- Kept group ownership and rendering behavior aligned with v0.9.0 stability constraints.

v0.9.1 - 2026-04-16 03:13 UTC
- Added canonical namelist inventory JSON for full-integration planning.
- Added group validation report with Registry-owned group locking and current curated UI coverage.
- No UI rendering changes in this build; behavior remains aligned with v0.9.0.

## [v0.9.5] Physics progressive reveal

Source: `ALL_PATCH_NOTES.txt`

- Added physics-only progressive reveal under collapsed subsections.
- bldt shows only when bl_pbl_physics is active.
- cudt shows only when cu_physics is active.
- surface_input_source, num_soil_layers, and num_land_cat show only when a land-surface model is active.
- sf_urban_physics shows only for Noah/Noah-MP land-surface selections.


v2.0.0
- Rebuilt from the stable WPS code guides and preserved the working WPS button layout and UI error log.
- Removed SRTM / external elevation overlay feature and deleted bundled SRTM assets from the rebuild.
- Removed rotated lat-lon and lat-lon_global sample content, and kept lambert, mercator, polar, and lat-long_regional samples.
- Rebuilt namelist.input as a hybrid old/new editor using registry, users guide, readme, manual, subsections, inventory, and compatibility metadata.

## [v0.9.4] 2026-04-16 03:45 UTC

Source: `ALL_PATCH_NOTES.txt`

- First visible physics subsection rendering added.
- Only the current curated physics variables were regrouped visually under collapsed parent subsections.
- No broader UI expansion, export changes, or group ownership changes were introduced in this step.

## [v0.9.3] Added physics subsection foundation data only. No UI expansion; prepares grouped parent-child rendering for future collapsed/progressive physics UI.

Source: `ALL_PATCH_NOTES.txt`

_No additional details provided._

## [v0.9.1] v0.9.2 (2026-04-16 03:30 UTC)

Source: `ALL_PATCH_NOTES.txt`

- Physics metadata completion pass.
- Added explicit enum labels for major finite-value &physics variables sourced from the Users Guide and existing editor metadata.
- No new visible groups were rendered; this pass preserves the stable .9.0 UI surface while preparing future progressive Advanced-mode expansion.

## [2026-04-28] V3.1.0-ARW context-full-catalog-merged-fixes

Source: `ALL_PATCH_NOTES.txt`

- Merged OBSPROC record groups into data/runtime/namelist.input.catalog.json so the existing editor panel displays them.
- Preserved data/runtime/namelist.obsproc.catalog.json as the standalone OBSPROC catalog.
- Exposed OBSPROC groups as obsproc_record1 through obsproc_record9 to avoid group-name collisions.
- Updated group index and broad catalog metadata.
- Kept everything visible with no UI filtering.
- Kept compatibility validation inactive/reference-only.
- No map, WPS export, namelist.input save/export, or browser compatibility logic changes.

## [2026-04-28] V3.1.0-ARW context-full-catalog

Source: `ALL_PATCH_NOTES.txt`

- Added full-catalog ARW context runtime files.
- Set all namelist.input catalog entries visible with no filtering.
- Preserved prior hidden/advanced status as uiStatusOriginal.
- Kept dependency hints and compatibility metadata as reference-only metadata.
- Added OBSPROC record catalog from uploaded tutorial namelist.obsproc files.
- Added docs/V3.1.0_BETA_FULL_CATALOG.md.
- No map, WPS export, namelist save/export, or browser compatibility logic changes.

## [2026-04-28] V3.0.0-desktop-browser-compatibility

Source: `ALL_PATCH_NOTES.txt`

- Added src/core/browser-compat.js desktop browser compatibility shim.
- Added fallbacks for Element.matches, Element.closest, NodeList.forEach, HTMLCollection.forEach, Array.from, Object.assign, CustomEvent, requestAnimationFrame, URL/webkitURL, and clipboard copy.
- Inserted compatibility shim before app-version.js and first-party application scripts.
- Added docs/DESKTOP_BROWSER_COMPATIBILITY.md.
- Target browsers: desktop Chrome, Edge, Firefox, and Safari on Windows, macOS, and Linux.
- Mobile/touch browser compatibility is intentionally excluded from this pass.
- No namelist, registry, map geometry, or export logic changes.

## [2026-04-28] V3.0.0-full-wrap-lon-ui-safe

Source: `ALL_PATCH_NOTES.txt`

- Safely normalized WPS/editor longitude fields after repeated-world map display.
- Fixes invalid red longitude fields such as 195 or -195 while preserving wrapped map rendering.
- Rebuilt from the last working full-wrap package and preserved WRFDomain onAdd/update methods.
- No namelist.input, registry, metadata, or export behavior changes.

## [2026-04-27 00:20:00 America/Chicago | 2026-04-27 05:20:00 UTC] V2.0.1-online-first-offline-vector-fallback

Source: `ALL_PATCH_NOTES.txt`

- Kept the normal online OpenStreetMap basemap as the default map layer.
- Added automatic fallback to a bundled lightweight Offline Vector Base Map when online tiles fail or the browser goes offline.
- Clarified that offline fallback uses local vector reference data, not downloaded or redistributed OpenStreetMap tile archives.
- Updated online/offline documentation and About text.
- Preserved V2.0.1 metadata-only editor behavior, time_step suggestion, runtime-duration suggestion, and clean artifact packaging.

## [2026-04-27] V3.0.0-full-wrap-merged

Source: `ALL_PATCH_NOTES.txt`

- Merged the full-wrap domain rendering fix into src/core/wrf-domain-wizard.js.
- Full 360-degree graticule rendering is preserved.
- Domain primary geometry shifts into the visible world copy.
- Display-only adjacent world-copy domain polygons are rendered for visual continuity.
- Corner markers, resize markers, lock marker, and selected grid lines follow the display-world shift.
- No namelist, registry, metadata, or export behavior changes.

## [2026-04-27] V3.0.0-full-360-repeat-graticule

Source: `ALL_PATCH_NOTES.txt`

- Reworked graticule rendering so meridians and latitude lines repeat across visible 360-degree world copies.
- Longitude labels now show canonical values while being placed in the visible repeated world.
- Removed reliance on worldCopyJump for this behavior.
- Keeps the map in a full repeated 360-degree display instead of clipping the overlay to a single [-180, 180] copy.
- No namelist, registry, editor, or export behavior changes.

## [2026-04-27] V3.0.0-domain-world-copies

Source: `ALL_PATCH_NOTES.txt`

- Added visual world-copy rendering for WRF domain polygons.
- Domains now draw non-editable copies at adjacent ±360° longitude offsets when visible, matching repeated basemap behavior.
- The primary editable domain remains unchanged; copies are display-only and do not affect WPS/namelist output.
- No namelist, registry, editor, or export behavior changes.

## [2026-04-27] V3.0.0-vector-world-wrap

Source: `ALL_PATCH_NOTES.txt`

- Deep fix for dateline/world-edge panning.
- Domain polygons, corner handles, resize handles, lock marker, and selected gridlines are shifted into the currently visible Leaflet world copy.
- This fixes the case where the basemap repeats across the world edge but WRF domain vectors stayed in only one longitude copy.
- No namelist, registry, editor, or export behavior changes.

## [2026-04-27] V3.0.0-centralized-version-browser-safe

Source: `ALL_PATCH_NOTES.txt`

- Added src/core/app-version.js as the single public UI version source.
- Updated visible UI version labels to read from data-wrf-version-text hooks.
- Fixed browser safety by using window/globalThis instead of unsafe global references.
- Normalized active public UI version to V3.0.0.
- No domain, map, namelist, registry, or export behavior changes.

## [2026-04-27] V3.0.0-leaflet-domain-drag-fix

Source: `ALL_PATCH_NOTES.txt`

- Fixed Leaflet SVG path error triggered while dragging or resizing domains.
- Stopped domain drag/resize mouse events from bubbling into Leaflet path handlers.
- Added null guards for drag/resize contexts.
- Deferred online-to-offline basemap fallback switching until active pointer/map interactions finish.
- No registry, namelist editor, metadata, or export behavior changes.

## [2026-04-27] V3.0.0-registry-metadata-rebuild

Source: `ALL_PATCH_NOTES.txt`

Scope:
- Full V3.0.0 rebuild from the latest working V2 line.
- Stable V2.0.0.0 renamed package remains untouched.
- Add Registry metadata as reference and discovery layer.
- Keep user control as the governing design rule.

Changed / added:
- README.md
- index.html
- src/namelist/namelist-runtime-engine.js
- src/namelist/namelist-input-editor.js
- src/tools/wps-tools.js
- data/runtime/namelist.registry.merged.v3.json
- data/runtime/namelist.registry.group_index.v3.json
- data/runtime/namelist.input.catalog.json metadata annotations
- data/registry/*
- docs/REGISTRY_METADATA_AUDIT_V3.0.0.md
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Registry audit:
- Source registry files: 40
- Parsed registry records: 11262
- Parsed rconfig records: 2075
- Unique namelist variables: 1877
- Groups: 47
- Potential conflicts retained for review: 19

Behavior policy:
- No compatibility validation.
- No forced auto-fixes.
- Required-field save warning remains active.
- Suggested starting values remain user-editable.
- Registry metadata is additive and non-enforcing.

## [2026-04-27] V2.0.3-save-warning-before-export

Source: `ALL_PATCH_NOTES.txt`

Scope:
- Fix save-warning order and malformed blank-array export text.
- Keep the editor metadata-driven and user-controlled.
- Keep compatibility validation inactive.

Changed files:
- index.html
- README.md
- src/namelist/namelist-input-editor.js
- src/namelist/namelist-runtime-engine.js
- src/tools/wps-tools.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Behavior:
- Save checks required blank fields before opening the export modal.
- Users can cancel and return to the editor before export text is displayed.
- Users can continue intentionally if they want to export a partial configuration.
- Array fields with any blank entry are omitted from generated namelist.input text instead of being written as comma-only values.
- Valid zero values and false logical values still export normally.

## [2026-04-27] V2.0.2-required-save-warning

Source: `ALL_PATCH_NOTES.txt`

Scope:
- Public release rebuild for V2.0.2.
- Ensure visible UI version labels, first-party runtime version constants, README, changelog, and patch notes match V2.0.2.
- Preserve V2.0.1 radt suggestion behavior.
- Preserve save-time required-field warning behavior.
- Keep compatibility validation inactive.

Changed files:
- index.html
- README.md
- src/namelist/namelist-runtime-engine.js
- src/namelist/namelist-input-editor.js
- src/tools/wps-tools.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Behavior:
- The namelist.input editor remains metadata-driven and user-controlled.
- Required blank physics fields are not force-filled.
- On save/export, the editor warns if required values are still missing.
- Users may cancel to return to the editor or continue intentionally.
- Suggested helpers remain active:
  - domains.time_step from d01 dx using 6 × dx_km.
  - time_control.run_* from WPS start_date/end_date.
  - physics.radt from innermost active dx using 1 minute per km.

## [2026-04-27] V2.0.1-radt-suggestion

Source: `ALL_PATCH_NOTES.txt`

- Added suggested physics.radt from the innermost active domain dx.
- Uses the WRF starting guideline radt ≈ 1 minute per km of innermost grid spacing.
- Applies the same suggested radt value across all active domains.
- Only fills radt when blank, zero/default-like, or still auto-managed by the suggestion system.
- Preserves manual user edits once radt is changed.
- Added field-level and documentation-panel metadata notes explaining the radiation timestep rule.
- Preserved V2.0.0 online-first/offline-vector fallback packaging and metadata-only editor behavior.

## [2026-04-27 00:00:00 America/Chicago | 2026-04-27 05:00:00 UTC] V2.0.1-public-online-offline-release

Source: `ALL_PATCH_NOTES.txt`

- Public release mapping: V2.0.1 corresponds to the stable internal V2.0.1 baseline.
- Updated user-facing version labels from internal development numbering to V2.0.1.
- Added a bundled lightweight Offline Vector Base Map fallback so domain drawing and namelist workflows remain usable when online tiles fail or network access is unavailable.
- Updated runtime paths to bundled local data folders for browser-safe packaging.
- Added cross-platform local server launch helpers for Windows, macOS, and Linux.
- Added online/offline browser compatibility documentation.
- Preserved metadata-only editor behavior, time_step suggestion, runtime-duration suggestion, and clean artifact packaging.

## [2026-04-26 22:35:00 America/Chicago | 2026-04-27 03:35:00 UTC] v4.0.0.9-time-step-suggestion

Source: `ALL_PATCH_NOTES.txt`

Scope:
- Add a metadata-only suggested time_step helper while leaving compatibility validation inactive.
- Preserve the clean v4.0.0.8 artifact state with no loose root build artifacts.

Changed files:
- index.html
  - Updated visible UI version labels to v4.0.0.9.
- src/namelist/namelist-runtime-engine.js
  - Updated engine version to v4.0.0.9-time-step-suggestion.
  - Added suggested time_step calculation from d01 dx using time_step = round(6 × dx_m / 1000).
  - Applies the suggestion only when domains.time_step is blank and has not been user-edited.
  - Stores suggestion metadata in state.suggestedFields and state.suggestionNotes.
  - Keeps compatibility validation disabled.
- src/namelist/namelist-input-editor.js
  - Marks domains.time_step as suggested when auto-filled.
  - Shows a user-facing note explaining the 6 × dx_km starting rule.
  - Records user edits so future WPS sync/open cycles do not overwrite manual time_step choices.
- src/tools/wps-tools.js
  - Updated WPS tools version label to v4.0.0.9.
- docs/ALL_PATCH_NOTES.txt
  - Added this detailed patch entry.
- docs/CHANGELOG.txt
  - Added this release summary entry.

Behavioral intent:
- Use d01 / coarsest dx as the time_step suggestion source.
- Fill domains.time_step only if blank.
- Treat the value as a suggested starting point, not a locked or enforced compatibility rule.
- Preserve user edits once the user manually changes the field.

Not changed:
- data/raw/*
- data/runtime/*
- styles/*
- vendor/*
- examples/*
- active compatibility validation remains removed/inactive

Validation performed:
- node --check src/namelist/namelist-runtime-engine.js
- node --check src/namelist/namelist-input-editor.js
- zip integrity check

## [2026-04-26 22:10:00 America/Chicago | 2026-04-27 03:10:00 UTC] v4.0.0.8-clean-artifact-removal

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v4.0.0.8-clean-artifact-removal

Scope:
- Clean package artifact only.
- No source code, data, CSS, vendor, examples, or runtime behavior changes.
- Consolidate root build lineage artifacts into docs/ALL_PATCH_NOTES.txt and docs/CHANGELOG.txt, then remove those loose root artifacts from the shipped zip.

Files changed:
- docs/ALL_PATCH_NOTES.txt
- docs/CHANGELOG.txt

Root files removed from shipped zip:
- WRFDomainWizard-web_v4.0.0.0_namelist-floating-scroll-icons_changed_files.txt
- WRFDomainWizard-web_v4.0.0.0_namelist-pdf-defaults_changed_files.txt
- WRFDomainWizard-web_v4.0.0.0_namelist-pdf-defaults_file_map.txt
- WRFDomainWizard-web_v4.0.0.1_runtime-engine-foundation_changed_files.txt
- WRFDomainWizard-web_v4.0.0.1_runtime-engine-foundation_file_map.txt
- WRFDomainWizard-web_v4.0.0.2_export-comma-serializer_changed_files.txt
- WRFDomainWizard-web_v4.0.0.2_export-comma-serializer_file_map.txt
- WRFDomainWizard-web_v4.0.0.4_auto-fix-system_changed_files.txt
- WRFDomainWizard-web_v4.0.0.4_auto-fix-system_file_map.txt
- WRFDomainWizard-web_v4.0.0.5_required-field-highlighting_changed_files.txt
- WRFDomainWizard-web_v4.0.0.5_required-field-highlighting_file_map.txt
- WRFDomainWizard-web_v4.0.0.6_metadata-only-editor_changed_files.txt
- WRFDomainWizard-web_v4.0.0.6_metadata-only-editor_file_map.txt
- WRFDomainWizard-web_v4.0.0.7_docs-normalization_changed_files.txt
- WRFDomainWizard-web_v4.0.0.7_docs-normalization_file_map.txt

Change summary:
- Removed loose root *_changed_files.txt and *_file_map.txt build artifacts from the distributable package.
- Preserved their relevant lineage information inside the consolidated patch history and changelog.
- Left the v4.0.0.6 metadata-only editor runtime behavior intact.
- Left the v4.0.0.7 documentation-normalized history intact.

## [2026-04-26 22:05:00 America/Chicago | 2026-04-27 03:05:00 UTC] V2.0.1-runtime-duration-suggestion

Source: `ALL_PATCH_NOTES.txt`

Baseline:
- WRFDomainWizard-web_v4.0.0.9_time-step-suggestion.zip

Scope:
- Add suggested runtime duration from namelist.wps timestamps.
- Preserve v4.0.0.9 time_step suggestion behavior.
- Keep compatibility validation inactive.
- Keep artifact package clean: no root *_changed_files.txt or *_file_map.txt files.

Changed files:
- index.html
  - Updated visible UI version labels to V2.0.1.
- src/namelist/namelist-runtime-engine.js
  - Updated engine version to V2.0.1-runtime-duration-suggestion.
  - Added run duration suggestion using WPS start_date/end_date timestamps.
  - Calculates run_days, run_hours, run_minutes, and run_seconds from UTC-normalized timestamp difference.
  - Enables and marks the run_* fields as suggested when populated automatically.
  - Treats run_* as a managed group: editing any run_* field preserves all manual runtime values and stops further automatic run-duration updates.
  - Compatibility rules remain disabled; catalog metadata remains available.
- src/namelist/namelist-input-editor.js
  - Added start_minute, start_second, end_minute, and end_second to the WPS-mastered snapshot sent to the runtime engine.
  - Added field-level and documentation-panel notes explaining suggested runtime behavior.
  - Updated manual-edit tracking so any run_* edit clears suggested state for the whole run_* group.
- src/tools/wps-tools.js
  - Updated WPS tools version label to V2.0.1.
- docs/CHANGELOG.txt
  - Prepended V2.0.1 release summary.
- docs/ALL_PATCH_NOTES.txt
  - Prepended this detailed patch entry.

Behavior:
- If namelist.wps start_date and end_date are available, the editor computes the elapsed duration.
- Suggested values are written to:
  - time_control.run_days
  - time_control.run_hours
  - time_control.run_minutes
  - time_control.run_seconds
- The values are suggestions, not locks.
- Manual edits are preserved once any run_* field is changed by the user.
- Existing start_* and end_* synchronization from WPS is preserved.
- v4.0.0.9 time_step suggestion from 6 × d01 dx_km is preserved.

Validation performed:
- node --check src/namelist/namelist-runtime-engine.js
- node --check src/namelist/namelist-input-editor.js
- node --check src/tools/wps-tools.js
- zip integrity check

## [2026-04-26 21:55:00 America/Chicago | 2026-04-27 02:55:00 UTC] v4.0.0.7-docs-normalization

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v4.0.0.7-docs-normalization

Scope:
- Documentation normalization only.
- No code, data, CSS, HTML, vendor, example, or runtime behavior changes.

Files changed:
- docs/ALL_PATCH_NOTES.txt
- docs/CHANGELOG.txt

Files removed from docs after their contents were merged here:
- docs/AUTO_FIX_SYSTEM_v4.0.0.4.txt
- docs/REQUIRED_FIELD_HIGHLIGHTING_v4.0.0.5.txt
- docs/COMPATIBILITY_LAYER_REMOVED_v4.0.0.6.txt

Files kept at repository root as lineage artifacts:
- *_changed_files.txt
- *_file_map.txt

Change summary:
- Consolidated version-specific loose patch documentation into docs/ALL_PATCH_NOTES.txt and docs/CHANGELOG.txt.
- Preserved the changed-files and file-map lineage files at the repository root.
- Left the v4.0.0.6 metadata-only editor code state untouched.

## [2026-04-26 21:37:00 America/Chicago | 2026-04-27 02:37:00 UTC] v4.0.0.6-metadata-only-editor

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v4.0.0.6-metadata-only-editor

Scope:
- Remove active compatibility validation from the namelist.input editor.
- Preserve user access to all metadata, descriptions, defaults, sources, subsections, and options.

Files rebuilt:
- index.html
- src/namelist/namelist-runtime-engine.js
- src/namelist/namelist-input-editor.js
- src/tools/wps-tools.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Change summary:
- Disabled active compatibility validation.
- Disabled auto-fix actions.
- Hid the compatibility colors toggle.
- Removed the compatibility summary panel from the editor render path.
- Kept all catalog metadata and user-selectable namelist options available.
- Preserved runtime-engine seeding, WPS overlay, and export comma serializer behavior.

Merged source note:
WRF Config Studio v4.0.0.6 metadata-only namelist editor

Purpose
-------
This patch removes the active compatibility layer introduced in v4.0.0.3-v4.0.0.5.
The namelist.input editor now keeps metadata, descriptions, defaults, sources,
subsections, and all selectable options available to the user without generating
compatibility errors, warnings, auto-fix actions, or row highlights.

Runtime behavior
----------------
- Compatibility validation returns no active issues.
- Auto-fix actions are disabled.
- The compatibility summary panel is hidden.
- The compatibility color toggle is hidden.
- Existing metadata files remain packaged for user reference and future work.
- The v4.0.0.2 comma serializer behavior is preserved.
- The v4.0.0.1 runtime-engine default seeding and WPS overlay behavior are preserved.
- Blank Users Guide default fields still start blank, but this build does not raise
  compatibility-style errors for them.

Files changed
-------------
- index.html
- src/namelist/namelist-runtime-engine.js
- src/namelist/namelist-input-editor.js
- src/tools/wps-tools.js

Future compatibility work
-------------------------
Compatibility validation should return in a later branch only after the rule runner,
field targeting, refresh cycle, and user workflow have been fully isolated and tested.

## [2026-04-26 21:20:00 America/Chicago | 2026-04-27 02:20:00 UTC] v4.0.0.5-required-field-highlighting

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v4.0.0.5-required-field-highlighting

Scope:
- Improve visual feedback for blank required fields and max_dom structure issues.

Files rebuilt:
- index.html
- src/namelist/namelist-runtime-engine.js
- src/namelist/namelist-input-editor.js
- src/tools/wps-tools.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Change summary:
- Expanded wildcard required-blank issues into exact row-level issues so blank required fields light up in the editor.
- Expanded wildcard max_dom structure issues into exact row-level issues.
- Kept the summary panel concise by filtering rowOnly issues out of the top compatibility summary.
- Updated UI version labels to v4.0.0.5.

Merged source note:
WRF Config Studio v4.0.0.5 required-field highlighting patch

Problem fixed:
- v4.0.0.4 correctly reported REQ-BLANK-001 in the Compatibility engine summary, but the issue used fields:["*"].
- Wildcard summary issues are not enough for the row renderer to know which exact controls should be highlighted.

Patch:
- namelist-runtime-engine.js now expands REQ-BLANK-001 into row-only field-level issues:
  - REQ-BLANK-001:<field.key>
  - fields:[<field.key>]
  - rowOnly:true
- STRUCT-ENTRY-001 also emits row-only field-level issues for exact max_dom length targets.
- The compatibility summary panel still shows the high-level summary issues only.
- Individual rows now receive exact error issues and should render with compatibility-bad styling.

Preserved:
- v4.0.0.1 runtime engine foundation
- v4.0.0.2 export comma serializer
- v4.0.0.3 compatibility rules
- v4.0.0.4 auto-fix system

## [2026-04-26 21:05:00 America/Chicago | 2026-04-27 02:05:00 UTC] v4.0.0.4-auto-fix-system

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v4.0.0.4-auto-fix-system

Scope:
- Add user-directed auto-fix hooks to the temporary compatibility layer.

Files rebuilt:
- index.html
- src/namelist/namelist-runtime-engine.js
- src/namelist/namelist-input-editor.js
- src/tools/wps-tools.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Change summary:
- Upgraded the runtime engine version to v4.0.0.4-auto-fix-system.
- Added a compatibility rule registry.
- Added validate() issue generation.
- Added applyFix(issueId) for user-directed fixes.
- Added getRules() for rule inspection.
- Added compatibility issue summary panel, field-level issue display, and Apply Fix button wiring.
- Preserved v4.0.0.2 export comma behavior and v4 runtime-engine startup seeding behavior.

Merged source note:
WRF Config Studio v4.0.0.4 auto-fix system

Build target:
- v4.0.0.4-auto-fix-system

Baseline:
- Built on top of the current v4 runtime-engine/export-comma mainstate.
- Preserves the v4.0.0.2 trailing-comma serializer behavior.
- Keeps fixes user-directed: the engine suggests fixes, but does not silently change values.

Runtime engine additions:
- Added compatibility rule metadata: id, type, category, fields, message, fixable, and fixLabel.
- Added engine.validate() to emit normalized issues.
- Added engine.applyFix(issueId) to apply a specific suggested fix.
- Added engine.getRules() for debugging and handoff inspection.

Auto-fix rules included:
- CU-DX-001: dx >= 10000 and cu_physics = 0 -> set cu_physics = 1.
- CU-DX-002: dx <= 3000 and cu_physics > 0 -> set cu_physics = 0.
- CU-DX-003: 3000 < dx < 10000 -> optional scale-aware suggestion, set cu_physics = 3.
- PBL-KM-001: PBL enabled with incompatible km_opt -> set km_opt = 4.
- PBL-KM-002: LES-style km_opt with PBL enabled -> set km_opt = 4.
- DIFF-SFS-001: sfs_opt active without diff_opt=2 and km_opt=2/3 -> set sfs_opt = 0.
- STRUCT-MAXDOM-001: max_dom invalid -> set max_dom = 1.
- STRUCT-ENTRY-001: max_dom array length mismatch -> reconcile array lengths.
- FIRE-001: fire enabled warning -> set ifire = 0.

Rules intentionally not auto-fixed:
- REQ-BLANK-001: required blank fields still require a user choice.
- TIME-RUN-001: informational only.
- HVC-001: informational only.

Editor integration:
- The compatibility panel appears when the compatibility display toggle is enabled.
- Issues show an Apply Fix button only when the engine provides a safe fix payload.
- Field-level issue summaries are displayed alongside the affected fields.
- Row/field display remains presentation-only. Rule decisions live in namelist-runtime-engine.js.

## [2026-04-26 20:55:00 America/Chicago | 2026-04-27 01:55:00 UTC] v4.0.0.3-runtime-engine-compatibility

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v4.0.0.3-runtime-engine-compatibility

Scope:
- Experimental compatibility validation layer in the runtime engine.

Files rebuilt:
- index.html
- src/namelist/namelist-runtime-engine.js
- src/namelist/namelist-input-editor.js
- src/namelist/row_highlight.js
- src/tools/wps-tools.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Change summary:
- Added initial runtime compatibility rule evaluation.
- Added cumulus/grid-spacing warnings and errors.
- Added PBL/diffusion/km_opt checks.
- Added structure checks for max_dom entry counts.
- Added required blank-field checks.
- Added time-control and hybrid-coordinate informational checks.
- Kept the layer detection-only at this stage, with no automatic user input modification.

Status note:
- This compatibility layer was later disabled in v4.0.0.6 because it introduced more editor friction than benefit.
- The raw compatibility metadata remains available for future use, but no active validation runs in v4.0.0.6 or v4.0.0.7.

## [2026-04-26 20:48:00 America/Chicago | 2026-04-27 01:48:00 UTC] v4.0.0.2-export-comma-serializer

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v4.0.0.2-export-comma-serializer

Scope:
- Fix namelist.input save/export formatting.

Files rebuilt:
- index.html
- src/namelist/namelist-input-editor.js
- src/namelist/namelist-runtime-engine.js
- src/tools/wps-tools.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Change summary:
- Patched the namelist.input save/export serializer so every emitted selected assignment line ends with a trailing comma.
- Blank selected fields still do not export until a value is provided, preserving the v4.0.0.1 blank-default behavior.
- Preserved v4.0.0.1 runtime-engine foundation.

## [2026-04-26 20:40:00 America/Chicago | 2026-04-27 01:40:00 UTC] v4.0.0.1-runtime-engine-foundation

Source: `ALL_PATCH_NOTES.txt`

- Added src/namelist/namelist-runtime-engine.js as the single startup-state orchestrator for namelist.input defaults, max_dom array expansion, and WPS-mastered overlays.
- Updated index.html to load the runtime engine between row_highlight.js and namelist-input-editor.js.
- Updated namelist-input-editor.js so performStartupSeeding(), initializeState(), reconcileArrayLengths(), and applyWpsMasteredDomainValues() delegate to the engine when available, while preserving the legacy fallback path.
- Updated visible UI version labels from v4.0.0.0 to v4.0.0.1.
- Updated WPS tools version constant to v4.0.0.1.
- Preserved uploaded v4.0.0.0 zip as the main-state baseline and made this a narrow additive patch.

## [2026-04-26 09:47:48 America/Chicago | 2026-04-26 14:47:48 UTC] SAVE-DIALOG ISOLATION AND INDEX FIX REBUILD

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input save-dialog isolation
- duplicate ID cleanup in index.html
- close/reopen state persistence

Files rebuilt:
- index.html
- src/namelist/namelist-input-editor.js
- src/core/wrf-domain-wizard.js
- src/tools/wps-tools.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Change summary:
- Removed duplicate generic modal button IDs by renaming WPS and legacy namelist dialog controls.
- Rebuilt namelist.input save flow to queue the save dialog after the editor modal hides, then restore the editor when the save dialog closes.
- Added capture/restore logic for current editor selection and focused field.

## [2026-04-26 09:47:48 America/Chicago | 2026-04-26 14:47:48 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Isolated the namelist.input save dialog from the editor modal to avoid nested-modal save crashes.
- Added modal state capture and restore so close/reopen and save-dialog roundtrips preserve current selection and focus.
- Cleaned duplicate generic button IDs out of index.html by renaming WPS and legacy namelist dialog controls to namespaced IDs.
- Updated wrf-domain-wizard.js and wps-tools.js to use the renamed namespaced IDs.
- Kept the condensed runtime catalog architecture intact.

## [2026-04-25 22:26:11 America/Chicago | 2026-04-26 03:26:11 UTC] CONDENSED RUNTIME CATALOG REBUILD

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- runtime file consolidation
- namelist editor startup loading
- no change to stable WPS editor behavior

Files rebuilt:
- data/runtime/namelist.input.catalog.json
- src/namelist/namelist-input-editor.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Added a single condensed runtime catalog for the namelist editor.
- Startup now prefers the condensed catalog instead of separately loading multiple runtime metadata files.
- Preserved fallback multi-file loading for safety, but reduced the normal runtime file fan-out.

## [2026-04-25 22:26:11 America/Chicago | 2026-04-26 03:26:11 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt the semantics-wired package as a condensed-runtime-catalog build.
- Added `data/runtime/namelist.input.catalog.json` as the preferred single runtime payload for the namelist editor.
- Consolidated merged field metadata, compatibility, semantics, and source-priority context into one runtime catalog.
- Updated namelist editor startup to prefer the condensed runtime catalog before falling back to multi-file loading.
- Kept the existing stable WPS editor behavior and text-tab ordering behavior intact.

## [2026-04-25 22:15:49 America/Chicago | 2026-04-26 03:15:49 UTC] SEMANTICS-WIRED STARTUP REBUILD

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- startup default resolution
- semantics file integration
- blank default preservation

Files rebuilt:
- src/namelist/namelist-input-editor.js
- data/runtime/namelist.input.metadata_semantics.json
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Wired metadata semantics into the runtime load path.
- Rebuilt catalog default selection so semantically blank Users Guide defaults do not fall through to registry zero.
- Preserved blank dropdown options and blank values during startup seeding and array reconciliation.

## [2026-04-25 22:15:49 America/Chicago | 2026-04-26 03:15:49 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt the blank-selection package with semantics wired into startup default resolution.
- The namelist editor now loads `namelist.input.metadata_semantics.json` at runtime.
- Blank Users Guide defaults marked as `no_published_default` now remain blank instead of falling through to registry zero.
- Preserved blank selection rendering and blank logical rendering in the UI.
- Preserved text-tab ordering and stable WPS editor behavior from prior builds.

## [2026-04-25 22:05:30 America/Chicago | 2026-04-26 03:05:30 UTC] BLANK SELECTION OPTION REBUILD

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- selection-field blank option rendering
- logical-field blank option rendering
- blank default preservation

Files rebuilt:
- src/namelist/namelist-input-editor.js
- data/runtime/namelist.input.metadata_semantics.json
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Added explicit blank options to selection and logical dropdown fields.
- Updated scalar parsing so blank dropdown values remain unset.
- Preserved the metadata rule that blank defaults remain blank in the UI.

## [2026-04-25 22:05:30 America/Chicago | 2026-04-26 03:05:30 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt the metadata-semantics package with explicit blank-option rendering for selection fields.
- Added a real blank option to selection and logical dropdown controls in the namelist.input editor.
- Preserved blank values as blank instead of coercing them to the first listed enum option.
- Kept metadata semantics aligned with the rule that a blank Users Guide default means no published default.

## [2026-04-25 20:59:20 America/Chicago | 2026-04-26 01:59:20 UTC] METADATA SEMANTICS REBUILD

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- metadata semantics
- blank-default handling
- recommendation/help scaffolding
- no workflow changes in this pass

Files rebuilt:
- data/runtime/namelist.input.source_priority.json
- data/runtime/namelist.input.metadata_semantics.json
- index.html
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Added a clean semantics layer to distinguish blank Users Guide cells from real defaults.
- Recorded that blank Users Guide defaults mean no published default, not zero.
- Preserved option-menu and help metadata semantics independently from default-value semantics.
- Added initial semantics scaffolding for recommendation-heavy dynamics and physics fields and user-required ocean profile fields.

## [2026-04-25 20:59:20 America/Chicago | 2026-04-26 01:59:20 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt the About-link package as a metadata-semantics build.
- Added `data/runtime/namelist.input.metadata_semantics.json`.
- Added clean semantics rules so blank Users Guide default cells are treated as no published default instead of numeric zero.
- Preserved option metadata and recommendation scaffolding for scheme fields even when no published default exists.
- Added semantics entries for representative WPS-mastered, user-required, and recommendation-driven fields.
- Kept existing stable core-state and About-section behavior unchanged.

## [2026-04-25 20:54:19 America/Chicago | 2026-04-26 01:54:19 UTC] ABOUT SECTION LINK UPDATE

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- About section documentation links only

Files rebuilt:
- index.html
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Change summary:
- Added the WRF namelist.input best-practices link under the existing namelist.wps best-practices link in the About section.
- No workflow or editor-state behavior changed in this pass.

## [2026-04-25 20:54:19 America/Chicago | 2026-04-26 01:54:19 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Added the namelist.input best-practices link to the About section directly beneath the namelist.wps best-practices link.
- Kept the stable core-state behavior from v3.2.3.0 unchanged.

## [2026-04-25 20:51:12 America/Chicago | 2026-04-26 01:51:12 UTC] STABLE CORE STATE REBUILD

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- WPS feeder restoration
- Lambert mode startup default
- polar projection field visibility
- preserve text-tab ordering

Files rebuilt:
- src/namelist/namelist-input-editor.js
- src/core/wrf-domain-wizard.js
- src/tools/wps-tools.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Rebuilt WPS-fed domain reading to use all existing grid rows.
- Forced Lambert parallels mode startup default back to Legacy.
- Rebuilt projection visibility logic so polar projection exposes pole_lat and pole_lon controls.
- Kept namelist.input text serialization order aligned to editor order.

## [2026-04-25 20:51:12 America/Chicago | 2026-04-26 01:51:12 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt the text-tab-order package as a stable core-state build.
- Restored full WPS-to-namelist.input feeder coverage for domain arrays by reading all grid rows instead of only visible rows.
- Fixed lambert parallels mode startup so it initializes to Legacy.
- Updated projection-field visibility so polar projection shows polar-specific pole latitude and pole longitude controls in the namelist.wps editor.
- Preserved text-tab ordering alignment with the editor.

## [2026-04-25 20:28:03 America/Chicago | 2026-04-26 01:28:03 UTC] TEXT TAB ORDER ALIGNMENT REBUILD

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input text generation ordering
- no change to stable namelist.wps editor behavior

Files rebuilt:
- src/namelist/namelist-input-editor.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Rebuilt text generation to use the same ordered field list as the editor renderer.
- Variable serialization within each group now follows the visible editor ordering rules instead of raw catalog iteration order.

## [2026-04-25 20:28:03 America/Chicago | 2026-04-26 01:28:03 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt the clean array-render package with aligned text-tab ordering.
- Updated namelist text generation so each group now writes variables in the same order shown by the editor.
- Kept editor group order unchanged and aligned variable output ordering with subsection order and render-order rules.
- Preserved the stable namelist.wps editor behavior.

## [2026-04-25 20:25:55 America/Chicago | 2026-04-26 01:25:55 UTC] CLEAN REBUILD ARRAY RENDER

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input large-array rendering
- subsection state persistence
- no change to stable namelist.wps editor behavior

Files rebuilt:
- src/namelist/namelist-input-editor.js
- styles/wrf-domain-wizard.css
- styles/wrf-domain-wizard.min.css
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Rebuilt the namelist input renderer around compact editing for large non-domain repeated-entry fields.
- Added dedicated scalar and compact-array parsing helpers.
- Preserved domain-array rendering for max_dom and max_domains fields only.
- Maintained subsection expanded-state persistence during compatibility-driven rerenders.

## [2026-04-25 20:25:55 America/Chicago | 2026-04-26 01:25:55 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt the subsection-state package as a clean array-render rebuild.
- Rewrote namelist array rendering so large non-domain repeated-entry variables use a compact array editor by default.
- Preserved per-domain row rendering for true max_dom and max_domains fields.
- Kept subsection open/closed state persistence across rerenders, including Compatibility colors updates.
- Kept the stable namelist.wps editor behavior unchanged.

## [2026-04-25 20:21:20 America/Chicago | 2026-04-26 01:21:20 UTC] SUBSECTION STATE AND ENTRY LABEL FIX

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- subsection collapse persistence
- repeated-entry label clarity
- no change to stable namelist.wps editor behavior

Files changed:
- src/namelist/namelist-input-editor.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Added subsectionExpanded state tracking keyed by group and subsection.
- Bound subsection <details> toggle events so compatibility rerenders preserve open/closed state.
- Restricted d01/d02 style labels to true domain-entry fields only.
- Non-domain repeated-entry variables now display neutral or entry-type-specific labels instead of misleading domain labels.

## [2026-04-25 20:21:20 America/Chicago | 2026-04-26 01:21:20 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt the Users Guide subsection-order package with subsection state persistence and entry-label cleanup.
- Persisted subsection open/closed state across rerenders so Compatibility colors no longer re-open subsection blocks after every redraw.
- Updated multi-value labels so only max_dom and max_domains fields render as d01, d02, etc.
- Non-domain repeated-entry fields now use neutral or entry-type-specific labels, which prevents sections like wrfvarchem from looking like they contain extra WPS domains.

## [2026-04-25 20:10:01 America/Chicago | 2026-04-26 01:10:01 UTC] USERS GUIDE SUBSECTION ORDER REBUILD

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input subsection ordering
- subsection visual hierarchy
- no change to stable namelist.wps sidebar behavior

Files changed:
- src/namelist/namelist-input-editor.js
- styles/wrf-domain-wizard.css
- styles/wrf-domain-wizard.min.css
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Added subsection order metadata from the subsection map into merged catalog fields.
- Updated field render sorting to group by subsection order before enabled/core/explicit ordering.
- Styled subsection blocks with indentation and a subtle left border to separate them from main group headers.

## [2026-04-25 20:10:01 America/Chicago | 2026-04-26 01:10:01 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt the clean default-seeding package with Users Guide subsection ordering.
- Changed namelist field ordering so subsection blocks follow the mapped subsection order instead of alphabetical subsection sorting.
- Added subsection order metadata to the merged catalog.
- Indented subsection blocks visually so they are easier to distinguish from the main group headers.
- Preserved the stable namelist.wps editor behavior from the prior baseline.

## [2026-04-25 20:04:44 America/Chicago | 2026-04-26 01:04:44 UTC] CLEAN DEFAULT SEEDING REBUILD

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input startup seeding
- default source fallback resolution
- clean code organization inside the namelist editor runtime

Files changed:
- src/namelist/namelist-input-editor.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Reorganized default seeding into dedicated editor methods instead of implicit inline initialization.
- Added usable-default checks so null Users Guide defaults fall through to README or Registry values.
- Startup now performs a clear sequence: seed defaults, reconcile array lengths, overlay WPS-mastered values, render.

Behavior note:
- namelist.wps editor behavior from v3.2.2.4-ARW context-grid-panel-visibility-fix is intentionally preserved.

## [2026-04-25 20:04:44 America/Chicago | 2026-04-26 01:04:44 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt the grid-panel visibility baseline as a clean default-seeding build.
- Refactored namelist editor startup into explicit seeding functions:
  - resetSeedState
  - buildSeedValueForField
  - seedStateFromCatalogDefaults
  - performStartupSeeding
- Fixed default-source resolution so null or blank Users Guide defaults no longer block fallback to README or Registry values.
- Forced deterministic startup seeding before WPS overlay, while keeping the stable namelist.wps editor behavior unchanged.

## [2026-04-25 19:55:21 America/Chicago | 2026-04-26 00:55:21 UTC] GRID PANEL VISIBILITY FIX

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.wps sidebar grid display
- layout-only fix

Files changed:
- styles/wrf-domain-wizard.css
- styles/wrf-domain-wizard.min.css
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Change summary:
- Added layout spacing so the lower action buttons do not crowd out the Grids section.
- Set the `#grids` block back to visible flow layout instead of inner auto scrolling.
- Added a small top margin for the first visible grid panel.

## [2026-04-25 19:55:21 America/Chicago | 2026-04-26 00:55:21 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt the Users Guide default-seeding package as a grid-panel visibility fix build.
- Restored sidebar space for the namelist.wps grid list after the structure reorganization.
- Added bottom padding to the domains form so the grid list is not crowded out by the lower action buttons.
- Removed inner scrolling from the `#grids` block so the domain grid panels remain visible in the normal sidebar flow.

## [2026-04-25 19:51:27 America/Chicago | 2026-04-26 00:51:27 UTC] USERS GUIDE DEFAULT SEEDING RUNTIME UPDATE

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input startup seeding
- merged metadata default precedence
- no regression to WPS-mastered overlay intent

Files changed:
- src/namelist/namelist-input-editor.js
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Change summary:
- Reworked merged catalog default selection so startup values prefer Users Guide defaults first.
- Added source-priority JSON consumption in the namelist editor loader.
- Kept WPS-mastered runtime overlay after seeding so WPS-derived fields still replace seeded defaults where applicable.

## [2026-04-25 19:51:27 America/Chicago | 2026-04-26 00:51:27 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt the source-priority baseline as a Users Guide default-seeding build.
- Updated namelist editor startup so merged catalog defaults prefer:
  - Users Guide
  - run/README.namelist
  - Registry
  - inventory/manual fallback
- Added source-priority-aware catalog construction through `data/runtime/namelist.input.source_priority.json`.
- Preserved WPS overlay after initialization so WPS-mastered values remain authoritative.

## [2026-04-25 19:43:35 America/Chicago | 2026-04-26 00:43:35 UTC] SOURCE PRIORITY BASELINE ARTIFACT

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- source hierarchy artifact
- core-group precedence seed
- no deep runtime rewiring yet

Files added:
- data/runtime/namelist.input.source_priority.json
- docs/SOURCE_PRIORITY_IMPLEMENTATION.md

Behavior notes:
- This pass adds the source-priority baseline artifact requested for the next merge layer.
- The artifact is seeded for the five core groups only.
- Runtime behavior from v3.2.2.1 is preserved; the editor is not yet fully rewired to consume this file automatically.

## [2026-04-25 19:43:35 America/Chicago | 2026-04-26 00:43:35 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt the structure-baseline package as a source-priority baseline.
- Added `data/runtime/namelist.input.source_priority.json` as the seed core-group source-precedence map.
- Seeded source-priority metadata for:
  - `time_control`
  - `domains`
  - `physics`
  - `dynamics`
  - `bdy_control`
- Added `docs/SOURCE_PRIORITY_IMPLEMENTATION.md` documenting the precedence model and intended runtime use.
- Preserved the structure-baseline layout and runtime from v3.2.2.1.

## [2026-04-25 12:00:33 America/Chicago | 2026-04-25 17:00:33 UTC] STRUCTURE BASELINE NAMELIST RUNTIME FIX

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- structure-baseline runtime correction
- namelist.input editor launch path

Files changed:
- index.html
- docs/CHANGELOG.txt
- docs/ALL_PATCH_NOTES.txt

Root cause:
- The structure-baseline rebuild moved the namelist runtime files into src/namelist/,
  but index.html only loaded namelist-input-editor.js.
- The editor still depends on namelist-input-data.js and row_highlight.js at runtime.

Fix:
- Restored loading of src/namelist/namelist-input-data.js
- Restored loading of src/namelist/row_highlight.js
- Kept the new structure layout intact

## [2026-04-25 12:00:33 America/Chicago | 2026-04-25 17:00:33 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt the structure-baseline package with the missing namelist runtime dependencies restored.
- Fixed namelist.input launch failure by restoring script loading for:
  - src/namelist/namelist-input-data.js
  - src/namelist/row_highlight.js
- Preserved the structure-baseline folder organization from v3.2.2.0.

## [2026-04-25 11:58:15 America/Chicago | 2026-04-25 16:58:15 UTC] STRUCTURE BASELINE REBUILD

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- project organization
- vendor/app/data/docs separation
- no intended feature regression from the prior ARW context

Files and layout changes:
- lib/* moved to vendor/css and vendor/js
- webfonts/* moved to vendor/webfonts
- js/* first-party files moved under src/
- css/* first-party files moved under styles/
- json/* reorganized into data/raw and data/runtime
- reports and handoff notes consolidated under docs/

Behavior notes:
- Runtime behavior is preserved from v3.2.1.6-ARW context as closely as possible.
- This pass is intended to reduce future regression risk by clarifying file ownership.
- Planned follow-up extraction targets are documented in docs/MIGRATION_CHECKLIST.md and src/*/README.md scaffold files.

## [2026-04-25 11:58:15 America/Chicago | 2026-04-25 16:58:15 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt the ARW context as a structure-baseline package.
- Reorganized the project into clearer top-level layers:
  - vendor/
  - src/
  - styles/
  - data/
  - docs/
- Moved third-party runtime files into vendor quarantine.
- Moved first-party runtime files into source-owned folders while preserving current behavior:
  - src/core/
  - src/tools/
  - src/namelist/
- Split data into raw and runtime organization, with the merged namelist catalog exposed as data/runtime/namelist.catalog.json.
- Preserved the current v3.2.1.6-ARW context runtime behavior as the baseline for the next deeper internal split.

## [2026-04-25 10:35:32 America/Chicago | 2026-04-25 15:35:32 UTC] DEEP HELPER TOOLTIP WIRING FIX

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- WPS helper tooltip internals
- no export logic changes

Files touched:
- js/wrf-domain-wizard.js
- css/wrf-domain-wizard.css
- css/wrf-domain-wizard.min.css
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Rebuilt helper label HTML so geog_data_path uses the same data-wps-help label path as the other helper fields.
- Strengthened tooltip refresh logic to strip tooltip attributes from all non-label descendants in the helper block before rebinding only the labels.
- This removes the remaining native/browser-style tooltip fallback that was still appearing for geog_data_path.

## [2026-04-25 10:35:32 America/Chicago | 2026-04-25 15:35:32 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Deep-corrected the WPS helper tooltip wiring so geog_data_path now uses the same label-only Bootstrap tooltip path as the other helper fields.
- Removed any remaining native title/data-toggle behavior from non-label elements inside the helper block.
- Preserved the integrated ARW context behavior and full-domain dx/dy export.

## [2026-04-25 10:32:21 America/Chicago | 2026-04-25 15:32:21 UTC] FULL HELPER TOOLTIP NORMALIZATION

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- WPS helper tooltip consistency
- no export logic changes

Files touched:
- js/wrf-domain-wizard.js
- css/wrf-domain-wizard.css
- css/wrf-domain-wizard.min.css
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Rebuilt WPS helper tooltip handling around data-wps-help values instead of relying on raw title attributes.
- Explicitly stripped title attributes from helper inputs and labels before binding Bootstrap tooltips.
- Applied one shared tooltip template so every helper label, including geog_data_path, matches the same dark styled hover box.

## [2026-04-25 10:32:21 America/Chicago | 2026-04-25 15:32:21 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Fully normalized WPS helper tooltip handling so all helper labels use the same Bootstrap-managed dark tooltip style.
- Removed remaining native-title tooltip behavior from the helper region, including geog_data_path.
- Preserved full-domain dx/dy export, helper-field guidance, and integrated ARW context behavior.

## [2026-04-25 10:29:05 America/Chicago | 2026-04-25 15:29:05 UTC] GEOG_DATA_PATH TOOLTIP CONSISTENCY FIX

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- WPS helper label tooltip consistency
- no export logic changes

Files touched:
- js/wrf-domain-wizard.js
- css/wrf-domain-wizard.css
- css/wrf-domain-wizard.min.css
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Normalized geog_data_path helper tooltip handling to match the other WPS helper labels.
- Converted helper label tooltip text to Bootstrap-managed tooltip content to avoid inconsistent native browser title popups.

## [2026-04-25 10:29:05 America/Chicago | 2026-04-25 15:29:05 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Fixed geog_data_path helper hover behavior so it uses the same styled tooltip workflow as the other WPS helper labels.
- Removed the inconsistent native-title behavior by normalizing helper label tooltip binding through Bootstrap.

## [2026-04-25 10:26:26 America/Chicago | 2026-04-25 15:26:26 UTC] HELPER TOOLTIP TARGETING REFINEMENT

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- WPS helper tooltip behavior
- no export logic changes

Files touched:
- js/wrf-domain-wizard.js
- css/wrf-domain-wizard.css
- css/wrf-domain-wizard.min.css
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Removed tooltip targets from the WPS helper input controls.
- Kept tooltip targets only on the helper field labels.
- Adjusted helper tooltip placement to reduce overlap with the field values.

## [2026-04-25 10:26:26 America/Chicago | 2026-04-25 15:26:26 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Refined the WPS share/geogrid helper tooltips so hover help appears only on the field headers, not on the input boxes themselves.
- Moved helper tooltip placement to reduce overlap with the values they describe.
- Preserved full-domain dx/dy export and the integrated ARW context behavior.

## [2026-04-25 10:22:34 America/Chicago | 2026-04-25 15:22:34 UTC] FULL REBUILD SAVE FIX

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- seamless integrated rebuild
- WPS save/export stability

Files touched:
- js/wrf-domain-wizard.js
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Reworked the dx/dy expansion helper in the WPS export flow so it reads from its own local #wps-form reference.
- Eliminated the out-of-scope form dependency that caused Save to fail with ReferenceError: form is not defined.
- Preserved the full-domain dx/dy export behavior and helper tooltip additions in a seamless rebuild.

## [2026-04-25 10:22:34 America/Chicago | 2026-04-25 15:22:34 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Seamlessly integrated the WPS export improvements into a new full build.
- Fixed the namelist.wps Save runtime error where dx/dy expansion referenced an out-of-scope form variable.
- Kept full-domain dx/dy export, WPS helper tooltips, namelist.input propagation, and the integrated ARW context baseline behavior.

## [2026-04-25 10:20:24 America/Chicago | 2026-04-25 15:20:24 UTC] WPS DX/DY EXPANSION AND HELPER TOOLTIPS

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- WPS export usability
- helper-field tooltip guidance

Files touched:
- js/wrf-domain-wizard.js
- css/wrf-domain-wizard.css
- css/wrf-domain-wizard.min.css
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Expanded exported geogrid dx/dy to full-domain arrays derived from the live parent_grid_ratio chain.
- Added help tooltips for:
  - start_date
  - end_date
  - interval_seconds
  - geog_data_path
- Tooltip content now explains date-string format, interval_seconds meaning, and example geog-data paths.

## [2026-04-25 10:20:24 America/Chicago | 2026-04-25 15:20:24 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Expanded namelist.wps export so geogrid dx and dy are written for all active domains using derived nest spacing, making domain spacing easier to visualize for users.
- Added hover help tooltips to the WPS share/geogrid helper fields for start_date, end_date, interval_seconds, and geog_data_path.
- Styled those helper tooltips with the same dark hover-comment look used elsewhere in the UI.

## [2026-04-25 10:13:40 America/Chicago | 2026-04-25 15:13:40 UTC] INTEGRATED BETA BUILD BASELINE

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- build consolidation
- integrated baseline packaging
- no new feature delta beyond the carried-forward v3.2.0.x ARW context fixes

Files touched:
- package-wide version strings
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Promoted the accumulated v3.2.0.x ARW context patch series into a single integrated build baseline: v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- This release is intended to behave like a seamless build rather than a visible stack of patch-level ARW contexts.
- Carried forward the stabilized ARW context work across:
  - namelist.input ordering and save/export behavior
  - WPS helper-field editing and export patching
  - WPS-to-namelist.input propagation
  - responsive editor layout improvements
  - local bundled test/doc references

Notes:
- This is still a ARW context release.
- Functionality matches the latest stabilized v3.2.0.12-ARW context state, but with a new integrated release identity.

## [2026-04-25 10:13:40 America/Chicago | 2026-04-25 15:13:40 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Consolidated the v3.2.0.x ARW context patch series into a new integrated build.
- Removed the patch-pass version progression from the user-facing build identity and rolled the accumulated fixes into one seamless ARW context release.
- Preserved the working namelist.input editor improvements:
  - enabled-first ordering
  - example-order section and variable ordering for major workflow groups
  - WPS-derived sync for domain, nesting, and boundary-control values
  - WPS-to-namelist.input propagation for start/end date parts and interval_seconds
  - namelist.input save/export dialog workflow
  - improved editor readability and row layout
- Preserved the working WPS editor improvements:
  - helper fields for start_date, end_date, interval_seconds, and geog_data_path
  - patched namelist.wps export flow using those helper values
  - corrected WPS save runtime handling
- Kept bundled local WRF test/doc references in the package.

## [2026-04-25 10:12:06 America/Chicago | 2026-04-25 15:12:06 UTC] NAMELIST.WPS SAVE RUNTIME FIX

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- WPS save/export workflow reliability
- no UI layout changes

Files touched:
- js/wrf-domain-wizard.js
- index.html
- js/wps-tools.js
- js/namelist-input-editor.js
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Fixed a ReferenceError in patchWpsNamelistTextWithCustomFields where intervalSeconds was used during WPS Save without being declared in that function scope.
- Added a safer guard so interval_seconds replacement only runs when a helper value actually exists.

## [2026-04-25 10:12:06 America/Chicago | 2026-04-25 15:12:06 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Fixed namelist.wps Save runtime error caused by intervalSeconds being referenced before declaration inside patchWpsNamelistTextWithCustomFields.
- Hardened the interval_seconds patch path so WPS Save continues to work even if the helper input is missing or blank.

## [2026-04-25 10:10:50 America/Chicago | 2026-04-25 15:10:50 UTC] NAMELIST.INPUT SAVE BUTTON FIX

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input export workflow reliability
- no layout or propagation changes

Files touched:
- js/namelist-input-editor.js
- index.html
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Ensured the namelist.input export modal exists in the shipped HTML.
- Rebound the Save button with a dedicated handler namespace.
- Changed Save to call modal('show') explicitly when the export dialog is present.
- Added a direct browser-download fallback when the modal cannot be opened.
- Added a Blob-download fallback even if saveAs is unavailable.

## [2026-04-25 10:10:50 America/Chicago | 2026-04-25 15:10:50 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Fixed namelist.input Save behavior when the button appears unresponsive.
- Hardened the save-dialog workflow so Save now explicitly opens the export modal when available and falls back to direct file download if the modal cannot open.
- Added safer click binding for the Save button and download fallback logic.

## [2026-04-25 08:42:59 America/Chicago | 2026-04-25 13:42:59 UTC] EXAMPLE-ORDER SECTION SORTING

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input editor group ordering
- no propagation or projection changes

Files touched:
- js/namelist-input-editor.js
- index.html
- js/wps-tools.js
- js/wrf-domain-wizard.js
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Added explicit section ordering to the namelist.input editor.
- The editor render order and the group jump control now follow the example namelist section flow for the major workflow groups.
- Explicit section order now prefers:
  &time_control
  &domains
  &physics
  &fdda
  &dynamics
  &bdy_control
  &grib2
  &namelist_quilt
- Existing explicit variable ordering inside core groups remains in place.

## [2026-04-25 08:42:59 America/Chicago | 2026-04-25 13:42:59 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Reordered additional namelist.input sections to better match the example namelist section sequence.
- Added explicit group ordering so the editor and group jump menu now prefer:
  time_control, domains, physics, fdda, dynamics, bdy_control, grib2, namelist_quilt.
- Preserved explicit per-variable ordering already applied inside the core workflow groups.

## [2026-04-25 08:31:31 America/Chicago | 2026-04-25 13:31:31 UTC] WPS DATE/TIME PROPAGATION FIX

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- WPS helper-field propagation into namelist.input
- no projection changes

Files touched:
- js/namelist-input-editor.js
- js/wrf-domain-wizard.js
- index.html
- js/wps-tools.js
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Extended live WPS propagation into namelist.input for time-control date components.
- start_date now feeds start_year, start_month, start_day, and start_hour across all active domains.
- end_date now feeds end_year, end_month, end_day, and end_hour across all active domains.
- Added a visible interval_seconds helper field in the WPS share/geogrid helper block and synced it into namelist.input time_control.interval_seconds.
- Preserved existing WPS-derived propagation for max_dom, dx/dy, grid_id, parent structure, specified, and nested.

## [2026-04-25 08:31:31 America/Chicago | 2026-04-25 13:31:31 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Fixed additional WPS-to-namelist.input propagation for start_year, start_month, start_day, start_hour, end_year, end_month, end_day, end_hour, and interval_seconds.
- Added an explicit WPS helper input for share.interval_seconds so the synced value is visible and editable alongside start_date and end_date.
- Kept WPS-derived domain, nesting, and boundary-control synchronization intact.

## [2026-04-25 08:25:01 America/Chicago | 2026-04-25 13:25:01 UTC] WRAP REGRESSION CORRECTION

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input modal layout correction
- CSS-only row layout adjustment

Files touched:
- css/wrf-domain-wizard.css
- css/wrf-domain-wizard.min.css
- index.html
- js/wps-tools.js
- js/namelist-input-editor.js
- js/wrf-domain-wizard.js
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Replaced the previous broad flex-wrap behavior with a grid-based field row layout.
- Kept description and compatibility text wrapping, but forced those blocks to stack below the main controls.
- Prevented wide description text from pushing value controls into awkward horizontal layouts.
- Tightened multi-domain input row sizing so repeated domain fields remain readable.

## [2026-04-25 08:25:01 America/Chicago | 2026-04-25 13:25:01 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Rolled back the overly aggressive responsive wrapping pass from v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Switched namelist.input variable rows to a steadier grid layout so name and value stay aligned while descriptions stack below instead of stretching across the row.
- Improved multi-domain row wrapping so d01/d02/d03 controls stay compact without blowing out the description column.

## [2026-04-25 08:22:25 America/Chicago | 2026-04-25 13:22:25 UTC] RESPONSIVE WRAPPING FIX

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input modal responsive layout polish
- CSS-only wrapping and flow adjustments

Files touched:
- css/wrf-domain-wizard.css
- css/wrf-domain-wizard.min.css
- index.html
- js/wps-tools.js
- js/namelist-input-editor.js
- js/wrf-domain-wizard.js
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Enabled text wrapping for namelist.input descriptions, compatibility messages, and documentation panel content.
- Prevented flex children from forcing overflow by allowing shrink-to-fit behavior with min-width: 0 where appropriate.
- Added responsive row flow so label/value blocks stack more cleanly as the modal narrows.
- Added small-screen wrapping for max_dom multi-value rows so domain labels and inputs remain readable.

## [2026-04-25 08:22:25 America/Chicago | 2026-04-25 13:22:25 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Added responsive namelist.input wrapping so descriptions and compatibility notes wrap instead of truncating when the browser or modal width is reduced.
- Allowed variable rows to reflow more gracefully at narrower widths.
- Added small-screen wrapping for multi-domain value rows so d01/d02/d03 controls remain readable in reduced-width layouts.

## [2026-04-25 08:15:00 America/Chicago | 2026-04-25 13:15:00 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Fixed namelist.input Save so it now opens an export popup with the current text and explicit Download and Copy actions, matching the namelist.wps workflow more closely.
- Fixed WPS-mastered domains.parent_id fallback so nested domains now populate parent_id as 1, 1, 2 when the live grid rows do not expose later values directly.
- Changed namelist.input editor field ordering so enabled variables render first inside each group, and unselected variables fall to the bottom.
- Improved namelist.input readability by reducing heavy compatibility shading, darkening descriptive text, and reducing the fade applied to unset rows.
- Updated visible version strings and package naming to v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.

## [2026-04-25 07:57:47 America/Chicago | 2026-04-25 12:57:47 UTC] NAMELIST.INPUT STARTUP REGRESSION FIX

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input editor runtime fix
- no domain math changes

Files touched:
- js/namelist-input-editor.js
- index.html
- js/wps-tools.js
- js/wrf-domain-wizard.js
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Fixed a runtime regression where EXPLICIT_FIELD_ORDER was referenced during field rendering but was not defined in the shipped bundle.
- This regression prevented the namelist.input editor from opening even when served correctly over localhost.
- Preserved the intended example-order sorting behavior by restoring the missing constant.

## [2026-04-25 07:57:47 America/Chicago | 2026-04-25 12:57:47 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Fixed a namelist.input editor regression in v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix where the explicit core-field ordering map was referenced but not defined.
- Restored namelist.input editor startup under localhost packaging.
- Preserved the v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix changes for WPS helper fields, interval_seconds sync, and example-order field sorting.

## [2026-04-25 07:51:02 America/Chicago | 2026-04-25 12:51:02 UTC] WPS DATE/PATH EDITING AND EXAMPLE-ORDER FIELD SORT

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- WPS editor UX
- namelist.input editor ordering and synchronization
- no projection changes

Files touched:
- js/wrf-domain-wizard.js
- js/namelist-input-editor.js
- css/wrf-domain-wizard.css
- js/wps-tools.js
- index.html
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Added helper inputs in the WPS editor for:
  - share.start_date
  - share.end_date
  - geogrid.geog_data_path
- WPS export dialog now uses those helper values to patch generated namelist.wps text.
- time_control.interval_seconds in namelist.input now syncs from the live WPS interval_seconds field.
- Added explicit per-group core variable ordering so enabled variables follow the example namelist sequence.

Behavior intentionally preserved:
- WPS-derived domain synchronization for max_dom, grid_id, dx/dy, parent structure, specified, and nested
- namelist.input save dialog workflow
- enabled-first ordering
- default-enabled core variable whitelist

## [2026-04-25 07:51:02 America/Chicago | 2026-04-25 12:51:02 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Added editable WPS share/geogrid helper fields for start_date, end_date, and geog_data_path in the WPS editor.
- WPS export now patches start_date, end_date, and geog_data_path into namelist.wps using those helper fields.
- namelist.input interval_seconds now syncs from the live WPS interval_seconds field.
- Reordered enabled core namelist.input variables to follow the example namelist sequence instead of generic alphabetical order.
- Preserved enabled-first ordering so checked variables still rise to the top within each group.
- Updated visible version strings and package naming to v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.

## [2026-04-25 07:41:16 America/Chicago | 2026-04-25 12:41:16 UTC] NAME_LIST INPUT UI POLISH PASS

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input editor visual polish
- export dialog polish
- no domain math or projection changes

Files touched:
- index.html
- css/wrf-domain-wizard.css
- js/wps-tools.js
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Polished namelist.input modal framing and tab presentation.
- Added sticky toolbar behavior for the namelist.input editor.
- Improved variable group card styling and spacing.
- Improved hover/focus states for editor inputs and save dialog textarea.
- Improved subsection presentation and summary readability.
- Clarified export button tooltip wording for the namelist.input Save workflow.

Behavior intentionally preserved:
- save dialog workflow from v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix
- enabled-first variable ordering
- WPS-derived domain synchronization
- default-enabled core variable whitelist

- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix
  - Fixed the namelist.input Save action to open a text export popup with Download and Copy controls instead of immediately downloading.
  - Fixed WPS-to-namelist.input parent_id fallback so chained nests preserve parent relationships when syncing domain values.
  - Sorted enabled namelist.input variables to the top of each group and pushed unchecked variables to the bottom.
  - Improved namelist.input readability by lowering overlay alpha and strengthening foreground text contrast.

## [2026-04-25 07:41:16 America/Chicago | 2026-04-25 12:41:16 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Added UI polish pass for the namelist.input editor and export dialog.
- Improved modal chrome, tab styling, footer/header framing, and editor group cards.
- Made the namelist.input toolbar sticky inside the editor for easier navigation on long forms.
- Improved hover, focus, border, and textarea styling to make inputs and exported text easier to read.
- Tightened subsection styling and overall spacing for long variable lists.
- Updated visible version strings and package naming to v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.

## [2026-04-25 07:25:12 America/Chicago | 2026-04-25 12:25:12 UTC] WPS-DERIVED DOMAINS AND BOUNDARY CONTROL FIX

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input editor domain synchronization refinement
- no projection or basemap changes

Files touched:
- js/namelist-input-editor.js
- js/wps-tools.js
- index.html
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Extended live namelist.wps synchronization for the editor.
- Added WPS-derived handling for:
  - domains.max_dom
  - domains.grid_id
  - domains.dx
  - domains.dy
  - domains.e_we
  - domains.e_sn
  - domains.parent_id
  - domains.i_parent_start
  - domains.j_parent_start
  - domains.parent_grid_ratio
  - domains.parent_time_step_ratio
  - bdy_control.specified
  - bdy_control.nested
- Nested dx/dy now derive from the outer-domain spacing divided by parent_grid_ratio down the nest chain.
- grid_id now derives as 1..max_dom.
- specified/nested now derive from the live WPS parent/nest structure.

Behavior intentionally preserved:
- curated default-enabled field whitelist remains active
- noah_mp remains off by default
- parent_time_step_ratio still mirrors parent_grid_ratio
- local examples/test-case references remain in the package About section

User-visible result:
- live three-domain WPS setups now populate correct max_dom, grid_id, nested dx/dy, parent fields, and specified/nested flags in the namelist.input editor
- catalog defaults no longer leak into these WPS-owned or WPS-derived fields

## [2026-04-25 07:25:12 America/Chicago | 2026-04-25 12:25:12 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Expanded WPS-mastered/derived namelist.input synchronization.
- &domains now derives max_dom, grid_id, dx, dy, e_we, e_sn, parent_id, i_parent_start, j_parent_start, parent_grid_ratio, and parent_time_step_ratio from live namelist.wps / Domain Wizard state.
- Nested dx/dy values now derive from outer-domain spacing and parent_grid_ratio instead of repeating the outer spacing across all domains.
- &bdy_control now derives specified and nested from the live WPS parent/nest structure.
- This corrects catalog-default leakage for nested-domain setups such as max_dom=1, grid_id=1,1,1, repeated dx/dy, and all-false specified/nested states.
- Updated visible version strings and package naming to v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.

## [2026-04-25 07:21:27 America/Chicago | 2026-04-25 12:21:27 UTC] DEFAULT-ENABLED CORE FIELD WHITELIST

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Scope:
- namelist.input editor usability refinement
- no projection or basemap changes

Files touched:
- js/namelist-input-editor.js
- js/wps-tools.js
- index.html
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Change summary:
- Added a DEFAULT_ENABLED_FIELDS whitelist for the namelist.input editor.
- Fresh editor state now enables only the requested workflow fields instead of enabling every variable in a core group.
- Requested defaults now cover:
  - selected &time_control fields
  - selected &domains fields
  - selected &physics fields
  - selected &dynamics fields
  - selected &bdy_control fields
  - selected &namelist_quilt fields
- &fdda and &grib2 remain present as groups but do not auto-enable their internal options.

Behavior intentionally preserved:
- user values remain editable
- catalog defaults still populate values when no user/live state exists
- WPS-mastered fields still sync from live namelist.wps / Domain Wizard state
- parent_time_step_ratio still mirrors parent_grid_ratio
- noah_mp remains off by default

User-visible result:
- the editor opens with the intended core workflow subset already enabled
- non-whitelisted variables in those same groups remain disabled until the user enables them
- domain geometry fields still follow the live WPS/domain setup rather than a static template

## [2026-04-25 07:21:27 America/Chicago | 2026-04-25 12:21:27 UTC] v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Source: `CHANGELOG.txt`

- Rebuilt ARW context package as v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Added a curated default-enabled namelist.input field set instead of enabling whole groups.
- Default-enabled fields now cover the requested workflow subset across &time_control, &domains, &physics, &dynamics, &bdy_control, and &namelist_quilt.
- &fdda and &grib2 remain available, but their internal variables are not mass-enabled by default.
- WPS-mastered domain values remain authoritative for dx, dy, e_we, e_sn, parent_id, i_parent_start, j_parent_start, parent_grid_ratio, and parent_time_step_ratio.
- parent_time_step_ratio continues to mirror parent_grid_ratio.
- Example-profile dropdown workflow remains removed from the editor; local WRF test/doc references remain bundled through the About section.
- Updated visible version strings and package naming to v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.

## [2026-04-24 20:27:16 America/Chicago | 2026-04-25 01:27:16 UTC] STABLE MAINLINE MAINTENANCE

Source: `ALL_PATCH_NOTES.txt`

Release target:
- v3.1.1.0 stable mainline

Scope:
- Verified maintenance fix only
- No feature expansion
- No ARW context merge

Files touched in delivered stable package:
- js/wps-tools.js
- CHANGELOG.txt
- ALL_PATCH_NOTES.txt

Problem fixed:
- Tools panel crashed during startup/render with:
  ReferenceError: disposeBootstrapTooltips is not defined
- Crash path observed in Chrome while serving locally with python -m http.server
- Failing call path:
  renderToolsPanel() -> refreshToolsPanel() -> disposeBootstrapTooltips(panel)

Fix applied:
- Restored disposeBootstrapTooltips(root) in js/wps-tools.js
- Cleanup now hides/disposes Bootstrap or jQuery tooltip instances before tools-panel rerender
- Removes orphan .tooltip DOM nodes left behind by previous renders
- Allows refreshToolsTooltips(panel) to initialize only the current tooltip-bearing controls after rerender

Behavior intentionally unchanged:
- domain geometry math
- projection calculations
- basemap/provider behavior
- stable overlay styling
- namelist.input editor data/model logic

User-visible result:
- tools panel initializes without the ReferenceError
- dynamic tooltips no longer block panel render because the helper function is present again
- tooltip lifecycle behavior matches the documented rerender cleanup rule

## [2026-04-24 20:27:16 America/Chicago | 2026-04-25 01:27:16 UTC] BETA BRANCH AUDIT AND ABANDONMENT RECORD

Source: `ALL_PATCH_NOTES.txt`

Branch target:
- v3.2.0-ARW context-polar-map

Summary of ARW context-only work attempted:
- polar projection/background switching
- light-palette replacements for imagery-like view
- standard background-name alignment with the main display
- restore-view and switch-back handling when moving between polar and lambert recommendations
- coastline/local basemap experiments
- unified background-selection workflow across standard and polar modes
- pane-order and overlay-priority cleanup attempts

Outcome:
- ARW context branch did not reach stable-mainline rendering quality
- polar basemap remained a custom approximation rather than a true stable-equivalent basemap system
- branch was abandoned
- last stable mainline restored as the active baseline

Stable/mainline rule reaffirmed:
- Stable mainline is v3.1.1.0
- ARW Context work is not merged into stable mainline
- Future work should start from the stable package unless a new branch is intentionally created

v3.0.0
- Improved Lambert parallels mode tooltip formatting with clear spacing between each option.
- Enabled HTML rendering for the Domain Intelligence tooltip content so line breaks display correctly.
- Updated visible UI version strings to v3.0.0.

v3.0.0
- Fixed sticky black Bootstrap tooltips by changing tooltip trigger behavior from hover+focus to hover-only across the app.
- Reinitialized Bootstrap tooltips with consistent camera-style options using container=body, trigger=hover, and html=false.
- Updated wps-tools.js and core tooltip initialization paths so dynamic Domain Intelligence controls and core UI controls dismiss correctly on mouse leave.

v3.0.0
- Fixed duplicate Bootstrap tooltip instances by disposing tooltips before reinitialization across the app.
- Fixed the Lambert parallels mode hover so it uses a single tooltip source instead of stacked duplicate text.
- Kept all buttons and metadata on the same black-background, white-text tooltip system as the camera button.
- Updated visible UI version text to v3.0.0.

v3.0.0
- Removed ARW context naming from the tools layer and package file names.
- Renamed js/wps-ARW context-tools.js to js/wps-tools.js.
- Renamed css/wps-ARW context.css to css/wps-tools.css.
- Updated all internal references to the renamed tools files.
- Migrated storage keys from wrfdw.ARW context.* to wrfdw.tools.* with backward compatibility reads.
- Updated visible UI version text to v3.0.0.

v3.0.0
- Fixed remaining Domain Intelligence hover metadata so dynamically rendered controls now initialize Bootstrap tooltips after panel refresh.
- Lambert parallels mode label, dropdown, and auto-fill-on-projection-change tooltip now use the same black-background, white-text tooltip style as the camera button.
- Updated visible UI version labels to v3.0.0.

v3.0.0
- Unified hover metadata styling so all titled buttons and controls use the same black Bootstrap tooltip style as the camera button.
- Removed native-only tooltip exclusions from runtime tooltip initialization so titles render consistently across the app.
- Kept Lambert parallels mode dropdown labels as: Legacy (default), Domain-optimized, and WRF standard (30/60).
- Updated visible UI version labels to v3.0.0.

v3.0.0-ARW context2
- Fixed ARW context-page responsiveness by removing the heavy full-page MutationObserver loop from the ARW context domain-intelligence helper.
- Added supported lat-lon guidance for both regional and global modes in the ARW context projection advisor.
- Added a lat-long_global sample namelist.wps to the ARW context branch.

v3.0.0-ARW context1
- ARW Context branch only. Added WPS domain intelligence panel with projection advisor, auto-fill projection helper, nest snapping helper, and live domain-rule validation based on WPS guide projection and nesting rules.
- Separate from mainline behavior.

v2.0.5
- Added a selected-domain lock toggle on the domain edge to freeze that domain in place while allowing movement of nests inside it.
- Lock control is shown only for the currently selected domain.
- Updated visible UI version labels to v2.0.5.

v2.0.5
- Dateline handle alignment fix.
- Corner and edge resize markers now use the same unwrapped longitude space as the rendered domain polygon.
- Updated visible UI version labels to v2.0.5.

## [2026-04-24 20:27:16 America/Chicago | 2026-04-25 01:27:16 UTC] v3.1.1.0 stable mainline maintenance update

Source: `CHANGELOG.txt`

- Stable baseline reaffirmed as v3.1.1.0 after abandoning the v3.2.0-ARW context-polar-map branch.
- Reverted delivery baseline to the last stable mainline package for ongoing work.
- Restored the missing disposeBootstrapTooltips(root) helper in js/wps-tools.js.
- Fixed tools-panel startup crash in Chrome/local http.server sessions caused by ReferenceError: disposeBootstrapTooltips is not defined.
- Tooltip cleanup now runs before tools-panel rerender so old Bootstrap/jQuery tooltip instances are disposed and orphan tooltip DOM is removed.
- Tooltip reinitialization remains limited to the current rendered controls after panel refresh.
- No WRF domain math, projection math, basemap ordering, or namelist editor logic changes were made in this maintenance fix.

## [2026-04-24 20:27:16 America/Chicago | 2026-04-25 01:27:16 UTC] v3.2.0-ARW context-polar-map branch disposition

Source: `CHANGELOG.txt`

- Conducted multiple ARW context-only rebuilds for polar background-map behavior, including projection switching, palette alignment, state restore, pane ordering, and unified background naming.
- Deep-audited the stable mainline regular-display basemap system and used it as the reference for ARW context troubleshooting.
- Determined the polar branch remained a custom approximation and did not reach stable-mainline quality.
- Abandoned the ARW context branch and kept all polar-map experiments out of stable mainline.
- Stable mainline v3.1.1.0 remains the source of truth going forward.

v3.0.0
- Improved Lambert parallels mode tooltip formatting with clear spacing between each option.
- Enabled HTML rendering for the Domain Intelligence tooltip content so line breaks display correctly.
- Updated visible UI version strings to v3.0.0.

v3.0.0
- Fixed sticky black Bootstrap tooltips by changing tooltip trigger behavior from hover+focus to hover-only across the app.
- Reinitialized Bootstrap tooltips with consistent camera-style options using container=body, trigger=hover, and html=false.
- Updated wps-tools.js and core tooltip initialization paths so dynamic Domain Intelligence controls and core UI controls dismiss correctly on mouse leave.

v3.0.0
- Fixed duplicate Bootstrap tooltip instances by disposing tooltips before reinitialization across the app.
- Fixed the Lambert parallels mode hover so it uses a single tooltip source instead of stacked duplicate text.
- Kept all buttons and metadata on the same black-background, white-text tooltip system as the camera button.
- Updated visible UI version text to v3.0.0.

v3.0.0
- Removed ARW context naming from the tools layer and package file names.
- Renamed js/wps-ARW context-tools.js to js/wps-tools.js.
- Renamed css/wps-ARW context.css to css/wps-tools.css.
- Updated all internal references to the renamed tools files.
- Migrated storage keys from wrfdw.ARW context.* to wrfdw.tools.* with backward compatibility reads.
- Updated visible UI version text to v3.0.0.

v3.0.0
- Fixed remaining Domain Intelligence hover metadata so dynamically rendered controls now initialize Bootstrap tooltips after panel refresh.
- Lambert parallels mode label, dropdown, and auto-fill-on-projection-change tooltip now use the same black-background, white-text tooltip style as the camera button.
- Updated visible UI version labels to v3.0.0.

v3.0.0
- Unified hover metadata styling so all titled buttons and controls use the same black Bootstrap tooltip style as the camera button.
- Removed native-only tooltip exclusions from runtime tooltip initialization so titles render consistently across the app.
- Kept Lambert parallels mode dropdown labels as: Legacy (default), Domain-optimized, and WRF standard (30/60).
- Updated visible UI version labels to v3.0.0.

v3.0.0-ARW context2
- Fixed ARW context-page responsiveness by removing the heavy full-page MutationObserver loop from the ARW context domain-intelligence helper.
- Added supported lat-lon guidance for both regional and global modes in the ARW context projection advisor.
- Added a lat-long_global sample namelist.wps to the ARW context branch.

v3.0.0-ARW context1
- ARW Context branch only. Added WPS domain intelligence panel with projection advisor, auto-fill projection helper, nest snapping helper, and live domain-rule validation based on WPS guide projection and nesting rules.
- Separate from mainline behavior.

v2.0.5
- Added a selected-domain lock toggle on the domain edge to freeze that domain in place while allowing movement of nests inside it.
- Lock control is shown only for the currently selected domain.
- Updated visible UI version labels to v2.0.5.

v2.0.5
- Dateline handle alignment fix.
- Corner and edge resize markers now use the same unwrapped longitude space as the rendered domain polygon.
- Updated visible UI version labels to v2.0.5.

## [2026-04-17] v0.9.7

Source: `ALL_PATCH_NOTES.txt`

Full namelist catalog exposure:
- Enabled rendering of all loaded Registry-backed groups and variables, with the core runtime groups listed first.
- Aligned export with the full catalog so non-curated variables now survive round-trip editing.
- Defaulted group startup state to collapsed so the expanded metadata footprint stays usable.

## [2026-04-16T01:35:00Z] v0.8.10

Source: `ALL_PATCH_NOTES.txt`

- Fixed wrapped selector path that still used querySelector("input#..."), which failed for ids beginning with digits like 03input
- Changed wrapped hydration/field update lookup to document.getElementById(fieldId)
- Reduced expected pre-render missing-node error log spam
- Audited Tropical starter template and changed sf_sfclay_physics to 1 to match bl_pbl_physics=1 compatibility requirements


--------------------------------------------------

## [2026-04-16 01:45] v0.9.0

Source: `CHANGELOG.txt`

- Consolidated the latest stable fixes into the v0.9.0 release package.
- Includes the render-order rewrite, safe hydration for numeric-leading field ids, logical dropdown fixes, side-by-side multi-domain editors, metadata-backed finite-value dropdowns, numeric export typing, curated editor rendering, preset selector flow, UI error log, and hybrid_opt final dropdown cleanup.
- Keeps a single consolidated patch notes file: ALL_PATCH_NOTES.txt.

--------------------------------------------------

## [2026-04-16 01:35] v0.9.0

Source: `ALL_PATCH_NOTES.txt`

Hybrid_opt final UI cleanup:
- Added an explicit select-values catalog entry for dynamics/hybrid_opt.
- hybrid_opt now renders as a metadata-backed dropdown instead of a bare integer field.
- Labels now come from the registry meaning:
  0 = Original WRF coordinate
  1 = Terrain-following using hybrid formulation
  2 = Klemp cubic form with etac
- This fixes the last visible issue where hybrid_opt showed a raw "0" line and an unlabeled option list.

WRF Config Studio Patch Notes Consolidated
========================================


===== PATCH_NOTES_ALLOWED_VALUES_v0.7.4.txt =====
WRFDomainWizard Patch Notes - v0.7.4
===================================

This build enforces dropdown menus for variables with supported finite value sets.

Sources used to build dropdowns:
2. finite one_of values implied by compatibility rules
3. logical True/False mapping

Goal:
- allow only supported selections for enumerated parameters such as PBL, surface-layer, radiation, and similar scheme selectors
- avoid letting unsupported arbitrary values be selected in those fields


===== PATCH_NOTES_CLEAN_TRIGGERS_v0.8.4.txt =====
WRFDomainWizard Patch Notes - v0.8.4
===================================

This build fixes false compatibility conflicts caused by default-seeded values being treated as active triggers.

New behavior:
- A compatibility trigger is only active when the trigger variable is explicitly changed away from its default value,
  or when it is the variable currently being edited.
- Hidden default values no longer generate conflict cards or row-level conflict messages.

This specifically cleans up false conflicts for cu_physics when kfeta_trigger, thBinSize,
minDeepFreq, and minShallowFreq are present only through defaults.


===== PATCH_NOTES_COMPATIBILITY.txt =====

Included changes:
- Added compatibility evaluation and UI color outlines to js/wrf-domain-wizard.js.
- Added compatibility legend and pill styles to css/wrf-domain-wizard.css.
- Hardened JSON loading with response.ok checks.
- Reset stale namelist state when opening from namelist.wps.
- Replaced the fragile openNamelistInputAsync path with a safer implementation.

Color semantics:
- Green: current selection satisfies hard compatibility rules.
- Yellow: soft or workflow caveat, or rule cannot be fully checked inside the editor.
- Red: current selection conflicts with an active hard rule.


===== PATCH_NOTES_CURATED_EDITOR_v0.6.2.txt =====
WRFDomainWizard Patch Notes - v0.6.2
===================================


New behavior:
- The editor only renders the curated sections and curated variable lists.
- Empty sections:
  &fdda
  &grib2
  are shown as empty by design.

This applies regardless of whether the user chooses:
- Beginner – CONUS
- Beginner – Tropical
- Advanced


===== PATCH_NOTES_DEEP_DIVE_v0.8.5.txt =====
WRFDomainWizard Patch Notes - v0.8.5
===================================

This build was produced after a deep-dive review of the uploaded source JS and JSON metadata files.

Fixes included:
- compatibility trigger activation now uses explicitly stored namelist values and compares them against stored defaults
- cu_physics no longer shows ancillary trigger warnings from hidden defaulted variables like kfeta_trigger or CuP controls
- parent_grid_ratio and parent_time_step_ratio are treated as integers rather than prose-derived dropdowns
- num_land_cat is treated as an integer rather than the bogus placeholder 'set'
- bdy_control is normalized by domain role so specified/nested are not both true or both false


===== PATCH_NOTES_DEFAULTS_SEEDED_v0.5.5.txt =====
WRFDomainWizard Patch Notes - v0.5.5
===================================


New behavior:
1. Load variable definitions and default sources.
2. Build a full default namelist object using registry/readme/manual-backed defaults.
3. Expand max_dom variables to the active domain count.
4. Overlay WPS-derived domain geometry as read-only fields.
5. Render the editor from the seeded namelist object.

Result:
- The editor opens with real defaults already populated.
- Users can change non-WPS-locked variables immediately.


===== PATCH_NOTES_DOC_BACKED_UPGRADE.txt =====
Documentation-backed upgrade patch

Added after reading the full uploaded WRF User Guide chapter 3, 5, and 6 PDFs offline via text extraction.

Included upgrades:
- parent_grid_ratio recommendation warning in the WPS domain editor
  * time_step versus DX
  * parent_grid_ratio versus feedback
  * sst_update companion settings and sf_ocean_physics conflict
  * bucket_mm / bucket_J radiation compatibility
  * adaptive time stepping companion recommendations
  * coarse-grid versus convection-scale cumulus advisories
- smarter starter-template suggestion hook preserved and extended


===== PATCH_NOTES_DOMAIN_SIZE_WARNING.txt =====
Added a domain size warning in the WPS domain editor when e_we or e_sn is below 100 grid points. The warning is non-blocking and highlights the grid panel.

===== PATCH_NOTES_DROPDOWN_AUDIT_v0.7.5.txt =====
WRFDomainWizard Patch Notes - v0.7.5
===================================

This build expands dropdown coverage after an audit against the uploaded Registry, Users Guide, manual, and README-derived JSON files.

Dropdown inference now uses:
1. explicit select.values catalogs,
2. finite value sets from compatibility rules,
3. finite value patterns parsed from description text, such as:
   - set to =1 to ...
   - 1: option A 2: option B
   - -1 = inactive

Open-ended numeric fields remain editable text/number inputs.


===== PATCH_NOTES_EXPLICIT_TRIGGER_FILTERING_v0.8.3.txt =====
WRFDomainWizard Patch Notes - v0.8.3
===================================

This build fixes false compatibility conflicts caused by hidden default-only trigger variables.

Problem:
- The compatibility engine was using effective values (including defaults) when checking whether a trigger was active.
- That made hidden variables like kfeta_trigger=1 and CuP defaults such as thBinSize=1, minDeepFreq=1, and minShallowFreq=1 appear active even when the user had not set them.

Fix:
- A rule trigger now activates only when the trigger variable is explicitly set in the namelist object, or when the variable is the currently edited override.

Result:
- cu_physics and similar rows no longer show false conflicts from hidden default-only options.


===== PATCH_NOTES_FULLFIX_v0.4.3.txt =====
Rebuilt from WRFDomainWizard-web_version_display(1).zip with full-row compatibility fill and a backfilled CHANGELOG.


===== PATCH_NOTES_LOGICAL_DROPDOWNS_v0.7.9.txt =====
Logical fields now use True/False dropdowns in side-by-side multi-domain layouts.


===== PATCH_NOTES_MASTER_MANIFEST_v0.4.4.txt =====
Patched against wrf_namelist_master_manifest and wrf_namelist_master_full.
Added 22 Users Guide variables missing from the registry-driven editor path.
Normalized alias/name mismatches and repaired several compatibility rule references.


===== PATCH_NOTES_METADATA_DROPDOWNS_v0.8.0.txt =====
Metadata-rich dropdown labels patch
- show '#: description' labels for curated finite-choice parameters using Users Guide-backed metadata.


===== PATCH_NOTES_NAMELIST_EDITOR_v0.5.3.txt =====
WRFDomainWizard Patch Notes - v0.5.3
====================================


Root cause:
- Some Registry-backed variables could resolve to undefined or null values during UI construction.
- The editor previously threw a hard error instead of applying a safe fallback.

Fixes:
- Safe fallback values added for all supported field types
- Input field updates now tolerate undefined/null values
- WPS sidebar namelist button now reports editor-open failures through an error dialog and the browser console


===== PATCH_NOTES_NUMERIC_SELECTION_EXPORT_v0.7.6.txt =====
WRFDomainWizard Patch Notes - v0.7.6
===================================

This build fixes namelist export typing for dropdown-backed variables.

Before:
- numeric selections could be stored/exported as strings
- output looked like:
  mp_physics = '6', '6'

Now:
- numeric selections export as numbers:
  mp_physics = 6, 6
- logical selections export as .true. / .false.
- real string selections such as physics_suite stay quoted:
  physics_suite = 'tropical'


===== PATCH_NOTES_PRESET_SELECTOR_v0.6.1.txt =====
WRFDomainWizard Patch Notes - v0.6.1
===================================

This build is a full rebuild from the last working package.

New behavior:
- Users must choose:
  - Beginner – CONUS
  - Beginner – Tropical
  - Advanced

Mode behavior:
- Beginner – CONUS: applies the strict NCAR-style CONUS starter template
- Beginner – Tropical: applies the tropical starter template
- Advanced: keeps the curated core sections workflow without applying a starter template

This build preserves the earlier working app files and patches rather than using a minimal scaffold.


===== PATCH_NOTES_RULES_v0.7.3.txt =====
Expanded curated-core compatibility coverage.
- Added explicit allowed-off rules for cu_physics=0 and shcu_physics=0.
- Added CuP-only rules for thBinSize, minDeepFreq, minShallowFreq (require cu_physics=10).
- Fixed isftcflx parsing to require sf_sfclay_physics=1.
- Updated compatibility metadata and summaries.


===== PATCH_NOTES_RULE_ACTIVATION_FILTERING_v0.8.2.txt =====
Rule activation filtering patch for compatibility inspector. Only currently active rules are shown for the selected variable. Inactive potential rules are hidden. Timestamp: 2026-04-15 23:39 UTC


===== PATCH_NOTES_SAFE_CURATED_v0.7.0.txt =====
WRFDomainWizard Patch Notes - v0.7.0
===================================

This build uses the safe option for curated rendering.

What changed:
- Rebuilt from the full uploaded package, not a scaffold.
- Restored the original editor initialization behavior.
- Curated filtering is now applied safely inside the existing lifecycle.

Core sections:
- &time_control
- &domains
- &physics
- &dynamics
- &bdy_control
- &fdda
- &grib2
- &namelist_quilt

Empty by design:
- &fdda
- &grib2


===== PATCH_NOTES_SAFE_CURATED_v0.7.1.txt =====


===== PATCH_NOTES_SAFE_CURATED_v0.7.2.txt =====
Patched _updateGroupView to tolerate groups without a namelist-input-set-variable-count badge.


===== PATCH_NOTES_SIDE_BY_SIDE_ALL_DOMAINS_v0.7.8.txt =====
WRFDomainWizard Patch Notes - v0.7.8
===================================

This build fixes the remaining side-by-side layout issue for max_dom selection and logical controls.

What was wrong:
- the patched selection renderer returned malformed HTML for dropdown-backed multi-domain fields
- browsers then nested the controls incorrectly, which made d01/d02/d03 appear stacked

What changed:
- selection/logical controls now return properly wrapped field HTML
- multi-domain select controls now use fixed-width flex cells to align under d01/d02/d03 headers


===== PATCH_NOTES_SIDE_BY_SIDE_DOMAINS_v0.7.7.txt =====
WRFDomainWizard Patch Notes - v0.7.7
===================================


New behavior:
- Multi-domain values render side by side.
- Small domain headers (d01, d02, ...) appear above those values.
- This is a UI-only layout improvement and does not change namelist export behavior.


===== PATCH_NOTES_SMART_FILTERING_v0.5.0.txt =====
Smart filtering upgrade v0.5.0

This build uses Registry source-file metadata to hide package-specific variables by default.

Default mode:
- Relevant variables only

Always visible:
- WPS-derived read-only values
- Variables already set in the namelist

Package-aware visibility:
- Noah-MP variables reveal when sf_surface_physics selects Noah-MP or noah_mp settings are already set
- Chemistry variables reveal when chem_opt is enabled or chem settings are already set
- Lake, fire, CAM, stochastic, AFWA, diagnostics, tracker, and tornado variables reveal when their matching package is active

Fallback:
- Users can switch to "Show all Registry variables" to inspect every variable from the bundled Registry catalog.


===== PATCH_NOTES_SMART_FILTERING_v0.5.1.txt =====
Fixed smart Registry filtering patch placement inside the active JavaScript bundle scope so the namelist editor opens correctly.


===== PATCH_NOTES_SPARSE_TEXT_v0.5.7.txt =====
WRFDomainWizard Patch Notes - v0.5.7
===================================

This build corrects the previous package that did not visibly update.

Behavior in this build:
- The editor starts from actual defaults so users can edit immediately.
- The Text tab omits unchanged defaults, matching normal WRF practice.
- The sparse text output is limited to:
  &time_control
  &domains
  &physics
  &dynamics
  &bdy_control
  &fdda
  &grib2
  &namelist_quilt
- &fdda and &grib2 are emitted as empty stubs by default.


===== PATCH_NOTES_STABILITY_v0.8.7.txt =====
WRFDomainWizard Patch Notes - v0.8.7
===================================

This build focuses on stability after the v0.8.6 null-safe update surfaced:
- bdy_control logical pre-render field writes to missing DOM nodes
- compatibility option-scan recursion leading to maximum call stack exceeded
- unreadable UI Error Log colors

Fixes:
- null-safe _setInputFieldValue and _updateVariableFieldValue wrappers
- recursion guard around compatibility selection option scans
- readable UI Error Log text and button colors
- refreshed JSON metadata bundles from latest uploads


===== PATCH_NOTES_TEMPLATE_STARTERS.txt =====
Template starter patch
======================


Included templates:
- Beginner: CONUS
- Beginner: Tropical
- Custom: uploaded jun01 starter
- Blank / manual

Behavior:
- Tropical is suggested when geogrid.ref_lat is within +/-23.5 degrees.
- Otherwise CONUS is suggested.
- If the editor has only WPS-derived geometry and no user-entered editable values yet, the suggested template is auto-applied.
- WPS-derived geometry remains read-only and is preserved when applying any template.

Files added/changed:
- js/wrf-domain-wizard.js
- css/wrf-domain-wizard.css
- PATCH_NOTES_TEMPLATE_STARTERS.txt


Upgrade: Compatibility details panel
- Click any namelist row to inspect active rules and requirements.
- Filter rows to show all, only ruled rows, or only conflicts.
- Selected variable is highlighted with a blue focus ring.


===== PATCH_NOTES_UI_ERROR_LOG_v0.6.3.txt =====
WRFDomainWizard Patch Notes - v0.6.3
===================================

This build adds an in-app UI Error Log to help debug button-click failures and runtime problems.

New behavior:
- A floating "Show UI Error Log" button is available in the UI.
- Failed actions can write detailed logs containing:
  - timestamp
  - action label
  - message
  - source
  - stack trace
- Unhandled runtime errors and unhandled promise rejections are captured automatically.



===== PATCH_NOTES_VARIABLE_CORRECTNESS_v0.8.1.txt =====
This build fixes num_land_cat control type and expands/fixes cu_physics dropdown metadata.


===== PATCH_NOTES_VERSION_DISPLAY.txt =====
Version display added to UI on 2026-04-14.

Changes:
- Added visible version badge to Domains sidebar header on index page.
- Updated page titles to include version string v0.4.2.


===== PATCH_NOTES_WPS_SERIALIZER_v0.5.2.txt =====
Fixed WPS namelist serializer crash on undefined optional geogrid values.


===== PATCH_NOTES_RENDER_ORDER_REWRITE_v0.8.8.txt =====
WRFDomainWizard Patch Notes - v0.8.8
===================================

This build rewrites the namelist editor loading flow.

New order:
1. Load variables and defaults
2. Apply starter template into the namelist data only
3. Overlay WPS-derived read-only values into the namelist data
4. Render the editor controls
5. Hydrate the visible controls from the namelist data

This prevents template and WPS seeding from trying to write to DOM nodes before those nodes exist.

==================================================

## [2026-04-16 01:25] v0.8.9 - Safe ID hydration

Source: `ALL_PATCH_NOTES.txt`

- Replaced querySelector('input#...') and querySelector('select#...') field lookups with document.getElementById(fieldId) so IDs beginning with digits no longer throw SyntaxError.
- Base _setInputFieldValue now guards missing nodes safely.
- Pre-render missing-field skips are silent to avoid flooding the UI error log.

## [2026-04-16 01:35] - Version 0.8.11

Source: `ALL_PATCH_NOTES.txt`

Fixed:
- removed remaining invalid CSS selector pre-check in wrapped _setInputFieldValue path
- replaced querySelector-based field existence guard with getElementById for ids like 03input
- eliminated lingering UI Error Log entry for 'input#03input' invalid selector

## [2026-04-16 01:25] - Version 0.8.9

Source: `CHANGELOG.txt`

- Fixed invalid CSS selector usage for field IDs beginning with digits by switching hydration and base field updates to document.getElementById.
- Removed noisy pre-render missing-node error log spam for fields that are intentionally not rendered yet.
- Kept render-order rewrite and stability fixes intact.

--------------------------------------------------

## [2026-04-16 01:15 America/Chicago] - Version 0.8.8

Source: `CHANGELOG.txt`

Changed:
- rewrote namelist editor render order to apply template data into the namelist first, render the editor second, and hydrate visible fields last
- template placeholders like RUNLENGTH / STARTYEAR now resolve before hydration using editor defaults
- WPS-derived locked domain values are now applied as data-only before render, then hydrated after render

Fixed:
- removed pre-render field update spam from null-safe skips
- prevented template application from trying to write to DOM controls before those controls exist
- preserved preset mode selection while avoiding timing bugs in openNamelistWpsAsync
- kept boundary control normalization and num_land_cat correction in the new data-first flow

Notes:
- all patch notes are now consolidated into ALL_PATCH_NOTES.txt

## [2026-04-16 00:58] - Version 0.8.7

Source: `CHANGELOG.txt`

Fixed:
- prevented null field crashes when bdy_control logical controls are normalized before or during render
- added null-safe field writes for missing select/input nodes during pre-render namelist updates
- added compatibility option-scan recursion guard to prevent maximum call stack size exceeded in selection metadata scans
- forced readable UI Error Log colors so text no longer renders black-on-black

Changed:
- refreshed bundled namelist compatibility, manual, readme, registry, select-values, templates, and users-guide JSON files from the latest uploaded sources

## [2026-04-15 19:30] v0.8.5

Source: `CHANGELOG.txt`

- Deep-dive fix for compatibility trigger activation using stored namelist values instead of default getter values
- Removed ancillary cumulus trigger warnings from cu_physics unless cu_physics itself is the triggering rule
- Forced parent_grid_ratio and parent_time_step_ratio back to integer controls
- Forced num_land_cat back to integer control and normalized bogus 'set' placeholder to 21
- Enforced bdy_control domain-role normalization: d01 specified=true/nested=false; d02+ specified=false/nested=true

## [2026-04-15 19:15] Version v0.8.4

Source: `CHANGELOG.txt`

- Fixed compatibility trigger activation so default-seeded values no longer count as active triggers unless changed from their defaults
- Prevented false cu_physics conflicts from hidden default values like kfeta_trigger=1, thBinSize=1, minDeepFreq=1, and minShallowFreq=1
- Kept explicit user changes and the currently edited variable active for rule evaluation
--------------------------------------------------

## [2026-04-15 18:58] Version v0.8.3

Source: `CHANGELOG.txt`

- Fixed compatibility rule activation so default-only hidden values do not trigger rule cards or row conflicts
- Trigger variables must now be explicitly set in the namelist object to activate a rule
- Prevents false cu_physics conflicts from default kfeta_trigger=1, thBinSize=1, minDeepFreq=1, and minShallowFreq=1

WRFDomainWizard Change Log
==========================

## [2026-04-15 23:39 UTC] - Version 0.8.2

Source: `CHANGELOG.txt`

Added:
- rule activation filtering in the Compatibility details panel

Changed:
- compatibility inspector now only shows rules that are actually active for the current variable and current namelist state
- inactive potential rules no longer clutter the inspector for variables like cu_physics
- "Only ruled rows" filter now uses active evaluated messages instead of raw catalog presence

Fixed:
- removed false-looking conflicts in the compatibility inspector caused by evaluating non-triggered rules

Notes:
- this keeps the option scan intact while limiting detailed rule cards to active triggers

--------------------------------------------------

## [2026-04-15] - Version 0.8.1

Source: `CHANGELOG.txt`

Fixed:
- num_land_cat is no longer rendered as a dropdown with the bogus value "set"
- cu_physics dropdown options now include the missing supported values 2, 6, and 96 with proper metadata labels

Changed:
- cu_physics compatibility wording now uses "Requires" and "Enables" labels for dependency-style messages
- variable correctness overrides now take precedence over generic dropdown inference

--------------------------------------------------

## [2026-04-15] - Version 0.8.0

Source: `CHANGELOG.txt`

Added:
- metadata-rich dropdown labels for curated scheme selectors

Changed:
- dropdowns now show value plus scheme information instead of bare numbers when metadata is available
- examples: radiation, surface layer, land surface, urban, PBL, cumulus, and physics suites

--------------------------------------------------

## [2026-04-15] - Version 0.7.9

Source: `CHANGELOG.txt`

Fixed:
- logical multi-domain fields now render as clean True / False dropdowns
- bdy_control logical fields such as specified and nested no longer show malformed "True: True" labels
- selection fields now correctly mark the active selected option by comparing against the current value

Changed:
- logical controls keep the side-by-side multi-domain layout introduced in v0.7.8

--------------------------------------------------

## [2026-04-15] - Version 0.7.8

Source: `CHANGELOG.txt`

Fixed:
- multi-domain dropdown and logical controls now render side by side instead of stacking vertically
- corrected malformed HTML in the selection renderer that caused browser nesting issues for max_dom selection fields

Changed:
- added layout polish for multi-domain select controls so d01/d02/d03 controls stay aligned under their headers

--------------------------------------------------

## [2026-04-15] - Version 0.7.7

Source: `CHANGELOG.txt`

Changed:
- added compact per-domain headers (d01, d02, ...) above multi-domain controls

Fixed:
- domain-specific values for variables such as physics schemes now align horizontally for easier comparison

--------------------------------------------------

## [2026-04-15] - Version 0.7.6

Source: `CHANGELOG.txt`

Fixed:
- selection HTML now correctly marks the current option as selected

Changed:
- selection values are coerced by type:
  - numeric-looking option IDs export as integers/reals
  - logical-looking option IDs export as booleans
  - true string selectors like physics_suite remain quoted strings

Notes:
- this fixes examples like mp_physics = 6, 6 instead of '6', '6'

--------------------------------------------------

## [2026-04-15] - Version 0.7.5

Source: `CHANGELOG.txt`

Added:
- second-pass dropdown inference from Users Guide, manual, and README descriptions

Changed:
- finite option fields now draw allowed values from three sources in order:
  select.values, compatibility rules, and parsed description text

Fixed:
- more finite-value namelist options now render as dropdowns even when select.values was incomplete

--------------------------------------------------

## [2026-04-15] - Version 0.7.4

Source: `CHANGELOG.txt`

Added:
- enforced enumerated-value controls for variables with supported value catalogs

Changed:
- variables with allowed values in select.values now stay dropdowns after metadata merges
- compatibility rule value sets are used as a fallback source for finite dropdown options
- logical variables are rendered as dropdowns with True/False choices

Fixed:
- scheme selectors such as PBL and surface-layer options no longer fall back to arbitrary freeform values when a supported option list exists

--------------------------------------------------

## [2026-04-15] - Version 0.7.2

Source: `CHANGELOG.txt`

Fixed:
- _updateGroupView now safely handles curated sections that do not render the standard set-variable count badge

## [2026-04-15] - Version 0.7.3

Source: `CHANGELOG.txt`

Added:
- expanded curated-core compatibility rules for cumulus and shallow-cumulus options
- explicit allowed-off states for cu_physics=0 and shcu_physics=0
- CuP option guards for thBinSize, minDeepFreq, and minShallowFreq

Fixed:
- corrected the isftcflx rule so it now requires sf_sfclay_physics=1 instead of a malformed parsed value

Changed:
- compatibility summaries for curated core variables now better explain allowed off-states and common coupling constraints

--------------------------------------------------

## [2026-04-15] - Version 0.6.3

Source: `CHANGELOG.txt`

Added:
- in-app UI Error Log panel for debugging failed button actions
- copy, clear, and hide controls for the error log
- floating "Show UI Error Log" button

Changed:

Notes:
- unhandled runtime errors and unhandled promise rejections are now captured into the in-app log

--------------------------------------------------

## [2026-04-15] - Version 0.6.2

Source: `CHANGELOG.txt`

Fixed:

Changed:
- editor now only renders the curated sections:
  &time_control
  &domains
  &physics
  &dynamics
  &bdy_control
  &fdda
  &grib2
  &namelist_quilt
- within those sections, only the curated variable lists are shown
- &fdda and &grib2 render as intentionally empty sections by default

Notes:
- This applies across Beginner CONUS, Beginner Tropical, and Advanced startup modes

--------------------------------------------------

## [2026-04-15] - Version 0.6.1

Source: `CHANGELOG.txt`

Added:
- three startup modes:
  Beginner – CONUS
  Beginner – Tropical
  Advanced

Changed:
- Beginner – CONUS now uses the strict NCAR-style CONUS starter template
- Beginner – Tropical uses the tropical starter template
- Advanced opens the curated core-sections workflow without applying a starter template

Fixed:
- rebuilt from the last real full working package instead of a placeholder scaffold
- version badge updated to v0.6.1

--------------------------------------------------

## [2026-04-15] - Version 0.5.7

Source: `CHANGELOG.txt`

Changed:
- Text output is now sparse and omits unchanged defaults

Added:
- sparse text export limited to these core sections:
  &time_control
  &domains
  &physics
  &dynamics
  &bdy_control
  &fdda
  &grib2
  &namelist_quilt

Fixed:
- version badge now updates to v0.5.7 in the UI
- unchanged defaults are no longer emitted into the Text tab
- &fdda and &grib2 now render as empty section stubs by default

--------------------------------------------------

## [2026-04-15] - Version 0.5.5

Source: `CHANGELOG.txt`

Added:

Changed:
- The editor now builds a real default-filled namelist object before applying WPS-locked domain values
- WPS-derived domain geometry continues to override and lock the corresponding defaults

Fixed:
- users now see actual source-backed defaults first, then can edit the remaining values

Notes:
- Latest uploaded JSON bundles were incorporated for registry, readme, users guide, manual, templates, compatibility, and geog data

--------------------------------------------------

## [2026-04-15] - Version 0.5.3

Source: `CHANGELOG.txt`

Fixed:
- Added safe fallback rendering for unset selection, logical, integer, real, character, and datetime fields

Changed:
- Namelist editor now degrades gracefully when Registry-backed variables lack a usable default in a given workflow

Notes:

--------------------------------------------------

## [2026-04-15] - Version 0.5.2

Source: `CHANGELOG.txt`

Fixed:
- Prevented WPS namelist save dialog crashes when optional geogrid fields are unset
- Formatter now skips undefined/null optional namelist values instead of throwing fatal errors

Changed:
- WPS namelist serializer is now tolerant of projection-specific optional fields like truelat2, pole_lat, and pole_lon

--------------------------------------------------

## [2026-04-15] - Version 0.5.0

Source: `CHANGELOG.txt`

Added:
- Registry-backed smart filtering mode for namelist variables
- Variable scope selector with "Relevant variables only" and "Show all Registry variables"
- Automatic hiding of package-specific variables until matching physics or package options are enabled

Changed:
- Package-specific variables from Registry sources such as Noah-MP, chemistry, lake, fire, CAM, stochastic, AFWA, diagnostics, tracker, and tornado now stay hidden by default unless relevant
- The editor now uses Registry source file tags to decide which advanced variables belong to specialized packages

Notes:
- Smart filtering is conservative: read-only values and already-set values always remain visible
- Some advanced packages without a clear namelist activation switch still require "Show all Registry variables" to inspect manually

--------------------------------------------------

## [2026-04-15] - Version 0.4.4

Source: `CHANGELOG.txt`

Added:
- Users Guide supplement patch for registry-driven editor coverage
- Alias support through data normalization for mixed-name variables from the master manifest
- Compatibility rule repairs for SST update, obs nudging, and bucket_J / bucket_j naming

Fixed:
- 22 master-manifest variables missing from the registry-driven namelist editor
- Section mismatches for ocean_levels and num_traj
- Name mismatches for non-hydrostatic, use_baseparm_fr_nml, thBinSize, minDeepFreq, minShallowFreq, and bucket_J
- Missing group resolution for auxinput4_* and auxinput11_* compatibility checks

Changed:
- Workflow-only compatibility rules that depend on external preprocessing, compile flags, or geogrid/metgrid state now evaluate as advisory instead of broken hard checks

Notes:
- This patch closes the editor-availability gaps found against the 2026-04-15 master manifest and improves compatibility rule resolution without requiring additional registry uploads.

--------------------------------------------------

## [2026-04-15] - Version 0.5.1

Source: `CHANGELOG.txt`

Fixed:
- Moved smart Registry filtering patch inside the live JavaScript bundle scope so the namelist editor opens correctly
- Removed dead duplicate smart-filter code after the bundle closure

Changed:
- Registry smart filtering now attaches to the active NamelistInputEditor runtime path

--------------------------------------------------


v2.0.0
- Rebuilt from the stable WPS code guides and preserved the working WPS button layout and UI error log.
- Removed SRTM / external elevation overlay feature and deleted bundled SRTM assets from the rebuild.
- Removed rotated lat-lon and lat-lon_global sample content, and kept lambert, mercator, polar, and lat-long_regional samples.
- Rebuilt namelist.input as a hybrid old/new editor using registry, users guide, readme, manual, subsections, inventory, and compatibility metadata.

## [2026-04-14] - Version 0.4.3

Source: `CHANGELOG.txt`

Added:
- Full-row compatibility highlighting in the namelist editor
- CHANGELOG.txt in the project root for tracking dated changes

Changed:
- Replaced thin compatibility outlines with filled row backgrounds and a left color bar
- Preserved the existing version badge in the UI

Notes:
- This package is rebuilt from the working version-display build and keeps the existing compatibility, template, and validation logic already present there

--------------------------------------------------

## [2026-04-14] - Version 0.4.2

Source: `CHANGELOG.txt`

Added:
- Visible version number badge in the UI

Changed:
- Page titles updated to include the version string

--------------------------------------------------

## [2026-04-14] - Version 0.4.1

Source: `CHANGELOG.txt`

Added:
- CHANGELOG design and backfilled project history
- Rule classification design for hard rules, soft rules, and tuning parameters

Fixed:
- False-positive compatibility presentation identified for numeric tuning parameters

Changed:
- Red is reserved for documented conflicts or invalid combinations

--------------------------------------------------

## [2026-04-14] - Version 0.4.0

Source: `CHANGELOG.txt`

Added:
- Starter template support for beginner workflows
- Compatibility rule engine, legend, and inspector panel
- Domain warning for grids smaller than 100 x 100
- Sibling nest overlap and minimum-spacing validation
- Documentation-backed validation layer based on uploaded WRF guides

Fixed:
- Template initialization scoping problems
- Namelist editor startup issues that left only domain values populated
- JSON loader robustness for local serving issues

Changed:
- WPS-derived geometry is preserved when templates are applied

--------------------------------------------------

## [2026-04-13] - Version 0.3.0

Source: `CHANGELOG.txt`

Added:
- Initial compatibility visualization system
- Curated compatibility rule support and variable-level messaging

Fixed:
- Silent JSON loading failures
- Description fallback issues in the namelist variable display

--------------------------------------------------

## [2026-04-12] - Version 0.2.0

Source: `CHANGELOG.txt`

Added:
- JSON-based variable catalog using registry, readme, user guide, and selectable values

Fixed:
- Variable population failures caused by JSON path issues
- file:// execution problems by moving to HTTP serving

--------------------------------------------------

## [2026-04-11] - Version 0.1.0

Source: `CHANGELOG.txt`

Added:
- Project initialization
- Merged WRF namelist metadata sources into a unified foundation for the editor
