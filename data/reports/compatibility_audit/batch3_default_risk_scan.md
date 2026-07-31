# Batch 3 default-risk scan

Purpose: identify candidates that are safe to enforce without creating default-page false positives.

- Current valid rule count: 31
- Current total rule count: 83

## `physics.swrad_scat`

- Candidate note: candidate: only works with ra_sw_physics=1
- Already valid trigger: `False`
- Catalog status: present
- type: `real`
- defaultValue: `1.0`
- description: `SWRAD_SCAT | SCATTERING FACTOR IN SWRAD`
- versions: `{'baselineVersion': '4.7.1', 'changedSinceBaseline': False, 'currentVersion': '4.8.1-dev', 'firstSeen': '4.7.1', 'presentIn': ['4.7.1', '4.8.1-dev'], 'status': 'active'}`

## `physics.isfflx`

- Candidate note: candidate: only works with sf_sfclay_physics=1,5,7,11
- Already valid trigger: `False`
- Catalog status: present
- type: `integer`
- defaultValue: `1`
- description: `ISFFLX`
- versions: `{'baselineVersion': '4.7.1', 'changedSinceBaseline': False, 'currentVersion': '4.8.1-dev', 'firstSeen': '4.7.1', 'presentIn': ['4.7.1', '4.8.1-dev'], 'status': 'active'}`

## `physics.kfeta_trigger`

- Candidate note: candidate: only works with cu_physics=1
- Already valid trigger: `False`
- Catalog status: present
- type: `integer`
- defaultValue: `1`
- description: `KFETA Trigger function`
- versions: `{'baselineVersion': '4.7.1', 'changedSinceBaseline': False, 'currentVersion': '4.8.1-dev', 'firstSeen': '4.7.1', 'presentIn': ['4.7.1', '4.8.1-dev'], 'status': 'active'}`

## `physics.convtrans_avglen_m`

- Candidate note: candidate: only works with cu_physics=3,5,93
- Already valid trigger: `False`
- Catalog status: present
- type: `real`
- defaultValue: `30.0`
- description: `convtrans_avglen_m | averaging time for convective transport output variables (minutes)`
- versions: `{'baselineVersion': '4.7.1', 'changedSinceBaseline': False, 'currentVersion': '4.8.1-dev', 'firstSeen': '4.7.1', 'presentIn': ['4.7.1', '4.8.1-dev'], 'status': 'active'}`

## `physics.maxiens`

- Candidate note: candidate: only works with cu_physics=3,5,93
- Already valid trigger: `False`
- Catalog status: present
- type: `integer`
- defaultValue: `1`
- description: `maxiens`
- versions: `{'baselineVersion': '4.7.1', 'changedSinceBaseline': False, 'currentVersion': '4.8.1-dev', 'firstSeen': '4.7.1', 'presentIn': ['4.7.1', '4.8.1-dev'], 'status': 'active'}`

## `physics.maxens`

- Candidate note: candidate: only works with cu_physics=3,5,93
- Already valid trigger: `False`
- Catalog status: present
- type: `integer`
- defaultValue: `3`
- description: `maxens`
- versions: `{'baselineVersion': '4.7.1', 'changedSinceBaseline': False, 'currentVersion': '4.8.1-dev', 'firstSeen': '4.7.1', 'presentIn': ['4.7.1', '4.8.1-dev'], 'status': 'active'}`

## `physics.maxens2`

- Candidate note: candidate: only works with cu_physics=3,5,93
- Already valid trigger: `False`
- Catalog status: present
- type: `integer`
- defaultValue: `3`
- description: `maxens2`
- versions: `{'baselineVersion': '4.7.1', 'changedSinceBaseline': False, 'currentVersion': '4.8.1-dev', 'firstSeen': '4.7.1', 'presentIn': ['4.7.1', '4.8.1-dev'], 'status': 'active'}`

## `physics.maxens3`

- Candidate note: candidate: only works with cu_physics=3,5,93
- Already valid trigger: `False`
- Catalog status: present
- type: `integer`
- defaultValue: `16`
- description: `maxens3`
- versions: `{'baselineVersion': '4.7.1', 'changedSinceBaseline': False, 'currentVersion': '4.8.1-dev', 'firstSeen': '4.7.1', 'presentIn': ['4.7.1', '4.8.1-dev'], 'status': 'active'}`

## `physics.ensdim`

- Candidate note: candidate: only works with cu_physics=3,5,93
- Already valid trigger: `False`
- Catalog status: present
- type: `integer`
- defaultValue: `144`
- description: `ensdim`
- versions: `{'baselineVersion': '4.7.1', 'changedSinceBaseline': False, 'currentVersion': '4.8.1-dev', 'firstSeen': '4.7.1', 'presentIn': ['4.7.1', '4.8.1-dev'], 'status': 'active'}`

## `physics.ra_sw_eclipse`

- Candidate note: candidate: only works with selected SW radiation schemes
- Already valid trigger: `False`
- Catalog status: present
- type: `integer`
- defaultValue: `0`
- description: `ra_sw_eclipse | 0/1 flag: 1=turn eclipse on`
- versions: `{'baselineVersion': '4.7.1', 'changedSinceBaseline': False, 'currentVersion': '4.8.1-dev', 'firstSeen': '4.7.1', 'presentIn': ['4.7.1', '4.8.1-dev'], 'status': 'active'}`

## `fdda.obs_nudge_opt`

- Candidate note: candidate: requires auxinput11 workflow settings
- Already valid trigger: `False`
- Catalog status: present
- type: `integer`
- defaultValue: `0`
- description: `obs_nudge_opt | Obs-nudging flag for domain`
- versions: `{'baselineVersion': '4.7.1', 'changedSinceBaseline': False, 'currentVersion': '4.8.1-dev', 'firstSeen': '4.7.1', 'presentIn': ['4.7.1', '4.8.1-dev'], 'status': 'active'}`

## `time_control.auxinput11_interval`

- Candidate note: obs nudging workflow support
- Already valid trigger: `False`
- Catalog status: present
- type: `integer`
- defaultValue: `10`
- description: `auxinput11_interval | interval (mins) for obs nudging input;  should be set at the same (or greater)  frequency as 'obs_ionf' (with the unit of coarse domain time step)`
- versions: `{'firstSeen': '4.7.1', 'note': 'Present in WRF 4.7.1 baseline catalog but not found in WRF 4.8.x overlay. Kept for backward compatibility.', 'presentIn': ['4.7.1'], 'status': 'legacy_471_only'}`

## `time_control.auxinput11_end_h`

- Candidate note: obs nudging workflow support
- Already valid trigger: `False`
- Catalog status: present
- type: `integer`
- defaultValue: `6`
- description: `auxinput11_end_h | end of the observation time (in hrs) when using obs nudging`
- versions: `{'firstSeen': '4.7.1', 'note': 'Present in WRF 4.7.1 baseline catalog but not found in WRF 4.8.x overlay. Kept for backward compatibility.', 'presentIn': ['4.7.1'], 'status': 'legacy_471_only'}`

## `physics.mp_zero_out`

- Candidate note: candidate: controls moisture zero-out behavior
- Already valid trigger: `False`
- Catalog status: present
- type: `integer`
- defaultValue: `0`
- description: `mp_zero_out | microphysics fields set to zero  0=no action taken, 1=all fields but Qv, 2=all fields including Qv | flag`
- versions: `{'baseline471': {'comments': ['flag', 'microphysics fields set to zero  0=no action taken, 1=all fields but Qv, 2=all fields including Qv', 'mp_zero_out'], 'defaultValue': 0, 'entries': '1', 'io': '-', 'type': 'integer'}, 'baselineVersion': '4.7.1', 'changedSinceBaseline': True, 'current48x': {'comments': ['mp_zero_out', 'microphysics fields set to zero  0=no action taken, 1=all fields but Qv, 2=all fields including Qv', 'flag'], 'defaultValue': 0, 'entries': '1', 'io': '-', 'type': 'integer'}, 'currentVersion': '4.8.1-dev', 'firstSeen': '4.7.1', 'presentIn': ['4.7.1', '4.8.1-dev'], 'status': 'active'}`

## `physics.mp_zero_out_thresh`

- Candidate note: candidate: threshold used with mp_zero_out
- Already valid trigger: `False`
- Catalog status: present
- type: `real`
- defaultValue: `1e-08`
- description: `mp_zero_out_thresh | minimum threshold for non-Qv moist fields, below are set to zero | kg/kg`
- versions: `{'baseline471': {'comments': ['minimum threshold for non-Qv moist fields, below are set to zero', 'mp_zero_out_thresh', 'kg/kg'], 'defaultValue': 1e-08, 'entries': '1', 'io': '-', 'type': 'real'}, 'baselineVersion': '4.7.1', 'changedSinceBaseline': True, 'current48x': {'comments': ['mp_zero_out_thresh', 'minimum threshold for non-Qv moist fields, below are set to zero', 'kg/kg'], 'defaultValue': 1e-08, 'entries': '1', 'io': '-', 'type': 'real'}, 'currentVersion': '4.8.1-dev', 'firstSeen': '4.7.1', 'presentIn': ['4.7.1', '4.8.1-dev'], 'status': 'active'}`

