# Raw and provenance data

This folder stores raw or provenance-oriented data used to build and support runtime metadata catalogs.

Important source groups include:

- `registry/` — Registry source snapshots used for namelist metadata.
- `wrf/4.8.1-dev/` — unreleased WRF Registry preview from a development source branch. This is not an official WRF release tag.
- `wrf/releases/` — WRF release/provenance material used as reference evidence.
- `namelist.input.*.json` — extracted or curated namelist metadata sources.
- `geog.json` — geographic reference data derived from Natural Earth GeoJSON sources.

JSON files are data artifacts and do not support inline comments. Use this README and `docs/SOURCE_FILE_NOTES.md` for explanatory notes.
