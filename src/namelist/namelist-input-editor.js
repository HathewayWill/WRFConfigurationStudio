(function (global, $) {
  'use strict';

  var README_GROUP_ORDER = [
    'time_control', 'domains', 'physics', 'dfi_control', 'stoch', 'noah_mp',
    'fdda', 'scm', 'dynamics', 'bdy_control', 'ideal', 'tc',
    'namelist_quilt', 'grib2', 'diags', 'afwa'
  ];

  var CORE_GROUP_ORDER = [
    'time_control',
    'domains',
    'physics',
    'dynamics',
    'bdy_control',
    'namelist_quilt'
  ];

  var CORE_GROUPS = {
    time_control: true,
    domains: true,
    physics: true,
    dynamics: true,
    bdy_control: true,
    namelist_quilt: true
  };


  var DEFAULT_ENABLED_FIELDS = {
    'time_control.run_days': true,
    'time_control.run_hours': true,
    'time_control.run_minutes': true,
    'time_control.run_seconds': true,
    'time_control.start_year': true,
    'time_control.start_month': true,
    'time_control.start_day': true,
    'time_control.start_hour': true,
    'time_control.end_year': true,
    'time_control.end_month': true,
    'time_control.end_day': true,
    'time_control.end_hour': true,
    'time_control.interval_seconds': true,
    'time_control.input_from_file': true,
    'time_control.history_interval': true,
    'time_control.frames_per_outfile': true,
    'time_control.restart': true,
    'time_control.restart_interval': true,
    'time_control.io_form_history': true,
    'time_control.io_form_restart': true,
    'time_control.io_form_input': true,
    'time_control.io_form_boundary': true,
    'time_control.debug_level': true,
    'domains.time_step': true,
    'domains.time_step_fract_num': true,
    'domains.time_step_fract_den': true,
    'domains.max_dom': true,
    'domains.e_we': true,
    'domains.e_sn': true,
    'domains.e_vert': true,
    'domains.p_top_requested': true,
    'domains.num_metgrid_levels': true,
    'domains.num_metgrid_soil_levels': true,
    'domains.dx': true,
    'domains.dy': true,
    'domains.grid_id': true,
    'domains.parent_id': true,
    'domains.i_parent_start': true,
    'domains.j_parent_start': true,
    'domains.parent_grid_ratio': true,
    'domains.parent_time_step_ratio': true,
    'physics.mp_physics': true,
    'physics.ra_lw_physics': true,
    'physics.ra_sw_physics': true,
    'physics.radt': true,
    'physics.sf_sfclay_physics': true,
    'physics.sf_surface_physics': true,
    'physics.sf_urban_physics': true,
    'physics.bl_pbl_physics': true,
    'physics.bldt': true,
    'physics.cu_physics': true,
    'physics.cudt': true,
    'physics.surface_input_source': true,
    'physics.num_soil_layers': true,
    'physics.num_land_cat': true,
    'dynamics.w_damping': true,
    'dynamics.diff_opt': true,
    'dynamics.mix_full_fields': true,
    'dynamics.tke_drag_coefficient': true,
    'dynamics.tke_heat_flux': true,
    'dynamics.km_opt': true,
    'dynamics.diff_6th_opt': true,
    'dynamics.diff_6th_factor': true,
    'dynamics.base_temp': true,
    'dynamics.damp_opt': true,
    'dynamics.zdamp': true,
    'dynamics.dampcoef': true,
    'dynamics.khdif': true,
    'dynamics.kvdif': true,
    'dynamics.non_hydrostatic': true,
    'dynamics.epssm': true,
    'dynamics.moist_adv_opt': true,
    'dynamics.scalar_adv_opt': true,
    'dynamics.use_theta_m': true,
    'dynamics.hybrid_opt': true,
    'dynamics.gwd_opt': true,
    'bdy_control.spec_bdy_width': true,
    'bdy_control.spec_zone': true,
    'bdy_control.relax_zone': true,
    'bdy_control.specified': true,
    'bdy_control.nested': true,
    'namelist_quilt.nio_tasks_per_group': true,
    'namelist_quilt.nio_groups': true
  };




  var EXPLICIT_GROUP_ORDER = {
    time_control: 1,
    domains: 2,
    physics: 3,
    fdda: 4,
    dynamics: 5,
    bdy_control: 6,
    grib2: 7,
    namelist_quilt: 8
  };

  var EXPLICIT_FIELD_ORDER = {
    'time_control.run_days': 1,
    'time_control.run_hours': 2,
    'time_control.run_minutes': 3,
    'time_control.run_seconds': 4,
    'time_control.start_year': 5,
    'time_control.start_month': 6,
    'time_control.start_day': 7,
    'time_control.start_hour': 8,
    'time_control.end_year': 9,
    'time_control.end_month': 10,
    'time_control.end_day': 11,
    'time_control.end_hour': 12,
    'time_control.interval_seconds': 13,
    'time_control.input_from_file': 14,
    'time_control.history_interval': 15,
    'time_control.frames_per_outfile': 16,
    'time_control.restart': 17,
    'time_control.restart_interval': 18,
    'time_control.io_form_history': 19,
    'time_control.io_form_restart': 20,
    'time_control.io_form_input': 21,
    'time_control.io_form_boundary': 22,
    'time_control.debug_level': 23,

    'domains.time_step': 1,
    'domains.time_step_fract_num': 2,
    'domains.time_step_fract_den': 3,
    'domains.max_dom': 4,
    'domains.e_we': 5,
    'domains.e_sn': 6,
    'domains.e_vert': 7,
    'domains.p_top_requested': 8,
    'domains.num_metgrid_levels': 9,
    'domains.num_metgrid_soil_levels': 10,
    'domains.dx': 11,
    'domains.dy': 12,
    'domains.grid_id': 13,
    'domains.parent_id': 14,
    'domains.i_parent_start': 15,
    'domains.j_parent_start': 16,
    'domains.parent_grid_ratio': 17,
    'domains.parent_time_step_ratio': 18,

    'physics.mp_physics': 1,
    'physics.ra_lw_physics': 2,
    'physics.ra_sw_physics': 3,
    'physics.radt': 4,
    'physics.sf_sfclay_physics': 5,
    'physics.sf_surface_physics': 6,
    'physics.sf_urban_physics': 7,
    'physics.bl_pbl_physics': 8,
    'physics.bldt': 9,
    'physics.cu_physics': 10,
    'physics.cudt': 11,
    'physics.surface_input_source': 12,
    'physics.num_soil_layers': 13,
    'physics.num_land_cat': 14,

    'dynamics.w_damping': 1,
    'dynamics.diff_opt': 2,
    'dynamics.mix_full_fields': 3,
    'dynamics.tke_drag_coefficient': 4,
    'dynamics.tke_heat_flux': 5,
    'dynamics.km_opt': 6,
    'dynamics.diff_6th_opt': 7,
    'dynamics.diff_6th_factor': 8,
    'dynamics.base_temp': 9,
    'dynamics.damp_opt': 10,
    'dynamics.zdamp': 11,
    'dynamics.dampcoef': 12,
    'dynamics.khdif': 13,
    'dynamics.kvdif': 14,
    'dynamics.non_hydrostatic': 15,
    'dynamics.epssm': 16,
    'dynamics.moist_adv_opt': 17,
    'dynamics.scalar_adv_opt': 18,
    'dynamics.use_theta_m': 19,
    'dynamics.hybrid_opt': 20,
    'dynamics.gwd_opt': 21,

    'bdy_control.spec_bdy_width': 1,
    'bdy_control.spec_zone': 2,
    'bdy_control.relax_zone': 3,
    'bdy_control.specified': 4,
    'bdy_control.nested': 5,

    'namelist_quilt.nio_tasks_per_group': 1,
    'namelist_quilt.nio_groups': 2
  };

  var EXAMPLE_NAMELIST_PROFILES = {"em_b_wave": [{"id": "test/em_b_wave/namelist.input", "label": "default", "path": "test/em_b_wave/namelist.input", "text": " &time_control\n run_days                            = 5,\n run_hours                           = 0,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 0001, 0001, 0001,\n start_month                         = 01,   01,   01,\n start_day                           = 01,   01,   01,\n start_hour                          = 00,   00,   00,\n start_minute                        = 00,   00,   00,\n start_second                        = 00,   00,   00,\n end_year                            = 0001, 0001, 0001,\n end_month                           = 01,   01,   01,\n end_day                             = 06,   06,   06,\n end_hour                            = 00,   00,   00,\n end_minute                          = 00,   00,   00,\n end_second                          = 00,   00,   00,\n history_interval                    = 360,  360,  360,\n frames_per_outfile                  = 1000, 1000, 1000,\n restart                             = .false.,\n restart_interval                    = 3600,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 600,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,     1,     1,\n e_we                                = 41,    41,    41,\n s_sn                                = 1,     1,     1,\n e_sn                                = 81,    81,    81,\n s_vert                              = 1,     1,     1,\n e_vert                              = 65,    65,    65,\n dx                                  = 100000,\n dy                                  = 100000,\n ztop                                = 16000, 16000, 16000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 0,     17,    17,\n j_parent_start                      = 0,     33,    33,\n parent_grid_ratio                   = 1,     5,     5,\n parent_time_step_ratio              = 1,     5,     5,\n feedback                            = 1,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 0,     0,     0,\n ra_lw_physics                       = 0,     0,     0,\n ra_sw_physics                       = 0,     0,     0,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 0,     0,     0,\n sf_surface_physics                  = 0,     0,     0,\n bl_pbl_physics                      = 0,     0,     0,\n bldt                                = 0,     0,     0,\n cu_physics                          = 0,     0,     0,\n cudt                                = 5,     5,     5,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 1,      1,      1,\n km_opt                              = 1,      1,      1,\n damp_opt                            = 0,\n zdamp                               = 4000.,  4000.,  4000.,\n dampcoef                            = 0.01,   0.01,   0.01\n khdif                               = 0,      0,      0,\n kvdif                               = 0,      0,      0,\n smdiv                               = 0.1,    0.1,    0.1,\n emdiv                               = 0.01,   0.01,   0.01,\n epssm                               = 0.1,    0.1,    0.1\n time_step_sound                     = 4,      4,      4,\n h_mom_adv_order                     = 5,      5,      5,\n v_mom_adv_order                     = 3,      3,      3,\n h_sca_adv_order                     = 5,      5,      5,\n v_sca_adv_order                     = 3,      3,      3,\n non_hydrostatic                     = .true., .true., .true.,\n /\n\n &bdy_control\n periodic_x                          = .true., \n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .false.,\n open_xe                             = .false.,\n periodic_y                          = .false.,\n symmetric_ys                        = .true., \n symmetric_ye                        = .true., \n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 7\n /\n"}, {"id": "test/em_b_wave/namelist.input.backwards", "label": "backwards", "path": "test/em_b_wave/namelist.input.backwards", "text": " &time_control\n run_days                            = -5,\n run_hours                           = 0,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 0001, 0001, 0001,\n start_month                         = 01,   01,   01,\n start_day                           = 01,   01,   01,\n start_hour                          = 00,   00,   00,\n start_minute                        = 00,   00,   00,\n start_second                        = 00,   00,   00,\n end_year                            = 0000, 0001, 0001,\n end_month                           = 12,   01,   01,\n end_day                             = 27,   05,   05,\n end_hour                            = 00,   00,   00,\n end_minute                          = 00,   00,   00,\n end_second                          = 00,   00,   00,\n history_interval                    = 360,  360,  360,\n frames_per_outfile                  = 1000, 1000, 1000,\n restart                             = .false.,\n restart_interval                    = 3600,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = -600,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,     1,     1,\n e_we                                = 41,    41,    41,\n s_sn                                = 1,     1,     1,\n e_sn                                = 81,    81,    81,\n s_vert                              = 1,     1,     1,\n e_vert                              = 65,    65,    65,\n dx                                  = 100000,\n dy                                  = 100000,\n ztop                                = 16000, 16000, 16000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 0,     17,    17,\n j_parent_start                      = 0,     33,    33,\n parent_grid_ratio                   = 1,     5,     5,\n parent_time_step_ratio              = 1,     5,     5,\n feedback                            = 1,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 0,     0,     0,\n ra_lw_physics                       = 0,     0,     0,\n ra_sw_physics                       = 0,     0,     0,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 0,     0,     0,\n sf_surface_physics                  = 0,     0,     0,\n bl_pbl_physics                      = 0,     0,     0,\n bldt                                = 0,     0,     0,\n cu_physics                          = 0,     0,     0,\n cudt                                = 5,     5,     5,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 1,      1,      1,\n km_opt                              = 1,      1,      1,\n damp_opt                            = 0,\n zdamp                               = 4000.,  4000.,  4000.,\n dampcoef                            = 0.01,   0.01,   0.01\n khdif                               = 0,      0,      0,\n kvdif                               = 0,      0,      0,\n smdiv                               = 0.1,    0.1,    0.1,\n emdiv                               = 0.01,   0.01,   0.01,\n epssm                               = 0.1,    0.1,    0.1\n time_step_sound                     = 4,      4,      4,\n h_mom_adv_order                     = 5,      5,      5,\n v_mom_adv_order                     = 3,      3,      3,\n h_sca_adv_order                     = 5,      5,      5,\n v_sca_adv_order                     = 3,      3,      3,\n non_hydrostatic                     = .true., .true., .true.,\n /\n\n &bdy_control\n periodic_x                          = .true., \n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .false.,\n open_xe                             = .false.,\n periodic_y                          = .false.,\n symmetric_ys                        = .true., \n symmetric_ye                        = .true., \n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 7\n /\n\n"}], "em_convrad": [{"id": "test/em_convrad/namelist.input", "label": "default", "path": "test/em_convrad/namelist.input", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 1,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2007,\n start_month                         = 06,\n start_day                           = 01,\n start_hour                          = 0,\n start_minute                        = 00,\n start_second                        = 00,\n end_year                            = 2007,\n end_month                           = 07,\n end_day                             = 1,\n end_hour                            = 0,\n end_minute                          = 00,\n end_second                          = 00,\n history_interval                    = 60,\n frames_per_outfile                  = 1000,\n restart                             = .false.,\n restart_interval                    = 1440,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 5,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,\n e_we                                = 101,\n s_sn                                = 1,\n e_sn                                = 101,\n s_vert                              = 1,\n e_vert                              = 35,\n dx                                  = 1000,\n dy                                  = 1000,\n ztop                                = 30000.,\n eta_levels                          = 1.000, 0.993, 0.983, 0.970, 0.954,\n                                       0.934, 0.909, 0.880, 0.845, 0.807,\n                                       0.765, 0.719, 0.672, 0.622, 0.571,\n                                       0.520, 0.468, 0.420, 0.376, 0.335,\n                                       0.298, 0.263, 0.231, 0.202, 0.175,\n                                       0.150, 0.127, 0.106, 0.088, 0.070,\n                                       0.055, 0.040, 0.026, 0.013, 0.000\n\n /\n\n &physics\n mp_physics                          = 6,\n ra_lw_physics                       = 4,\n ra_sw_physics                       = 4,\n radt                                = 5,\n sf_sfclay_physics                   = 1,\n sf_surface_physics                  = 1,\n bl_pbl_physics                      = 1,\n bldt                                = 0,\n cu_physics                          = 0,\n cudt                                = 0,\n bucket_mm                           =10.,\n bucket_J                            =1.e8,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 1,      1,      1,\n km_opt                              = 4,      4,      4,\n damp_opt                            = 3,\n dampcoef                            = .2,\n zdamp                               = 5000.,\n khdif                               = 0,\n kvdif                               = 0,\n smdiv                               = 0.1,\n emdiv                               = 0.01,\n epssm                               = 0.1,\n time_step_sound                     = 6,\n h_mom_adv_order                     = 5,\n v_mom_adv_order                     = 3,\n h_sca_adv_order                     = 5,\n v_sca_adv_order                     = 3,\n mix_full_fields                     = .true.,\n non_hydrostatic                     = .true.,\n pert_coriolis                       = .true.,\n /\n\n &bdy_control\n periodic_x                          = .true.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .false., \n open_xe                             = .false.,\n periodic_y                          = .true.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n&ideal\n ideal_case = 3\n /\n\n"}], "em_esmf_exp": [{"id": "test/em_esmf_exp/namelist.input.jan00.ESMFSST", "label": "jan00 ESMFSST", "path": "test/em_esmf_exp/namelist.input.jan00.ESMFSST", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 2,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2000, 2000, 2000,\n start_month                         = 01,   01,   01,\n start_day                           = 24,   24,   24,\n start_hour                          = 12,   12,   12,\n start_minute                        = 00,   00,   00,\n start_second                        = 00,   00,   00,\n end_year                            = 2000, 2000, 2000,\n end_month                           = 01,   01,   01,\n end_day                             = 25,   25,   25,\n end_hour                            = 12,   12,   12,\n end_minute                          = 00,   00,   00,\n end_second                          = 00,   00,   00,\n interval_seconds                    = 21600,\n input_from_file                     = .true.,.false.,.false.,\n history_interval                    = 60,  60,   60,\n frames_per_outfile                  = 1000, 1000, 1000,\n restart                             = .false.,\n restart_interval                    = 5000,\n io_form_history                     = 2,\n io_form_restart                     = 2,\n io_form_input                       = 2,\n io_form_boundary                    = 2,\n debug_level                         = 0,\n auxinput5_inname                    = 'sstin_d01_000000',\n auxinput5_interval_h                = 1,\n auxinput5_end_h                     = 13,\n io_form_auxinput5                   = 7,\n auxhist5_outname                    = 'sstout_d01_000000',\n frames_per_auxhist5                 = 1000,\n auxhist5_interval_h                 = 1,\n auxhist5_end_h                      = 13,\n io_form_auxhist5                    = 7,\n /\n\n &domains\n time_step                           = 180,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n e_we                                = 74,    112,   94,\n e_sn                                = 61,    97,    91,\n e_vert                              = 28,    28,    28,\n p_top_requested                     = 5000,\n num_metgrid_levels                  = 27,\n num_metgrid_soil_levels             = 4,\n dx                                  = 30000,\n dy                                  = 30000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 1,     31,    30,\n j_parent_start                      = 1,     17,    30,\n parent_grid_ratio                   = 1,     3,     3,\n parent_time_step_ratio              = 1,     3,     3,\n feedback                            = 1,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 3,     3,     3,\n ra_lw_physics                       = 1,     1,     1,\n ra_sw_physics                       = 1,     1,     1,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 1,     1,     1,\n sf_surface_physics                  = 2,     2,     2,\n bl_pbl_physics                      = 1,     1,     1,\n bldt                                = 0,     0,     0,\n cu_physics                          = 1,     1,     0,\n cudt                                = 5,     5,     5,\n isfflx                              = 1,\n ifsnow                              = 0,\n icloud                              = 1,\n surface_input_source                = 1,\n sf_urban_physics                    = 0,\n maxiens                             = 1,\n maxens                              = 3,\n maxens2                             = 3,\n maxens3                             = 16,\n ensdim                              = 144,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n w_damping                           = 0,\n diff_opt                            = 1,      1,      1,\n km_opt                              = 4,      4,      4,\n diff_6th_opt                        = 0,      0,      0,\n diff_6th_factor                     = 0.12,   0.12,   0.12,\n base_temp                           = 290.\n damp_opt                            = 0,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.2,    0.2,    0.2\n khdif                               = 0,      0,      0,\n kvdif                               = 0,      0,      0,\n non_hydrostatic                     = .true., .true., .true.,\n moist_adv_opt                       = 1,      1,      1,     \n scalar_adv_opt                      = 1,      1,      1,     \n /\n\n &bdy_control\n spec_bdy_width                      = 5,\n specified                           = .true.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n"}, {"id": "test/em_esmf_exp/namelist.input.jan00.NETCDFSST", "label": "jan00 NETCDFSST", "path": "test/em_esmf_exp/namelist.input.jan00.NETCDFSST", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 12,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2000, 2000, 2000,\n start_month                         = 01,   01,   01,\n start_day                           = 24,   24,   24,\n start_hour                          = 12,   12,   12,\n start_minute                        = 00,   00,   00,\n start_second                        = 00,   00,   00,\n end_year                            = 2000, 2000, 2000,\n end_month                           = 01,   01,   01,\n end_day                             = 25,   25,   25,\n end_hour                            = 12,   12,   12,\n end_minute                          = 00,   00,   00,\n end_second                          = 00,   00,   00,\n interval_seconds                    = 21600,\n input_from_file                     = .true.,.false.,.false.,\n history_interval                    = 180,  60,   60,\n frames_per_outfile                  = 1000, 1000, 1000,\n restart                             = .false.,\n restart_interval                    = 5000,\n io_form_history                     = 2,\n io_form_restart                     = 2,\n io_form_input                       = 2,\n io_form_boundary                    = 2,\n debug_level                         = 0,\n auxinput5_inname                    = 'sstin_d01_000000',\n auxinput5_interval_h                = 1,\n auxinput5_end_h                     = 13,\n io_form_auxinput5                   = 2,\n auxhist5_outname                    = 'sstout_d01_000000',\n frames_per_auxhist5                 = 1000,\n auxhist5_interval_h                 = 1,\n auxhist5_end_h                      = 13,\n io_form_auxhist5                    = 2,\n /\n\n &domains\n time_step                           = 180,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n e_we                                = 74,    112,   94,\n e_sn                                = 61,    97,    91,\n e_vert                              = 28,    28,    28,\n p_top_requested                     = 5000,\n num_metgrid_levels                  = 27,\n num_metgrid_soil_levels             = 4,\n dx                                  = 30000,\n dy                                  = 30000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 1,     31,    30,\n j_parent_start                      = 1,     17,    30,\n parent_grid_ratio                   = 1,     3,     3,\n parent_time_step_ratio              = 1,     3,     3,\n feedback                            = 1,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 3,     3,     3,\n ra_lw_physics                       = 1,     1,     1,\n ra_sw_physics                       = 1,     1,     1,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 1,     1,     1,\n sf_surface_physics                  = 2,     2,     2,\n bl_pbl_physics                      = 1,     1,     1,\n bldt                                = 0,     0,     0,\n cu_physics                          = 1,     1,     0,\n cudt                                = 5,     5,     5,\n isfflx                              = 1,\n ifsnow                              = 0,\n icloud                              = 1,\n surface_input_source                = 1,\n sf_urban_physics                    = 0,\n maxiens                             = 1,\n maxens                              = 3,\n maxens2                             = 3,\n maxens3                             = 16,\n ensdim                              = 144,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n w_damping                           = 0,\n diff_opt                            = 1,      1,      1,\n km_opt                              = 4,      4,      4,\n diff_6th_opt                        = 0,      0,      0,\n diff_6th_factor                     = 0.12,   0.12,   0.12,\n base_temp                           = 290.\n damp_opt                            = 0,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.2,    0.2,    0.2\n khdif                               = 0,      0,      0,\n kvdif                               = 0,      0,      0,\n non_hydrostatic                     = .true., .true., .true.,\n moist_adv_opt                       = 1,      1,      1,     \n scalar_adv_opt                      = 1,      1,      1,     \n /\n\n &bdy_control\n spec_bdy_width                      = 5,\n specified                           = .true.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n"}], "em_fire": [{"id": "test/em_fire/namelist.input", "label": "default", "path": "test/em_fire/namelist.input", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 0,\n run_minutes                         = 60,\n run_seconds                         = 0,\n start_year                          = 0001, 0001, 0001,\n start_month                         = 01,   01,   01,\n start_day                           = 01,   01,   01,\n start_hour                          = 00,   00,   00,\n start_minute                        = 00,   00,   00,\n start_second                        = 00,   00,   00,\n end_year                            = 0001, 0001, 0001,\n end_month                           = 01,   01,   01,\n end_day                             = 01,   01,   01,\n end_hour                            = 00,   00,   00,\n end_minute                          = 60,   00,   00,\n end_second                          = 00,   00,   00,\n history_interval_s                  = 120, 120,  120,\n frames_per_outfile                  = 1,     1,    1,\n restart                             = .false.,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 0,\n time_step_fract_num                 = 1,\n time_step_fract_den                 = 2,\n max_dom                             = 1,\n s_we                                = 1,     1,     1,\n e_we                                = 103,    43,    43,\n s_sn                                = 1,     1,     1,\n e_sn                                = 103,    43,    43,\n s_vert                              = 1,     1,     1,\n e_vert                              = 51,    41,    41,\n dx                                  = 50,\n dy                                  = 50,\n ztop                                = 4000, 1500, 1500,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 0,     1,    1,\n j_parent_start                      = 0,     1,    1,\n parent_grid_ratio                   = 1,     2,     3,\n parent_time_step_ratio              = 1,     2,     3,\n feedback                            = 1,\n smooth_option                       = 0\n sr_x                                = 4,     0,     0\n sr_y                                = 4,     0,     0\n /\n\n &physics\n mp_physics                          = 0,     0,     0,\n ra_lw_physics                       = 0,     0,     0,\n ra_sw_physics                       = 0,     0,     0,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 0,     0,     0,\n sf_surface_physics                  = 0,     0,     0,\n bl_pbl_physics                      = 0,     0,     0,\n bldt                                = 0,     0,     0,\n cu_physics                          = 0,     0,     0,\n cudt                                = 0,     0,     0,\n isfflx                              = 1,\n ifsnow                              = 0,\n icloud                              = 0,\n mp_zero_out                         = 0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 2,      2,      2,\n damp_opt                            = 0,\n zdamp                               = 800.,  5000.,  5000.,\n dampcoef                            = 0.2,    0.2,    0.2\n khdif                               = 0.05,   0.05,   0.05,\n kvdif                               = 0.05,   0.05,   0.05,\n smdiv                               = 0.1,    0.1,    0.1,\n emdiv                               = 0.01,   0.01,   0.01,\n epssm                               = 0.1,    0.1,    0.1\n mix_full_fields                     = .true., .true., .true.,\n non_hydrostatic                     = .true., .true., .true.,\n h_mom_adv_order                     = 5,      5,      5,\n v_mom_adv_order                     = 3,      3,      3,\n h_sca_adv_order                     = 5,      5,      5,\n v_sca_adv_order                     = 3,      3,      3,\n time_step_sound                     = 20,     20,     20,\n moist_adv_opt                       = 1,      1,      1,\n scalar_adv_opt                      = 1,      1,      1,\n tracer_opt                          = 3,      3,      3,\n /\n\n &bdy_control\n periodic_x                          = .false.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .true., \n open_xe                             = .true., \n periodic_y                          = .false.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .true., \n open_ye                             = .true., \n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &fire ! be sure to set sr_x,sr_y in domains-namelist (to set refinement in x,y)\n ifire              = 2,    ! integer, = 0: no fire, 2=turn on fire model\n fire_fuel_read     = 0,    ! integer, -1: from WPS, 0= use fire_fuel_cat, 1= by altitude\n fire_fuel_cat      = 1,    ! integer, if specified which fuel category?\n! ignition \n fire_num_ignitions = 1,            ! integer, only the first fire_num_ignition used, up to 5 allowed\n fire_ignition_ros1 =   0.05,        ! rate of spread during ignition, m/s  \n fire_ignition_start_x1 = 2000.,     ! start points of ignition lines, in m from lower left corner\n fire_ignition_start_y1 = 2000.,     ! start points of ignition lines, in m from lower left corner\n fire_ignition_end_x1 =   2000.,     ! end points of ignition lines, in m from lower left corner\n fire_ignition_end_y1 =   3000.,     ! end points of ignition lines, in m from lower left corner\n fire_ignition_radius1 =    80.,     ! all within this radius will ignite, > fire mesh step\n fire_ignition_start_time1 = 120.,    ! sec for ignition from the start\n fire_ignition_end_time1  =145.,     ! sec for ignition from the start\n fire_ignition_ros2 =   0.05,        ! rate of spread during ignition, m/s  \n fire_ignition_start_x2 = 2000.,     ! start points of ignition lines, in m from lower left corner\n fire_ignition_start_y2 =  500.,     ! start points of ignition lines, in m from lower left corner\n fire_ignition_end_x2 =   2000.,     ! end points of ignition lines, in m from lower left corner\n fire_ignition_end_y2 =   1900.,     ! end points of ignition lines, in m from lower left corner\n fire_ignition_radius2 =    18.,     ! all within this radius will ignite, > fire mesh step\n fire_ignition_start_time2 = 3.,     ! sec for ignition from the start      ! end ignition for sfire\n fire_ignition_end_time2  =503.,     ! sec for ignition from the start! end ignition for sfire\n fire_wind_height = 1.,             ! height to interpolate winds to for calculating fire spread rate \n!\n! verbosity\n fire_print_msg     = 1,        ! 1 print fire debugging messages\n fire_print_file    = 0,        ! 1 write files for matlab\n!\n! experiments\n!\n! fire_const_time = -1.,         ! (s) if >0, time from start to stop fire evolution and keep heat output constant\n! fire_const_grnhfx = -1,        ! (W/s) if both >=0, use this flux (meant to be used when fire_const_time=ignition time) \n! fire_const_grnqfx = -1,        ! (W/s) if both >=0, use this flux (meant to be used when fire_const_time=ignition time) \n! fire_test_steps=0,             ! >0 = on first call, do specified number of steps and terminate (testing only)\n fire_mountain_type=1,          ! in ideal: 0=none, 1= hill, 2=EW ridge, 3=NS ridge\n fire_mountain_height=100.,     ! (m) ideal mountain height\n fire_mountain_start_x=1750.,   ! (m) coord of start of the mountain from lower left corner (just like ignition)\n fire_mountain_start_y=1750.,   ! (m) coord of start of the mountain from lower left corner (just like ignition)\n fire_mountain_end_x=3250.,     ! (m) coord of end of the mountain from lower left corner (just like ignition)\n fire_mountain_end_y=3250.,     ! (m) coord of end of the mountain from lower left corner (just like ignition)\n fire_topo_from_atm=1,          ! 0 = fire mesh topo set from fine-res data, 1 = populate by interpolating from atmosphere\n  delt_perturbation = 0.0,       ! Temperature perturbation for creating cold (negative) / warm (positive) bubble [K], 0 turns it off\n !xrad_perturbation = 10000.0,   ! Horizontal radius of the bubble in E-W direction [m]\n !yrad_perturbation = 10000.0,   ! Horizontal radius of the bubble in N-S direction [m]\n !zrad_perturbation = 1500.0,    ! Vertical radius of the bubble [m]\n !hght_perturbation = 1500.0,    ! Perturbation height - height at which the warm/cold bubble will be suspended [m]\n!\n! method switches for developers only, do not change!\n!\n fire_fuel_left_irl=2,          ! refinement to integrate fuel_left, must be even\n fire_fuel_left_jrl=2,          ! refinement to integrate fuel_left, must be even\n fire_atm_feedback=1.0,         ! real, multiplier for heat fluxes, 1.=normal, 0.=turn off two-way coupling \n fire_grows_only=1,             ! if >0 level set function cannot increase = fire can only grow\n fire_viscosity=0.4,              ! artificial viscosity in level set method (max 1, needed with fire_upwinding=0)\n fire_upwinding=9,              ! 0=none, 1=standard, 2=godunov, 3=eno, 4=sethian\n fire_fuel_left_method=1,        ! for now, use 1 only\n fire_lfn_ext_up=1.0,           ! 0.=extend level set function at boundary by reflection, 1.=always up\n/\n"}, {"id": "test/em_fire/namelist.input_hill_simple", "label": "hill simple", "path": "test/em_fire/namelist.input_hill_simple", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 0,\n run_minutes                         = 60,\n run_seconds                         = 0,\n start_year                          = 0001, 0001, 0001,\n start_month                         = 01,   01,   01,\n start_day                           = 01,   01,   01,\n start_hour                          = 00,   00,   00,\n start_minute                        = 00,   00,   00,\n start_second                        = 00,   00,   00,\n end_year                            = 0001, 0001, 0001,\n end_month                           = 01,   01,   01,\n end_day                             = 01,   01,   01,\n end_hour                            = 00,   00,   00,\n end_minute                          = 60,   00,   00,\n end_second                          = 00,   00,   00,\n history_interval_s                  = 120, 120,  120,\n frames_per_outfile                  = 1,     1,    1,\n restart                             = .false.,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 0,\n time_step_fract_num                 = 1,\n time_step_fract_den                 = 2,\n max_dom                             = 1,\n s_we                                = 1,     1,     1,\n e_we                                = 103,    43,    43,\n s_sn                                = 1,     1,     1,\n e_sn                                = 103,    43,    43,\n s_vert                              = 1,     1,     1,\n e_vert                              = 51,    41,    41,\n dx                                  = 50,\n dy                                  = 50,\n ztop                                = 4000, 1500, 1500,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 0,     1,    1,\n j_parent_start                      = 0,     1,    1,\n parent_grid_ratio                   = 1,     2,     3,\n parent_time_step_ratio              = 1,     2,     3,\n feedback                            = 1,\n smooth_option                       = 0\n sr_x                                = 4,     0,     0\n sr_y                                = 4,     0,     0\n /\n\n &physics\n mp_physics                          = 0,     0,     0,\n ra_lw_physics                       = 0,     0,     0,\n ra_sw_physics                       = 0,     0,     0,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 0,     0,     0,\n sf_surface_physics                  = 0,     0,     0,\n bl_pbl_physics                      = 0,     0,     0,\n bldt                                = 0,     0,     0,\n cu_physics                          = 0,     0,     0,\n cudt                                = 0,     0,     0,\n isfflx                              = 1,\n ifsnow                              = 0,\n icloud                              = 0,\n mp_zero_out                         = 0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 2,      2,      2,\n damp_opt                            = 0,\n zdamp                               = 800.,  5000.,  5000.,\n dampcoef                            = 0.2,    0.2,    0.2\n khdif                               = 0.05,   0.05,   0.05,\n kvdif                               = 0.05,   0.05,   0.05,\n smdiv                               = 0.1,    0.1,    0.1,\n emdiv                               = 0.01,   0.01,   0.01,\n epssm                               = 0.1,    0.1,    0.1\n mix_full_fields                     = .true., .true., .true.,\n non_hydrostatic                     = .true., .true., .true.,\n h_mom_adv_order                     = 5,      5,      5,\n v_mom_adv_order                     = 3,      3,      3,\n h_sca_adv_order                     = 5,      5,      5,\n v_sca_adv_order                     = 3,      3,      3,\n time_step_sound                     = 20,     20,     20,\n moist_adv_opt                       = 1,      1,      1,\n scalar_adv_opt                      = 1,      1,      1,\n tracer_opt                          = 3,      3,      3,\n /\n\n &bdy_control\n periodic_x                          = .false.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .true., \n open_xe                             = .true., \n periodic_y                          = .false.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .true., \n open_ye                             = .true., \n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &fire ! be sure to set sr_x,sr_y in domains-namelist (to set refinement in x,y)\n ifire              = 2,    ! integer, = 0: no fire, 2=turn on fire model\n fire_fuel_read     = 0,    ! integer, -1: from WPS, 0= use fire_fuel_cat, 1= by altitude\n fire_fuel_cat      = 1,    ! integer, if specified which fuel category?\n! ignition \n fire_num_ignitions = 1,            ! integer, only the first fire_num_ignition used, up to 5 allowed\n fire_ignition_ros1 =   0.05,        ! rate of spread during ignition, m/s  \n fire_ignition_start_x1 = 2000.,     ! start points of ignition lines, in m from lower left corner\n fire_ignition_start_y1 = 2000.,     ! start points of ignition lines, in m from lower left corner\n fire_ignition_end_x1 =   2000.,     ! end points of ignition lines, in m from lower left corner\n fire_ignition_end_y1 =   3000.,     ! end points of ignition lines, in m from lower left corner\n fire_ignition_radius1 =    80.,     ! all within this radius will ignite, > fire mesh step\n fire_ignition_start_time1 = 120.,    ! sec for ignition from the start\n fire_ignition_end_time1  =145.,     ! sec for ignition from the start\n fire_ignition_ros2 =   0.05,        ! rate of spread during ignition, m/s  \n fire_ignition_start_x2 = 2000.,     ! start points of ignition lines, in m from lower left corner\n fire_ignition_start_y2 =  500.,     ! start points of ignition lines, in m from lower left corner\n fire_ignition_end_x2 =   2000.,     ! end points of ignition lines, in m from lower left corner\n fire_ignition_end_y2 =   1900.,     ! end points of ignition lines, in m from lower left corner\n fire_ignition_radius2 =    18.,     ! all within this radius will ignite, > fire mesh step\n fire_ignition_start_time2 = 3.,     ! sec for ignition from the start      ! end ignition for sfire\n fire_ignition_end_time2  =503.,     ! sec for ignition from the start! end ignition for sfire\n fire_wind_height = 1.,             ! height to interpolate winds to for calculating fire spread rate \n!\n! verbosity\n fire_print_msg     = 1,        ! 1 print fire debugging messages\n fire_print_file    = 0,        ! 1 write files for matlab\n!\n! experiments\n!\n! fire_const_time = -1.,         ! (s) if >0, time from start to stop fire evolution and keep heat output constant\n! fire_const_grnhfx = -1,        ! (W/s) if both >=0, use this flux (meant to be used when fire_const_time=ignition time) \n! fire_const_grnqfx = -1,        ! (W/s) if both >=0, use this flux (meant to be used when fire_const_time=ignition time) \n! fire_test_steps=0,             ! >0 = on first call, do specified number of steps and terminate (testing only)\n fire_mountain_type=1,          ! in ideal: 0=none, 1= hill, 2=EW ridge, 3=NS ridge\n fire_mountain_height=100.,     ! (m) ideal mountain height\n fire_mountain_start_x=1750.,   ! (m) coord of start of the mountain from lower left corner (just like ignition)\n fire_mountain_start_y=1750.,   ! (m) coord of start of the mountain from lower left corner (just like ignition)\n fire_mountain_end_x=3250.,     ! (m) coord of end of the mountain from lower left corner (just like ignition)\n fire_mountain_end_y=3250.,     ! (m) coord of end of the mountain from lower left corner (just like ignition)\n fire_topo_from_atm=1,          ! 0 = fire mesh topo set from fine-res data, 1 = populate by interpolating from atmosphere\n  delt_perturbation = 0.0,       ! Temperature perturbation for creating cold (negative) / warm (positive) bubble [K], 0 turns it off\n !xrad_perturbation = 10000.0,   ! Horizontal radius of the bubble in E-W direction [m]\n !yrad_perturbation = 10000.0,   ! Horizontal radius of the bubble in N-S direction [m]\n !zrad_perturbation = 1500.0,    ! Vertical radius of the bubble [m]\n !hght_perturbation = 1500.0,    ! Perturbation height - height at which the warm/cold bubble will be suspended [m]\n!\n! method switches for developers only, do not change!\n!\n fire_fuel_left_irl=2,          ! refinement to integrate fuel_left, must be even\n fire_fuel_left_jrl=2,          ! refinement to integrate fuel_left, must be even\n fire_atm_feedback=1.0,         ! real, multiplier for heat fluxes, 1.=normal, 0.=turn off two-way coupling \n fire_grows_only=1,             ! if >0 level set function cannot increase = fire can only grow\n fire_viscosity=0.4,              ! artificial viscosity in level set method (max 1, needed with fire_upwinding=0)\n fire_upwinding=9,              ! 0=none, 1=standard, 2=godunov, 3=eno, 4=sethian\n fire_fuel_left_method=1,        ! for now, use 1 only\n fire_lfn_ext_up=1.0,           ! 0.=extend level set function at boundary by reflection, 1.=always up\n/\n"}, {"id": "test/em_fire/namelist.input_rain", "label": "rain", "path": "test/em_fire/namelist.input_rain", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 0,\n run_minutes                         = 480,\n run_seconds                         = 0,\n start_year                          = 0001, 0001, 0001,\n start_month                         = 01,   01,   01,\n start_day                           = 01,   01,   01,\n start_hour                          = 00,   00,   00,\n start_minute                        = 00,   00,   00,\n start_second                        = 00,   00,   00,\n end_year                            = 0001, 0001, 0001,\n end_month                           = 01,   01,   01,\n end_day                             = 01,   01,   01,\n end_hour                            = 00,   00,   00,\n end_minute                          = 360,   120,   120,\n end_second                          = 00,   00,   00,\n history_interval_s                  = 60, 10,  10,\n frames_per_outfile                  = 1000,     1000,    1000,\n restart                             = .false.,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 12,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 4,\n max_dom                             = 1,\n s_we                                = 1,     1,     1,\n e_we                                = 42,    43,    43,\n s_sn                                = 1,     1,     1,\n e_sn                                = 42,    43,    43,\n s_vert                              = 1,     1,     1,\n e_vert                              = 41,    41,    41,\n dx                                  = 2000, 666.6666667, 222.2222222  \n dy                                  = 2000, 666.6666667, 222.2222222\n ztop                                = 20000, 20000, 20000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 0,     15,    15,\n j_parent_start                      = 0,     15,    15,\n parent_grid_ratio                   = 1,     3,     3,\n parent_time_step_ratio              = 1,     3,     3,\n feedback                            = 1,\n smooth_option                       = 0\n sr_x                                = 10,\n sr_y                                = 10,\n/\n\n &physics\n mp_physics                          = 1,     1,     1,\n ra_lw_physics                       = 0,     0,     0,\n ra_sw_physics                       = 0,     0,     0,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 1,     0,     0,    !a surface model is needed when the fuel moisture model is on\n sf_surface_physics                  = 1,     0,     0,    !only sf_sfclay_physics=1, sf_surface_physics=1 supported in ideal.exe \n bl_pbl_physics                      = 0,     0,     0,\n bldt                                = 0,     0,     0,\n cu_physics                          = 0,     0,     0,\n cudt                                = 5,     5,     5,\n isfflx                              = 1,\n ifsnow                              = 0,\n icloud                              = 1,\n num_soil_layers                     = 5,\n mp_zero_out                         = 0,\n prec_acc_dt                         = 60, \n num_land_cat                        = 10,\n/\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 2,      2,      2,\n damp_opt                            = 2,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.003,    0.003,    0.003\n khdif                               = 500,   500,   500,\n kvdif                               = 500,   500,   500,\n smdiv                               = 0.1,    0.1,    0.1,\n emdiv                               = 0.01,   0.01,   0.01,\n epssm                               = 0.1,    0.1,    0.1\n h_mom_adv_order                     = 5,      5,      5,\n v_mom_adv_order                     = 3,      3,      3,\n h_sca_adv_order                     = 5,      5,      5,\n v_sca_adv_order                     = 3,      3,      3,\n time_step_sound                     = 6,      6,      6,\n moist_adv_opt                       = 1,      1,      1,\n scalar_adv_opt                      = 1,      1,      1,\n chem_adv_opt                        = 1,      1,      1,\n tke_adv_opt                         = 1,      1,      1,\n tracer_opt                          = 3,      3,      3,\n non_hydrostatic                     = .true., .true., .true.,\n mix_full_fields                     = .true., .true., .true., \n/\n\n &bdy_control\n periodic_x                          = .false.,.false.,.false.,\n symmetric_xs                        = .false.,.false.,.false.,\n symmetric_xe                        = .false.,.false.,.false.,\n open_xs                             = .true., .false.,.false.,\n open_xe                             = .true., .false.,.false.,\n periodic_y                          = .false.,.false.,.false.,\n symmetric_ys                        = .false.,.false.,.false.,\n symmetric_ye                        = .false.,.false.,.false.,\n open_ys                             = .true., .false.,.false.,\n open_ye                             = .true., .false.,.false.,\n nested                              = .false., .true., .true.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &fire ! be sure to set sr_x,sr_y in domains-namelist (to set refinement in x,y)\n ifire              = 2,             ! integer, = 0: no fire, 2=turn on fire model\n fire_fuel_read     = 0,             ! integer, -1: from WPS, 0= use fire_fuel_cat, 1= by altitude\n fire_fuel_cat      = 3,             ! integer, if specified which fuel category?\n! ignition \n fire_num_ignitions = 1,             ! integer, only the first fire_num_ignition used, up to 5 allowed\n fire_ignition_ros1 =   0.1,         ! rate of spread during ignition, m/s  \n fire_ignition_start_x1 = 60000,     ! start points of ignition lines, in m from lower left corner\n fire_ignition_start_y1 = 52000,     ! start points of ignition lines, in m from lower left corner\n fire_ignition_end_x1 =   61000,     ! end points of ignition lines, in m from lower left corner\n fire_ignition_end_y1 =   51000,     ! end points of ignition lines, in m from lower left corner\n fire_ignition_radius1 =    400,     ! all within this radius will ignite, > fire mesh step\n fire_ignition_start_time1 = 2,      ! sec for ignition from the start\n fire_ignition_end_time1  =502,      ! sec for ignition from the start\n fire_ignition_ros2 =   0.01,        ! rate of spread during ignition, m/s  \n fire_ignition_start_x2 = 1503,      ! start points of ignition lines, in m from lower left corner\n fire_ignition_start_y2 =  500,      ! start points of ignition lines, in m from lower left corner\n fire_ignition_end_x2 =   1503,      ! end points of ignition lines, in m from lower left corner\n fire_ignition_end_y2 =   1900,      ! end points of ignition lines, in m from lower left corner\n fire_ignition_radius2 =    18,      ! all within this radius will ignite, > fire mesh step\n fire_ignition_start_time2 = 3,      ! sec for ignition from the start      ! end ignition for sfire\n fire_ignition_end_time2  =503,      ! sec for ignition from the start! end ignition for sfire\n fire_wind_height = 1.,              ! height to interpolate winds to for calculating fire spread rate \n!\n! verbosity\n fire_print_msg     = 2,        ! 1 print fire debugging messages\n fire_print_file    = 0,        ! 1 write files for matlab\n!\n! moisture model\n fmoist_run = .true.,        ! yes do run the moisture model - set also sf_sfclay_physics and sf_surface_physics in &physics\n fmoist_interp = .true.,     ! yes do interpolate moisture to fuels\n fmoist_only = .false.       ! skip the fire model and run moisture only\n fmoist_freq = 0,            ! frequency of run or 0 to run using the specified fmost_dt\n fmoist_dt = 10,             ! moisture model time step (s)\n fire_fmc_read = 0,\n!\n! experiments\n!\n fire_const_time = -1.,         ! (s) if >0, time from start to stop fire evolution and keep heat output constant\n fire_const_grnhfx = -1,        ! (W/s) if both >=0, use this flux (meant to be used when fire_const_time=ignition time) \n fire_const_grnqfx = -1,        ! (W/s) if both >=0, use this flux (meant to be used when fire_const_time=ignition time) \n fire_test_steps=0,             ! >0 = on first call, do specified number of steps and terminate (testing only)\n!\n! the following flags are  for ideal.exe only\n!\n fire_mountain_type=1,          ! in ideal: 0=none, 1= hill, 2=EW ridge, 3=NS ridge\n fire_mountain_height=100.,     ! (m) ideal mountain height\n fire_mountain_start_x=900.,    ! (m) coord of start of the mountain from lower left corner (just like ignition)\n fire_mountain_start_y=1000.,   ! (m) coord of start of the mountain from lower left corner (just like ignition)\n fire_mountain_end_x=1400.,     ! (m) coord of end of the mountain from lower left corner (just like ignition)\n fire_mountain_end_y=1600.,     ! (m) coord of end of the mountain from lower left corner (just like ignition)\n fire_topo_from_atm=0,          ! 0 = fire mesh topo set from fine-res data, 1 = populate by interpolating from atmosphere\n sfc_full_init =.true.          ! .true.= turn on surface initialization (needed for the surface layer scheme to work), .false.=no surface initialization  \n sfc_tsk = 300.0                ! Initial surface temperature [K] to be used with sf_surface_phys = 1\n sfc_tmn = 330.0                ! Initial soil temperature at lower boundary [K] to be used with sf_surface_phys = 1\n sfc_lu_index  = 7              ! land use index needed by the surface model\n delt_perturbation = 3.0,       ! Temperature perturbation for creating a cold (negative) / warm (positive) bubble [K], 0 turns it off, needed to initialize rain\n xrad_perturbation = 10000.0,   ! Horizontal radius of the bubble in E-W direction [m]\n yrad_perturbation = 10000.0,   ! Horizontal radius of the bubble in N-S direction [m]\n zrad_perturbation = 1500.0,    ! Vertical radius of the bubble [m]\n hght_perturbation = 1500.0,    ! Perturbation height - height at which the warm/cold bubble will be suspended [m]\n!\n! method switches for developers only, do not change!\n!\n fire_fuel_left_irl=2,          ! refinement to integrate fuel_left, must be even\n fire_fuel_left_jrl=2,          ! refinement to integrate fuel_left, must be even\n fire_atm_feedback=1.0,         ! real, multiplier for heat fluxes, 1.=normal, 0.=turn off two-way coupling \n fire_grows_only=1,             ! if >0 level set function cannot increase = fire can only grow\n fire_viscosity=0.4,            ! artificial viscosity in level set method (max 1, needed with fire_upwinding=0)\n fire_upwinding=9,              ! 0=none, 1=standard, 2=godunov, 3=eno, 4=sethian\n fire_fuel_left_method=1,       ! for now, use 1 only\n fire_lfn_ext_up=1.0,           ! 0.=extend level set function at boundary by reflection, 1.=always up\n/\n"}, {"id": "test/em_fire/namelist.input_two_fires", "label": "two fires", "path": "test/em_fire/namelist.input_two_fires", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 0,\n run_minutes                         = 60,\n run_seconds                         = 0,\n start_year                          = 2006, 0001, 0001,\n start_month                         = 01,   01,   01,\n start_day                           = 01,   01,   01,\n start_hour                          = 09,   01,   00,\n start_minute                        = 00,   01,   01,\n start_second                        = 00,   00,   00,\n end_year                            = 2006, 0001, 0001,\n end_month                           = 01,   01,   01,\n end_day                             = 01,   01,   01,\n end_hour                            = 10,   00,   00,\n end_minute                          = 00,   00,   00,\n end_second                          = 00,   00,   00,\n history_interval_s                  = 120,  30,   30,\n frames_per_outfile                  = 1,     1,    1,\n restart                             = .false.,\n restart_interval                    = 120  \n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n/\n\n &domains\n time_step                           = 0,\n time_step_fract_num                 = 1,\n time_step_fract_den                 = 2,\n max_dom                             = 1,\n s_we                                = 1,     1,     1,\n e_we                                = 43,    43,    43,\n s_sn                                = 1,     1,     1,\n e_sn                                = 43,    43,    43,\n s_vert                              = 1,     1,     1,\n e_vert                              = 41,    41,    41,\n dx                                  = 50,\n dy                                  = 50,\n ztop                                = 4500, 1500, 1500,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 0,     1,    1,\n j_parent_start                      = 0,     1,    1,\n parent_grid_ratio                   = 1,     2,     3,\n parent_time_step_ratio              = 1,     2,     3,\n feedback                            = 1,\n smooth_option                       = 0\n sr_x                                = 10,     0,     0\n sr_y                                = 10,     0,     0\n/\n\n &physics\n mp_physics                          = 0,     0,     0,\n ra_lw_physics                       = 0,     0,     0,\n ra_sw_physics                       = 0,     0,     0,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 0,     0,     0,\n sf_surface_physics                  = 0,     0,     0,\n bl_pbl_physics                      = 0,     0,     0,\n bldt                                = 0,     0,     0,\n cu_physics                          = 0,     0,     0,\n cudt                                = 0,     0,     0,\n isfflx                              = 1,\n ifsnow                              = 0,\n icloud                              = 0,\n mp_zero_out                         = 0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 2,      2,      2,\n damp_opt                            = 2 ,\n zdamp                               = 800.,  5000.,  5000.,\n dampcoef                            = 0.2,    0.2,    0.2\n khdif                               = 0.05,   0.05,   0.05,\n kvdif                               = 0.05,   0.05,   0.05,\n smdiv                               = 0.1,    0.1,    0.1,\n emdiv                               = 0.01,   0.01,   0.01,\n epssm                               = 0.1,    0.1,    0.1\n mix_full_fields                     = .true., .true., .true.,\n non_hydrostatic                     = .true., .true., .true.,\n h_mom_adv_order                     = 5,      5,      5,\n v_mom_adv_order                     = 3,      3,      3,\n h_sca_adv_order                     = 5,      5,      5,\n v_sca_adv_order                     = 3,      3,      3,\n time_step_sound                     = 20,     20,     20,\n moist_adv_opt                       = 1,      1,      1,\n scalar_adv_opt                      = 1,      1,      1,\n tracer_opt                          = 3,      3,      3,\n /\n\n &bdy_control\n periodic_x                          = .false.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .true., \n open_xe                             = .true., \n periodic_y                          = .false.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .true., \n open_ye                             = .true., \n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &fire ! be sure to set sr_x,sr_y in domains-namelist (to set refinement in x,y)\n ifire              = 2,               ! integer, = 0: no fire, 2=turn on fire model\n fire_fuel_read     = 0,               ! integer, -1: from WPS, 0= use fire_fuel_cat, 1= by altitude, 2=from file input_fc\n fire_fuel_cat      = 3,               ! integer, fuel category if constant\n! ignition \n fire_num_ignitions = 2,               ! integer, only the first fire_num_ignition used, up to 5 allowed\n fire_ignition_ros1 =   0.05,          ! rate of spread during ignition, m/s  \n fire_ignition_start_x1 = 1075,        ! start points of ignition lines, in m from lower left corner\n fire_ignition_start_y1 =  900,        ! start points of ignition lines, in m from lower left corner\n fire_ignition_end_x1 =   1075,        ! end points of ignition lines, in m from lower left corner\n fire_ignition_end_y1 =   1100,        ! end points of ignition lines, in m from lower left corner\n fire_ignition_radius1 =    20,        ! all within this radius will ignite, > fire mesh step\n fire_ignition_start_time1 = 180,      ! sec for ignition from the start\n fire_ignition_end_time1  = 190,       ! sec for ignition from the start\n fire_ignition_ros2 =   0.05,          ! rate of spread during ignition, m/s  \n fire_ignition_start_x2 =  800,        ! start points of ignition lines, in m from lower left corner\n fire_ignition_start_y2 = 1500,        ! start points of ignition lines, in m from lower left corner\n fire_ignition_end_x2 =    800,        ! end points of ignition lines, in m from lower left corner\n fire_ignition_end_y2 =   1500,        ! end points of ignition lines, in m from lower left corner\n fire_ignition_radius2 =    20,        ! all within this radius will ignite, > fire mesh step\n fire_ignition_start_time2 =600,       ! sec for ignition from the start! end ignition for sfire\n fire_ignition_end_time2  = 720,       ! sec for ignition from the start! end ignition for sfire\n fire_wind_height = 1.,                ! height to interpolate winds to for calculating fire spread rate \n!\n! verbosity\n fire_print_msg     = 1,        ! 1 print fire debugging messages\n fire_print_file    = 0,        ! 1 write files for matlab\n!\n! experiments\n!\n fire_const_time = -1.,         ! (s) if >0, time from start to stop fire evolution and keep heat output constant\n fire_const_grnhfx = -1,        ! (W/s) if both >=0, use this flux (meant to be used when fire_const_time=ignition time) \n fire_const_grnqfx = -1,        ! (W/s) if both >=0, use this flux (meant to be used when fire_const_time=ignition time) \n fire_test_steps=0,             ! >0 = on first call, do specified number of steps and terminate (testing only)\n fire_mountain_type=0,          ! in ideal: 0=none, 1= hill, 2=EW ridge, 3=NS ridge\n fire_mountain_height=500.,     ! (m) ideal mountain height\n fire_mountain_start_x=1000.,   ! (m) coord of start of the mountain from lower left corder (just like ignition)\n fire_mountain_start_y=1100.,   ! (m) coord of start of the mountain from lower left corder (just like ignition)\n fire_mountain_end_x=1500.,     ! (m) coord of end of the mountain from lower left corder (just like ignition)\n fire_mountain_end_y=1400.,     ! (m) coord of end of the mountain from lower left corder (just like ignition)\n fire_topo_from_atm=1,          ! 0 = fire mesh topo set from fine-res data, 1 = populate by interpolating from atmosphere\n delt_perturbation = 0.0,       ! Temperature perturbation for creating cold (negative) / warm (positive) bubble [K], 0 turns it off\n !xrad_perturbation = 10000.0,   ! Horizontal radius of the bubble in E-W direction [m]\n !yrad_perturbation = 10000.0,   ! Horizontal radius of the bubble in N-S direction [m]\n !zrad_perturbation = 1500.0,    ! Vertical radius of the bubble [m]\n !hght_perturbation = 1500.0,    ! Perturbation height - height at which the warm/cold bubble will be suspended [m]\n!\n! stretched grid variables\n! \n stretch_grd = .true.,\n stretch_hyp = .true.,\n z_grd_scale = 2.35\n!\n! method switches for developers only, do not change!\n!\n fire_fuel_left_irl=2,          ! refinement to integrate fuel_left, must be even\n fire_fuel_left_jrl=2,          ! refinement to integrate fuel_left, must be even\n fire_atm_feedback=1.0,         ! real, multiplier for heat fluxes, 1.=normal, 0.=turn off two-way coupling \n fire_grows_only=1,             ! if >0 level set function cannot increase = fire can only grow\n fire_viscosity=0.4,              ! artificial viscosity in level set method (max 1, needed with fire_upwinding=0)\n fire_upwinding=9,              ! 0=none, 1=standard, 2=godunov, 3=eno, 4=sethian\n fire_fuel_left_method=1,        ! for now, use 1 only\n fire_lfn_ext_up=1.0,           ! 0.=extend level set function at boundary by reflection, 1.=always up\n/\n"}], "em_grav2d_x": [{"id": "test/em_grav2d_x/namelist.input", "label": "default", "path": "test/em_grav2d_x/namelist.input", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 0,\n run_minutes                         = 15,\n run_seconds                         = 0,\n start_year                          = 0001,\n start_month                         = 01,\n start_day                           = 01,\n start_hour                          = 00,\n start_minute                        = 00,\n start_second                        = 00,\n end_year                            = 0001,\n end_month                           = 01,\n end_day                             = 01,\n end_hour                            = 04,\n end_minute                          = 00,\n end_second                          = 00,\n history_interval                    = 1,\n frames_per_outfile                  = 1000,\n restart                             = .false.,\n restart_interval                    = 600,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 1,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,\n e_we                                = 513,\n s_sn                                = 1,\n e_sn                                = 3,\n s_vert                              = 1,\n e_vert                              = 65,\n dx                                  = 100,\n dy                                  = 100,\n ztop                                = 6409.,\n /\n\n &physics\n mp_physics                          = 0,\n ra_lw_physics                       = 0,\n ra_sw_physics                       = 0,\n radt                                = 0,\n sf_sfclay_physics                   = 0,\n sf_surface_physics                  = 0,\n bl_pbl_physics                      = 0,\n bldt                                = 0,\n cu_physics                          = 0,\n cudt                                = 0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 1,      1,      1,\n damp_opt                            = 0,\n zdamp                               = 15000.,\n dampcoef                            = 0.025,\n khdif                               = 75,\n kvdif                               = 75,\n smdiv                               = 0.1,\n emdiv                               = 0.01,\n epssm                               = 0.1,\n time_step_sound                     = 6,\n h_mom_adv_order                     = 5,\n v_mom_adv_order                     = 3,\n h_sca_adv_order                     = 5,\n v_sca_adv_order                     = 3,\n non_hydrostatic                     = .true.,\n /\n\n &bdy_control\n periodic_x                          = .true.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .false., \n open_xe                             = .false.,\n periodic_y                          = .true.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 6\n /\n"}, {"id": "test/em_grav2d_x/namelist.input.100m", "label": "100m", "path": "test/em_grav2d_x/namelist.input.100m", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 0,\n run_minutes                         = 15,\n run_seconds                         = 0,\n start_year                          = 0001,\n start_month                         = 01,\n start_day                           = 01,\n start_hour                          = 00,\n start_minute                        = 00,\n start_second                        = 00,\n end_year                            = 0001,\n end_month                           = 01,\n end_day                             = 01,\n end_hour                            = 04,\n end_minute                          = 00,\n end_second                          = 00,\n history_interval                    = 1,\n frames_per_outfile                  = 1000,\n restart                             = .false.,\n restart_interval                    = 600,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 1,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,\n e_we                                = 513,\n s_sn                                = 1,\n e_sn                                = 3,\n s_vert                              = 1,\n e_vert                              = 65,\n dx                                  = 100,\n dy                                  = 100,\n ztop                                = 6409.,\n /\n\n &physics\n mp_physics                          = 0,\n ra_lw_physics                       = 0,\n ra_sw_physics                       = 0,\n radt                                = 0,\n sf_sfclay_physics                   = 0,\n sf_surface_physics                  = 0,\n bl_pbl_physics                      = 0,\n bldt                                = 0,\n cu_physics                          = 0,\n cudt                                = 0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 1,      1,      1,\n damp_opt                            = 0,\n zdamp                               = 15000.,\n dampcoef                            = 0.025,\n khdif                               = 75,\n kvdif                               = 75,\n smdiv                               = 0.1,\n emdiv                               = 0.01,\n epssm                               = 0.1,\n time_step_sound                     = 6,\n h_mom_adv_order                     = 5,\n v_mom_adv_order                     = 3,\n h_sca_adv_order                     = 5,\n v_sca_adv_order                     = 3,\n non_hydrostatic                     = .true.,\n /\n\n &bdy_control\n periodic_x                          = .true.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .false., \n open_xe                             = .false.,\n periodic_y                          = .true.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 6\n /\n\n"}, {"id": "test/em_grav2d_x/namelist.input.200m", "label": "200m", "path": "test/em_grav2d_x/namelist.input.200m", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 0,\n run_minutes                         = 15,\n run_seconds                         = 0,\n start_year                          = 0001,\n start_month                         = 01,\n start_day                           = 01,\n start_hour                          = 00,\n start_minute                        = 00,\n start_second                        = 00,\n end_year                            = 0001,\n end_month                           = 01,\n end_day                             = 01,\n end_hour                            = 04,\n end_minute                          = 00,\n end_second                          = 00,\n history_interval                    = 1,\n frames_per_outfile                  = 1000,\n restart                             = .false.,\n restart_interval                    = 600,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 2,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,\n e_we                                = 257,\n s_sn                                = 1,\n e_sn                                = 3,\n s_vert                              = 1,\n e_vert                              = 33,\n dx                                  = 200,\n dy                                  = 200,\n ztop                                = 6409.,\n /\n\n &physics\n mp_physics                          = 0,\n ra_lw_physics                       = 0,\n ra_sw_physics                       = 0,\n radt                                = 0,\n sf_sfclay_physics                   = 0,\n sf_surface_physics                  = 0,\n bl_pbl_physics                      = 0,\n bldt                                = 0,\n cu_physics                          = 0,\n cudt                                = 0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 1,      1,      1,\n damp_opt                            = 0,\n zdamp                               = 15000.,\n dampcoef                            = 0.025,\n khdif                               = 75,\n kvdif                               = 75,\n smdiv                               = 0.1,\n emdiv                               = 0.01,\n epssm                               = 0.1,\n time_step_sound                     = 6,\n h_mom_adv_order                     = 5,\n v_mom_adv_order                     = 3,\n h_sca_adv_order                     = 5,\n v_sca_adv_order                     = 3,\n non_hydrostatic                     = .true.,\n /\n\n &bdy_control\n periodic_x                          = .true.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .false., \n open_xe                             = .false.,\n periodic_y                          = .true.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 6\n /\n\n"}, {"id": "test/em_grav2d_x/namelist.input.400m", "label": "400m", "path": "test/em_grav2d_x/namelist.input.400m", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 0,\n run_minutes                         = 15,\n run_seconds                         = 0,\n start_year                          = 0001,\n start_month                         = 01,\n start_day                           = 01,\n start_hour                          = 00,\n start_minute                        = 00,\n start_second                        = 00,\n end_year                            = 0001,\n end_month                           = 01,\n end_day                             = 01,\n end_hour                            = 04,\n end_minute                          = 00,\n end_second                          = 00,\n history_interval                    = 1,\n frames_per_outfile                  = 1000,\n restart                             = .false.,\n restart_interval                    = 600,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 4,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,\n e_we                                = 129,\n s_sn                                = 1,\n e_sn                                = 3,\n s_vert                              = 1,\n e_vert                              = 17,\n dx                                  = 400,\n dy                                  = 400,\n ztop                                = 6409.,\n /\n\n &physics\n mp_physics                          = 0,\n ra_lw_physics                       = 0,\n ra_sw_physics                       = 0,\n radt                                = 0,\n sf_sfclay_physics                   = 0,\n sf_surface_physics                  = 0,\n bl_pbl_physics                      = 0,\n bldt                                = 0,\n cu_physics                          = 0,\n cudt                                = 0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 1,      1,      1,\n damp_opt                            = 0,\n zdamp                               = 15000.,\n dampcoef                            = 0.025,\n khdif                               = 75,\n kvdif                               = 75,\n smdiv                               = 0.1,\n emdiv                               = 0.01,\n epssm                               = 0.1,\n time_step_sound                     = 6,\n h_mom_adv_order                     = 5,\n v_mom_adv_order                     = 3,\n h_sca_adv_order                     = 5,\n v_sca_adv_order                     = 3,\n non_hydrostatic                     = .true.,\n /\n\n &bdy_control\n periodic_x                          = .true.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .false., \n open_xe                             = .false.,\n periodic_y                          = .true.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 6\n /\n\n"}], "em_heldsuarez": [{"id": "test/em_heldsuarez/namelist.input", "label": "default", "path": "test/em_heldsuarez/namelist.input", "text": " &time_control\n run_days                            = 1000,\n run_hours                           = 0,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 0001, 0001, 0001,\n start_month                         = 01,   01,   01,\n start_day                           = 01,   01,   01,\n start_hour                          = 00,   00,   00,\n start_minute                        = 00,   00,   00,\n start_second                        = 00,   00,   00,\n end_year                            = 0002, 0010, 0010,\n end_month                           = 01,   01,   01,\n end_day                             = 01,   01,   01,\n end_hour                            = 00,   00,   00,\n end_minute                          = 00,   00,   00,\n end_second                          = 00,   00,   00,\n history_interval                    = 14400,  30,   30,\n frames_per_outfile                  = 400,  100,  100,\n restart                             = .false.,\n restart_interval                    = 72000,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n/\n\n &domains\n time_step                           = 1800,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,     1,     1,\n e_we                                = 65,    41,    41,\n s_sn                                = 1,     1,     1,\n e_sn                                = 37,    81,    81,\n s_vert                              = 1,     1,     1,\n e_vert                              = 41,    41,    41,\n dx                                  = 625373.3125,\n dy                                  = 555887.3750,\n ztop                                = 120000,16000, 16000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 0,     17,    17,\n j_parent_start                      = 0,     33,    33,\n parent_grid_ratio                   = 1,     5,     5,\n parent_time_step_ratio              = 1,     5,     5,\n feedback                            = 1,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 0,     0,     0,\n ra_lw_physics                       = 31,    0,     0,\n ra_sw_physics                       = 0,     0,     0,\n radt                                = 0,    30,    30,\n sf_sfclay_physics                   = 0,     0,     0,\n sf_surface_physics                  = 0,     0,     0,\n bl_pbl_physics                      = 0,     0,     0,\n bldt                                = 0,     0,     0,\n cu_physics                          = 0,     0,     0,\n cudt                                = 5,     5,     5,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 1,      1,      1,\n km_opt                              = 1,      1,      1,\n damp_opt                            = 0,\n zdamp                               = 4000.,  4000.,  4000.,\n dampcoef                            = 0.2,    0.2,    0.2\n khdif                               = 0,      0,      0,\n kvdif                               = 0,      0,      0,\n smdiv                               = 0.1,    0.1,    0.1,\n emdiv                               = 0.01,   0.01,   0.01,\n epssm                               = 0.1,    0.1,    0.1\n time_step_sound                     = 4,      4,      4,\n h_mom_adv_order                     = 5,      5,      5,\n v_mom_adv_order                     = 3,      3,      3,\n h_sca_adv_order                     = 5,      5,      5,\n v_sca_adv_order                     = 3,      3,      3,\n fft_filter_lat                      = 45\n non_hydrostatic                     = .false.,.true., .true.,\n /\n\n &bdy_control\n periodic_x                          = .true., \n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .false.,\n open_xe                             = .false.,\n periodic_y                          = .false.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n polar                               = .true. ,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n"}], "em_hill2d_x": [{"id": "test/em_hill2d_x/namelist.input", "label": "default", "path": "test/em_hill2d_x/namelist.input", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 10,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 0001,\n start_month                         = 01,\n start_day                           = 01,\n start_hour                          = 00,\n start_minute                        = 00,\n start_second                        = 00,\n end_year                            = 0001,\n end_month                           = 01,\n end_day                             = 01,\n end_hour                            = 10,\n end_minute                          = 00,\n end_second                          = 00,\n history_interval                    = 60,\n frames_per_outfile                  = 1000,\n restart                             = .false.,\n restart_interval                    = 1440,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 20,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,\n e_we                                = 202,\n s_sn                                = 1,\n e_sn                                = 3,\n s_vert                              = 1,\n e_vert                              = 41,\n dx                                  = 2000,\n dy                                  = 2000,\n ztop                                = 30000.,\n /\n\n &physics\n mp_physics                          = 0,\n ra_lw_physics                       = 0,\n ra_sw_physics                       = 0,\n radt                                = 0,\n sf_sfclay_physics                   = 0,\n sf_surface_physics                  = 0,\n bl_pbl_physics                      = 0,\n bldt                                = 0,\n cu_physics                          = 0,\n cudt                                = 0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 1,      1,      1,\n damp_opt                            = 3,\n zdamp                               = 20000.,\n dampcoef                            = .1,\n khdif                               = 00,\n kvdif                               = 0,\n smdiv                               = 0.1,\n emdiv                               = 0.01,\n epssm                               = 0.1,\n time_step_sound                     = 6,\n h_mom_adv_order                     = 5,\n v_mom_adv_order                     = 3,\n h_sca_adv_order                     = 5,\n v_sca_adv_order                     = 3,\n non_hydrostatic                     = .true.,\n /\n\n &bdy_control\n periodic_x                          = .false.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .true., \n open_xe                             = .true.,\n periodic_y                          = .true.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 1\n /\n"}, {"id": "test/em_hill2d_x/extras/namelist.input-100m_hill-10mps-N^2=0.0001-30km_deep-20km_damping-dampcoef=0.1-etac=0.2", "label": "extras 100m hill - 10mps - N^2=0 0001 - 30km deep - 20km damping - dampcoef=0 1 - etac=0 2", "path": "test/em_hill2d_x/extras/namelist.input-100m_hill-10mps-N^2=0.0001-30km_deep-20km_damping-dampcoef=0.1-etac=0.2", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 5,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 0001,\n start_month                         = 01,\n start_day                           = 01,\n start_hour                          = 00,\n start_minute                        = 00,\n start_second                        = 00,\n end_year                            = 0001,\n end_month                           = 01,\n end_day                             = 01,\n end_hour                            = 10,\n end_minute                          = 00,\n end_second                          = 00,\n history_interval                    = 60,\n frames_per_outfile                  = 1,\n restart                             = .false.,\n restart_interval                    = 120,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n debug_level                         = 0\n /\n\n &domains\n time_step                           = 20,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,\n e_we                                = 202,\n s_sn                                = 1,\n e_sn                                = 3,\n s_vert                              = 1,\n e_vert                              = 41,\n dx                                  = 2000,\n dy                                  = 2000,\n ztop                                = 30000.,\n /\n\n &physics\n mp_physics                          = 0,\n ra_lw_physics                       = 0,\n ra_sw_physics                       = 0,\n radt                                = 0,\n sf_sfclay_physics                   = 0,\n sf_surface_physics                  = 0,\n bl_pbl_physics                      = 0,\n bldt                                = 0,\n cu_physics                          = 0,\n cudt                                = 0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 1,      1,      1,\n damp_opt                            = 3,\n zdamp                               = 20000.,\n dampcoef                            = .1,\n khdif                               = 00,\n kvdif                               = 0,\n smdiv                               = 0.1,\n emdiv                               = 0.01,\n epssm                               = 0.1,\n time_step_sound                     = 6,\n h_mom_adv_order                     = 5,\n v_mom_adv_order                     = 3,\n h_sca_adv_order                     = 5,\n v_sca_adv_order                     = 3,\n non_hydrostatic                     = .true.,\n hybrid_opt                          = 2,\n etac                                = 0.2,\n /\n\n &bdy_control\n periodic_x                          = .false.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .true., \n open_xe                             = .true.,\n periodic_y                          = .true.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 1\n /\n"}, {"id": "test/em_hill2d_x/extras/namelist.input-700m_hill-15mps-n^2=0.0001-25km_deep-15km_damping-dampcoef=0.08-etac=0.2", "label": "extras 700m hill - 15mps - n^2=0 0001 - 25km deep - 15km damping - dampcoef=0 08 - etac=0 2", "path": "test/em_hill2d_x/extras/namelist.input-700m_hill-15mps-n^2=0.0001-25km_deep-15km_damping-dampcoef=0.08-etac=0.2", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 5,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 0001,\n start_month                         = 01,\n start_day                           = 01,\n start_hour                          = 00,\n start_minute                        = 00,\n start_second                        = 00,\n end_year                            = 0001,\n end_month                           = 01,\n end_day                             = 01,\n end_hour                            = 10,\n end_minute                          = 00,\n end_second                          = 00,\n history_interval                    = 60,\n frames_per_outfile                  = 1,\n restart                             = .false.,\n restart_interval                    = 120,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n debug_level                         = 0\n /\n\n &domains\n time_step                           = 20,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,\n e_we                                = 202,\n s_sn                                = 1,\n e_sn                                = 3,\n s_vert                              = 1,\n e_vert                              = 41,\n dx                                  = 2000,\n dy                                  = 2000,\n ztop                                = 25000.,\n /\n\n &physics\n mp_physics                          = 0,\n ra_lw_physics                       = 0,\n ra_sw_physics                       = 0,\n radt                                = 0,\n sf_sfclay_physics                   = 0,\n sf_surface_physics                  = 0,\n bl_pbl_physics                      = 0,\n bldt                                = 0,\n cu_physics                          = 0,\n cudt                                = 0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 1,      1,      1,\n damp_opt                            = 3,\n zdamp                               = 15000.,\n dampcoef                            = .08,\n khdif                               = 00,\n kvdif                               = 0,\n smdiv                               = 0.1,\n emdiv                               = 0.01,\n epssm                               = 0.1,\n time_step_sound                     = 6,\n h_mom_adv_order                     = 5,\n v_mom_adv_order                     = 3,\n h_sca_adv_order                     = 5,\n v_sca_adv_order                     = 3,\n non_hydrostatic                     = .true.,\n hybrid_opt                          = 2,\n etac                                = 0.2,\n /\n\n &bdy_control\n periodic_x                          = .false.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .true., \n open_xe                             = .true.,\n periodic_y                          = .true.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 1\n /\n"}, {"id": "test/em_hill2d_x/extras/namelist.input-HILL", "label": "extras HILL", "path": "test/em_hill2d_x/extras/namelist.input-HILL", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 10,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 0001,\n start_month                         = 01,\n start_day                           = 01,\n start_hour                          = 00,\n start_minute                        = 00,\n start_second                        = 00,\n end_year                            = 0001,\n end_month                           = 01,\n end_day                             = 01,\n end_hour                            = 10,\n end_minute                          = 00,\n end_second                          = 00,\n history_interval                    = 60,\n frames_per_outfile                  = 1,\n restart                             = .false.,\n restart_interval                    = 120,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n debug_level                         = 0\n /\n\n &domains\n time_step                           = 20,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,\n e_we                                = 202,\n s_sn                                = 1,\n e_sn                                = 3,\n s_vert                              = 1,\n e_vert                              = 41,\n dx                                  = 2000,\n dy                                  = 2000,\n ztop                                = 30000.,\n /\n\n &physics\n mp_physics                          = 0,\n ra_lw_physics                       = 0,\n ra_sw_physics                       = 0,\n radt                                = 0,\n sf_sfclay_physics                   = 0,\n sf_surface_physics                  = 0,\n bl_pbl_physics                      = 0,\n bldt                                = 0,\n cu_physics                          = 0,\n cudt                                = 0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 1,      1,      1,\n damp_opt                            = 3,\n zdamp                               = 20000.,\n dampcoef                            = .1,\n khdif                               = 00,\n kvdif                               = 0,\n smdiv                               = 0.1,\n emdiv                               = 0.01,\n epssm                               = 0.1,\n time_step_sound                     = 6,\n h_mom_adv_order                     = 5,\n v_mom_adv_order                     = 3,\n h_sca_adv_order                     = 5,\n v_sca_adv_order                     = 3,\n non_hydrostatic                     = .true.,\n hybrid_opt                          = 2,\n etac                                = 0.2,\n /\n\n &bdy_control\n periodic_x                          = .false.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .true., \n open_xe                             = .true.,\n periodic_y                          = .true.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 1\n /\n"}, {"id": "test/em_hill2d_x/extras/namelist.input-HILL-51", "label": "extras HILL - 51", "path": "test/em_hill2d_x/extras/namelist.input-HILL-51", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 10,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 0001,\n start_month                         = 01,\n start_day                           = 01,\n start_hour                          = 00,\n start_minute                        = 00,\n start_second                        = 00,\n end_year                            = 0001,\n end_month                           = 01,\n end_day                             = 01,\n end_hour                            = 10,\n end_minute                          = 00,\n end_second                          = 00,\n history_interval                    = 60,\n frames_per_outfile                  = 1,\n restart                             = .false.,\n restart_interval                    = 120,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n debug_level                         = 0\n /\n\n &domains\n time_step                           = 20,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,\n e_we                                = 202,\n s_sn                                = 1,\n e_sn                                = 3,\n s_vert                              = 1,\n e_vert                              = 51,\n dx                                  = 2000,\n dy                                  = 2000,\n ztop                                = 25000.,\n /\n\n &physics\n mp_physics                          = 0,\n ra_lw_physics                       = 0,\n ra_sw_physics                       = 0,\n radt                                = 0,\n sf_sfclay_physics                   = 0,\n sf_surface_physics                  = 0,\n bl_pbl_physics                      = 0,\n bldt                                = 0,\n cu_physics                          = 0,\n cudt                                = 0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 1,      1,      1,\n damp_opt                            = 3,\n zdamp                               = 15000.,\n dampcoef                            = .08,\n khdif                               = 00,\n kvdif                               = 0,\n smdiv                               = 0.1,\n emdiv                               = 0.01,\n epssm                               = 0.1,\n time_step_sound                     = 6,\n h_mom_adv_order                     = 5,\n v_mom_adv_order                     = 3,\n h_sca_adv_order                     = 5,\n v_sca_adv_order                     = 3,\n non_hydrostatic                     = .true.,\n hybrid_opt                          = 2,\n etac                                = 0.2,\n /\n\n &bdy_control\n periodic_x                          = .false.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .true., \n open_xe                             = .true.,\n periodic_y                          = .true.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 1\n /\n"}, {"id": "test/em_hill2d_x/extras/namelist.input-HILL-schar", "label": "extras HILL - schar", "path": "test/em_hill2d_x/extras/namelist.input-HILL-schar", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 20,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 0001,\n start_month                         = 01,\n start_day                           = 01,\n start_hour                          = 00,\n start_minute                        = 00,\n start_second                        = 00,\n end_year                            = 0001,\n end_month                           = 01,\n end_day                             = 01,\n end_hour                            = 10,\n end_minute                          = 00,\n end_second                          = 00,\n history_interval                    = 60,\n frames_per_outfile                  = 1,\n restart                             = .false.,\n restart_interval                    = 120,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n debug_level                         = 0\n /\n\n &domains\n time_step                           = 10,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,\n e_we                                = 202,\n s_sn                                = 1,\n e_sn                                = 3,\n s_vert                              = 1,\n e_vert                              = 41,\n dx                                  = 1000,\n dy                                  = 1000,\n ztop                                = 20000.,\n /\n\n &physics\n mp_physics                          = 0,\n ra_lw_physics                       = 0,\n ra_sw_physics                       = 0,\n radt                                = 0,\n sf_sfclay_physics                   = 0,\n sf_surface_physics                  = 0,\n bl_pbl_physics                      = 0,\n bldt                                = 0,\n cu_physics                          = 0,\n cudt                                = 0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n rk_ord                              = 3,\n diff_opt                            = 0,      2,      2,\n km_opt                              = 1,      1,      1,\n damp_opt                            = 0,\n zdamp                               = 0.,\n dampcoef                            = .08,\n khdif                               = 00,\n kvdif                               = 0,\n smdiv                               = 0.1,\n emdiv                               = 0.01,\n epssm                               = 0.1,\n time_step_sound                     = 6,\n h_mom_adv_order                     = 5,\n v_mom_adv_order                     = 3,\n h_sca_adv_order                     = 5,\n v_sca_adv_order                     = 3,\n non_hydrostatic                     = .true.,\n hybrid_opt                          = 2,\n etac                                = 0.2,\n /\n\n &bdy_control\n periodic_x                          = .false.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .true., \n open_xe                             = .true.,\n periodic_y                          = .true.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 1\n /\n"}], "em_les": [{"id": "test/em_les/namelist.input", "label": "default", "path": "test/em_les/namelist.input", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 1,\n run_minutes                         = 00,\n run_seconds                         = 00,\n start_year                          = 0001, 0001, 0001,\n start_month                         = 01,   01,   01,\n start_day                           = 01,   01,   01,\n start_hour                          = 00,   01,   00,\n start_minute                        = 00,   30,   00,\n start_second                        = 00,   00,   00,\n end_year                            = 0001, 0001, 0001,\n end_month                           = 01,   01,   01,\n end_day                             = 01,   01,   01,\n end_hour                            = 01,   02,   00,\n end_minute                          = 00,   30,   00,\n end_second                          = 00,   00,   00,\n history_interval_m                  = 60,   10,   1,\n history_interval_s                  = 00,   00,   1,\n frames_per_outfile                  = 1000, 1000, 1000,\n restart                             = .false.,\n restart_interval_m                  = 60,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 1,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,     1,     1,\n e_we                                = 40,   100,    151,\n s_sn                                = 1,     1,     1,\n e_sn                                = 40,   100,    151,\n s_vert                              = 1,     1,     1,\n e_vert                              = 40,   100,    41,\n dx                                  = 100,\n dy                                  = 100,\n ztop                                = 2000,  2000,  2000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 0,     10,    15,\n j_parent_start                      = 0,     10,    15,\n parent_grid_ratio                   = 1,     3,     3,\n parent_time_step_ratio              = 1,     3,     3,\n feedback                            = 0,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 0,     0,     0,\n ra_lw_physics                       = 0,     0,     0,\n ra_sw_physics                       = 0,     0,     0,\n radt                                = 0,     0,     0,\n sf_sfclay_physics                   = 1,     1,     1,\n sf_surface_physics                  = 0,     0,     0,\n bl_pbl_physics                      = 0,     0,     0,\n bldt                                = 0,     0,     0,\n cu_physics                          = 0,     0,     0,\n cudt                                = 0,     0,     0,\n isfflx                              = 2,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 2,      2,      2,\n damp_opt                            = 0,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.1,    0.2,    0.2\n khdif                               = 1.,      1.,    .05,\n kvdif                               = 1.,      1.,    .05,\n c_s                                 = 0.18\n c_k                                 = 0.10\n mix_isotropic                       = 1\n smdiv                               = 0.1,    0.1,    0.1,\n emdiv                               = 0.01,   0.01,   0.01,\n epssm                               = 0.1,    0.1,    0.1\n tke_heat_flux                       = 0.24,   0.24,   0.24,\n time_step_sound                     = 6,      6,      6,\n h_mom_adv_order                     = 5,      5,      5,\n v_mom_adv_order                     = 3,      3,      3,\n h_sca_adv_order                     = 5,      5,      5,\n v_sca_adv_order                     = 3,      3,      3,\n mix_full_fields                     = .true., .true., .true.,\n non_hydrostatic                     = .true., .true., .true.,\n pert_coriolis                       = .true., .true., .true.,\n use_theta_m                         = 1,\n /\n\n &bdy_control\n periodic_x                          = .true., \n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .false.,\n open_xe                             = .false.,\n periodic_y                          = .true., \n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 9\n /\n"}, {"id": "test/em_les/namelist.input.SGP", "label": "SGP", "path": "test/em_les/namelist.input.SGP", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 30,\n run_minutes                         = 00,\n run_seconds                         = 0,\n start_year                          = 2008, 2008,2001,\n start_month                         = 05, 05, 07,\n start_day                           = 13, 13, 11,\n start_hour                          = 12, 12, 00,\n start_minute                        = 00, 00, 00,\n start_second                        = 00, 00, 00,\n end_year                            = 2008, 2008,2001,\n end_month                           = 05, 05,07,\n end_day                             = 13, 13,11,\n end_hour                            = 13, 13, 08,\n end_minute                          = 00, 00, 00,\n end_second                          = 00, 00, 00,\n history_interval                    = 1, 1, 10,\n frames_per_outfile                  = 1, 1, 18,\n restart                             = .False.,\n restart_interval                    = 60,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 0, \n time_step_fract_num                 = 1,\n time_step_fract_den                 = 2,\n max_dom                             = 1,\n s_we                                = 1,     1,     1,\n e_we                                = 33,   34,    82,\n s_sn                                = 1,     1,     1,\n e_sn                                = 33,   34,    82,\n s_vert                              = 1,     1,     1,\n e_vert                              = 251,   251,    51,\n dx                                  = 100,\n dy                                  = 100,\n ztop                                = 5000, 5000,1500,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 1,     13,    36,\n j_parent_start                      = 1,     13,    36,\n parent_grid_ratio                   = 1,     3,     3,\n parent_time_step_ratio              = 1,     3,     3,\n feedback                            = 0,\n smooth_option                       = 1\n /\n nproc_x                             = 4,\n nproc_y                             = 4,\n\n &physics\n mp_physics                          = 0, 0, 8,\n progn                               = 0, 0, 1,\n ra_lw_physics                       = 0,  0, 0,\n ra_sw_physics                       = 0,  0, 0,\n radt                                = 1,  1, 5,\n cam_abs_freq_s                      = 21600,\n levsiz                              = 59,\n paerlev                             = 29,\n cam_abs_dim1                        = 4,\n cam_abs_dim2                        = 51,\n sf_sfclay_physics                   = 1,  1, 1,\n sf_surface_physics                  = 0,  0, 0,\n bl_pbl_physics                      = 0,  0, 0,\n bldt                                = 0,  0, 0,\n cu_physics                          = 0,  0, 0,\n cudt                                = 5,  5, 5,\n isfflx                              = 1,\n ifsnow                              = 0,\n icloud                              = 1,\n mp_zero_out                         = 0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 0,\n km_opt                              = 0,\n damp_opt                            = 1,\n w_damping                           = 0,\n zdamp                               = 350., 350., 250.,\n dampcoef                            = 0.02,  0.02,0.02,\n base_temp                           = 290.,\n base_pres                           = 100000.,\n base_lapse                          = 50.,\n khdif                               = 0., 0., 500,\n kvdif                               = 0., 0., 500,\n c_s                                 = 0.18, 0.18, 0.18,\n c_k                                 = 0.1, 0.10, 0.10,\n mix_isotropic                       = 0, 0, 1,\n smdiv                               = 0.1, 0.1, 0.1,\n emdiv                               = 0.01, 0.01, 0.01,\n epssm                               = 0.1, 0.1, 0.1,\n pert_coriolis                       = .false., .false., .true.,\n top_lid                             = .true., .true., .true.,\n tke_heat_flux                       = 0.02,    0.02,  0.02,\n tke_drag_coefficient                = 0.0013, 0.0013, 0.0013,\n mix_full_fields                     = .true., .true., .true.,\n non_hydrostatic                     = .true., .true., .true.,\n time_step_sound                     = 6, 6, 10,\n h_mom_adv_order                     = 5, 5, 5,\n v_mom_adv_order                     = 3, 3, 3,\n h_sca_adv_order                     = 5, 5, 5,\n v_sca_adv_order                     = 3, 3, 3,\n moist_adv_opt                       = 2, 2, 1,\n scalar_adv_opt                      = 2, 2, 1,\n chem_adv_opt                        = 2, 2, 1,\n tke_adv_opt                         = 2, 2, 1,\n use_theta_m                         = 1\n /\n\n &bdy_control\n periodic_x                          = .true., \n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .false.,\n open_xe                             = .false.,\n periodic_y                          = .true., \n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 9\n /\n\n"}, {"id": "test/em_les/namelist.input_shalconv", "label": "shalconv", "path": "test/em_les/namelist.input_shalconv", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 1,\n run_minutes                         = 00,\n run_seconds                         = 00,\n start_year                          = 0001, 0001, 0001,\n start_month                         = 01,   01,   01,\n start_day                           = 01,   01,   01,\n start_hour                          = 00,   01,   00,\n start_minute                        = 00,   30,   00,\n start_second                        = 00,   00,   00,\n end_year                            = 0001, 0001, 0001,\n end_month                           = 01,   01,   01,\n end_day                             = 01,   01,   01,\n end_hour                            = 01,   02,   00,\n end_minute                          = 00,   30,   00,\n end_second                          = 00,   00,   00,\n history_interval_m                  = 60,   10,   1,\n history_interval_s                  = 00,   00,   1,\n frames_per_outfile                  = 1000, 1000, 1000,\n restart                             = .false.,\n restart_interval_m                  = 60,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 1,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,     1,     1,\n e_we                                = 100,   100,    151,\n s_sn                                = 1,     1,     1,\n e_sn                                = 100,   100,    151,\n s_vert                              = 1,     1,     1,\n e_vert                              = 40,   100,    41,\n dx                                  = 100,\n dy                                  = 100,\n ztop                                = 2000,  2000,  2000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 0,     10,    15,\n j_parent_start                      = 0,     10,    15,\n parent_grid_ratio                   = 1,     3,     3,\n parent_time_step_ratio              = 1,     3,     3,\n feedback                            = 0,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 6,     0,     0,\n ra_lw_physics                       = 0,     0,     0,\n ra_sw_physics                       = 0,     0,     0,\n radt                                = 0,     0,     0,\n sf_sfclay_physics                   = 1,     1,     1,\n sf_surface_physics                  = 0,     0,     0,\n bl_pbl_physics                      = 0,     0,     0,\n bldt                                = 0,     0,     0,\n cu_physics                          = 0,     0,     0,\n cudt                                = 0,     0,     0,\n isfflx                              = 1,\n ideal_xland                         = 2,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 2,      2,      2,\n damp_opt                            = 0,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.1,    0.2,    0.2\n khdif                               = 1.,      1.,    .05,\n kvdif                               = 1.,      1.,    .05,\n c_s                                 = 0.18\n c_k                                 = 0.10\n mix_isotropic                       = 1\n smdiv                               = 0.1,    0.1,    0.1,\n emdiv                               = 0.01,   0.01,   0.01,\n epssm                               = 0.1,    0.1,    0.1\n time_step_sound                     = 6,      6,      6,\n h_mom_adv_order                     = 5,      5,      5,\n v_mom_adv_order                     = 3,      3,      3,\n h_sca_adv_order                     = 5,      5,      5,\n v_sca_adv_order                     = 3,      3,      3,\n moist_adv_opt                       = 2\n scalar_adv_opt                      = 2\n mix_full_fields                     = .true., .true., .true.,\n non_hydrostatic                     = .true., .true., .true.,\n pert_coriolis                       = .true., .true., .true.,\n use_theta_m                         = 1,\n /\n\n &bdy_control\n periodic_x                          = .true., \n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .false.,\n open_xe                             = .false.,\n periodic_y                          = .true., \n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 9\n /\n\n"}], "em_quarter_ss": [{"id": "test/em_quarter_ss/namelist.input", "label": "default", "path": "test/em_quarter_ss/namelist.input", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 0,\n run_minutes                         = 60,\n run_seconds                         = 0,\n start_year                          = 0001, 0001, 0001,\n start_month                         = 01,   01,   01,\n start_day                           = 01,   01,   01,\n start_hour                          = 00,   00,   00,\n start_minute                        = 00,   00,   00,\n start_second                        = 00,   00,   00,\n end_year                            = 0001, 0001, 0001,\n end_month                           = 01,   01,   01,\n end_day                             = 01,   01,   01,\n end_hour                            = 00,   00,   00,\n end_minute                          = 120,  120,  120,\n end_second                          = 00,   00,   00,\n history_interval                    = 30,   10,   10,\n frames_per_outfile                  = 1000, 1000, 1000,\n restart                             = .false.,\n restart_interval                    = 120,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 12,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,     1,     1,\n e_we                                = 42,    43,    43,\n s_sn                                = 1,     1,     1,\n e_sn                                = 42,    43,    43,\n s_vert                              = 1,     1,     1,\n e_vert                              = 41,    41,    41,\n dx                                  = 2000,\n dy                                  = 2000,\n ztop                                = 20000, 20000, 20000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 0,     15,    15,\n j_parent_start                      = 0,     15,    15,\n parent_grid_ratio                   = 1,     3,     3,\n parent_time_step_ratio              = 1,     3,     3,\n feedback                            = 1,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 1,     1,     1,\n ra_lw_physics                       = 0,     0,     0,\n ra_sw_physics                       = 0,     0,     0,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 0,     0,     0,\n sf_surface_physics                  = 0,     0,     0,\n bl_pbl_physics                      = 0,     0,     0,\n bldt                                = 0,     0,     0,\n cu_physics                          = 0,     0,     0,\n cudt                                = 5,     5,     5,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 2,      2,      2,\n damp_opt                            = 2,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.003,  0.003,  0.003\n khdif                               = 500,    500,    500,\n kvdif                               = 500,    500,    500,\n smdiv                               = 0.1,    0.1,    0.1,\n emdiv                               = 0.01,   0.01,   0.01,\n epssm                               = 0.1,    0.1,    0.1\n time_step_sound                     = 6,      6,      6,\n h_mom_adv_order                     = 5,      5,      5,\n v_mom_adv_order                     = 3,      3,      3,\n h_sca_adv_order                     = 5,      5,      5,\n v_sca_adv_order                     = 3,      3,      3,\n moist_adv_opt                       = 1,      1,      1,     \n scalar_adv_opt                      = 1,      1,      1,     \n chem_adv_opt                        = 1,      1,      1,     \n tke_adv_opt                         = 1,      1,      1,     \n non_hydrostatic                     = .true., .true., .true.,\n mix_full_fields                     = .true., .true., .true.,\n /\n\n &bdy_control\n periodic_x                          = .false.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .true., \n open_xe                             = .true., \n periodic_y                          = .false.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .true., \n open_ye                             = .true.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 2\n /\n"}, {"id": "test/em_quarter_ss/namelist.input_2to1", "label": "2to1", "path": "test/em_quarter_ss/namelist.input_2to1", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 1,\n run_minutes                         = 0,\n run_seconds                         = 0, \n start_year                          = 0001, 0001, 0001,\n start_month                         = 01,   01,   01,\n start_day                           = 01,   01,   01,\n start_hour                          = 00,   00,   00,\n start_minute                        = 00,   00,   00,\n start_second                        = 00,   00,   00,\n end_year                            = 0001, 0001, 0001,\n end_month                           = 01,   01,   01,\n end_day                             = 01,   01,   01,\n end_hour                            = 00,   00,   00,\n end_minute                          = 120,  120,  120,\n end_second                          = 00,   00,   00,\n history_interval                    = 10,   10,   10,\n frames_per_outfile                  = 1000, 1000, 1000,\n restart                             = .false.,\n restart_interval                    = 120,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 12,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 2,\n s_we                                = 1,     1,     1,\n s_sn                                = 1,     1,     1,\n s_vert                              = 1,     1,     1,\n e_vert                              = 41,    41,    41,\n ztop                                = 20000, 20000, 20000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 0,     16,    15,\n j_parent_start                      = 0,     16,    15,\n feedback                            = 1,\n smooth_option                       = 0\n\n e_we                                = 61,    61,\n e_sn                                = 61,    61,\n dx                                  = 2000,\n dy                                  = 2000,\n parent_grid_ratio                   = 1,     2,\n parent_time_step_ratio              = 1,     2,\n /\n\n &physics\n mp_physics                          = 1,     1,     1,\n ra_lw_physics                       = 0,     0,     0,\n ra_sw_physics                       = 0,     0,     0,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 0,     0,     0,\n sf_surface_physics                  = 0,     0,     0,\n bl_pbl_physics                      = 0,     0,     0,\n bldt                                = 0,     0,     0,\n cu_physics                          = 0,     0,     0,\n cudt                                = 5,     5,     5,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 2,      2,      2,\n damp_opt                            = 2,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.003,  0.003,  0.003\n khdif                               = 500,    500,    500,\n kvdif                               = 500,    500,    500,\n smdiv                               = 0.1,    0.1,    0.1,\n emdiv                               = 0.01,   0.01,   0.01,\n epssm                               = 0.1,    0.1,    0.1\n time_step_sound                     = 6,      6,      6,\n h_mom_adv_order                     = 5,      5,      5,\n v_mom_adv_order                     = 3,      3,      3,\n h_sca_adv_order                     = 5,      5,      5,\n v_sca_adv_order                     = 3,      3,      3,\n moist_adv_opt                       = 1,      1,      1,     \n scalar_adv_opt                      = 1,      1,      1,     \n chem_adv_opt                        = 1,      1,      1,     \n tke_adv_opt                         = 1,      1,      1,     \n non_hydrostatic                     = .true., .true., .true.,\n mix_full_fields                     = .true., .true., .true.,\n /\n\n &bdy_control\n periodic_x                          = .false.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .true., \n open_xe                             = .true., \n periodic_y                          = .false.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .true., \n open_ye                             = .true., \n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 2\n /\n\n"}, {"id": "test/em_quarter_ss/namelist.input_3to1", "label": "3to1", "path": "test/em_quarter_ss/namelist.input_3to1", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 1,\n run_minutes                         = 0,\n run_seconds                         = 0, \n start_year                          = 0001, 0001, 0001,\n start_month                         = 01,   01,   01,\n start_day                           = 01,   01,   01,\n start_hour                          = 00,   00,   00,\n start_minute                        = 00,   00,   00,\n start_second                        = 00,   00,   00,\n end_year                            = 0001, 0001, 0001,\n end_month                           = 01,   01,   01,\n end_day                             = 01,   01,   01,\n end_hour                            = 00,   00,   00,\n end_minute                          = 120,  120,  120,\n end_second                          = 00,   00,   00,\n history_interval                    = 10,   10,   10,\n frames_per_outfile                  = 1000, 1000, 1000,\n restart                             = .false.,\n restart_interval                    = 120,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 12,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 2,\n s_we                                = 1,     1,     1,\n s_sn                                = 1,     1,     1,\n s_vert                              = 1,     1,     1,\n e_vert                              = 41,    41,    41,\n ztop                                = 20000, 20000, 20000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 0,     16,    15,\n j_parent_start                      = 0,     16,    15,\n feedback                            = 1,\n smooth_option                       = 0\n\n e_we                                = 61,    91,\n e_sn                                = 61,    91,\n dx                                  = 2000,\n dy                                  = 2000,\n parent_grid_ratio                   = 1,     3,\n parent_time_step_ratio              = 1,     3,\n /\n\n &physics\n mp_physics                          = 1,     1,     1,\n ra_lw_physics                       = 0,     0,     0,\n ra_sw_physics                       = 0,     0,     0,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 0,     0,     0,\n sf_surface_physics                  = 0,     0,     0,\n bl_pbl_physics                      = 0,     0,     0,\n bldt                                = 0,     0,     0,\n cu_physics                          = 0,     0,     0,\n cudt                                = 5,     5,     5,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 2,      2,      2,\n damp_opt                            = 2,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.003,  0.003,  0.003\n khdif                               = 500,    500,    500,\n kvdif                               = 500,    500,    500,\n smdiv                               = 0.1,    0.1,    0.1,\n emdiv                               = 0.01,   0.01,   0.01,\n epssm                               = 0.1,    0.1,    0.1\n time_step_sound                     = 6,      6,      6,\n h_mom_adv_order                     = 5,      5,      5,\n v_mom_adv_order                     = 3,      3,      3,\n h_sca_adv_order                     = 5,      5,      5,\n v_sca_adv_order                     = 3,      3,      3,\n moist_adv_opt                       = 1,      1,      1,     \n scalar_adv_opt                      = 1,      1,      1,     \n chem_adv_opt                        = 1,      1,      1,     \n tke_adv_opt                         = 1,      1,      1,     \n non_hydrostatic                     = .true., .true., .true.,\n mix_full_fields                     = .true., .true., .true.,\n /\n\n &bdy_control\n periodic_x                          = .false.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .true., \n open_xe                             = .true., \n periodic_y                          = .false.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .true., \n open_ye                             = .true., \n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 2\n /\n\n"}, {"id": "test/em_quarter_ss/namelist.input_4to1", "label": "4to1", "path": "test/em_quarter_ss/namelist.input_4to1", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 1,\n run_minutes                         = 0,\n run_seconds                         = 0, \n start_year                          = 0001, 0001, 0001,\n start_month                         = 01,   01,   01,\n start_day                           = 01,   01,   01,\n start_hour                          = 00,   00,   00,\n start_minute                        = 00,   00,   00,\n start_second                        = 00,   00,   00,\n end_year                            = 0001, 0001, 0001,\n end_month                           = 01,   01,   01,\n end_day                             = 01,   01,   01,\n end_hour                            = 00,   00,   00,\n end_minute                          = 120,  120,  120,\n end_second                          = 00,   00,   00,\n history_interval                    = 10,   10,   10,\n frames_per_outfile                  = 1000, 1000, 1000,\n restart                             = .false.,\n restart_interval                    = 120,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 12,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 2,\n s_we                                = 1,     1,     1,\n s_sn                                = 1,     1,     1,\n s_vert                              = 1,     1,     1,\n e_vert                              = 41,    41,    41,\n ztop                                = 20000, 20000, 20000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 0,     16,    15,\n j_parent_start                      = 0,     16,    15,\n feedback                            = 1,\n smooth_option                       = 0\n\n e_we                                = 61,    121,\n e_sn                                = 61,    121,\n dx                                  = 2000,\n dy                                  = 2000,\n parent_grid_ratio                   = 1,     4,\n parent_time_step_ratio              = 1,     4,\n /\n\n &physics\n mp_physics                          = 1,     1,     1,\n ra_lw_physics                       = 0,     0,     0,\n ra_sw_physics                       = 0,     0,     0,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 0,     0,     0,\n sf_surface_physics                  = 0,     0,     0,\n bl_pbl_physics                      = 0,     0,     0,\n bldt                                = 0,     0,     0,\n cu_physics                          = 0,     0,     0,\n cudt                                = 5,     5,     5,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 2,      2,      2,\n damp_opt                            = 2,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.003,  0.003,  0.003\n khdif                               = 500,    500,    500,\n kvdif                               = 500,    500,    500,\n smdiv                               = 0.1,    0.1,    0.1,\n emdiv                               = 0.01,   0.01,   0.01,\n epssm                               = 0.1,    0.1,    0.1\n time_step_sound                     = 6,      6,      6,\n h_mom_adv_order                     = 5,      5,      5,\n v_mom_adv_order                     = 3,      3,      3,\n h_sca_adv_order                     = 5,      5,      5,\n v_sca_adv_order                     = 3,      3,      3,\n moist_adv_opt                       = 1,      1,      1,     \n scalar_adv_opt                      = 1,      1,      1,     \n chem_adv_opt                        = 1,      1,      1,     \n tke_adv_opt                         = 1,      1,      1,     \n non_hydrostatic                     = .true., .true., .true.,\n mix_full_fields                     = .true., .true., .true.,\n /\n\n &bdy_control\n periodic_x                          = .false.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .true., \n open_xe                             = .true., \n periodic_y                          = .false.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .true., \n open_ye                             = .true., \n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 2\n /\n\n"}, {"id": "test/em_quarter_ss/namelist.input_5to1", "label": "5to1", "path": "test/em_quarter_ss/namelist.input_5to1", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 1,\n run_minutes                         = 0,\n run_seconds                         = 0, \n start_year                          = 0001, 0001, 0001,\n start_month                         = 01,   01,   01,\n start_day                           = 01,   01,   01,\n start_hour                          = 00,   00,   00,\n start_minute                        = 00,   00,   00,\n start_second                        = 00,   00,   00,\n end_year                            = 0001, 0001, 0001,\n end_month                           = 01,   01,   01,\n end_day                             = 01,   01,   01,\n end_hour                            = 00,   00,   00,\n end_minute                          = 120,  120,  120,\n end_second                          = 00,   00,   00,\n history_interval                    = 10,   10,   10,\n frames_per_outfile                  = 1000, 1000, 1000,\n restart                             = .false.,\n restart_interval                    = 120,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 12,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 2,\n s_we                                = 1,     1,     1,\n s_sn                                = 1,     1,     1,\n s_vert                              = 1,     1,     1,\n e_vert                              = 41,    41,    41,\n ztop                                = 20000, 20000, 20000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 0,     16,    15,\n j_parent_start                      = 0,     16,    15,\n feedback                            = 1,\n smooth_option                       = 0\n\n e_we                                = 61,    151,\n e_sn                                = 61,    151,\n dx                                  = 2000,\n dy                                  = 2000,\n parent_grid_ratio                   = 1,     5,\n parent_time_step_ratio              = 1,     5,\n /\n\n &physics\n mp_physics                          = 1,     1,     1,\n ra_lw_physics                       = 0,     0,     0,\n ra_sw_physics                       = 0,     0,     0,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 0,     0,     0,\n sf_surface_physics                  = 0,     0,     0,\n bl_pbl_physics                      = 0,     0,     0,\n bldt                                = 0,     0,     0,\n cu_physics                          = 0,     0,     0,\n cudt                                = 5,     5,     5,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 2,      2,      2,\n damp_opt                            = 2,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.003,  0.003,  0.003\n khdif                               = 500,    500,    500,\n kvdif                               = 500,    500,    500,\n smdiv                               = 0.1,    0.1,    0.1,\n emdiv                               = 0.01,   0.01,   0.01,\n epssm                               = 0.1,    0.1,    0.1\n time_step_sound                     = 6,      6,      6,\n h_mom_adv_order                     = 5,      5,      5,\n v_mom_adv_order                     = 3,      3,      3,\n h_sca_adv_order                     = 5,      5,      5,\n v_sca_adv_order                     = 3,      3,      3,\n moist_adv_opt                       = 1,      1,      1,     \n scalar_adv_opt                      = 1,      1,      1,     \n chem_adv_opt                        = 1,      1,      1,     \n tke_adv_opt                         = 1,      1,      1,     \n non_hydrostatic                     = .true., .true., .true.,\n mix_full_fields                     = .true., .true., .true.,\n /\n\n &bdy_control\n periodic_x                          = .false.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .true., \n open_xe                             = .true., \n periodic_y                          = .false.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .true., \n open_ye                             = .true., \n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 2\n /\n\n"}], "em_real": [{"id": "test/em_real/examples.namelist", "label": "examples", "path": "test/em_real/examples.namelist", "text": "Note, this is not a namelist.input file. Find what interests you, and cut and paste them \n      to your own namelist.input file. For more information on these namelist parameters,\n      please see run/README.namelist or Chapter 5 of the User's Guide.\n\n** More options for real in namelist record &domains:\n\n p_top_requested                     = 5000\n interp_type                         = 2\n extrap_type                         = 2\n t_extrap_type                       = 2\n lowest_lev_from_sfc                 = .false.\n use_levels_below_ground             = .true.\n use_surface                         = .true.\n lagrange_order                      = 2\n force_sfc_in_vinterp                = 1\n zap_close_levels                    = 500\n sfcp_to_sfcp                        = .false.\n adjust_heights                      = .false.\n smooth_cg_topo                      = .false.\n eta_levels                          = 1.000, 0.990, 0.978, 0.964, 0.946,\n                                       0.922, 0.894, 0.860, 0.817, 0.766,\n                                       0.707, 0.644, 0.576, 0.507, 0.444,\n                                       0.380, 0.324, 0.273, 0.228, 0.188,\n                                       0.152, 0.121, 0.093, 0.069, 0.048,\n                                       0.029, 0.014, 0.000,\n\n** Using sst_update option (add these to namelist records &time_control and\n   &physics respectively):\n\n &time_control\n auxinput4_inname                    = \"wrflowinp_d<domain>\"\n auxinput4_interval                  = 360, 360, 360, \n io_form_auxinput4                   = 2\n\n &physics\n sst_update                          = 1,\n\n** Using qna_update option (add these to namelist records &time_control and\n   &physics respectively):\n\n &time_control\n auxinput17_inname                   = \"wrfqnainp_d<domain>\"\n auxinput17_interval                 = 360, 360, 360,\n io_form_auxinput17                  = 2\n\n &physics\n qna_update                          = 1,\n\n** Using Noah-MP option (Use sf_surface_physics option = 4, and add\n   &noah_mp namelist record)\n\n&physics\n   sf_surface_physics = 4\n\n&noah_mp\n dveg     = 4,\n opt_crs  = 1,\n opt_btr  = 1,\n opt_run  = 1,\n opt_sfc  = 1, \n opt_frz  = 1, \n opt_inf  = 1, \n opt_rad  = 3, \n opt_alb  = 2,\n opt_snf  = 1,\n opt_tbot = 2, \n opt_stc  = 1,\n/\n\n** Using UCM urban model\n&physics\n sf_urban_physics                    = 1,      1,     1,\n\n** Using BEP urban model\n&physics\n sf_urban_physics                    = 2,      2,     2,\n\n** Using BEM urban model\n&physics\n sf_urban_physics                    = 3,      3,     3,\n\n** Using lake model\n&physics\n sf_lake_physics                     = 1,      1,     1,\n lakedepth_default                   = 50.,    50.,   50.,\n lake_min_elev                       = 5.,     5.,    5.,\n\n** Using shallow water roughness (constant depth)\n&physics\nshalwater_z0                        = 1,       1,     1, \nshalwater_depth                     = 40.0,\n\n** Using shallow water roughness (with bathymetry data)\n&physics\nshalwater_z0                        = 1,       1,     1, \nshalwater_depth                     = 0.0,\n\n** Using stochastic backscatter scheme (new namelist record since v3.6)\n\n&stoch\n stoch_force_opt                     = 1,        1,        1,\n stoch_vertstruc_opt                 = 0,        0,        0,\n tot_backscat_psi                    = 1.E-05,   1.E-05,   1.E-05,\n tot_backscat_t                      = 1.E-06,   1.E-06,   1.E-06,\n nens                                = 1,\n ztau_psi                            = 10800.0,\n ztau_t                              = 10800.0,\n rexponent_psi                       =-1.83,\n rexponent_t                         =-1.83,\n zsigma2_eps                         = 0.0833,\n zsigma2_eta                         = 0.0833,\n kminforc                            = 1,\n kminforc                            = 1,\n kminforct                           = 1,\n lminforct                           = 1,\n kmaxforc                            = 1000000,\n lmaxforc                            = 1000000,\n kmaxforct                           = 1000000,\n lmaxforct                           = 1000000,\n perturb_bdy                         = 0,\n\n\n** Using DFI options (note this is a separate namelist record):\n\n &dfi_control\n dfi_opt                             = 3,\n dfi_nfilter                         = 7,\n dfi_cutoff_seconds                  = 3600,\n dfi_write_filtered_input            = .true.\n dfi_write_dfi_history               = .false.\n dfi_bckstop_year                    = 2000,\n dfi_bckstop_month                   = 01,\n dfi_bckstop_day                     = 24,\n dfi_bckstop_hour                    = 10,\n dfi_bckstop_minute                  = 00,\n dfi_bckstop_second                  = 00,\n dfi_fwdstop_year                    = 2000,\n dfi_fwdstop_month                   = 01,\n dfi_fwdstop_day                     = 24,\n dfi_fwdstop_hour                    = 13,\n dfi_fwdstop_minute                  = 00,\n dfi_fwdstop_second                  = 00,\n /\n\n &domains\n time_step_dfi                       = 60\n\n** Using gridded nudging option (note this is a separate namelist record) for\n   upperair nudging\n\n** Upper air gridded nudging requires an file generated by the real\n   program.  Activating grid_fdda for the real program is adequate.\n\n &fdda\n grid_fdda                           = 1,     1,     1,\n gfdda_inname                        = \"wrffdda_d<domain>\",\n gfdda_end_h                         = 24,    24,    24,\n gfdda_interval_m                    = 360,   360,   360,\n fgdt                                = 0,     0,     0,\n if_no_pbl_nudging_uv                = 0,     0,     0,\n if_no_pbl_nudging_t                 = 1,     1,     1,\n if_no_pbl_nudging_q                 = 1,     1,     1,\n if_zfac_uv                          = 0,     0,     0,\n  k_zfac_uv                          = 10,   10,    10,\n if_zfac_t                           = 0,     0,     0,\n  k_zfac_t                           = 10,   10,    10,\n if_zfac_q                           = 0,     0,     0,\n  k_zfac_q                           = 10,   10,    10,\n guv                                 = 0.0003,     0.0003,     0.0003,\n gt                                  = 0.0003,     0.0003,     0.0003,\n gq                                  = 0.0003,     0.0003,     0.0003,\n if_ramping                          = 1,\n dtramp_min                          = 60.0,\n io_form_gfdda                       = 2,\n\n** Using gridded surface nudging option (note this is a separate namelist \n   record)\n\n** Note that upper-air and surface gridded nudging may be used together \n   or separately.  Surface nudging requires an input file generated by the\n   obsgrid program.\n\n &fdda\n grid_sfdda                          = 1,     1,     1,\n sgfdda_inname                       = \"wrfsfdda_d<domain>\",\n sgfdda_end_h                        = 24,    24,    24,\n sgfdda_interval_m                   = 360,   360,   360,\n io_form_sgfdda                      = 2,\n guv_sfc                             = 0.0003,     0.0003,     0.0003,\n gt_sfc                              = 0.0003,     0.0003,     0.0003,\n gq_sfc                              = 0.0003,     0.0003,     0.0003,\n rinblw                              = 250.,       250.,       250., \n\n** Using observation nudging option (note &fdda is a separate namelist record):\n\n &time_control\n auxinput11_interval_s               = 180 , 180 , 180\n auxinput11_end_h                    = 6   , 6   , 6\n\n &fdda\n obs_nudge_opt                       = 1,1,1,\n max_obs                             = 150000,\n fdda_start                          = 0.,  0.,  0.,\n fdda_end                            = 720.,720.,720.,\n obs_nudge_wind                      = 1,1,1,\n obs_coef_wind                       = 6.E-4,6.E-4,6.E-4,\n obs_nudge_temp                      = 1,1,1,\n obs_coef_temp                       = 6.E-4,6.E-4,6.E-4,\n obs_nudge_mois                      = 1,1,1,\n obs_coef_mois                       = 6.E-4,6.E-4,6.E-4,\n obs_rinxy                           = 240.,240.,180.,\n obs_rinsig                          = 0.1,\n obs_twindo                          = 0.6666667,0.6666667,0.6666667,\n obs_npfi                            = 10,\n obs_ionf                            = 2, 2, 2,\n obs_idynin                          = 0,\n obs_dtramp                          = 40.,\n obs_prt_freq                        = 10, 10, 10,\n obs_prt_max                         = 10\n obs_ipf_errob                       = .true.\n obs_ipf_nudob                       = .true.\n obs_ipf_in4dob                      = .true\n obs_no_pbl_nudge_uv                 = 0\n obs_no_pbl_nudge_t                  = 0\n obs_no_pbl_nudge_q                  = 0\n obs_sfc_scheme_horiz                = 0\n obs_sfc_scheme_vert                 = 0\n obs_max_sndng_gap                   = 20\n obs_nudgezfullr1_uv                 = 50\n obs_nudgezrampr1_uv                 = 50\n obs_nudgezfullr2_uv                 = 50\n obs_nudgezrampr2_uv                 = 50\n obs_nudgezfullr4_uv                 = -5000\n obs_nudgezrampr4_uv                 = 50  \n obs_nudgezfullr1_t                  = 50 \n obs_nudgezrampr1_t                  = 50\n obs_nudgezfullr2_t                  = 50\n obs_nudgezrampr2_t                  = 50\n obs_nudgezfullr4_t                  = -5000\n obs_nudgezrampr4_t                  = 50  \n obs_nudgezfullr1_q                  = 50 \n obs_nudgezrampr1_q                  = 50\n obs_nudgezfullr2_q                  = 50\n obs_nudgezrampr2_q                  = 50\n obs_nudgezfullr4_q                  = -5000\n obs_nudgezrampr4_q                  = 50\n obs_nudgezfullmin                   = 50\n obs_nudgezrampmin                   = 50\n obs_nudgezmax                       = 3000\n obs_sfcfact                         = 1.0\n obs_sfcfacr                         = 1.0\n obs_dpsmx                           = 7.5\n /\n\n** Using spectral nudging option \n\n &fdda\n grid_fdda                           = 2,     2,     2,\n gfdda_inname                        = \"wrffdda_d<domain>\",\n gfdda_end_h                         = 24,    24,    24,\n gfdda_interval_m                    = 360,   360,   360,\n fgdt                                = 0,     0,     0,\n fgdtzero                            = 0,     0,     0,\n if_no_pbl_nudging_uv                = 0,     0,     0,\n if_no_pbl_nudging_t                 = 0,     0,     0,\n if_no_pbl_nudging_ph                = 0,     0,     0,\n if_zfac_uv                          = 0,     0,     0,\n  k_zfac_uv                          = 10,   10,    10,\n if_zfac_t                           = 0,     0,     0,\n  k_zfac_t                           = 10,   10,    10,\n if_zfac_ph                          = 0,     0,     0,\n  k_zfac_ph                          = 10,   10,    10,\n dk_zfac_uv                          = 1,     1,     1,\n dk_zfac_t                           = 1,     1,     1,\n dk_zfac_ph                          = 1,     1,     1,\n guv                                 = 0.0003,     0.0003,     0.0003,\n gt                                  = 0.0003,     0.0003,     0.0003,\n gph                                 = 0.0003,     0.0003,     0.0003,\n xwavenum                            = 3,\n ywavenum                            = 3,\n if_ramping                          = 1,\n dtramp_min                          = 60.0,\n io_form_gfdda                       = 2,\n\n** Using adaptive time step option (add these in namelist record &domains):\n\n use_adaptive_time_step              = .true.,\n step_to_output_time                 = .true.,\n target_cfl                          = 1.2, 1.2, 1.2,\n target_hcfl                         = .84, .84, .84,\n max_step_increase_pct               = 5,   51,  51,\n starting_time_step                  = -1,  -1,  -1,\n max_time_step                       = 360, 120, 40,\n min_time_step                       =  90,  30, 10,\n adaptation_domain                   =  1,\n\n** Using automatic vortex-following option (tropical storm tracking only;\n   add these in namelist record &domains):\n\n vortex_interval                     = 15, 15, 15,\n max_vortex_speed                    = 40, 40, 40,\n corral_dist                         =  8, 15, 15,\n track_level                         = 50000,\n\n** Miscellaneous physics options for namelist record &physics:\n\nTopographic shading (only effective when grid sizes are a few kilometers)\n\n slope_rad                           = 1,     1,     1,\n topo_shading                        = 1,     1,     1,\n shadlen                             = 25000, \n\nSetting threshold value for defining seaice if seaice is not in the input file:\n\n seaice_threshold                    = 271,\n\nSwitching off latent heating from a microphysics scheme (must also set cu_physics = 0):\n\n no_mp_heating                       = 0,\n\n** Using precipiatiion bucket in a time interval (minutes):\n\n prec_acc_dt                         = 60.\n\n** Using bucket accumulations for multi-year simulations (guideline: mean monthly accumulation)\n\n bucket_mm                           = 100.\n bucket_J                            = 1.e9\n\n** Optional gravitational settling of fog/cloud droplets (MYNN PBL only)\n\n grav_settling                       = 1,       ; default 0\n\n** Using implicit gravity-wave damping option (add these in namelist record &dynamics):\n\n damp_opt                            = 3,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.2,    0.2,    0.2\n\n** Using expanded boundary zone and exponential decay option (add or modify these in\n    namelist record &bdy_control). \n    spec_zone is ALWAYS = 1 \n    relax_zone is ALWAYS = spec_bdy_width - spec_zone\n\n&bdy_control\n spec_bdy_width                      = 10,\n specified                           = .true.,\n spec_exp                            = 0.33\n\nFor a tropical channel configuration, set the following:\n\n specified                           = .true.,\n periodic_x                          = .true.,\n\n** Using split lateral boundary files\n     The run-time flag multi_bdy_files must be set to TRUE (default is false), and the\n     lateral boundary files must have a date associated. When using the split LBC option,\n     there is ALWAYS and ONLY a single time LBC time in each file.\n\n multi_bdy_files                     = .true.\n\nAlso requires\n&time_control\n bdy_inname                          = \"wrfbdy_d<domain>_<date>\"\n\n** using io quilting option to improve output efficiency for large domain runs\n    (note that this is a separate namelist record):\n\n &namelist_quilt\n nio_tasks_per_group = 2,\n nio_groups = 1,\n\n** for tc bogusing:\n   Helpful hints\n   1) The TC bogus *MUST* only be run with a single processor: serial \n      (with or without a nest build option), or as a DM build with np=1.\n   2) Run the TC program for only the initial model time. Remember to copy \n      your metgrid file to a safe location and then let the TC scheme \n      generate the auxiliary files.\n   3) The TC program does not handle soil moisture or soil temperature \n      correctly. After running the TC program, use an NCL script to put the \n      modified fields back into the original metgrid file (remember that you\n      are keeping a pristine copy elsewhere). The modified fields to copy\n      are:  \"RH\", \"TT\", \"UU\", \"VV\", \"GHT\", \"PRES\", \"PMSL\", \"PSFC\".\n   4) The TC program runs quickly, only a few seconds. It is a good idea to \n      process multiple runs, and vary the TC initialization. It would be \n      reasonable to select the maximum wind speed (vmax_meters_per_second) \n      from 30 to 60 by 5, select the radius of maximum winds ((m), rmax) = \n      50000 to 200000 by 50000, and select a tuning parameter for the \n      vortex (vmax_ratio) = 0.5 to 0.9 by 0.1. Look at the resulting \n      bogus storms (sea level pressure, surface wind speeds, and \n      overall storm size), and choose the best.  \n   5) Remember to also consider starting the TC program at a later or\n      earlier time during your parameter space exploration.\n   6) The bogus storm will organize better if the initialization of the\n      tropical storm is entirely over water, and if the storm is able to \n      develop over water for several days.\n   7) After the metgrid file is finalized, and the real program is run,\n      use DFI in WRF. Removing and then introducing an entire bogus typhoon\n      is the definition of unbalanced. Running DFI for 2-3 hours back and forth\n      will be a benefit. For a successful implementation of a TC bogus storm in \n      WRF, the storm should not oscillate in size, should not be radiating \n      massive amounts of gravity waves, and should not rapidly weaken.\n\n &tc\n insert_bogus_storm                  = .true.,\n remove_storm                        = .false.,\n num_storm                           = 1,\n latc_loc                            = 15.,\n lonc_loc                            = -90.,\n vmax_meters_per_second              = 30,\n rmax                                = 50000,\n vmax_ratio                          = 0.5,\n /\n\n** for regional climate surface diagnostics such as max/min/mean/std of T2/Q2/wind/rainfall\nbetween selected output times (e.g. daily) in auxhist3\n\n &time_control\n output_diagnostics      = 1\n auxhist3_outname        = 'wrfxtrm_d<domain>_<date>'\n io_form_auxhist3        = 2\n auxhist3_interval       = 1440\n frames_per_auxhist3     = 1\n /\n\n\n** for pressure-level (and some surface) diagnostics, output is on stream 23,\nwhere the listed pressure levels are in Pa.  For the height level interpolation,\nthe unit is stream 22.\n\n &time_control\n io_form_auxhist23                   =  2,\n auxhist23_interval                  = 30,   30,    30,\n frames_per_auxhist23                =  1,    1,     1, \n auxhist23_outname                   = \"PLEVS_d<domain>_<date>\"\n /\n\n &diags\n p_lev_diags                         = 1\n num_press_levels                    = 4\n press_levels                        = 85000, 70000, 50000, 25000\n use_tot_or_hyd_p                    = 2\n /\n\n\n** for height-level diagnostics, output is on stream 22 (negative values\nfor z_levels means AGL, so -500 is 500 m AGL, and 10000 is 10 km).\n\n &time_control\n io_form_auxhist22                   =  2,\n auxhist22_interval                  = 30,   30,    30,\n frames_per_auxhist22                =  1,    1,     1, \n auxhist22_outname                   = \"ZLEVS_d<domain>_<date>\"\n /\n\n &diags\n z_lev_diags                         = 1\n num_z_levels                        = 2\n z_levels                            = -500, 10000\n /\n\n\n** For solar diagnostics, 2-D fields of variables relevant to solar forecasting are output \nwhen option solar_diagnostics is activated in diags section of namelist, as shown below.\nAlso, if tslist is present when solar_diagnostics is activated, then these same variables\nare output to the time series files for the location(s) specified in tslist.\nAll variables are calculated in phys/module_diag_solar.F and defined in registry.solar_fields\n\n &diags\n solar_diagnostics                   =  1\n /\n\n\n** Using different flux formulation for tropical storm simulations\n   (best for grid spacing less than 2 km) \n   simple 1-D ocean mixed layer, or University of Miami 3DPWP ocean model\n   (add these in namelist record &physics):\n\n isftcflx                            = 1,\n sf_ocean_physics                    = 0 (off), 1 (OML), 2 (3D PWP)\n oml_hml0                            = 50,\n oml_gamma                           = 0.14\n omdt                                = 1\n\n Add these in the &domains section.  Note that the example here is for\n a warm ocean: ocean_z is the depth of each layer (m), from the surface\n downward; the associated temperature is ocean_t (K); and the associated \n salinity is ocean_s (ppt).\n\n ocean_levels                        = 30,\n ocean_z                             =       5.,       15.,       25.,       35.,       45.,       55.,\n                                            65.,       75.,       85.,       95.,      105.,      115.,\n                                           125.,      135.,      145.,      155.,      165.,      175.,\n                                           185.,      195.,      210.,      230.,      250.,      270.,\n                                           290.,      310.,      330.,      350.,      370.,      390.\n ocean_t                             = 302.3493,  302.3493,  302.3493,  302.1055,  301.9763,  301.6818,\n                                       301.2220,  300.7531,  300.1200,  299.4778,  298.7443,  297.9194,\n                                       297.0883,  296.1443,  295.1941,  294.1979,  293.1558,  292.1136,\n                                       291.0714,  290.0293,  288.7377,  287.1967,  285.6557,  284.8503,\n                                       284.0450,  283.4316,  283.0102,  282.5888,  282.1674,  281.7461\n ocean_s                             =  34.0127,   34.0127,   34.0127,   34.3217,   34.2624,   34.2632,\n                                        34.3240,   34.3824,   34.3980,   34.4113,   34.4220,   34.4303,\n                                        34.6173,   34.6409,   34.6535,   34.6550,   34.6565,   34.6527,\n                                        34.6490,   34.6446,   34.6396,   34.6347,   34.6297,   34.6247,\n                                        34.6490,   34.6446,   34.6396,   34.6347,   34.6297,   34.6247\n\n\nReferences for 3D ocean circulation model:\nLee, C.-Y., and S. S. Chen, 2013: Stable Boundary Layer and Its Impact on Tropical Cyclone Structure in a Coupled Atmosphere-Ocean Model, Mon. Wea. Rev.\nPrice, J. F., T. B. Sanford, and G. Z. Forristal, 1994: Forced stage response to a moving hurricane. J. Phy. Oceanogr., 24, 233-260.\n\n\n\n** Using the ACOM Forward Lagrangian trajectory calculation:\n\n&domains\n num_traj                            = 25,\n\n&physics\n traj_opt                            = 1,\n dm_has_traj                         = .true.,  ..true.,  .true.\n \n\nFor domain #1, the file must \"wrfinput_traj_d01\" exist in the working directory. Similarly for domain 2, 3, etc. Each domain\nhas a separate file for a namelist.\n\n&traj_default\n traj_def%start_time        = '2000-01-24_12:00:00',\n traj_def%stop_time         = '2000-01-25_12:00:00',\n traj_def%dyn_name(1:6)     = 'p', 'T', 'z', 'u', 'v', 'w',\n traj_def%hyd_name(1)       = 'QVAPOR',\n/\n  \n&traj_spec\n traj_type%start_time = '2000-01-24_12:00:00',  '2000-01-24_12:00:00',  \n                        '2000-01-24_12:00:00',  '2000-01-24_12:00:00',  \n                        '2000-01-24_12:00:00',  '2000-01-24_12:00:00',  \n                        '2000-01-24_12:00:00',  '2000-01-24_12:00:00',  \n                        '2000-01-24_12:00:00',  '2000-01-24_12:00:00',  \n                        '2000-01-24_12:00:00',  \n traj_type%stop_time  = '2000-01-25_12:00:00',  '2000-01-25_12:00:00',  \n                        '2000-01-25_12:00:00',  '2000-01-25_12:00:00',  \n                        '2000-01-25_12:00:00',  '2000-01-25_12:00:00',  \n                        '2000-01-25_12:00:00',  '2000-01-25_12:00:00',  \n                        '2000-01-25_12:00:00',  '2000-01-25_12:00:00',  \n                        '2000-01-25_12:00:00',  \n traj_type%lev        = 60., 60., 60., 60., 60., 60., 60., 60., 60., 60., 60., \n traj_type%lon        = -79.88470, -79.74551, -79.60422, -79.46072, \n                        -79.31503, -79.16708, -79.01682, -78.86417, \n                        -78.70911, -78.55151, -78.39142,\n traj_type%lat        =  29.18063,  29.70515,  30.23069,  30.75718,  \n                         31.28461,  31.81292,  32.34208,  32.87204,  \n                         33.40276,  33.93421,  34.46631,\n/\n\n\n\n** Vertical nesting\n\nThe WRF model now supports vertical nesting for a coincident (online)\nmodel simulation (during a single model run, differing numbers of\nvertical levels may be used per domain).  This is activated with a switch\nto turn on the option (vert_refine_method).  The namelist array eta_levels\nis manually filled in for each domain.  Below is an example for two \ndomains.  \n\nNOTE: The user is restricted to using the RRTM LW and Dudhia SW radiation schemes.\nNOTE: The user is restricted from using the hybrid vertical coordinate.\n\n &domains\n max_dom                             = 2,\n e_vert                              = 35,    45,\n eta_levels(1:35)                    = 1., 0.993, 0.983, 0.97, 0.954, 0.934, 0.909, 0.88, 0.8406663, 0.8013327, \n                                       0.761999, 0.7226653, 0.6525755, 0.5877361, 0.5278192, 0.472514, \n                                       0.4215262, 0.3745775, 0.3314044, 0.2917579, 0.2554026, 0.2221162, \n                                       0.1916888, 0.1639222, 0.1386297, 0.1156351, 0.09525016, 0.07733481, \n                                       0.06158983, 0.04775231, 0.03559115, 0.02490328, 0.0155102, 0.007255059, 0.\n eta_levels(36:81)                   = 1.0000, 0.9946, 0.9875, 0.9789, 0.9685, 0.9562, 0.9413, 0.9238, 0.9037, 0.8813, 0.8514,\n                                       0.8210, 0.7906, 0.7602, 0.7298, 0.6812, 0.6290, 0.5796, 0.5333, 0.4901, 0.4493, 0.4109,\n                                       0.3746, 0.3412, 0.3098, 0.2802, 0.2524, 0.2267, 0.2028, 0.1803, 0.1593, 0.1398, 0.1219,\n                                       0.1054, 0.0904, 0.0766, 0.0645, 0.0534, 0.0433, 0.0341, 0.0259, 0.0185, 0.0118, 0.0056, 0.    \n vert_refine_method                  = 0,     2,\n\n\n\n** Tropopause data level of max winds data, for program real.exe only\n\nWhen information (mostly NCEP supplied through GFS or NAM) is available \nin the Grib2 file, AND extracted with ungrib, the metgrid program inserts\nflag information into the data stream that is input by real.  The real\nprogram is able to use the available u, v, T, height fields (each may be on\na tropopause .OR. the level of max winds) in the vertical interpolation.\nTo \"tune\" the data, the user may select a level below which the max wind \ninforamtion is ignored.  The default is 300 hPa.  The user may also \nselect the level that when exceeded the trop and maxw fields are ignored\n(due to the horizontal pressure difference detecting a user-defined\ndiscontinuity, and the metgrid horizontal interpolation across the \ndiscontinuity would be suspect).  By default, this option is turned off.\nThe user may choose to individually activate the vertical interpolation of\neither the level of max winds .OR. the tropopause level.\n\nDefault (all pressure units Pa):\n &domains\n maxw_horiz_pres_diff                = 5000\n trop_horiz_pres_diff                = 5000\n maxw_above_this_level               = 30000\n use_maxw_level                      = 0 (0=do not use level, 1 = use level)\n use_trop_level                      = 0 (0=do not use level, 1 = use level)\n\n\n\n\n** Using aerosol option aer_opt = 2:\n\n&physics\n aer_opt            = 2,\n aer_type           = 1,\n aer_aod550_opt     = 1,\n aer_aod550_val     = 0.12,\n aer_angexp_opt     = 1,\n aer_angexp_val     = 1.3,\n aer_ssa_opt        = 1,\n aer_ssa_val        = 0.85,\n aer_asy_opt        = 1,\n aer_asy_val        = 0.90,\n\n\n** Using Jimenez wind-farm scheme\n\nIn the &physics namelist record, set the MAX_DOM value:\n windfarm                            = 1,    1,    1\n\nAlso in the directory with namelist.input, is the file defining the\nspecifics of the wind turbine type: wind-turbine-1.tbl\n\nThe location of wind turbines are specified as lat lon, and \nthe turbine type: windturbines.txt\n\n** Using stochastic schemes\n&stoch\n skebs              = 1, 1, 1, \n rand_perturb       = 1, 1, 1, \n\n\n** Using kfcupscheme cu_physics (cumulus scheme option). This has been tested with\nthe CAM radiation scheme and is not recommended with other radiation schemes.\nRegarding cu_rad_feedback, users want the parameterized clouds to affect radiation.  \nTurning it off is only useful as a sensitivity study to determine the importance of \nthat effect. Regarding shallowcu_forced_ra option, setting it to true will override \nthe cloud fraction calculations to a prescribed maximum cloud fraction (a value of 0.36)\nwhich can be changed by the user for sensitivity testing purposes.\n\n&physics\n cu_physics          = 10,    10,    10,\n ra_lw_physics       = 3,     3,     3,\n ra_sw_physics       = 3,     3,     3,\n cu_rad_feedback     =.true.,.true.,.true.,\n shallowcu_forced_ra = .false.,.false.,.false.,\n numBins             = 21,    21,    21,\n thBinSize           = 0.1,   0.1,   0.1,\n rBinSize            = 0.0001,0.0001,0.0001,\n minDeepFreq         = 0.333, 0.333, 0.333,\n minShallowFreq      = 0.01,  0.01,  0.01, \n\n\n** To write out an input file during the model simulation.\n\n&time_control\n write_input                         = .TRUE.,\n inputout_interval_m                 = 60, 60, 60\n input_outname                       = \"wrfinput_out_d<domain>_<date>\"\n inputout_begin_h                    = 3, 6, 6\n inputout_end_h                      = 9, 6, 6\n\n** To use climatological data in Thompson microphysics option 28: in addition to\nprocess additional data in metgrid, use these:\n\n&domains\n wif_input_opt                       = 1\n num_wif_levels                      = 30\n\n&physics\n mp_physics                          = 28,    28,    28,\n use_aero_icbc                       = .true.\n\n\n** The hybrid vertical coordinate (HVC) requires three pieces:\n1. The WRF and real codes must be built with HVC activated (./configure -hyb)\n2. The eta location (etac) at which the eta levels higher up in the atmosphere\n   become isobaric must be defined (suggested default in Registry).\n3. The run-time option to select the HVC (hybrid_opt, default is OFF): \n&dynamics\n hybrid_opt          = 2,\n etac                = 0.2,\n\n** New mechanism to specify physics:\n\n&physics\n physics_suite = 'CONUS'\n\nwhich is equivalent to\n\n mp_physics         = 8,\n cu_physics         = 6,\n ra_lw_physics      = 4,\n ra_sw_physics      = 4,\n bl_pbl_physics     = 2,\n sf_sfclay_physics  = 2,\n sf_surface_physics = 2,\n\n&physics\n physics_suite = 'TROPICAL'\n\nwhich is equivalent to\n\n mp_physics         = 6,\n cu_physics         = 16,\n ra_lw_physics      = 4,\n ra_sw_physics      = 4,\n bl_pbl_physics     = 1,\n sf_sfclay_physics  = 91,\n sf_surface_physics = 2,\n\n\nTo overwrite the cu_physics option for a second nest, set \n\n &physics\n physics_suite                       = 'tropical'\n cu_physics                          = -1,    -1,     0,\n ...\n\n** New way to automatically choose levels (default auto_levels_opt=2)\n max_dz                              = 1000.\n auto_levels_opt                     = 2\n dzbot                               = 50.\n dzstretch_s                         = 1.3\n dzstretch_u                         = 1.1\n\n** Using the scale-adaptive SMS-3DTKE subgrid turbulent mixing scheme: \n &physics\n   bl_pbl_physics = 0,\n   sf_sfclay_physics = 1(or 5, 91), \n /\n &dynamics\n   diff_opt       = 2,\n   km_opt         = 5, \n /\n\n\n** Using lightning option\n &physics\n lightning_option                    = 2,\n iccg_method                         = 1,\n iccg_prescribed_num                 = 2,\n iccg_prescribed_den                 = 1,\n cldtop_adjustment                   = 0,\n lightning_dt                        = 5,   ; default: time_step\n lightning_start_seconds             = 600,\n flashrate_factor                    = 1.0,\n ltng_temp_upper                    = -45., ; used by lnox_opt=2\n ltng_temp_lower                    = -15., ; used by lnox_opt=2\n /\n \n &chem\n lnox_opt                           = 2,\n n_ic                               = 200,\n n_cg                               = 200,\n lnox_passive                       = .false.,\n /\n\n\n** Using the irrigation parameterizations:\n&physics\n sf_surf_irr_scheme                  = 3,\n irr_daily_amount                    = 5.7,\n irr_start_hour                      = 2,\n irr_num_hours                       = 3,\n irr_start_julianday                 = 135,\n irr_end_julianday                   = 350,\n irr_ph                              = 0,\n irr_freq                            = 1,\n/\n\n\n\n\n"}, {"id": "test/em_real/namelist.input", "label": "default", "path": "test/em_real/namelist.input", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 36,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2019, 2019,\n start_month                         = 09,   09, \n start_day                           = 04,   04,\n start_hour                          = 12,   12,\n end_year                            = 2019, 2019,\n end_month                           = 09,   09,\n end_day                             = 06,   06,\n end_hour                            = 00,   00,\n interval_seconds                    = 10800\n input_from_file                     = .true.,.true.,\n history_interval                    = 60,  60,\n frames_per_outfile                  = 1, 1,\n restart                             = .false.,\n restart_interval                    = 7200,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 90,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 2,\n e_we                                = 150,    220,\n e_sn                                = 130,    214,\n e_vert                              = 48,     48,\n dzbot                               = 30.\n dzstretch_s                         = 1.11\n dzstretch_u                         = 1.10\n p_top_requested                     = 5000,\n num_metgrid_levels                  = 34,\n num_metgrid_soil_levels             = 4,\n dx                                  = 15000,\n dy                                  = 15000,\n grid_id                             = 1,     2,\n parent_id                           = 0,     1,\n i_parent_start                      = 1,     53,\n j_parent_start                      = 1,     25,\n parent_grid_ratio                   = 1,     3,\n parent_time_step_ratio              = 1,     3,\n feedback                            = 1,\n smooth_option                       = 0\n /\n\n &physics\n physics_suite                       = 'CONUS'\n mp_physics                          = -1,    -1,\n cu_physics                          = -1,    -1,\n ra_lw_physics                       = -1,    -1,\n ra_sw_physics                       = -1,    -1,\n bl_pbl_physics                      = -1,    -1,\n sf_sfclay_physics                   = -1,    -1,\n sf_surface_physics                  = -1,    -1,\n radt                                = 15,    15,\n bldt                                = 0,     0,\n cudt                                = 0,     0,\n icloud                              = 1,\n num_land_cat                        = 21,\n sf_urban_physics                    = 0,     0,\n fractional_seaice                   = 1,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n w_damping                           = 0,\n diff_opt                            = 2,      2,\n km_opt                              = 4,      4,\n diff_6th_opt                        = 0,      0,\n diff_6th_factor                     = 0.12,   0.12,\n base_temp                           = 290.\n damp_opt                            = 3,\n zdamp                               = 5000.,  5000.,\n dampcoef                            = 0.2,    0.2,\n khdif                               = 0,      0,\n kvdif                               = 0,      0,\n non_hydrostatic                     = .true., .true.,\n moist_adv_opt                       = 1,      1,\n scalar_adv_opt                      = 1,      1,\n gwd_opt                             = 1,      0,\n /\n\n &bdy_control\n spec_bdy_width                      = 5,\n specified                           = .true.\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n"}, {"id": "test/em_real/namelist.input.4km", "label": "4km", "path": "test/em_real/namelist.input.4km", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 12,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2001, 2001, 2001,\n start_month                         = 06,   06,   06,\n start_day                           = 11,   11,   11,\n start_hour                          = 12,   12,   12,\n end_year                            = 2001, 2001, 2001,\n end_month                           = 06,   06,   06,\n end_day                             = 12,   12,   12,\n end_hour                            = 12,   12,   12,\n interval_seconds                    = 10800\n input_from_file                     = .true.,.true.,.true.,\n history_interval                    = 60,   60,   60,\n frames_per_outfile                  = 1,    1,    1,\n restart                             = .false.,\n restart_interval                    = 1440,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 24,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n e_we                                = 225,   112,   94,\n e_sn                                = 202,   97,    91,\n e_vert                              = 35,    35,    35,\n p_top_requested                     = 5000,\n num_metgrid_levels                  = 32\n num_metgrid_soil_levels             = 4,\n dx                                  = 4000,\n dy                                  = 4000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 1,     31,    30,\n j_parent_start                      = 1,     17,    30,\n parent_grid_ratio                   = 1,     3,     3,\n parent_time_step_ratio              = 1,     3,     3,\n feedback                            = 1,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 8,     8,     8,\n ra_lw_physics                       = 4,     4,     4,\n ra_sw_physics                       = 4,     4,     4,\n radt                                = 10,    10,    10,\n sf_sfclay_physics                   = 1,     1,     1,\n sf_surface_physics                  = 2,     2,     2,\n bl_pbl_physics                      = 1,     1,     1,\n bldt                                = 0,     0,     0,\n ysu_topdown_pblmix                  = 1,\n cu_physics                          = 0,     0,     0,\n cudt                                = 0,     0,     0,\n icloud                              = 1,\n num_land_cat                        = 21,\n sf_urban_physics                    = 0,     0,     0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n w_damping                           = 0,\n diff_opt                            = 1,      1,      1,\n km_opt                              = 4,      4,      4,\n diff_6th_opt                        = 0,      0,      0,\n diff_6th_factor                     = 0.12,   0.12,   0.12,\n base_temp                           = 290.\n damp_opt                            = 3,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.2,    0.2,    0.2\n khdif                               = 0,      0,      0,\n kvdif                               = 0,      0,      0,\n non_hydrostatic                     = .true., .true., .true.,\n moist_adv_opt                       = 2,      2,      2,\n scalar_adv_opt                      = 2,      2,      2,\n /\n\n &bdy_control\n spec_bdy_width                      = 5,\n specified                           = .true.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n"}, {"id": "test/em_real/namelist.input.IEVA.4km", "label": "IEVA 4km", "path": "test/em_real/namelist.input.IEVA.4km", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 12,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2001, 2001, 2001,\n start_month                         = 06,   06,   06,\n start_day                           = 11,   11,   11,\n start_hour                          = 12,   12,   12,\n end_year                            = 2001, 2001, 2001,\n end_month                           = 06,   06,   06,\n end_day                             = 12,   12,   12,\n end_hour                            = 12,   12,   12,\n interval_seconds                    = 10800\n input_from_file                     = .true.,.true.,.true.,\n history_interval                    = 60,   60,   60,\n frames_per_outfile                  = 1,    1,    1,\n restart                             = .false.,\n restart_interval                    = 1440,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 30,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n e_we                                = 225,   112,   94,\n e_sn                                = 202,   97,    91,\n e_vert                              = 35,    35,    35,\n p_top_requested                     = 5000,\n num_metgrid_levels                  = 32\n num_metgrid_soil_levels             = 4,\n dx                                  = 4000,\n dy                                  = 4000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 1,     31,    30,\n j_parent_start                      = 1,     17,    30,\n parent_grid_ratio                   = 1,     3,     3,\n parent_time_step_ratio              = 1,     3,     3,\n feedback                            = 1,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 8,     8,     8,\n ra_lw_physics                       = 4,     4,     4,\n ra_sw_physics                       = 4,     4,     4,\n radt                                = 10,    10,    10,\n sf_sfclay_physics                   = 1,     1,     1,\n sf_surface_physics                  = 2,     2,     2,\n bl_pbl_physics                      = 1,     1,     1,\n bldt                                = 0,     0,     0,\n ysu_topdown_pblmix                  = 1,\n cu_physics                          = 0,     0,     0,\n cudt                                = 0,     0,     0,\n icloud                              = 1,\n num_land_cat                        = 21,\n sf_urban_physics                    = 0,     0,     0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n zadvect_implicit                    = 1\n w_damping                           = 1,\n w_crit_cfl                          = 2.0,\n diff_opt                            = 1,      1,      1,\n km_opt                              = 4,      4,      4,\n diff_6th_opt                        = 0,      0,      0,\n diff_6th_factor                     = 0.12,   0.12,   0.12,\n base_temp                           = 290.\n damp_opt                            = 3,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.2,    0.2,    0.2\n khdif                               = 0,      0,      0,\n kvdif                               = 0,      0,      0,\n non_hydrostatic                     = .true., .true., .true.,\n moist_adv_opt                       = 2,      2,      2,\n scalar_adv_opt                      = 2,      2,      2,\n /\n\n &bdy_control\n spec_bdy_width                      = 5,\n specified                           = .true.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n"}, {"id": "test/em_real/namelist.input.chem", "label": "chem", "path": "test/em_real/namelist.input.chem", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 12,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2006, 2999, 2999,\n start_month                         = 04,   06,   06,\n start_day                           = 06,   11,   11,\n start_hour                          = 12,   12,   12,\n end_year                            = 2006, 2999, 2999,\n end_month                           = 04,   06,   06,\n end_day                             = 07,   12,   12,\n end_hour                            = 00,   12,   12,\n interval_seconds                    = 10800\n input_from_file                     = .true.,.true.,.true.,\n history_interval                    = 30,   60,   60,\n frames_per_outfile                  = 19992, 1000, 1000,\n restart                             = .false.,\n restart_interval                    = 7200,\n auxinput5_interval_m                = 0, 60, 60\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n io_form_auxinput4                   = 0\n io_form_auxinput5                   = 0\n /\n\n &domains\n time_step                           = 240,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n e_we                                = 40,    112,   94,\n e_sn                                = 40,    97,    91,\n e_vert                              = 20,    20,    20,\n dx                                  = 60000,\n dy                                  = 60000,\n p_top_requested                     = 5000,\n num_metgrid_levels                  = 32,\n num_metgrid_soil_levels             = 4,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 1,     30,    30,\n j_parent_start                      = 1,     20,    30,\n parent_grid_ratio                   = 1,     3,     3,\n parent_time_step_ratio              = 1,     3,     3,\n feedback                            = 1,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 2,     2,     2,\n progn                               = 0,     0,     0,\n naer                                = 1e9\n ra_lw_physics                       = 1,     1,     1,\n ra_sw_physics                       = 2,     2,     2,\n radt                                = 30,    10,    10,\n sf_sfclay_physics                   = 1,     1,     1,\n sf_surface_physics                  = 2,     2,     2,\n bl_pbl_physics                      = 1,     1,     1,\n bldt                                = 1,     0,     0,\n cu_physics                          = 5,     5,     0,\n cudt                                = 1,     1,     1,\n isfflx                              = 1,\n ifsnow                              = 1,\n icloud                              = 1,\n surface_input_source                = 3,\n num_land_cat                        = 21,\n sf_urban_physics                    = 0,     0,     0,\n maxiens                             = 1,\n maxens                              = 3,\n maxens2                             = 3,\n maxens3                             = 16,\n ensdim                              = 144,\n cu_rad_feedback                     = .true.,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n w_damping                           = 1,\n diff_opt                            = 1,      1,      1,\n km_opt                              = 4,      4,      4,\n diff_6th_opt                        = 0,      0,      0,\n diff_6th_factor                     = 0.12,   0.12,   0.12,\n base_temp                           = 290.\n damp_opt                            = 3,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.2,    0.2,    0.2\n khdif                               = 0,      0,      0,\n kvdif                               = 0,      0,      0,\n non_hydrostatic                     = .true., .true., .true.,\n moist_adv_opt                       = 1,      1,      1,     \n scalar_adv_opt                      = 1,      1,      1,     \n chem_adv_opt                        = 1,      1,      1,     \n /\n\n &bdy_control\n spec_bdy_width                      = 5,\n specified                           = .true.,\n /\n\n &grib2\n /\n\n &chem\n kemit                               = 19,\n chem_opt                            = 2,        2,\n bioemdt                             = 30,       30,\n photdt                              = 30,       30,\n chemdt                              = 2.,       2.,\n frames_per_emissfile                = 36,\n io_style_emissions                  = 1,\n emiss_inpt_opt                      = 1,        1,\n emiss_opt                           = 3,        3,\n chem_in_opt                         = 0,        0,\n phot_opt                            = 1,        1,\n gas_drydep_opt                      = 1,        1,\n aer_drydep_opt                      = 1,        1,\n bio_emiss_opt                       = 1,        1,\n dust_opt                            = 0,\n dmsemis_opt                         = 0,\n seas_opt                            = 0,\n gas_bc_opt                          = 1,        1,\n gas_ic_opt                          = 1,        1,\n aer_bc_opt                          = 1,        1,\n aer_ic_opt                          = 1,        1,\n gaschem_onoff                       = 1,        1,\n aerchem_onoff                       = 1,        1,\n wetscav_onoff                       = 0,        0,\n cldchem_onoff                       = 0,        0,\n vertmix_onoff                       = 1,        1,\n chem_conv_tr                        = 1,        1,\n biomass_burn_opt                    = 0,        0,\n plumerisefire_frq                   = 30,       30,\n aer_ra_feedback                     = 0,        0,\n have_bcs_chem                       = .false., .false.,\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n"}, {"id": "test/em_real/namelist.input.diags", "label": "diags", "path": "test/em_real/namelist.input.diags", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 2,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2000, 2000, 2000,\n start_month                         = 01,   01,   01,\n start_day                           = 24,   24,   24,\n start_hour                          = 12,   12,   12,\n end_year                            = 2000, 2000, 2000,\n end_month                           = 01,   01,   01,\n end_day                             = 25,   25,   25,\n end_hour                            = 12,   12,   12,\n interval_seconds                    = 21600\n input_from_file                     = .true.,.true.,.true.,\n history_interval                    = 180,  60,   60,\n frames_per_outfile                  = 1000, 1000, 1000,\n restart                             = .false.,\n restart_interval                    = 7200,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n io_form_auxhist23                   = 2\n auxhist23_interval                  = 30,   15,    30\n frames_per_auxhist23                = 1\n auxhist23_outname                   = \"PLEVS_d<domain>_<date>\"\n /\n\n &diags\n p_lev_diags                         = 1\n num_press_levels                    = 4\n press_levels                        = 85000, 70000, 50000, 25000\n use_tot_or_hyd_p                    = 1\n /\n\n &domains\n time_step                           = 180,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 2,\n e_we                                = 74,    31,    94,\n e_sn                                = 61,    31,    91,\n e_vert                              = 33,    33,    33,\n p_top_requested                     = 5000,\n num_metgrid_levels                  = 32,\n num_metgrid_soil_levels             = 4,\n dx                                  = 30000,\n dy                                  = 30000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 1,     31,    30,\n j_parent_start                      = 1,     17,    30,\n parent_grid_ratio                   = 1,     3,     3,\n parent_time_step_ratio              = 1,     3,     3,\n feedback                            = 1,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 3,     3,     3,\n ra_lw_physics                       = 1,     1,     1,\n ra_sw_physics                       = 1,     1,     1,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 1,     1,     1,\n sf_surface_physics                  = 2,     2,     2,\n bl_pbl_physics                      = 1,     1,     1,\n bldt                                = 0,     0,     0,\n cu_physics                          = 1,     1,     0,\n cudt                                = 5,     5,     5,\n isfflx                              = 1,\n ifsnow                              = 0,\n icloud                              = 1,\n surface_input_source                = 3,\n num_land_cat                        = 21,\n sf_urban_physics                    = 0,     0,     0,\n maxiens                             = 1,\n maxens                              = 3,\n maxens2                             = 3,\n maxens3                             = 16,\n ensdim                              = 144,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n w_damping                           = 0,\n diff_opt                            = 1,      1,      1,\n km_opt                              = 4,      4,      4,\n diff_6th_opt                        = 0,      0,      0,\n diff_6th_factor                     = 0.12,   0.12,   0.12,\n base_temp                           = 290.\n damp_opt                            = 3,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.2,    0.2,    0.2\n khdif                               = 0,      0,      0,\n kvdif                               = 0,      0,      0,\n non_hydrostatic                     = .true., .true., .true.,\n moist_adv_opt                       = 1,      1,      1,     \n scalar_adv_opt                      = 1,      1,      1,     \n /\n\n &bdy_control\n spec_bdy_width                      = 5,\n specified                           = .true.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &dfi_control\n dfi_opt                             = 0\n dfi_nfilter                         = 7\n dfi_write_filtered_input            = .false.\n dfi_write_dfi_history               = .false.\n dfi_cutoff_seconds                  = 3600  \n dfi_time_dim                        = 1000 \n dfi_bckstop_year                    = 2000\n dfi_bckstop_month                   = 01  \n dfi_bckstop_day                     = 24  \n dfi_bckstop_hour                    = 11  \n dfi_bckstop_minute                  = 00  \n dfi_bckstop_second                  = 00  \n dfi_fwdstop_year                    = 2000\n dfi_fwdstop_month                   = 01  \n dfi_fwdstop_day                     = 24  \n dfi_fwdstop_hour                    = 12  \n dfi_fwdstop_minute                  = 30  \n dfi_fwdstop_second                  = 00  \n /\n"}, {"id": "test/em_real/namelist.input.fire", "label": "fire", "path": "test/em_real/namelist.input.fire", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 0,\n run_minutes                         = 0,\n run_seconds                         = 5,\n start_year                          = 2005,\n start_month                         = 08,\n start_day                           = 28,\n start_hour                          = 12,\n end_year                            = 2005,\n end_month                           = 08,\n end_day                             = 28,\n end_hour                            = 18,\n interval_seconds                    = 21600\n input_from_file                     = .true.,\n history_interval_s                  = 5,\n frames_per_outfile                  = 1000,\n restart                             = .false.,\n restart_interval                    = 60,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 0,\n time_step_fract_num                 = 5,\n time_step_fract_den                 = 10,\n max_dom                             = 1,\n e_we                                = 43,\n e_sn                                = 43,\n e_vert                              = 41,\n p_top_requested                     = 5000,\n num_metgrid_levels                  = 32\n num_metgrid_soil_levels             = 4,\n dx                                  = 60,\n dy                                  = 60,\n grid_id                             = 1,\n parent_id                           = 0,\n i_parent_start                      = 0,\n j_parent_start                      = 0,\n parent_grid_ratio                   = 1,\n parent_time_step_ratio              = 1,\n feedback                            = 1,\n smooth_option                       = 0\n sr_x                                = 10,\n sr_y                                = 10,\n sfcp_to_sfcp                        = .true.,\n /\n\n&physics\n mp_physics                          = 2,\n ra_lw_physics                       = 1,\n ra_sw_physics                       = 1,\n radt                                = 10,\n sf_sfclay_physics                   = 1,\n sf_surface_physics                  = 1,\n bl_pbl_physics                      = 1,\n bldt                                = 0,\n cu_physics                          = 1,\n cudt                                = 5,\n surface_input_source                = 3,\n num_land_cat                        = 21,\n sf_urban_physics                    = 0,\n /\n\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n rk_ord                              = 3,\n w_damping                           = 0,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 2,      2,      2,\n damp_opt                            = 3,\n base_temp                           = 290.\n zdamp                               = 5000.,\n dampcoef                            = 0.2,\n khdif                               = 0.05,\n kvdif                               = 0.05,\n smdiv                               = 0.1,\n emdiv                               = 0.01,\n epssm                               = 0.1,\n time_step_sound                     = 20,\n h_mom_adv_order                     = 5,\n v_mom_adv_order                     = 3,\n h_sca_adv_order                     = 5,\n v_sca_adv_order                     = 3,\n non_hydrostatic                     = .true.,\n pd_moist                            = .true.\n pd_chem                             = .true.\n pd_scalar                           = .true.\n pd_tke                              = .true.\n /\n\n&fire ! be sure to set sr_x,sr_y in domains-namelist (to set refinement in x,y)\n ifire              = 2,    ! integer, = 0: no fire, = 1: CAWFE 2: SFIRE \n!\n! CAWFE variables (NOTE: may or may not work. I do not maintain the cawfe path any more. JM)\n!\n!fire_lat_init      =   40.,    ! real   , initial fire latitude (deg)\n!fire_lon_init      = -105.,    ! real   , initial fire longitude (deg)\n fire_lat_init      = 6.75e-3,  ! real   , initial fire latitude (deg)\n fire_lon_init      = 6.70e-3,  ! real   , initial fire longitude (deg)\n fire_ign_time      = 30.,      ! real   , time of fire ignition (s)\n fire_shape         = 1,    ! integer, initial fire shape\n fire_sprd_mdl      = 1,    ! integer, = 0: Macarthur, = 1: BEHAVE\n fire_crwn_hgt      = 15.,  ! real   , height of canopy crown (m)\n fire_ext_grnd      = 50.,  ! real   , extinction coeff ground fire\n fire_ext_crwn      = 50.,  ! real   , extinction coeff crown fire \n fire_fuel_read     = -1,    ! integer, 0= use fire_fuel_cat, 1= by altitude 2= read from file\n fire_fuel_cat      = 3,    ! integer, if specified which fuel category?\n!\n! SFIRE\n!\n! ignition\n fire_num_ignitions = 3,        ! integer, only the first fire_num_ignition used, up to 5 allowed\n fire_ignition_start_lon1=-107.293664, ! start points of ignition lines, longitude \n fire_ignition_start_lat1 =  39.698696, ! start points of ignition lines,latitude \n fire_ignition_end_lon1 = -107.293664, ! end points of ignition lines\n fire_ignition_end_lat1 =    39.710990, ! end points of ignition lines\n fire_ignition_radius1 =    18, ! all within this radius (m) will ignite, > fire mesh step\n fire_ignition_start_time1  =      2, ! sec for ignition from the start\n fire_ignition_start_long2=-107.287954, ! start points of ignition lines, \n fire_ignition_start_lat2 =  39.698696, ! start points of ignition lines, \n fire_ignition_end_long2 = -107.287954,! end points of ignition lines, \n fire_ignition_end_lat2 =    39.71099, ! end points of ignition lines, \n fire_ignition_radius2 =    18, ! all within this radius (m) will ignite, > fire mesh step\n fire_ignition_time2  =      3, ! sec for ignition from the start! end ignition for sfire\n fire_ignition_start_long3=-107.289096, ! start points of ignition lines, \n fire_ignition_start_lat3 =  39.706599, ! start points of ignition lines, \n fire_ignition_end_long3 =   0, ! end points of ignition lines, 0 for same as start\n fire_ignition_end_lat3 =    0, ! end points of ignition lines, 0 for same as start\n fire_ignition_radius3 =    50, ! all within this radius (m) will ignite, > fire mesh step\n fire_ignition_time3  =      4, ! sec for ignition from the start! end ignition for sfire\n!\n! verbosity\n fire_print_msg     = 0,    ! 1 to print fire debugging/progress messages (compile with DEBUG OUT in the sf sources)\n fire_print_file    = 0,    ! 1 to write text output files for matlab\n!\n! fuel moisture model\n!\n fmoist_run = .true.         ! if true, turn on the fuel moisture content (FMC) model\n fmoist_interp = .true.,     ! if true, interpolate FMC to fuels on the fire grid\n fmoist_only = .false.       ! if true, skip the fire model and run FMC model only\n fmoist_freq = 0,            ! frequency of run or 0 to run using the specified fmost_dt\n fmoist_dt = 10,             ! moisture model time step (s)\n fire_fmc_read = 0,          ! how to set FMC map\n                             ! 0 read on start as fmc_g in wrfinput; required when the FMC model is on and overwritten by the FMC model\n                             ! 1 set initially as constant value from namelist.fire (default, use when FMC model is off)\n                             ! 2 read from a text file (in ideal.exe only)\n\n! method selections for experiments, *do not change*\n fire_boundary_guard = -1,      ! integer, number of cells to stop when fire close to the domain boundary, -1 turn off\n fire_fuel_left_method=1,       ! 1=simple algebraic, 2=exact quadrature and least squares\n fire_fuel_left_irl=2,          ! refinement to integrate fuel_left, must be even\n fire_fuel_left_jrl=2,          ! refinement to integrate fuel_left, must be even\n fire_atm_feedback=1.,          ! real, multiplier for heat fluxes, 1.=normal, 0.=turn off two-way coupling \n fire_grows_only=1,             ! if >0 level set function cannot increase = fire can only grow\n fire_viscosity=0.4,            ! artificial viscosity in level set method (max 1, needed with fire_upwinding=0)\n fire_upwinding=3,              ! 0=none, 1=standard, 2=godunov, 3=eno, 4=sethian\n fire_lfn_ext_up=1.0,           ! 0.=extend level set function at boundary by reflection, 1.=always up\n fire_test_steps=0,             ! >0 = on first call, do specified number of steps and terminate (testing only)\n fire_topo_from_atm=1,          ! 0 = expect fire mesh topo set correctly on entry, 1 = populate by interpolating from atmosphere\n /\n\n  &bdy_control\n spec_bdy_width                      = 5,\n specified                           = .true.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n"}, {"id": "test/em_real/namelist.input.global", "label": "global", "path": "test/em_real/namelist.input.global", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 1,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2008, 2008, 2008,\n start_month                         = 01,   01,   01,\n start_day                           = 02,   01,   01,\n start_hour                          = 12,   00,   00,\n end_year                            = 2008, 2008, 2008,\n end_month                           = 01,   01,   01,\n end_day                             = 02,   01,   01,\n end_hour                            = 12,   00,   00,\n history_interval                    = 60,   30,   30,\n interval_seconds                    = 21600 \n input_from_file                     = .true.,.true.,.true.,\n frames_per_outfile                  = 200,  100,  100,\n restart                             = .false.,\n restart_interval_h                  = 120,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 600\n time_step_fract_num                 = 00\n time_step_fract_den                 = 112\n max_dom                             = 1,\n e_we                                = 257,    41,    41,\n e_sn                                = 129,    81,    81,\n e_vert                              = 41,    41,    41,\n p_top_requested                     = 5000,\n num_metgrid_levels                  = 32,\n num_metgrid_soil_levels             = 4,\n dx                                  = 156343.322,\n dy                                  = 156343.322,\n p_top_requested                     = 5000\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 1,     17,    17,\n j_parent_start                      = 1,     33,    33,\n parent_grid_ratio                   = 1,     5,     5,\n parent_time_step_ratio              = 1,     5,     5,\n feedback                            = 1,\n smooth_option                       = 0,\n /\n\n &physics\n mp_physics                          = 3,     3,     3,\n ra_lw_physics                       = 4,     4,     4,\n ra_sw_physics                       = 4,     4,     4,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 1,     1,     1,\n sf_surface_physics                  = 2,     2,     2,\n bl_pbl_physics                      = 1,     1,     1,\n bldt                                = 0,     0,     0,\n cu_physics                          = 16,   16,     0,\n cudt                                = 0,     0,     0,\n icloud                              = 1,\n num_land_cat                        = 21,\n fractional_seaice                   = 1,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n diff_opt                            = 0,      0,      0,\n km_opt                              = 0,      0,      0,\n damp_opt                            = 3,\n base_temp                           = 290.\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.2,    0.2,    0.2\n khdif                               = 0,      0,      0,\n kvdif                               = 0,      0,      0,\n non_hydrostatic                     = .true.,.true., .true.,\n moist_adv_opt                       = 0,      0,      0,     \n scalar_adv_opt                      = 0,      0,      0,     \n chem_adv_opt                        = 0,      0,      0,     \n tke_adv_opt                         = 0,      0,      0,     \n fft_filter_lat                      = 45.,\n w_damping                           = 1,\n gwd_opt                             = 1,      1,      1,\n /\n\n &bdy_control\n periodic_x                          = .true.,\n polar                               = .true.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n"}, {"id": "test/em_real/namelist.input.jan00", "label": "jan00", "path": "test/em_real/namelist.input.jan00", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 12,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2000, 2000, 2000,\n start_month                         = 01,   01,   01,\n start_day                           = 24,   24,   24,\n start_hour                          = 12,   12,   12,\n end_year                            = 2000, 2000, 2000,\n end_month                           = 01,   01,   01,\n end_day                             = 25,   25,   25,\n end_hour                            = 12,   12,   12,\n interval_seconds                    = 21600\n input_from_file                     = .true.,.true.,.true.,\n history_interval                    = 180,  60,   60,\n frames_per_outfile                  = 1000, 1000, 1000,\n restart                             = .false.,\n restart_interval                    = 7200,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 180,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n e_we                                = 74,    112,   94,\n e_sn                                = 61,    97,    91,\n e_vert                              = 33,    33,    33,\n p_top_requested                     = 5000,\n num_metgrid_levels                  = 32,\n num_metgrid_soil_levels             = 4,\n dx                                  = 30000,\n dy                                  = 30000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 1,     31,    30,\n j_parent_start                      = 1,     17,    30,\n parent_grid_ratio                   = 1,     3,     3,\n parent_time_step_ratio              = 1,     3,     3,\n feedback                            = 1,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 5,     5,     5,\n ra_lw_physics                       = 4,     4,     4,\n ra_sw_physics                       = 4,     4,     4,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 1,     1,     1,\n sf_surface_physics                  = 2,     2,     2,\n bl_pbl_physics                      = 1,     1,     1,\n bldt                                = 0,     0,     0,\n cu_physics                          = 1,     1,     0,\n cudt                                = 5,     5,     5,\n icloud                              = 1,\n cu_rad_feedback                     = .true.,.true.,.false.,\n num_land_cat                        = 21,\n sf_urban_physics                    = 0,     0,     0,\n fractional_seaice                   = 1,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n w_damping                           = 0,\n diff_opt                            = 1,      1,      1,\n km_opt                              = 4,      4,      4,\n diff_6th_opt                        = 0,      0,      0,\n diff_6th_factor                     = 0.12,   0.12,   0.12,\n base_temp                           = 290.\n damp_opt                            = 3,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.2,    0.2,    0.2\n khdif                               = 0,      0,      0,\n kvdif                               = 0,      0,      0,\n non_hydrostatic                     = .true., .true., .true.,\n moist_adv_opt                       = 1,      1,      1,     \n scalar_adv_opt                      = 1,      1,      1,     \n gwd_opt                             = 1,      1,      0,\n /\n\n &bdy_control\n spec_bdy_width                      = 5,\n specified                           = .true.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &dfi_control\n dfi_opt                             = 0\n dfi_nfilter                         = 7\n dfi_write_filtered_input            = .false.\n dfi_write_dfi_history               = .false.\n dfi_cutoff_seconds                  = 3600  \n dfi_time_dim                        = 1000 \n dfi_bckstop_year                    = 2000\n dfi_bckstop_month                   = 01  \n dfi_bckstop_day                     = 24  \n dfi_bckstop_hour                    = 11  \n dfi_bckstop_minute                  = 00  \n dfi_bckstop_second                  = 00  \n dfi_fwdstop_year                    = 2000\n dfi_fwdstop_month                   = 01  \n dfi_fwdstop_day                     = 24  \n dfi_fwdstop_hour                    = 12  \n dfi_fwdstop_minute                  = 30  \n dfi_fwdstop_second                  = 00  \n /\n"}, {"id": "test/em_real/namelist.input.jun01", "label": "jun01", "path": "test/em_real/namelist.input.jun01", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 12,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2001, 2001, 2001,\n start_month                         = 06,   06,   06,\n start_day                           = 11,   11,   11,\n start_hour                          = 12,   12,   12,\n end_year                            = 2001, 2001, 2001,\n end_month                           = 06,   06,   06,\n end_day                             = 12,   12,   12,\n end_hour                            = 12,   12,   12,\n interval_seconds                    = 10800\n input_from_file                     = .true.,.true.,.true.,\n history_interval                    = 180,  60,   60,\n frames_per_outfile                  = 1000, 1000, 1000,\n restart                             = .false.,\n restart_interval                    = 4320,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 60,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n e_we                                = 91,    112,   94,\n e_sn                                = 82,    97,    91,\n e_vert                              = 33,    33,    33,\n p_top_requested                     = 5000,\n num_metgrid_levels                  = 32,\n num_metgrid_soil_levels             = 4,\n dx                                  = 10000,\n dy                                  = 10000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 1,     30,    30,\n j_parent_start                      = 1,     20,    30,\n parent_grid_ratio                   = 1,     3,     3,\n parent_time_step_ratio              = 1,     3,     3,\n feedback                            = 1,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 8,     8,     8,\n ra_lw_physics                       = 4,     4,     4,\n ra_sw_physics                       = 4,     4,     4,\n radt                                = 10,    10,    10,\n sf_sfclay_physics                   = 1,     1,     1,\n sf_surface_physics                  = 2,     2,     2,\n bl_pbl_physics                      = 1,     1,     1,\n bldt                                = 0,     0,     0,\n cu_physics                          = 1,     0,     0,\n cudt                                = 5,     5,     5,\n icloud                              = 1,\n cu_rad_feedback                     = .true.,.false.,.f.,\n num_land_cat                        = 21,\n sf_urban_physics                    = 0,     0,     0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n w_damping                           = 0,\n diff_opt                            = 1,      1,      1,\n km_opt                              = 4,      4,      4,\n diff_6th_opt                        = 0,      0,      0,\n diff_6th_factor                     = 0.12,   0.12,   0.12,\n base_temp                           = 290.\n damp_opt                            = 3,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.2,    0.2,    0.2\n khdif                               = 0,      0,      0,\n kvdif                               = 0,      0,      0,\n non_hydrostatic                     = .true., .true., .true.,\n moist_adv_opt                       = 1,      1,      1,     \n scalar_adv_opt                      = 1,      1,      1,     \n gwd_opt                             = 1,      0,      0,\n /\n\n &bdy_control\n spec_bdy_width                      = 5,\n specified                           = .true.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n"}, {"id": "test/em_real/namelist.input.ndown_1", "label": "ndown 1", "path": "test/em_real/namelist.input.ndown_1", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 12\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2000, 2000, 2000,\n start_month                         = 01,   01,   01,\n start_day                           = 24,   24,   24,\n start_hour                          = 12,   12,   12,\n end_year                            = 2000, 2000, 2000,\n end_month                           = 01,   01,   01,\n end_day                             = 25,   25,   25,\n end_hour                            = 12,   12,   12,\n interval_seconds                    = 21600\n input_from_file                     = .true.,.true.,.true.,\n history_interval                    = 60,   60,   60,\n frames_per_outfile                  = 1000, 1000, 1000,\n restart                             = .false.,\n restart_interval                    = 7200,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n io_form_auxhist23                   = 2\n auxhist23_interval                  = 30,   15,    30\n frames_per_auxhist23                = 1\n auxhist23_outname                   = \"PLEVS_d<domain>_<date>\"\n\n &diags\n p_lev_diags                         = 0\n num_press_levels                    = 4\n press_levels                        = 85000, 70000, 50000, 25000\n use_tot_or_hyd_p                    = 1\n /\n\n &domains\n time_step                           = 180,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n e_we                                = 74,    31,    94,\n e_sn                                = 61,    31,    91,\n e_vert                              = 33,    33,    33,\n p_top_requested                     = 5000,\n num_metgrid_levels                  = 32,\n num_metgrid_soil_levels             = 4,\n dx                                  = 30000,\n dy                                  = 30000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 1,     31,    30,\n j_parent_start                      = 1,     17,    30,\n parent_grid_ratio                   = 1,     3,     3,\n parent_time_step_ratio              = 1,     3,     3,\n feedback                            = 1,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 3,     3,     3,\n ra_lw_physics                       = 1,     1,     1,\n ra_sw_physics                       = 1,     1,     1,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 1,     1,     1,\n sf_surface_physics                  = 2,     2,     2,\n bl_pbl_physics                      = 1,     1,     1,\n bldt                                = 0,     0,     0,\n cu_physics                          = 1,     1,     0,\n cudt                                = 5,     5,     5,\n isfflx                              = 1,\n ifsnow                              = 0,\n icloud                              = 1,\n surface_input_source                = 3,\n num_land_cat                        = 21,\n sf_urban_physics                    = 0,     0,     0,\n maxiens                             = 1,\n maxens                              = 3,\n maxens2                             = 3,\n maxens3                             = 16,\n ensdim                              = 144,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n w_damping                           = 0,\n diff_opt                            = 1,      1,      1,\n km_opt                              = 4,      4,      4,\n diff_6th_opt                        = 0,      0,      0,\n diff_6th_factor                     = 0.12,   0.12,   0.12,\n base_temp                           = 290.\n damp_opt                            = 3,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.2,    0.2,    0.2\n khdif                               = 0,      0,      0,\n kvdif                               = 0,      0,      0,\n non_hydrostatic                     = .true., .true., .true.,\n moist_adv_opt                       = 1,      1,      1,     \n scalar_adv_opt                      = 1,      1,      1,     \n /\n\n &bdy_control\n spec_bdy_width                      = 5,\n specified                           = .true.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &dfi_control\n dfi_opt                             = 0\n dfi_nfilter                         = 7\n dfi_write_filtered_input            = .false.\n dfi_write_dfi_history               = .false.\n dfi_cutoff_seconds                  = 3600  \n dfi_time_dim                        = 1000 \n dfi_bckstop_year                    = 2000\n dfi_bckstop_month                   = 01  \n dfi_bckstop_day                     = 24  \n dfi_bckstop_hour                    = 11  \n dfi_bckstop_minute                  = 00  \n dfi_bckstop_second                  = 00  \n dfi_fwdstop_year                    = 2000\n dfi_fwdstop_month                   = 01  \n dfi_fwdstop_day                     = 24  \n dfi_fwdstop_hour                    = 12  \n dfi_fwdstop_minute                  = 30  \n dfi_fwdstop_second                  = 00  \n /\n"}, {"id": "test/em_real/namelist.input.ndown_2", "label": "ndown 2", "path": "test/em_real/namelist.input.ndown_2", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 12\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2000, 2000, 2000,\n start_month                         = 01,   01,   01,\n start_day                           = 24,   24,   24,\n start_hour                          = 12,   12,   12,\n end_year                            = 2000, 2000, 2000,\n end_month                           = 01,   01,   01,\n end_day                             = 25,   25,   25,\n end_hour                            = 00,   00,   00,\n interval_seconds                    = 3600, \n input_from_file                     = .true.,.true.,.true.,\n history_interval                    = 60,   60,   60,\n frames_per_outfile                  = 1000, 1000, 1000,\n restart                             = .false.,\n restart_interval                    = 7200,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n io_form_auxinput2                   = 2\n fine_input_stream                   = 0,     2,    2,\n /\n io_form_auxhist23                   = 2\n auxhist23_interval                  = 30,   15,    30\n frames_per_auxhist23                = 1\n auxhist23_outname                   = \"PLEVS_d<domain>_<date>\"\n\n &diags\n p_lev_diags                         = 0\n num_press_levels                    = 4\n press_levels                        = 85000, 70000, 50000, 25000\n use_tot_or_hyd_p                    = 1\n /\n\n &domains\n time_step                           = 180,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 2,\n e_we                                = 74,    31,    94,\n e_sn                                = 61,    31,    91,\n e_vert                              = 33,    33,    33,\n p_top_requested                     = 5000,\n num_metgrid_levels                  = 32,\n num_metgrid_soil_levels             = 4,\n dx                                  = 30000,\n dy                                  = 30000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 1,     31,    30,\n j_parent_start                      = 1,     17,    30,\n parent_grid_ratio                   = 1,     3,     3,\n parent_time_step_ratio              = 1,     3,     3,\n feedback                            = 1,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 3,     3,     3,\n ra_lw_physics                       = 1,     1,     1,\n ra_sw_physics                       = 1,     1,     1,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 1,     1,     1,\n sf_surface_physics                  = 2,     2,     2,\n bl_pbl_physics                      = 1,     1,     1,\n bldt                                = 0,     0,     0,\n cu_physics                          = 1,     1,     0,\n cudt                                = 5,     5,     5,\n isfflx                              = 1,\n ifsnow                              = 0,\n icloud                              = 1,\n surface_input_source                = 3,\n num_land_cat                        = 21,\n sf_urban_physics                    = 0,     0,     0,\n maxiens                             = 1,\n maxens                              = 3,\n maxens2                             = 3,\n maxens3                             = 16,\n ensdim                              = 144,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n w_damping                           = 0,\n diff_opt                            = 1,      1,      1,\n km_opt                              = 4,      4,      4,\n diff_6th_opt                        = 0,      0,      0,\n diff_6th_factor                     = 0.12,   0.12,   0.12,\n base_temp                           = 290.\n damp_opt                            = 3,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.2,    0.2,    0.2\n khdif                               = 0,      0,      0,\n kvdif                               = 0,      0,      0,\n non_hydrostatic                     = .true., .true., .true.,\n moist_adv_opt                       = 1,      1,      1,     \n scalar_adv_opt                      = 1,      1,      1,     \n /\n\n &bdy_control\n spec_bdy_width                      = 5,\n specified                           = .true.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &dfi_control\n dfi_opt                             = 0\n dfi_nfilter                         = 7\n dfi_write_filtered_input            = .false.\n dfi_write_dfi_history               = .false.\n dfi_cutoff_seconds                  = 3600  \n dfi_time_dim                        = 1000 \n dfi_bckstop_year                    = 2000\n dfi_bckstop_month                   = 01  \n dfi_bckstop_day                     = 24  \n dfi_bckstop_hour                    = 11  \n dfi_bckstop_minute                  = 00  \n dfi_bckstop_second                  = 00  \n dfi_fwdstop_year                    = 2000\n dfi_fwdstop_month                   = 01  \n dfi_fwdstop_day                     = 24  \n dfi_fwdstop_hour                    = 12  \n dfi_fwdstop_minute                  = 30  \n dfi_fwdstop_second                  = 00  \n /\n"}, {"id": "test/em_real/namelist.input.ndown_3", "label": "ndown 3", "path": "test/em_real/namelist.input.ndown_3", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 12\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2000, 2000, 2000,\n start_month                         = 01,   01,   01,\n start_day                           = 24,   24,   24,\n start_hour                          = 12,   12,   12,\n end_year                            = 2000, 2000, 2000,\n end_month                           = 01,   01,   01,\n end_day                             = 25,   25,   25,\n end_hour                            = 00,   00,   00,\n interval_seconds                    = 3600, \n input_from_file                     = .true.,.true.,.true.,\n history_interval                    = 60,   60,   60,\n frames_per_outfile                  = 1000, 1000, 1000,\n restart                             = .false.,\n restart_interval                    = 4320,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n io_form_auxinput2                   = 2\n fine_input_stream                   = 0,     2,    2,\n io_form_auxhist23                   = 2\n auxhist23_interval                  = 30,   15,    30\n frames_per_auxhist23                = 1\n auxhist23_outname                   = \"PLEVS_d<domain>_<date>\"\n\n &diags\n p_lev_diags                         = 0\n num_press_levels                    = 4\n press_levels                        = 85000, 70000, 50000, 25000\n use_tot_or_hyd_p                    = 1\n /\n\n &domains\n time_step                           = 60\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n e_we                                =        31,    94,\n e_sn                                =        31,    91,\n e_vert                              = 33,    33,    33,\n p_top_requested                     = 5000,\n num_metgrid_levels                  = 32,\n num_metgrid_soil_levels             = 4,\n dx                                  =        10000,\n dy                                  =        10000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 1,     31,    30,\n j_parent_start                      = 1,     17,    30,\n parent_grid_ratio                   = 1,     3,     3,\n parent_time_step_ratio              = 1,     3,     3,\n feedback                            = 1,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 3,     3,     3,\n ra_lw_physics                       = 1,     1,     1,\n ra_sw_physics                       = 1,     1,     1,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 1,     1,     1,\n sf_surface_physics                  = 2,     2,     2,\n bl_pbl_physics                      = 1,     1,     1,\n bldt                                = 0,     0,     0,\n cu_physics                          = 1,     1,     0,\n cudt                                = 5,     5,     5,\n isfflx                              = 1,\n ifsnow                              = 0,\n icloud                              = 1,\n surface_input_source                = 3,\n num_land_cat                        = 21,\n sf_urban_physics                    = 0,     0,     0,\n maxiens                             = 1,\n maxens                              = 3,\n maxens2                             = 3,\n maxens3                             = 16,\n ensdim                              = 144,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n w_damping                           = 0,\n diff_opt                            = 1,      1,      1,\n km_opt                              = 4,      4,      4,\n diff_6th_opt                        = 0,      0,      0,\n diff_6th_factor                     = 0.12,   0.12,   0.12,\n base_temp                           = 290.\n damp_opt                            = 3,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.2,    0.2,    0.2\n khdif                               = 0,      0,      0,\n kvdif                               = 0,      0,      0,\n non_hydrostatic                     = .true., .true., .true.,\n moist_adv_opt                       = 1,      1,      1,     \n scalar_adv_opt                      = 1,      1,      1,     \n /\n\n &bdy_control\n spec_bdy_width                      = 5,\n specified                           = .true.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &dfi_control\n dfi_opt                             = 0\n dfi_nfilter                         = 7\n dfi_write_filtered_input            = .false.\n dfi_write_dfi_history               = .false.\n dfi_cutoff_seconds                  = 3600  \n dfi_time_dim                        = 1000 \n dfi_bckstop_year                    = 2000\n dfi_bckstop_month                   = 01  \n dfi_bckstop_day                     = 24  \n dfi_bckstop_hour                    = 11  \n dfi_bckstop_minute                  = 00  \n dfi_bckstop_second                  = 00  \n dfi_fwdstop_year                    = 2000\n dfi_fwdstop_month                   = 01  \n dfi_fwdstop_day                     = 24  \n dfi_fwdstop_hour                    = 12  \n dfi_fwdstop_minute                  = 30  \n dfi_fwdstop_second                  = 00  \n /\n"}, {"id": "test/em_real/namelist.input.pbl-les", "label": "pbl - les", "path": "test/em_real/namelist.input.pbl-les", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 12,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2001, 2001, 2001,\n start_month                         = 06,   06,   06,\n start_day                           = 11,   11,   11,\n start_hour                          = 12,   12,   12,\n start_minute                        = 00,   00,   00,\n start_second                        = 00,   00,   00,\n end_year                            = 2001, 2001, 2001,\n end_month                           = 06,   06,   06,\n end_day                             = 12,   12,   12,\n end_hour                            = 12,   12,   12,\n end_minute                          = 00,   00,   00,\n end_second                          = 00,   00,   00,\n interval_seconds                    = 10800\n input_from_file                     = .true.,.true.,.true.,\n history_interval                    = 60,   60,   60,\n frames_per_outfile                  = 1,    1,    1,\n restart                             = .false.,\n restart_interval                    = 60,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 5,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 3,\n e_we                                = 225,   112,   94,\n e_sn                                = 202,   97,    91,\n e_vert                              = 35,    35,    35,\n p_top_requested                     = 5000,\n num_metgrid_levels                  = 40\n num_metgrid_soil_levels             = 4,\n dx                                  = 1000,\n dy                                  = 1000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 1,     31,    30,\n j_parent_start                      = 1,     17,    30,\n parent_grid_ratio                   = 1,     3,     3,\n parent_time_step_ratio              = 1,     3,     3,\n feedback                            = 1,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 8,     8,     8,\n ra_lw_physics                       = 4,     4,     4,\n ra_sw_physics                       = 4,     4,     4,\n radt                                = 1,     1,     1,\n sf_sfclay_physics                   = 1,     1,     1,\n sf_surface_physics                  = 2,     2,     2,\n bl_pbl_physics                      = 1,     0,     0,\n bldt                                = 0,     0,     0,\n ysu_topdown_pblmix                  = 1,\n cu_physics                          = 0,     0,     0,\n cudt                                = 0,     0,     0,\n icloud                              = 1,\n num_land_cat                        = 21,\n sf_urban_physics                    = 0,     0,     0,\n /\n\n &dynamics\n hybrid_opt                          = 2, \n w_damping                           = 0,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 4,      3,      3,\n diff_6th_opt                        = 0,      0,      0,\n diff_6th_factor                     = 0.12,   0.12,   0.12,\n base_temp                           = 290.\n damp_opt                            = 3,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.2,    0.2,    0.2\n khdif                               = 0,      0,      0,\n kvdif                               = 0,      0,      0,\n non_hydrostatic                     = .true., .true., .true.,\n moist_adv_opt                       = 2,      2,      2,\n scalar_adv_opt                      = 2,      2,      2,\n /\n\n &bdy_control\n spec_bdy_width                      = 5,\n specified                           = .true.,\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n"}, {"id": "test/em_real/namelist.input.volc", "label": "volc", "path": "test/em_real/namelist.input.volc", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 12,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2000, 2000, 2000,\n start_month                         = 01,   01,   01,\n start_day                           = 24,   24,   24,\n start_hour                          = 12,   12,   12,\n end_year                            = 2000, 2000, 2000,\n end_month                           = 01,   01,   01,\n end_day                             = 25,   25,   25,\n end_hour                            = 12,   12,   12,\n interval_seconds                    = 21600\n input_from_file                     = .true.,.true.,.true.,\n history_interval                    = 180,  60,   60,\n frames_per_outfile                  = 1000, 1000, 1000,\n restart                             = .false.,\n restart_interval                    = 7200,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 180,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n e_we                                = 74,    112,   94,\n e_sn                                = 61,    97,    91,\n e_vert                              = 33,    33,    33,\n p_top_requested                     = 5000,\n num_metgrid_levels                  = 32,\n num_metgrid_soil_levels             = 4,\n dx                                  = 30000,\n dy                                  = 30000,\n grid_id                             = 1,     2,     3,\n parent_id                           = 0,     1,     2,\n i_parent_start                      = 1,     31,    30,\n j_parent_start                      = 1,     17,    30,\n parent_grid_ratio                   = 1,     3,     3,\n parent_time_step_ratio              = 1,     3,     3,\n feedback                            = 1,\n smooth_option                       = 0\n /\n\n &physics\n mp_physics                          = 3,     3,     3,\n ra_lw_physics                       = 1,     1,     1,\n ra_sw_physics                       = 1,     1,     1,\n radt                                = 30,    30,    30,\n sf_sfclay_physics                   = 1,     1,     1,\n sf_surface_physics                  = 2,     2,     2,\n bl_pbl_physics                      = 1,     1,     1,\n bldt                                = 0,     0,     0,\n cu_physics                          = 1,     1,     0,\n cudt                                = 5,     5,     5,\n isfflx                              = 1,\n ifsnow                              = 0,\n icloud                              = 1,\n surface_input_source                = 3,\n num_land_cat                        = 21,\n sf_urban_physics                    = 0,     0,     0,\n maxiens                             = 1,\n maxens                              = 3,\n maxens2                             = 3,\n maxens3                             = 16,\n ensdim                              = 144,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 2, \n w_damping                           = 0,\n diff_opt                            = 1,      1,      1,\n km_opt                              = 4,      4,      4,\n diff_6th_opt                        = 0,      0,      0,\n diff_6th_factor                     = 0.12,   0.12,   0.12,\n base_temp                           = 290.\n damp_opt                            = 3,\n zdamp                               = 5000.,  5000.,  5000.,\n dampcoef                            = 0.2,    0.2,    0.2\n khdif                               = 0,      0,      0,\n kvdif                               = 0,      0,      0,\n non_hydrostatic                     = .true., .true., .true.,\n moist_adv_opt                       = 1,      1,      1,     \n scalar_adv_opt                      = 1,      1,      1,     \n /\n\n &bdy_control\n spec_bdy_width                      = 5,\n specified                           = .true.,\n /\n\n &chem\n kemit                               = 1,\n chem_opt                            = 401,        0,\n bioemdt                             = 30,       30,\n photdt                              = 30,       30,\n chemdt                              = 0., 0.66666,\n frames_per_emissfile                = 12,\n io_style_emissions                  = 1,\n emiss_opt                           = 9,        3,\n chem_in_opt                         = 0,        0,\n phot_opt                            = 0,        1,\n gas_drydep_opt                      = 1,        1,\n aer_drydep_opt                      = 1,        1,\n bio_emiss_opt                       = 0,        2,\n gas_bc_opt                          = 1,        1,\n gas_ic_opt                          = 1,        1,\n aer_bc_opt                          = 1,        1,\n aer_ic_opt                          = 1,        1,\n gaschem_onoff                       = 1,        0,\n aerchem_onoff                       = 1,        0,\n wetscav_onoff                       = 0,        0,\n cldchem_onoff                       = 0,        0,\n vertmix_onoff                       = 1,        1,\n chem_conv_tr                        = 1,        1,\n seas_opt                            = 0,\n dust_opt                            = 0,\n dmsemis_opt                         = 0,\n biomass_burn_opt                    = 0,        0,\n plumerisefire_frq                   = 30,       0,\n have_bcs_chem                       = .false., .false.,\n aer_ra_feedback                     = 0,        0,\n opt_pars_out                        = 0,\n diagnostic_chem                     = 0,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n"}], "em_scm_xy": [{"id": "test/em_scm_xy/namelist.input", "label": "default", "path": "test/em_scm_xy/namelist.input", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 59,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 1999,\n start_month                         = 10,\n start_day                           = 22,\n start_hour                          = 19,\n start_minute                        = 00,\n start_second                        = 00,\n end_year                            = 1999,\n end_month                           = 10,\n end_day                             = 25,\n end_hour                            = 06,\n end_minute                          = 00,\n end_second                          = 00,\n history_interval                    = 60,\n frames_per_outfile                  = 10000,\n restart                             = .false.,\n restart_interval                    = 1440000,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n auxinput3_inname                    = \"force_ideal.nc\"\n auxinput3_interval_h                = 59\n io_form_auxinput3                   = 2\n /\n\n &domains\n time_step                           = 60,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,\n e_we                                = 3,\n s_sn                                = 1,\n e_sn                                = 3,\n s_vert                              = 1,\n e_vert                              = 60,\n dx                                  = 4000,\n dy                                  = 4000,\n ztop                                = 12000.,\n /\n\n &scm\n scm_force                           = 0\n scm_force_dx                        = 10000\n num_force_layers                    = 8\n scm_lu_index                        = 2\n scm_isltyp                          = 4\n scm_vegfra                          = 50. \n scm_lat                             = 37.600\n scm_lon                             = -96.700\n scm_th_adv                          = .false.\n scm_wind_adv                        = .false.\n scm_qv_adv                          = .false.\n scm_vert_adv                        = .false.\n /\n\n &physics\n mp_physics                          = 2,\n ra_lw_physics                       = 1,\n ra_sw_physics                       = 1,\n radt                                = 0,\n sf_sfclay_physics                   = 1,\n sf_surface_physics                  = 2,\n bl_pbl_physics                      = 1,\n bldt                                = 0,\n cu_physics                          = 0,\n cudt                                = 0,\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 2,      2,      2,\n damp_opt                            = 2,\n dampcoef                            = .003,\n zdamp                               = 5000.,\n khdif                               = 300,\n kvdif                               = 1,\n smdiv                               = 0.1,\n emdiv                               = 0.01,\n epssm                               = 0.1,\n time_step_sound                     = 6,\n h_mom_adv_order                     = 5,\n v_mom_adv_order                     = 3,\n h_sca_adv_order                     = 5,\n v_sca_adv_order                     = 3,\n pert_coriolis                       = .true.,\n mix_full_fields                     = .true.,\n non_hydrostatic                     = .true.,\n /\n\n &bdy_control\n periodic_x                          = .true.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .false., \n open_xe                             = .false.,\n periodic_y                          = .true.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n"}], "em_seabreeze2d_x": [{"id": "test/em_seabreeze2d_x/namelist.input", "label": "default", "path": "test/em_seabreeze2d_x/namelist.input", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 12,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2007,\n start_month                         = 06,\n start_day                           = 1,\n start_hour                          = 5,\n start_minute                        = 00,\n start_second                        = 00,\n end_year                            = 2007,\n end_month                           = 06,\n end_day                             = 2,\n end_hour                            = 5,\n end_minute                          = 00,\n end_second                          = 00,\n history_interval                    = 30,\n frames_per_outfile                  = 1000,\n restart                             = .false.,\n restart_interval                    = 360,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 15,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,\n e_we                                = 202,\n s_sn                                = 1,\n e_sn                                = 3,\n s_vert                              = 1,\n e_vert                              = 35,\n dx                                  = 2000,\n dy                                  = 2000,\n ztop                                = 20000.,\n eta_levels                          = 1.000, 0.993, 0.983, 0.970, 0.954,\n                                       0.934, 0.909, 0.880, 0.845, 0.807,\n                                       0.765, 0.719, 0.672, 0.622, 0.571,\n                                       0.520, 0.468, 0.420, 0.376, 0.335,\n                                       0.298, 0.263, 0.231, 0.202, 0.175,\n                                       0.150, 0.127, 0.106, 0.088, 0.070,\n                                       0.055, 0.040, 0.026, 0.013, 0.000\n\n /\n\n &physics\n mp_physics                          = 14,\n ra_lw_physics                       = 1,\n ra_sw_physics                       = 1,\n radt                                = 5,\n sf_sfclay_physics                   = 1,\n sf_surface_physics                  = 1,\n bl_pbl_physics                      = 1,\n bldt                                = 0,\n tracer_pblmix                       = 1\n cu_physics                          = 0,\n cudt                                = 0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 1,      1,      1,\n km_opt                              = 4,      4,      4,\n damp_opt                            = 2,\n dampcoef                            = .003,\n zdamp                               = 5000.,\n khdif                               = 300,\n kvdif                               = 1,\n smdiv                               = 0.1,\n emdiv                               = 0.01,\n epssm                               = 0.1,\n time_step_sound                     = 6,\n h_mom_adv_order                     = 5,\n v_mom_adv_order                     = 3,\n h_sca_adv_order                     = 5,\n v_sca_adv_order                     = 3,\n tracer_opt                          = 2,\n mix_full_fields                     = .true.,\n non_hydrostatic                     = .true.,\n /\n\n &bdy_control\n periodic_x                          = .true.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .false., \n open_xe                             = .false.,\n periodic_y                          = .true.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n $ideal\n ideal_case = 8\n /\n"}, {"id": "test/em_seabreeze2d_x/namelist.input.windfarm", "label": "windfarm", "path": "test/em_seabreeze2d_x/namelist.input.windfarm", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 12,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2007,\n start_month                         = 06,\n start_day                           = 1,\n start_hour                          = 5,\n start_minute                        = 00,\n start_second                        = 00,\n end_year                            = 2007,\n end_month                           = 06,\n end_day                             = 2,\n end_hour                            = 5,\n end_minute                          = 00,\n end_second                          = 00,\n history_interval                    = 30,\n frames_per_outfile                  = 1000,\n restart                             = .false.,\n restart_interval                    = 360,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 15,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,\n e_we                                = 202,\n s_sn                                = 1,\n e_sn                                = 202,\n s_vert                              = 1,\n e_vert                              = 35,\n dx                                  = 2000,\n dy                                  = 2000,\n ztop                                = 20000.,\n eta_levels                          = 1.000, 0.993, 0.983, 0.970, 0.954,\n                                       0.934, 0.909, 0.880, 0.845, 0.807,\n                                       0.765, 0.719, 0.672, 0.622, 0.571,\n                                       0.520, 0.468, 0.420, 0.376, 0.335,\n                                       0.298, 0.263, 0.231, 0.202, 0.175,\n                                       0.150, 0.127, 0.106, 0.088, 0.070,\n                                       0.055, 0.040, 0.026, 0.013, 0.000\n\n /\n\n &physics\n mp_physics                          = 14,\n ra_lw_physics                       = 1,\n ra_sw_physics                       = 1,\n radt                                = 5,\n sf_sfclay_physics                   = 5,\n sf_surface_physics                  = 1,\n bl_pbl_physics                      = 5,\n bldt                                = 0,\n bl_mynn_tkeadvect                   = .true.,\n tracer_pblmix                       = 1\n cu_physics                          = 0,\n cudt                                = 0,\n windfarm_opt                        = 1,\n windfarm_ij                         = 1,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 1,      1,      1,\n km_opt                              = 4,      4,      4,\n damp_opt                            = 2,\n dampcoef                            = .003,\n zdamp                               = 5000.,\n khdif                               = 300,\n kvdif                               = 1,\n smdiv                               = 0.1,\n emdiv                               = 0.01,\n epssm                               = 0.1,\n time_step_sound                     = 6,\n h_mom_adv_order                     = 5,\n v_mom_adv_order                     = 3,\n h_sca_adv_order                     = 5,\n v_sca_adv_order                     = 3,\n tracer_opt                          = 2,\n mix_full_fields                     = .true.,\n non_hydrostatic                     = .true.,\n /\n\n &bdy_control\n periodic_x                          = .true.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .false., \n open_xe                             = .false.,\n periodic_y                          = .true.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n $ideal\n ideal_case = 8\n /\n\n"}], "em_squall2d_x": [{"id": "test/em_squall2d_x/namelist.input", "label": "default", "path": "test/em_squall2d_x/namelist.input", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 1,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 0001,\n start_month                         = 01,\n start_day                           = 01,\n start_hour                          = 00,\n start_minute                        = 00,\n start_second                        = 00,\n end_year                            = 0001,\n end_month                           = 01,\n end_day                             = 01,\n end_hour                            = 01,\n end_minute                          = 00,\n end_second                          = 00,\n history_interval                    = 10,\n frames_per_outfile                  = 1000,\n restart                             = .false.,\n restart_interval                    = 60,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 3,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,\n e_we                                = 202,\n s_sn                                = 1,\n e_sn                                = 3,\n s_vert                              = 1,\n e_vert                              = 81,\n dx                                  = 250,\n dy                                  = 250,\n ztop                                = 20000.,\n /\n\n &physics\n mp_physics                          = 2,\n ra_lw_physics                       = 0,\n ra_sw_physics                       = 0,\n radt                                = 0,\n sf_sfclay_physics                   = 0,\n sf_surface_physics                  = 0,\n bl_pbl_physics                      = 0,\n bldt                                = 0,\n cu_physics                          = 0,\n cudt                                = 0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 2,      2,      2,\n damp_opt                            = 2,\n dampcoef                            = .003,\n zdamp                               = 5000.,\n khdif                               = 300,\n kvdif                               = 1,\n smdiv                               = 0.1,\n emdiv                               = 0.01,\n epssm                               = 0.1,\n time_step_sound                     = 6,\n h_mom_adv_order                     = 5,\n v_mom_adv_order                     = 3,\n h_sca_adv_order                     = 5,\n v_sca_adv_order                     = 3,\n mix_full_fields                     = .true.,\n non_hydrostatic                     = .true.,\n moist_adv_opt                       = 1,      1,      1,     \n scalar_adv_opt                      = 1,      1,      1,     \n chem_adv_opt                        = 1,      1,      1,     \n tke_adv_opt                         = 1,      1,      1,     \n /\n\n &bdy_control\n periodic_x                          = .false.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .true., \n open_xe                             = .true.,\n periodic_y                          = .true.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n \n &ideal\n ideal_case = 4\n /\n"}], "em_squall2d_y": [{"id": "test/em_squall2d_y/namelist.input", "label": "default", "path": "test/em_squall2d_y/namelist.input", "text": " &time_control\n run_days                            = 0,\n run_hours                           = 1,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 0001,\n start_month                         = 01,\n start_day                           = 01,\n start_hour                          = 00,\n start_minute                        = 00,\n start_second                        = 00,\n end_year                            = 0001,\n end_month                           = 01,\n end_day                             = 01,\n end_hour                            = 01,\n end_minute                          = 00,\n end_second                          = 00,\n history_interval                    = 10,\n frames_per_outfile                  = 1000,\n restart                             = .false.,\n restart_interval                    = 60,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 3,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,\n e_we                                = 3,\n s_sn                                = 1,\n e_sn                                = 202,\n s_vert                              = 1,\n e_vert                              = 81,\n dx                                  = 250,\n dy                                  = 250,\n ztop                                = 20000.,\n /\n\n &physics\n mp_physics                          = 2,\n ra_lw_physics                       = 0,\n ra_sw_physics                       = 0,\n radt                                = 0,\n sf_sfclay_physics                   = 0,\n sf_surface_physics                  = 0,\n bl_pbl_physics                      = 0,\n bldt                                = 0,\n cu_physics                          = 0,\n cudt                                = 0,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 2,      2,      2,\n damp_opt                            = 2,\n dampcoef                            = .003,\n zdamp                               = 5000.,\n khdif                               = 300,\n kvdif                               = 1,\n smdiv                               = 0.1,\n emdiv                               = 0.01,\n epssm                               = 0.1,\n time_step_sound                     = 6,\n h_mom_adv_order                     = 5,\n v_mom_adv_order                     = 3,\n h_sca_adv_order                     = 5,\n v_sca_adv_order                     = 3,\n mix_full_fields                     = .true.,\n non_hydrostatic                     = .true.,\n moist_adv_opt                       = 1,      1,      1,     \n scalar_adv_opt                      = 1,      1,      1,     \n chem_adv_opt                        = 1,      1,      1,     \n tke_adv_opt                         = 1,      1,      1,     \n /\n\n &bdy_control\n periodic_x                          = .true.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .false., \n open_xe                             = .false.,\n periodic_y                          = .false.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .true.,\n open_ye                             = .true.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n\n &ideal\n ideal_case = 5\n /\n"}], "em_tropical_cyclone": [{"id": "test/em_tropical_cyclone/namelist.input", "label": "default", "path": "test/em_tropical_cyclone/namelist.input", "text": " &time_control\n run_days                            = 6,\n run_hours                           = 0,\n run_minutes                         = 0,\n run_seconds                         = 0,\n start_year                          = 2007,\n start_month                         = 09,\n start_day                           = 1,\n start_hour                          = 0,\n start_minute                        = 00,\n start_second                        = 00,\n end_year                            = 2007,\n end_month                           = 09,\n end_day                             = 7,\n end_hour                            = 0,\n end_minute                          = 00,\n end_second                          = 00,\n history_interval                    = 1440,\n frames_per_outfile                  = 1000,\n restart                             = .false.,\n restart_interval                    = 8640,\n io_form_history                     = 2\n io_form_restart                     = 2\n io_form_input                       = 2\n io_form_boundary                    = 2\n /\n\n &domains\n time_step                           = 60,\n time_step_fract_num                 = 0,\n time_step_fract_den                 = 1,\n max_dom                             = 1,\n s_we                                = 1,\n e_we                                = 201,\n s_sn                                = 1,\n e_sn                                = 201,\n s_vert                              = 1,\n e_vert                              = 21,\n dx                                  = 15000,\n dy                                  = 15000,\n ztop                                = 25000.,\n /\n\n &physics\n mp_physics                          = 1,\n ra_lw_physics                       = 0,\n ra_sw_physics                       = 0,\n radt                                = 5,\n sf_sfclay_physics                   = 1,\n sf_surface_physics                  = 1,\n bl_pbl_physics                      = 1,\n bldt                                = 0,\n cu_physics                          = 0,\n cudt                                = 0,\n isftcflx                            = 1,\n /\n\n &fdda\n /\n\n &dynamics\n hybrid_opt                          = 0, \n rk_ord                              = 3,\n diff_opt                            = 2,      2,      2,\n km_opt                              = 4,      4,      4,\n damp_opt                            = 2,\n dampcoef                            = .003,\n zdamp                               = 5000.,\n rad_nudge                           = 1,\n khdif                               = 300,\n kvdif                               = 1,\n smdiv                               = 0.1,\n emdiv                               = 0.01,\n epssm                               = 0.1,\n time_step_sound                     = 6,\n h_mom_adv_order                     = 5,\n v_mom_adv_order                     = 3,\n h_sca_adv_order                     = 5,\n v_sca_adv_order                     = 3,\n mix_full_fields                     = .true.,\n non_hydrostatic                     = .true.,\n /\n\n &bdy_control\n periodic_x                          = .true.,\n symmetric_xs                        = .false.,\n symmetric_xe                        = .false.,\n open_xs                             = .false., \n open_xe                             = .false.,\n periodic_y                          = .true.,\n symmetric_ys                        = .false.,\n symmetric_ye                        = .false.,\n open_ys                             = .false.,\n open_ye                             = .false.,\n /\n\n &grib2\n /\n\n &namelist_quilt\n nio_tasks_per_group = 0,\n nio_groups = 1,\n /\n"}]};
  function esc(v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function deepClone(v) {
    return JSON.parse(JSON.stringify(v));
  }

  function normalizeDefault(v) {
    if (v === undefined || v === null) return null;
    if (Array.isArray(v)) return v.map(normalizeDefault);
    if (typeof v === 'number' || typeof v === 'boolean') return v;
    var s = String(v).trim().replace(/,+$/, '').trim();
    if (!s.length) return '';
    var lower = s.toLowerCase();
    if (lower === '.true.' || lower === 'true' || lower === 't') return true;
    if (lower === '.false.' || lower === 'false' || lower === 'f') return false;
    if (/^-?\d+$/.test(s)) return parseInt(s, 10);
    if (/^-?(?:\d+\.\d*|\d*\.\d+)(?:[eE][+-]?\d+)?$/.test(s)) return parseFloat(s);
    return s;
  }

  function inferSelection(field) {
    return field.enumValues && Object.keys(field.enumValues).length > 0;
  }

  function orderGroups(groupNames) {
    var seen = {};
    var ordered = [];

    CORE_GROUP_ORDER.forEach(function (name) {
      if (groupNames.indexOf(name) >= 0) {
        ordered.push(name);
        seen[name] = true;
      }
    });

    README_GROUP_ORDER.forEach(function (name) {
      if (!seen[name] && groupNames.indexOf(name) >= 0) {
        ordered.push(name);
        seen[name] = true;
      }
    });

    groupNames.slice().sort().forEach(function (name) {
      if (!seen[name]) ordered.push(name);
    });
    return ordered;
  }

  function fieldKey(group, name) {
    return group + '.' + name;
  }

  function formatValue(value) {
    if (typeof value === 'boolean') return value ? '.true.' : '.false.';
    if (value === null || value === undefined) return '';
    return String(value);
  }

  function isBlankNamelistValue(value) {
    if (value === null || value === undefined) return true;
    if (Array.isArray(value)) return value.length === 0 || value.every(function (item) { return isBlankNamelistValue(item); });
    return String(value).trim() === '';
  }

  function hasAnyBlankArrayEntry(value) {
    return Array.isArray(value) && value.some(function (item) { return isBlankNamelistValue(item); });
  }

  function isHtmlNumberSafe(value) {
    if (value === null || value === undefined) return true;
    if (typeof value === 'number') return isFinite(value);
    var raw = String(value).trim();
    if (raw === '') return true;
    if (!/^[+-]?(?:(?:\d+\.?\d*)|(?:\.\d+))(?:[eE][+-]?\d+)?$/.test(raw)) return false;
    return isFinite(Number(raw));
  }


  function resolveEntries(entries, maxDom) {
    if (entries === 'max_dom' || entries === 'max_domains') return Math.max(1, maxDom || 1);
    var n = parseInt(entries, 10);
    return isNaN(n) || n < 1 ? 1 : n;
  }

  function buildMergedCatalog(registry, selectValues, usersGuide, manual, readme, inventory, subsections, sourcePriority, semantics) {
    function getSourceRule(groupName, varName) {
      return (sourcePriority || {})[fieldKey(groupName, varName)] || {};
    }

    function getSemanticsRule(groupName, varName) {
      var fields = ((semantics || {}).fields || {});
      var shared = ((semantics || {}).shared || {});
      return $.extend({}, shared, fields[fieldKey(groupName, varName)] || {});
    }

    function hasUsableDefault(value) {
      if (value === undefined || value === null) return false;
      if (Array.isArray(value)) return value.some(function (item) { return hasUsableDefault(item); });
      if (typeof value === 'string') return $.trim(value) !== '';
      return true;
    }

    function getValueFromSource(sourceName, reg, inv, ug, man, rd) {
      var value;
      if (sourceName === 'users_guide') value = ug.defaultValue;
      else if (sourceName === 'readme_namelist') value = rd.defaultValue;
      else if (sourceName === 'registry') value = reg.defaultValue;
      else if (sourceName === 'inventory') value = inv.defaultValue;
      else if (sourceName === 'manual') value = man.defaultValue;
      return hasUsableDefault(value) ? value : undefined;
    }

    function chooseDefaultValue(groupName, varName, reg, inv, ug, man, rd) {
      var rule = getSourceRule(groupName, varName);
      var semanticsRule = getSemanticsRule(groupName, varName);
      var explicit = rule.defaultSource;
      var usersGuideHasRow = ug && Object.prototype.hasOwnProperty.call(ug, 'defaultValue');
      var usersGuideHasDefault = usersGuideHasRow && hasUsableDefault(ug.defaultValue);
      var wpsMastered = rule.wpsMastered === true || semanticsRule.defaultSource === 'wps' || semanticsRule.defaultSource === 'derived_from_wps';

      // PDF rule: a nonblank Users Guide Default Setting is the editor default.
      // A blank Users Guide Default Setting means the field starts blank and the user must choose.
      if (usersGuideHasDefault) {
        return { value: ug.defaultValue, source: 'users_guide_pdf' };
      }
      if (usersGuideHasRow && !usersGuideHasDefault && !wpsMastered) {
        return { value: '', source: 'users_guide_pdf_blank' };
      }

      var defaultOrder = explicit ?
        [explicit, 'users_guide', 'readme_namelist', 'registry', 'inventory', 'manual'] :
        ['users_guide', 'readme_namelist', 'registry', 'inventory', 'manual'];

      var seen = {};
      for (var i = 0; i < defaultOrder.length; i++) {
        var sourceName = defaultOrder[i];
        if (seen[sourceName]) continue;
        seen[sourceName] = true;
        var val = getValueFromSource(sourceName, reg, inv, ug, man, rd);
        if (val !== undefined) return { value: val, source: sourceName };
      }
      return { value: '', source: '' };
    }

    var groups = {};
    Object.keys(registry || {}).forEach(function (groupName) {
      groups[groupName] = [];
      var groupSubsectionMeta = (((subsections || {}).groups || {})[groupName] || {});
      var subVarMap = groupSubsectionMeta.variables || {};
      var subsectionOrderIndex = {};
      (groupSubsectionMeta.order || []).forEach(function (item, idx) {
        subsectionOrderIndex[item.id] = idx + 1;
      });
      Object.keys(registry[groupName] || {}).forEach(function (varName) {
        var reg = registry[groupName][varName] || {};
        var inv = (((inventory || {}).inventory || {})[groupName] || {})[varName] || {};
        var ug = ((usersGuide || {})[groupName] || {})[varName] || {};
        var man = ((manual || {})[groupName] || {})[varName] || {};
        var rd = ((readme || {})[groupName] || {})[varName] || {};
        var sv = ((selectValues || {})[groupName] || {})[varName] || {};
        var subsection = null;
        Object.keys(subVarMap).some(function (subId) {
          if ((subVarMap[subId] || []).indexOf(varName) >= 0) {
            subsection = subId;
            return true;
          }
          return false;
        });

        var chosenDefault = chooseDefaultValue(groupName, varName, reg, inv, ug, man, rd);
        var semanticsRule = getSemanticsRule(groupName, varName);
        var usersGuideHasRow = ug && Object.prototype.hasOwnProperty.call(ug, 'defaultValue');
        var usersGuideHasDefault = usersGuideHasRow && hasUsableDefault(ug.defaultValue);
        if (usersGuideHasDefault) {
          semanticsRule.hasPublishedDefault = true;
          semanticsRule.requiresUserValue = false;
          semanticsRule.conditionallyRequired = false;
          semanticsRule.defaultSemantics = 'published_default';
          semanticsRule.usersGuideDefaultRaw = ug.defaultValue;
        } else if (usersGuideHasRow && !usersGuideHasDefault) {
          semanticsRule.hasPublishedDefault = false;
          semanticsRule.requiresUserValue = true;
          semanticsRule.conditionallyRequired = false;
          semanticsRule.defaultSemantics = 'user_required_choice';
          semanticsRule.renderBlankOption = true;
          semanticsRule.usersGuideDefaultRaw = null;
        }

        var field = {
          group: groupName,
          name: varName,
          key: fieldKey(groupName, varName),
          type: reg.type || inv.type || man.type || rd.type || 'character',
          entries: reg.entries || inv.entries || ug.entries || man.entries || rd.entries || '1',
          defaultValue: normalizeDefault(chosenDefault.value),
          defaultSource: chosenDefault.source || '',
          semantics: semanticsRule,
          description: ug.description || rd.description || inv.description || man.description || ((reg.comments || []).join(' | ')) || '',
          enumValues: (sv.values || inv.enumValues || {}),
          range: sv.range || null,
          subsection: subsection,
          subsectionLabel: subsection && ((groupSubsectionMeta.order || []).reduce(function (acc, item) {
            return acc || (item.id === subsection ? item.label : null);
          }, null)),
          subsectionOrder: subsection ? (subsectionOrderIndex[subsection] || 999999) : 0,
          uiStatus: inv.uiStatus || '',
          dependencyHints: inv.dependencyHints || [],
          isLogical: reg.type === 'logical' || inv.isLogical === true,
          sources: {
            registry: reg.sources || [],
            usersGuide: ug.description ? ['users_guide'] : [],
            manual: man.description ? (man.sources || ['manual']) : [],
            readme: rd.description ? (rd.sources || ['readme']) : []
          }
        };
        if (inferSelection(field)) field.type = 'selection';
        groups[groupName].push(field);
      });
      groups[groupName].sort(function (a, b) {
        var aSubOrder = a.subsectionOrder || 0;
        var bSubOrder = b.subsectionOrder || 0;
        if (aSubOrder !== bSubOrder) return aSubOrder - bSubOrder;
        if ((a.subsectionLabel || '') !== (b.subsectionLabel || '')) {
          return (a.subsectionLabel || '').localeCompare(b.subsectionLabel || '');
        }
        return a.name.localeCompare(b.name);
      });
    });
    return { groups: groups };
  }

  function HybridNamelistInputEditor(opts) {
    this.opts = opts || {};
    this.maxDom = 1;
    this.catalog = null;
    this.compatibility = { rules: [] };
    this.semantics = { _meta: {}, shared: {}, fields: {}, recommendations: {} };
    this.arwContext = { metadata: {}, topics: {}, groups: {}, fields: {} };
    this.state = { enabled: {}, values: {}, expanded: {}, subsectionExpanded: {}, selectedKey: null, hasSeededDefaults: false };
    this.$modal = $('#namelist-input-dialog');
    this.$container = $('#namelist-input-container');
    this.$text = $('#pane-namelist-input-text textarea');
    this.$doc = $('#namelist-input-doc-panel');
    this.$search = $('#namelist-input-search');
    this.$groupJump = $('#namelist-input-group-jump');
    this.$varJump = $('#namelist-input-variable-jump');
    this.$summary = $('#namelist-input-summary');
    this.$exampleCase = $('#namelist-input-example-case');
    this.$exampleProfile = $('#namelist-input-example-profile');
    this.$applyExample = $('#button-namelist-input-apply-example');
    this.$hideEmptyGroups = $('#namelist-input-hide-unset-groups');
    this.$hideUnsetVars = $('#namelist-input-hide-unset-vars');
    this.$showCompatibility = $('#namelist-input-show-compatibility');
    this.$scrollTop = $('#button-namelist-input-scroll-top');
    this.$scrollBottom = $('#button-namelist-input-scroll-bottom');
    this.$saveDialog = $('#namelist-input-save-dialog');
    this.$saveDialogText = $('#namelist-input-save-text');
    this.$saveDialogTitle = $('#namelist-input-save-title');
    this.$saveDialogDownload = $('#button-download-namelist-input');
    this.$saveDialogCopy = $('#button-copy-namelist-input-save');
    this.hideEmptyGroups = false;
    this.hideUnsetVars = false;
    this.showCompatibility = true;
    this.targetWrfVersion = '4.8.0+';
    this._returnToEditorAfterSaveDialog = false;
    this._saveDialogQueued = false;
    this._savedModalSnapshot = null;
    this._saveDialogExportKind = 'input';
    this._saveDialogFilename = 'namelist.input';
    this._saveDialogTextValue = '';
    this._bind();
  }

  HybridNamelistInputEditor.prototype._bind = function () {
    var self = this;
    this.$exampleCase = $();
    this.$exampleProfile = $();
    this.$applyExample = $();
    $('#button-namelist-input').off('click.namelistopen').on('click.namelistopen', function () { self.open(); });
    $('#button-save-namelist-input').off('click.namelistsave').on('click.namelistsave', function (e) { e.preventDefault(); e.stopPropagation(); self.save('input'); });
    $('#button-save-namelist-obsproc').off('click.namelistobsprocsave').on('click.namelistobsprocsave', function (e) { e.preventDefault(); e.stopPropagation(); self.save('obsproc'); });
    $('#button-save-all-namelists').off('click.namelistsaveall').on('click.namelistsaveall', function (e) { e.preventDefault(); e.stopPropagation(); self.saveAll(); });
    $('#button-copy-namelist-input').off('click.namelistcopy').on('click.namelistcopy', function () { self.copy('input'); });
    this.$saveDialogCopy.off('click.namelistsavedialogcopy').on('click.namelistsavedialogcopy', function () { navigator.clipboard.writeText(self.$saveDialogText.val() || ''); });
    this.$saveDialogDownload.off('click.namelistsavedialogdownload').on('click.namelistsavedialogdownload', function () { self.downloadCurrentText(self._saveDialogExportKind); });
    $('#button-namelist-input-expand-all').on('click', function () { self.setAllExpanded(true); });
    $('#button-namelist-input-collapse-all').on('click', function () { self.setAllExpanded(false); });
    $('#button-namelist-input-enable-visible').on('click', function () { self.setVisibleEnabled(true); });
    $('#button-namelist-input-disable-visible').on('click', function () { self.setVisibleEnabled(false); });
    this.$search.on('input', function () {
      window.clearTimeout(self._searchScrollTimer);
      self.render();
      self._searchScrollTimer = window.setTimeout(function () {
        self.focusSearchResult();
      }, 100);
    });
    this.$groupJump.on('change', function () { self.jumpToGroup($(this).val()); });
    this.$varJump.on('change', function () { self.jumpToVariable($(this).val()); });
    this.$exampleCase.on('change', function () { self.populateExampleProfileOptions($(this).val()); });
    this.$applyExample.on('click', function () { self.applySelectedExampleProfile(); });
    this.$hideEmptyGroups.prop('checked', this.hideEmptyGroups);
    this.$hideUnsetVars.prop('checked', this.hideUnsetVars);
    this.$hideEmptyGroups.on('change', function () { self.hideEmptyGroups = this.checked; self.render(); });
    this.$hideUnsetVars.on('change', function () { self.hideUnsetVars = this.checked; self.render(); });
    this.$showCompatibility.closest('.form-check').hide();
    this.$scrollTop.off('click.namelistscrolltop').on('click.namelistscrolltop', function () { self.scrollEditorTo('top'); });
    this.$scrollBottom.off('click.namelistscrollbottom').on('click.namelistscrollbottom', function () { self.scrollEditorTo('bottom'); });
    this.$modal.off('shown.bs.modal.namelist hidden.bs.modal.namelist').on('shown.bs.modal.namelist hidden.bs.modal.namelist', function () {
      setTimeout(function () { window.dispatchEvent(new Event('resize')); }, 50);
    });
    this.$modal.off('hidden.bs.modal.nameliststate').on('hidden.bs.modal.nameliststate', function () {
      self.captureModalState();
      if (self._saveDialogQueued) {
        self._saveDialogQueued = false;
        if (self.$saveDialog && self.$saveDialog.length && typeof self.$saveDialog.modal === 'function') {
          self.$saveDialog.modal('show');
        }
      }
    });
    this.$saveDialog.off('hidden.bs.modal.namelistsave').on('hidden.bs.modal.namelistsave', function () {
      if (self._returnToEditorAfterSaveDialog) {
        self._returnToEditorAfterSaveDialog = false;
        self.restoreModalState();
        if (self.$modal && self.$modal.length && typeof self.$modal.modal === 'function') {
          self.$modal.modal('show');
        }
      }
    });
  };


  HybridNamelistInputEditor.prototype.ensureExampleControls = function () {
    return;
  };

  HybridNamelistInputEditor.prototype.populateExampleCaseOptions = function () {
    return;
  };

  HybridNamelistInputEditor.prototype.populateExampleProfileOptions = function (caseName) {
    if (!this.$exampleProfile || !this.$exampleProfile.length) return;
    var profiles = caseName ? (EXAMPLE_NAMELIST_PROFILES[caseName] || []) : [];
    var html = '<option value="">Select profile</option>';
    profiles.forEach(function (profile) {
      html += '<option value="' + esc(profile.id) + '">' + esc(profile.label) + '</option>';
    });
    this.$exampleProfile.html(html);
    this.$exampleProfile.prop('disabled', profiles.length === 0);
  };

  HybridNamelistInputEditor.prototype.findExampleProfileById = function (profileId) {
    var found = null;
    Object.keys(EXAMPLE_NAMELIST_PROFILES).some(function (caseName) {
      return (EXAMPLE_NAMELIST_PROFILES[caseName] || []).some(function (profile) {
        if (profile.id === profileId) {
          found = profile;
          return true;
        }
        return false;
      });
    });
    return found;
  };

  HybridNamelistInputEditor.prototype.parseExampleNamelist = function (text) {
    var parsed = {};
    var maxDom = 1;
    var clean = String(text || '').replace(/\r/g, '').replace(/^[ \t]*!.*$/gm, '');
    var groupRegex = /(^|\n)\s*&([A-Za-z_]\w*)\b([\s\S]*?)(?:\n\s*\/)/g;
    var match;
    while ((match = groupRegex.exec(clean)) !== null) {
      var groupName = match[2];
      var body = match[3] || '';
      parsed[groupName] = parsed[groupName] || {};
      var assignRegex = /(^|\n)\s*([A-Za-z_]\w*)\s*=/g;
      var entries = [];
      var am;
      while ((am = assignRegex.exec(body)) !== null) {
        entries.push({ name: am[2], start: assignRegex.lastIndex });
      }
      for (var i = 0; i < entries.length; i++) {
        var start = entries[i].start;
        var end = i + 1 < entries.length ? entries[i + 1].start - entries[i + 1].name.length - 1 : body.length;
        var raw = body.slice(start, end).trim().replace(/,+\s*$/, '');
        var values = this.splitNamelistValues(raw).map(this.parseNamelistToken);
        parsed[groupName][entries[i].name] = values.length <= 1 ? values[0] : values;
        if (values.length > maxDom) maxDom = values.length;
        if (entries[i].name === 'max_dom' && values.length) {
          var n = parseInt(values[0], 10);
          if (!isNaN(n) && n > maxDom) maxDom = n;
        }
      }
    }
    return { groups: parsed, maxDom: maxDom };
  };

  HybridNamelistInputEditor.prototype.splitNamelistValues = function (raw) {
    var values = [];
    var buf = '';
    var quote = null;
    for (var i = 0; i < raw.length; i++) {
      var ch = raw.charAt(i);
      if ((ch === "'" || ch === '"')) {
        if (quote === ch) quote = null;
        else if (!quote) quote = ch;
        buf += ch;
      } else if (ch === ',' && !quote) {
        if ($.trim(buf) !== '') values.push($.trim(buf));
        buf = '';
      } else if ((ch === '\n' || ch === '\t') && !quote) {
        buf += ' ';
      } else {
        buf += ch;
      }
    }
    if ($.trim(buf) !== '') values.push($.trim(buf));
    return values;
  };

  HybridNamelistInputEditor.prototype.parseNamelistToken = function (token) {
    var s = $.trim(String(token || ''));
    if (!s.length) return '';
    if ((s.charAt(0) === "'" && s.charAt(s.length - 1) === "'") || (s.charAt(0) === '"' && s.charAt(s.length - 1) === '"')) {
      return s.slice(1, -1);
    }
    var lower = s.toLowerCase();
    if (lower === '.true.' || lower === 'true') return true;
    if (lower === '.false.' || lower === 'false') return false;
    if (/^-?\d+$/.test(s)) return parseInt(s, 10);
    if (/^-?(?:\d+\.\d*|\d*\.\d+|\d+)(?:[eEdD][+\-]?\d+)?$/.test(s)) return parseFloat(s.replace(/[dD]/, 'e'));
    return s;
  };

  HybridNamelistInputEditor.prototype.applySelectedExampleProfile = function () {
    return;
  };


  HybridNamelistInputEditor.prototype._load = async function () {
    if (this.catalog) return;
    var runtimeBase = this.opts.runtimeBaseUrl || 'data/runtime';
    this.arwContext = await $.getJSON(runtimeBase + '/namelist.arw_technical_note_context.json').catch(function () { return { metadata: {}, topics: {}, groups: {}, fields: {} }; });
    var condensed = null;

    if (global.__NamelistInputData && global.__NamelistInputData.catalog) {
      condensed = global.__NamelistInputData.catalog;
    } else {
      condensed = await $.getJSON(runtimeBase + '/namelist.input.catalog.json').catch(function () { return null; });
    }

    if (condensed && condensed.groups) {
      this.catalog = { groups: condensed.groups || {} };
      this.compatibility = await $.getJSON(runtimeBase + '/namelist.input.compatibility.validated.json').catch(function () { return condensed.compatibility || { rules: [] }; });
      this.semantics = condensed.semantics || { _meta: {}, shared: {}, fields: {}, recommendations: {} };
      this.performStartupSeeding(this.detectMaxDom());
      this.populateJumps();
      return;
    }

    var base = this.opts.jsonBaseUrl || 'json';
    var payloads;
    var sourcePriority = {};
    var semantics = {};
    if (global.__NamelistInputData) {
      payloads = [
        global.__NamelistInputData.registry || {},
        global.__NamelistInputData.selectValues || {},
        global.__NamelistInputData.usersGuide || {},
        global.__NamelistInputData.manual || {},
        global.__NamelistInputData.readme || {},
        global.__NamelistInputData.inventory || {},
        global.__NamelistInputData.subsections || {},
        global.__NamelistInputData.compatibility || { rules: [] }
      ];
      sourcePriority = global.__NamelistInputData.sourcePriority || {};
      semantics = global.__NamelistInputData.metadataSemantics || {};
      if (!Object.keys(sourcePriority).length) {
        sourcePriority = await $.getJSON(runtimeBase + '/namelist.input.source_priority.json').catch(function () { return {}; });
      }
      if (!Object.keys(semantics).length) {
        semantics = await $.getJSON(runtimeBase + '/namelist.input.metadata_semantics.json').catch(function () { return {}; });
      }
    } else {
      payloads = await Promise.all([
        $.getJSON(base + '/namelist.input.registry.json'),
        $.getJSON(base + '/namelist.input.select.values.json'),
        $.getJSON(base + '/namelist.input.users.guide.json'),
        $.getJSON(base + '/namelist.input.manual.json'),
        $.getJSON(base + '/namelist.input.readme.json'),
        $.getJSON(base + '/namelist.input.inventory.json'),
        $.getJSON(base + '/namelist.input.subsections.json'),
        $.getJSON(base + '/namelist.input.compatibility.json').catch(function () { return { rules: [] }; })
      ]);
      sourcePriority = await $.getJSON(runtimeBase + '/namelist.input.source_priority.json').catch(function () { return {}; });
      semantics = await $.getJSON(runtimeBase + '/namelist.input.metadata_semantics.json').catch(function () { return {}; });
    }
    this.semantics = semantics || { _meta: {}, shared: {}, fields: {}, recommendations: {} };
    this.catalog = buildMergedCatalog(payloads[0], payloads[1], payloads[2], payloads[3], payloads[4], payloads[5], payloads[6], sourcePriority, semantics);
    this.compatibility = await $.getJSON(runtimeBase + '/namelist.input.compatibility.validated.json').catch(function () { return payloads[7] || { rules: [] }; });
    this.performStartupSeeding(this.detectMaxDom());
    this.populateJumps();
  };


  HybridNamelistInputEditor.prototype.getWpsGridRows = function () {
    return $('#grids .container-grid').filter(function () {
      return this.id !== 'grid_template';
    });
  };

  HybridNamelistInputEditor.prototype.getVisibleWpsGridRows = function () {
    return this.getWpsGridRows().filter(function () {
      return this.offsetParent !== null;
    });
  };

  HybridNamelistInputEditor.prototype.readWpsMasteredValues = function () {
    var form = $('#wps-form');
    var rows = this.getWpsGridRows();
    var maxDom = rows.length || this.detectMaxDom();

    function numOrBlank(v) {
      if (v === undefined || v === null || v === '') return '';
      var n = parseFloat(v);
      return isNaN(n) ? '' : n;
    }

    function intOrBlank(v) {
      if (v === undefined || v === null || v === '') return '';
      var n = parseInt(v, 10);
      return isNaN(n) ? '' : n;
    }

    function round3(v) {
      return Math.round(v * 1000) / 1000;
    }

    function readShareDateParts(selector) {
      var raw = $(selector).val();
      if (!raw) return null;
      var clean = String(raw).trim().replace('T', '_');
      var m = clean.match(/^(\d{4})-(\d{2})-(\d{2})_(\d{2}):(\d{2}):(\d{2})$/);
      if (!m) return null;
      return {
        year: parseInt(m[1], 10),
        month: parseInt(m[2], 10),
        day: parseInt(m[3], 10),
        hour: parseInt(m[4], 10),
        minute: parseInt(m[5], 10),
        second: parseInt(m[6], 10)
      };
    }

    var parentGridRatio = [];
    var iParentStart = [];
    var jParentStart = [];
    var parentId = [];
    var eWe = [];
    var eSn = [];
    var gridId = [];

    rows.each(function (idx, row) {
      var $row = $(row);
      var ratio = intOrBlank($row.find('input[name="parent_grid_ratio"]').val());
      var pid = intOrBlank($row.find('input[name="parent_id"]').val());
      parentGridRatio.push(ratio === '' ? (idx === 0 ? 1 : '') : ratio);
      parentId.push(pid === '' ? (idx === 0 ? 1 : idx) : pid);
      iParentStart.push(intOrBlank($row.find('input[name="i_parent_start"]').val()));
      jParentStart.push(intOrBlank($row.find('input[name="j_parent_start"]').val()));
      eWe.push(intOrBlank($row.find('input[name="e_we"]').val()));
      eSn.push(intOrBlank($row.find('input[name="e_sn"]').val()));
      gridId.push(idx + 1);
    });

    var dxOuter = numOrBlank(form.find('input[name="dx"]').val());
    var dyOuter = numOrBlank(form.find('input[name="dy"]').val());
    var dx = [];
    var dy = [];
    var parentTimeStepRatio = [];
    var specified = [];
    var nested = [];

    for (var i = 0; i < maxDom; i++) {
      var ratio = parentGridRatio[i];
      var pid = parentId[i];
      if (i === 0 || !isFinite(dxOuter) || dxOuter === '') {
        dx[i] = dxOuter;
      } else {
        var parentIdx = isFinite(pid) && pid > 0 ? (pid - 1) : (i - 1);
        var parentDx = dx[parentIdx];
        dx[i] = (isFinite(parentDx) && isFinite(ratio) && ratio > 0) ? round3(parentDx / ratio) : parentDx;
      }
      if (i === 0 || !isFinite(dyOuter) || dyOuter === '') {
        dy[i] = dyOuter;
      } else {
        var parentIdxDy = isFinite(pid) && pid > 0 ? (pid - 1) : (i - 1);
        var parentDy = dy[parentIdxDy];
        dy[i] = (isFinite(parentDy) && isFinite(ratio) && ratio > 0) ? round3(parentDy / ratio) : parentDy;
      }
      parentTimeStepRatio.push(parentGridRatio[i] !== undefined ? parentGridRatio[i] : '');
      specified.push(i === 0);
      nested.push(i > 0);
    }

    var intervalSeconds = intOrBlank(form.find('input[name="interval_seconds"]').val());
    if (intervalSeconds === '') intervalSeconds = intOrBlank($('#wps-share-interval-seconds').val());

    var startParts = readShareDateParts('#wps-start-date');
    var endParts = readShareDateParts('#wps-end-date');

    function expand(val) {
      var out = [];
      for (var i = 0; i < maxDom; i++) out.push(val);
      return out;
    }

    return {
      maxDom: maxDom,
      values: {
        'domains.max_dom': maxDom,
        'domains.dx': dx,
        'domains.dy': dy,
        'domains.e_we': eWe,
        'domains.e_sn': eSn,
        'domains.grid_id': gridId,
        'domains.parent_grid_ratio': parentGridRatio,
        'domains.i_parent_start': iParentStart,
        'domains.j_parent_start': jParentStart,
        'domains.parent_id': parentId,
        'domains.parent_time_step_ratio': parentTimeStepRatio,
        'bdy_control.specified': specified,
        'bdy_control.nested': nested,
        'time_control.interval_seconds': intervalSeconds,
        'time_control.start_year': startParts ? expand(startParts.year) : null,
        'time_control.start_month': startParts ? expand(startParts.month) : null,
        'time_control.start_day': startParts ? expand(startParts.day) : null,
        'time_control.start_hour': startParts ? expand(startParts.hour) : null,
        'time_control.start_minute': startParts ? expand(startParts.minute) : null,
        'time_control.start_second': startParts ? expand(startParts.second) : null,
        'time_control.end_year': endParts ? expand(endParts.year) : null,
        'time_control.end_month': endParts ? expand(endParts.month) : null,
        'time_control.end_day': endParts ? expand(endParts.day) : null,
        'time_control.end_hour': endParts ? expand(endParts.hour) : null,
        'time_control.end_minute': endParts ? expand(endParts.minute) : null,
        'time_control.end_second': endParts ? expand(endParts.second) : null
      }
    };
  };

  HybridNamelistInputEditor.prototype.createRuntimeEngine = function (maxDomOverride) {
    var engineFactory = global.NamelistRuntimeEngine && global.NamelistRuntimeEngine.create;
    if (!engineFactory) return null;
    return engineFactory({
      catalog: this.catalog || { groups: {} },
      state: this.state,
      maxDom: Math.max(1, maxDomOverride || this.detectMaxDom()),
      defaultEnabledFields: DEFAULT_ENABLED_FIELDS,
      coreGroups: CORE_GROUPS,
      groupOrder: orderGroups
    });
  };

  HybridNamelistInputEditor.prototype.createLiveRuntimeEngine = function () {
    return this.createRuntimeEngine(this.maxDom || this.detectMaxDom());
  };

  HybridNamelistInputEditor.prototype.getCompatibilityIssues = function () {
    var factory = global.NamelistCompatibilityEngine && global.NamelistCompatibilityEngine.create;
    if (!factory || !this.catalog) return [];
    var engine = factory({
      catalog: this.catalog,
      compatibility: this.compatibility || { rules: [] },
      state: this.state,
      targetWrfVersion: this.targetWrfVersion || '4.8.0+'
    });
    return engine.getIssues();
  };

  HybridNamelistInputEditor.prototype.getIssuesForField = function (field) {
    if (!field || !field.key) return [];
    return this.getCompatibilityIssues().filter(function (issue) {
      return issue.fieldKeys && issue.fieldKeys.indexOf(field.key) !== -1;
    });
  };

  HybridNamelistInputEditor.prototype.applyCompatibilityFix = function (issueId) {
    return;
  };

  HybridNamelistInputEditor.prototype.renderEngineIssuesHtml = function (engineIssues) {
    if (!engineIssues || !engineIssues.length) return '';
    var html = '<div class="namelist-input-variable-compatibility namelist-input-engine-compatibility small">';
    engineIssues.forEach(function (issue) {
      var badge = issue.type === 'error' ? 'danger' : (issue.type === 'warning' ? 'warning' : 'info');
      html += '<div><span class="badge badge-' + badge + ' mr-1">' + esc(issue.type) + '</span>' + esc(issue.message);
      if (issue.fixable) html += ' <button type="button" class="btn btn-sm btn-outline-primary py-0 namelist-input-apply-fix" data-issue-id="' + esc(issue.id) + '">' + esc(issue.fixLabel || 'Apply fix') + '</button>';
      html += '</div>';
    });
    html += '</div>';
    return html;
  };

  HybridNamelistInputEditor.prototype.bindCompatibilityPanelEvents = function () {
    var self = this;
    this.$container.find('.namelist-input-target-wrf-version').off('change.namelistcompat').on('change.namelistcompat', function () {
      self.targetWrfVersion = $(this).val() || '4.8.0+';
      self.render();
      self.updateText();
    });
  };

  HybridNamelistInputEditor.prototype.refreshCompatibilityDisplay = function () {
    if (!this.catalog || !this.$container || !this.$container.length) return;

    var issues = this.getCompatibilityIssues();
    var issueMap = {};
    issues.forEach(function (issue) {
      (issue.fieldKeys || []).forEach(function (key) {
        issueMap[key] = issueMap[key] || [];
        issueMap[key].push(issue);
      });
    });

    var panel = this.$container.find('.namelist-input-compatibility-panel').first();
    if (panel.length) {
      panel.replaceWith(this.renderCompatibilityPanel());
    } else {
      this.$container.prepend(this.renderCompatibilityPanel());
    }
    this.bindCompatibilityPanelEvents();

    this.$container.off('wheel.namelistNumberWheelGuard')
      .on('wheel.namelistNumberWheelGuard', 'input[type="number"]', function () {
        if (document.activeElement === this) this.blur();
      });

    var self = this;
    this.$container.find('.namelist-input-variable').each(function () {
      var row = $(this);
      var key = row.data('key');
      var rowIssues = issueMap[key] || [];

      row.removeClass('compatibility-bad compatibility-maybe');
      row.find('.namelist-input-engine-compatibility').remove();

      if (rowIssues.some(function (issue) { return issue.type === 'error'; })) row.addClass('compatibility-bad');
      else if (rowIssues.some(function (issue) { return issue.type === 'warning'; })) row.addClass('compatibility-maybe');

      if (rowIssues.length) row.append(self.renderEngineIssuesHtml(rowIssues));
    });
  };

  HybridNamelistInputEditor.prototype.markFieldUserEdited = function (key) {
    this.state.userEditedFields = this.state.userEditedFields || {};
    var runDurationKeys = {
      'time_control.run_days': true,
      'time_control.run_hours': true,
      'time_control.run_minutes': true,
      'time_control.run_seconds': true
    };
    var keys = runDurationKeys[key] ? Object.keys(runDurationKeys) : [key];
    keys.forEach(function (editKey) {
      this.state.userEditedFields[editKey] = true;
      if (this.state.suggestedFields) delete this.state.suggestedFields[editKey];
      if (this.state.suggestionNotes) delete this.state.suggestionNotes[editKey];
    }, this);
    var engine = this.createLiveRuntimeEngine();
    if (engine && typeof engine.markUserEdited === 'function') engine.markUserEdited(key);
  };

  HybridNamelistInputEditor.prototype.getFieldSuggestionNote = function (key) {
    if (this.state.suggestionNotes && this.state.suggestionNotes[key]) return this.state.suggestionNotes[key];
    var engine = this.createLiveRuntimeEngine();
    if (engine && typeof engine.getSuggestionNote === 'function') return engine.getSuggestionNote(key);
    return null;
  };

  HybridNamelistInputEditor.prototype.renderCompatibilityPanel = function () {
    var issues = this.getCompatibilityIssues();
    var errors = issues.filter(function (issue) { return issue.type === 'error'; }).length;
    var warnings = issues.filter(function (issue) { return issue.type === 'warning'; }).length;
    var validRules = (this.compatibility.rules || []).filter(function (rule) {
      var status = String(rule.validationStatus || '').toLowerCase();
      return status === 'valid' || status === 'validated';
    }).length;
    var needsReview = (this.compatibility.rules || []).filter(function (rule) {
      return String(rule.validationStatus || '').toLowerCase() === 'needs_review';
    }).length;

    var panelClass = errors ? 'alert-danger' : (warnings ? 'alert-warning' : 'alert-success');
    var html = '<div class="alert ' + panelClass + ' py-2 namelist-input-compatibility-panel">';
    html += '<div class="d-flex flex-wrap align-items-center">';
    html += '<strong class="mr-2">Compatibility:</strong>';
    html += '<span class="badge badge-danger mr-1">' + errors + ' errors</span>';
    html += '<span class="badge badge-warning mr-3">' + warnings + ' warnings</span>';
    html += '<label class="small mb-0 mr-2" for="namelist-input-target-wrf-version">Target WRF</label>';
    html += '<select id="namelist-input-target-wrf-version" class="custom-select custom-select-sm namelist-input-target-wrf-version mr-3" style="width:auto">';
    html += '<option value="4.8.0+"' + ((this.targetWrfVersion || '4.8.0+') === '4.8.0+' ? ' selected' : '') + '>4.8.0+</option>';
    html += '<option value="4.7.1"' + (this.targetWrfVersion === '4.7.1' ? ' selected' : '') + '>4.7.1</option>';
    html += '</select>';
    html += '<span class="small text-muted">Enforcing ' + validRules + ' validated rules. ';
    html += needsReview + ' need review. Registry-backed version checks are enforced first.</span>';
    html += '</div>';
    html += '</div>';
    return html;
  };

  HybridNamelistInputEditor.prototype.applyWpsMasteredDomainValues = function () {
    var snapshot = this.readWpsMasteredValues();
    var engine = this.createRuntimeEngine(this.maxDom);
    if (engine) {
      engine.applyWpsOverlay(snapshot);
      return;
    }
    var self = this;
    Object.keys(snapshot.values).forEach(function (key) {
      var field = self.findFieldByKey(key);
      if (!field) return;
      var count = resolveEntries(field.entries, self.maxDom);
      var incoming = snapshot.values[key];
      if (incoming === null || typeof incoming === 'undefined' || incoming === '') return;
      if (count > 1) {
        var arr = Array.isArray(incoming) ? incoming.slice(0, count) : [incoming];
        while (arr.length < count) arr.push(arr.length ? deepClone(arr[arr.length - 1]) : '');
        self.state.values[key] = arr.slice(0, count);
      } else {
        self.state.values[key] = Array.isArray(incoming) ? incoming[0] : incoming;
      }
    });
    if (self.findFieldByKey('domains.parent_time_step_ratio') && Array.isArray(self.state.values['domains.parent_grid_ratio'])) {
      self.state.values['domains.parent_time_step_ratio'] = self.state.values['domains.parent_grid_ratio'].slice(0, self.maxDom);
    }
    if (self.findFieldByKey('domains.max_dom')) {
      self.state.values['domains.max_dom'] = snapshot.maxDom;
    }
  };

  HybridNamelistInputEditor.prototype.detectMaxDom = function () {
    var count = this.getWpsGridRows().length;
    return count > 0 ? count : 1;
  };

  HybridNamelistInputEditor.prototype.resetSeedState = function (maxDomOverride) {
    this.maxDom = Math.max(1, maxDomOverride || this.detectMaxDom());
    this.state.enabled = {};
    this.state.values = {};
    this.state.expanded = {};
    this.state.subsectionExpanded = {};
    this.state.hasSeededDefaults = false;
  };

  HybridNamelistInputEditor.prototype.getSubsectionStateKey = function (field) {
    return field.group + '::' + (field.subsection || field.subsectionLabel || 'default');
  };

  HybridNamelistInputEditor.prototype.getEntryLabelPrefix = function (entries) {
    var e = String(entries || '').toLowerCase();
    if (e === 'max_dom' || e === 'max_domains') return 'd';
    if (e === 'max_eta') return 'eta';
    if (e === 'max_ocean') return 'lvl';
    if (e === 'max_moves') return 'move';
    if (e === 'max_mgnspc') return 'spc';
    return '';
  };

  HybridNamelistInputEditor.prototype.getDefaultArrayEntry = function (field, index) {
    if (Array.isArray(field.defaultValue)) {
      if (field.defaultValue[index] !== undefined) return deepClone(field.defaultValue[index]);
      if (field.defaultValue.length) return deepClone(field.defaultValue[field.defaultValue.length - 1]);
      return '';
    }
    return deepClone(field.defaultValue);
  };

  HybridNamelistInputEditor.prototype.shouldUseCompactArrayEditor = function (field) {
    var count = resolveEntries(field.entries, this.maxDom);
    var entries = String(field.entries || '').toLowerCase();
    if (entries === 'max_dom' || entries === 'max_domains') return false;
    return count > 8;
  };

  HybridNamelistInputEditor.prototype.formatCompactArrayValue = function (field, value) {
    var arr = Array.isArray(value) ? value : [value];
    return arr.map(formatValue).join(', ');
  };

  HybridNamelistInputEditor.prototype.parseScalarValueForField = function (field, rawValue) {
    if (rawValue === '' || rawValue === null || rawValue === undefined) return '';
    if (field.type === 'logical') return String(rawValue).toLowerCase() === 'true' || String(rawValue).toLowerCase() === '.true.';

    var raw = String(rawValue).trim();

    if (field.type === 'integer') {
      if (/^[+-]?\d+$/.test(raw)) return parseInt(raw, 10);
      return rawValue;
    }

    if (field.type === 'real') {
      if (isHtmlNumberSafe(raw)) return Number(raw);
      return rawValue;
    }

    return rawValue;
  };

  HybridNamelistInputEditor.prototype.parseCompactArrayValue = function (field, rawValue) {
    var count = resolveEntries(field.entries, this.maxDom);
    var normalized = String(rawValue == null ? '' : rawValue)
      .replace(/\r\n/g, '\n')
      .replace(/\n/g, ',');
    var parts = normalized.split(',').map(function (item) { return $.trim(item); }).filter(function (item) { return item !== ''; });
    var arr = [];
    for (var i = 0; i < parts.length && i < count; i++) {
      arr.push(this.parseScalarValueForField(field, parts[i]));
    }
    while (arr.length < count) {
      arr.push(this.getDefaultArrayEntry(field, arr.length));
    }
    return arr.slice(0, count);
  };

  HybridNamelistInputEditor.prototype.buildSeedValueForField = function (field) {
    var count = resolveEntries(field.entries, this.maxDom);
    if (count > 1) {
      var arr = [];
      for (var i = 0; i < count; i++) {
        if (Array.isArray(field.defaultValue)) {
          arr.push(field.defaultValue[i] !== undefined ? deepClone(field.defaultValue[i]) : deepClone(field.defaultValue[field.defaultValue.length - 1]));
        } else {
          arr.push(deepClone(field.defaultValue));
        }
      }
      return arr;
    }
    return Array.isArray(field.defaultValue) ? deepClone(field.defaultValue[0]) : deepClone(field.defaultValue);
  };

  HybridNamelistInputEditor.prototype.seedStateFromCatalogDefaults = function (maxDomOverride) {
    var self = this;
    this.resetSeedState(maxDomOverride);
    this.getSortedGroupNames().forEach(function (groupName) {
      self.state.expanded[groupName] = !!CORE_GROUPS[groupName];
      self.catalog.groups[groupName].forEach(function (field) {
        self.state.values[field.key] = self.buildSeedValueForField(field);
        self.state.enabled[field.key] = !!DEFAULT_ENABLED_FIELDS[field.key];
      });
    });
    this.state.hasSeededDefaults = true;
  };

  HybridNamelistInputEditor.prototype.performStartupSeeding = function (maxDomOverride) {
    var maxDom = Math.max(1, maxDomOverride || this.detectMaxDom());
    var engine = this.createRuntimeEngine(maxDom);
    if (engine) {
      this.maxDom = maxDom;
      engine.initialize(maxDom, this.readWpsMasteredValues());
      this.state.hasSeededDefaults = true;
      return;
    }
    this.seedStateFromCatalogDefaults(maxDomOverride);
    this.reconcileArrayLengths();
    this.applyWpsMasteredDomainValues();
  };

  HybridNamelistInputEditor.prototype.initializeState = function (maxDomOverride) {
    var maxDom = Math.max(1, maxDomOverride || this.detectMaxDom());
    var engine = this.createRuntimeEngine(maxDom);
    if (engine) {
      this.maxDom = maxDom;
      engine.seedDefaults(maxDom);
      this.state.hasSeededDefaults = true;
      return;
    }
    this.seedStateFromCatalogDefaults(maxDomOverride);
  };

  HybridNamelistInputEditor.prototype.captureModalState = function () {
    this._savedModalSnapshot = {
      selectedKey: this.state.selectedKey || null,
      activeKey: null,
      activeIndex: null
    };
    try {
      var active = document.activeElement ? $(document.activeElement) : $();
      if (active && active.length && active.data('key')) {
        this._savedModalSnapshot.activeKey = active.data('key');
        this._savedModalSnapshot.activeIndex = active.data('index');
      }
    } catch (err) {}
  };

  HybridNamelistInputEditor.prototype.restoreModalState = function () {
    var self = this;
    if (!this._savedModalSnapshot) return;
    if (this._savedModalSnapshot.selectedKey) this.state.selectedKey = this._savedModalSnapshot.selectedKey;
    setTimeout(function () {
      if (!self._savedModalSnapshot || !self._savedModalSnapshot.activeKey) return;
      var selector = '.namelist-input-field[data-key="' + self._savedModalSnapshot.activeKey + '"]';
      if (self._savedModalSnapshot.activeIndex !== undefined && self._savedModalSnapshot.activeIndex !== null && self._savedModalSnapshot.activeIndex !== '') {
        selector += '[data-index="' + self._savedModalSnapshot.activeIndex + '"]';
      }
      var target = self.$container.find(selector).first();
      if (target.length) target.trigger('focus');
    }, 80);
  };

  HybridNamelistInputEditor.prototype.populateJumps = function () {
    var self = this;
    var groupHtml = '<option value="">Jump to group</option>';
    orderGroups(Object.keys(this.catalog.groups)).forEach(function (groupName) {
      groupHtml += '<option value="' + esc(groupName) + '">&' + esc(groupName) + '</option>';
    });
    this.$groupJump.html(groupHtml);
    var vars = [];
    Object.keys(this.catalog.groups).forEach(function (groupName) {
      self.catalog.groups[groupName].forEach(function (field) {
        vars.push(field.key);
      });
    });
    vars.sort();
    var varHtml = '<option value="">Jump to variable</option>';
    vars.forEach(function (key) {
      varHtml += '<option value="' + esc(key) + '">' + esc(key) + '</option>';
    });
    this.$varJump.html(varHtml);
  };

  HybridNamelistInputEditor.prototype.open = async function () {
    try {
      await this._load();
      if (!this.state.hasSeededDefaults) {
        this.performStartupSeeding(this.detectMaxDom());
      } else {
        this.maxDom = this.detectMaxDom();
        this.reconcileArrayLengths();
        this.applyWpsMasteredDomainValues();
      }
      this.render();
      this.updateText();
      this.restoreModalState();
      this.$modal.modal('show');
    } catch (err) {
      console.error('Failed to open namelist.input editor', err);
      alert('Failed to open namelist.input editor. Try using the packaged files together, or serve the folder over localhost.');
    }
  };

  HybridNamelistInputEditor.prototype.reconcileArrayLengths = function () {
    var engine = this.createRuntimeEngine(this.maxDom);
    if (engine) {
      engine.reconcileArrayLengths();
      return;
    }
    var self = this;
    Object.keys(this.catalog.groups).forEach(function (groupName) {
      self.catalog.groups[groupName].forEach(function (field) {
        var count = resolveEntries(field.entries, self.maxDom);
        var current = self.state.values[field.key];
        if (count > 1) {
          if (!Array.isArray(current)) current = [current];
          while (current.length < count) current.push(current.length ? deepClone(current[current.length - 1]) : deepClone(field.defaultValue));
          current = current.slice(0, count);
          self.state.values[field.key] = current;
        }
      });
    });
  };

  HybridNamelistInputEditor.prototype.matchesSearch = function (field, query) {
    if (!query) return true;
    var hay = (field.group + ' ' + field.name + ' ' + (field.description || '') + ' ' + (field.subsectionLabel || '')).toLowerCase();
    return hay.indexOf(query) >= 0;
  };

  HybridNamelistInputEditor.prototype.setAllExpanded = function (expanded) {
    var self = this;
    Object.keys(this.state.expanded).forEach(function (groupName) { self.state.expanded[groupName] = expanded; });
    this.render();
  };


  function normalizeSearchTermForJump(value) {
    return $.trim(String(value == null ? '' : value).toLowerCase())
      .replace(/[\s\-.]+/g, '_')
      .replace(/_+/g, '_');
  }

  function selectorAttrEscapeForJump(value) {
    return String(value == null ? '' : value)
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"');
  }

  HybridNamelistInputEditor.prototype.ensureSearchHighlightStyle = function () {
    if (document.getElementById('namelist-input-search-highlight-style')) return;

    var style = document.createElement('style');
    style.id = 'namelist-input-search-highlight-style';
    style.textContent = [
      '.namelist-input-variable.namelist-input-search-hit {',
      '  background-color: #dbeafe !important;',
      '  border: 1px solid #60a5fa !important;',
      '  box-shadow: 0 0 0 0.12rem rgba(96, 165, 250, 0.38) !important;',
      '}',
      '.namelist-input-variable.namelist-input-search-active {',
      '  background-color: #ede9fe !important;',
      '  border: 2px solid #8b5cf6 !important;',
      '  box-shadow: 0 0 0 0.18rem rgba(139, 92, 246, 0.42) !important;',
      '}'
    ].join('\n');


    style.textContent += '\n' +
      '.namelist-input-variable.compatibility-bad,' +
      '.namelist-input-variable.compatibility-bad.namelist-input-search-highlight,' +
      '.namelist-input-variable.compatibility-bad.namelist-input-search-highlight-active {' +
      ' background: #fee2e2 !important;' +
      ' border-color: #ef4444 !important;' +
      ' box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.28) !important;' +
      '}' +
      '.namelist-input-variable.compatibility-maybe,' +
      '.namelist-input-variable.compatibility-maybe.namelist-input-search-highlight,' +
      '.namelist-input-variable.compatibility-maybe.namelist-input-search-highlight-active {' +
      ' background: #fef3c7 !important;' +
      ' border-color: #f59e0b !important;' +
      ' box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.25) !important;' +
      '}' +
      '.namelist-input-variable.compatibility-bad.namelist-input-search-highlight-active,' +
      '.namelist-input-variable.compatibility-maybe.namelist-input-search-highlight-active {' +
      ' outline: 2px solid #8b5cf6;' +
      ' outline-offset: -2px;' +
      '}';

    document.head.appendChild(style);
  };

  HybridNamelistInputEditor.prototype.isExactSearchResult = function (field, query) {
    var q = normalizeSearchTermForJump(query);
    if (!q) return false;

    return normalizeSearchTermForJump(field.name) === q ||
      normalizeSearchTermForJump(field.key) === q ||
      normalizeSearchTermForJump(field.group + '.' + field.name) === q;
  };

  HybridNamelistInputEditor.prototype.focusSearchResult = function () {
    var self = this;
    var query = $.trim(this.$search.val());
    var matches = [];
    var exactMatches = [];

    this.ensureSearchHighlightStyle();

    this.$container
      .find('.namelist-input-variable')
      .removeClass('namelist-input-search-hit namelist-input-search-active');

    if (!query) return;

    Object.keys(this.catalog.groups).forEach(function (groupName) {
      self.catalog.groups[groupName].forEach(function (field) {
        if (!self.matchesSearch(field, query)) return;

        matches.push(field.key);

        if (self.isExactSearchResult(field, query)) {
          exactMatches.push(field.key);
        }
      });
    });

    matches.forEach(function (key) {
      self.$container
        .find('.namelist-input-variable[data-key="' + selectorAttrEscapeForJump(key) + '"]')
        .addClass('namelist-input-search-hit');
    });

    var targetKey = exactMatches[0] || matches[0];
    if (!targetKey) return;

    var $target = this.$container
      .find('.namelist-input-variable[data-key="' + selectorAttrEscapeForJump(targetKey) + '"]')
      .first();

    if (!$target.length) return;

    $target.parents('details').each(function () {
      this.open = true;
    });

    $target
      .removeClass('namelist-input-search-hit')
      .addClass('namelist-input-search-active');

    if ($target[0] && $target[0].scrollIntoView) {
      $target[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  HybridNamelistInputEditor.prototype.setVisibleEnabled = function (enabled) {
    var self = this;
    var query = $.trim(this.$search.val()).toLowerCase();
    Object.keys(this.catalog.groups).forEach(function (groupName) {
      self.catalog.groups[groupName].forEach(function (field) {
        if (self.matchesSearch(field, query)) self.state.enabled[field.key] = enabled;
      });
    });
    this.render();
    this.updateText();
  };

  HybridNamelistInputEditor.prototype.scrollEditorTo = function (target) {
    var body = this.$modal.find('.modal-body').get(0);
    if (!body) return;
    var top = target === 'bottom' ? Math.max(0, body.scrollHeight - body.clientHeight) : 0;
    if (typeof body.scrollTo === 'function') {
      body.scrollTo({ top: top, behavior: 'smooth' });
    } else {
      body.scrollTop = top;
    }
  };

  HybridNamelistInputEditor.prototype.jumpToGroup = function (groupName) {
    if (!groupName) return;
    this.state.expanded[groupName] = true;
    this.render();
    var el = document.getElementById('nml-group-' + groupName);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  HybridNamelistInputEditor.prototype.jumpToVariable = function (key) {
    if (!key) return;
    var parts = key.split('.');
    this.state.expanded[parts[0]] = true;
    this.render();
    var el = document.getElementById('nml-var-' + key.replace(/\./g, '-'));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (el) {
      el.classList.add('namelist-input-variable-highlight');
      setTimeout(function () { el.classList.remove('namelist-input-variable-highlight'); }, 1400);
    }
  };

  HybridNamelistInputEditor.prototype.getVariableStateMap = function () {
    var map = {};
    var self = this;
    Object.keys(this.catalog.groups).forEach(function (groupName) {
      self.catalog.groups[groupName].forEach(function (field) {
        if (self.state.enabled[field.key]) map[field.name] = self.state.values[field.key];
      });
    });
    return map;
  };

  HybridNamelistInputEditor.prototype.isWrf48PlusOnlyField = function (field) {
    var support = field && field.versionSupport ? field.versionSupport : null;
    if (!support) return false;

    if (support.status === 'new_48x') return true;

    var presentIn = Array.isArray(support.presentIn) ? support.presentIn : [];
    return presentIn.length > 0 &&
      presentIn.indexOf('4.7.1') === -1 &&
      presentIn.some(function (version) {
        return /^4\.(8|9)\b/.test(String(version)) || /^([5-9]|\d{2,})\./.test(String(version));
      });
  };

  HybridNamelistInputEditor.prototype.evaluateFieldCompatibility = function (field) {
    return { status: '', messages: [] };
  };


  HybridNamelistInputEditor.prototype.getSortedGroupNames = function () {
    var self = this;
    return Object.keys(this.catalog.groups).slice().sort(function (a, b) {
      var aCore = CORE_GROUPS[a] ? 0 : 1;
      var bCore = CORE_GROUPS[b] ? 0 : 1;
      if (aCore !== bCore) return aCore - bCore;
      var aExplicit = Object.prototype.hasOwnProperty.call(EXPLICIT_GROUP_ORDER, a) ? EXPLICIT_GROUP_ORDER[a] : 999999;
      var bExplicit = Object.prototype.hasOwnProperty.call(EXPLICIT_GROUP_ORDER, b) ? EXPLICIT_GROUP_ORDER[b] : 999999;
      if (aExplicit !== bExplicit) return aExplicit - bExplicit;
      return a.localeCompare(b);
    });
  };

  HybridNamelistInputEditor.prototype.sortFieldsForRender = function (fields) {
    var self = this;
    return fields.slice().sort(function (a, b) {
      var aSubOrder = a.subsectionOrder || 0;
      var bSubOrder = b.subsectionOrder || 0;
      if (aSubOrder !== bSubOrder) return aSubOrder - bSubOrder;

      var aEnabled = self.state.enabled[a.key] ? 0 : 1;
      var bEnabled = self.state.enabled[b.key] ? 0 : 1;
      if (aEnabled !== bEnabled) return aEnabled - bEnabled;

      var aCore = DEFAULT_ENABLED_FIELDS[a.key] ? 0 : 1;
      var bCore = DEFAULT_ENABLED_FIELDS[b.key] ? 0 : 1;
      if (aCore !== bCore) return aCore - bCore;

      var aExplicit = Object.prototype.hasOwnProperty.call(EXPLICIT_FIELD_ORDER, a.key) ? EXPLICIT_FIELD_ORDER[a.key] : 999999;
      var bExplicit = Object.prototype.hasOwnProperty.call(EXPLICIT_FIELD_ORDER, b.key) ? EXPLICIT_FIELD_ORDER[b.key] : 999999;
      if (aExplicit !== bExplicit) return aExplicit - bExplicit;

      var aSub = (a.subsectionLabel || '');
      var bSub = (b.subsectionLabel || '');
      if (aSub !== bSub) return aSub.localeCompare(bSub);

      return a.name.localeCompare(b.name);
    });
  };

  HybridNamelistInputEditor.prototype.render = function () {
    if (!this.catalog) return;
    var self = this;
    var query = $.trim(this.$search.val()).toLowerCase();
    var groupOrder = orderGroups(Object.keys(this.catalog.groups));
    var html = '';
    html += this.renderCompatibilityPanel();
    var enabledCount = 0;
    var totalCount = 0;
    groupOrder.forEach(function (groupName) {
      var fields = self.catalog.groups[groupName];
      var visibleFields = self.sortFieldsForRender(fields.filter(function (field) {
        totalCount += 1;
        if (self.state.enabled[field.key]) enabledCount += 1;
        if (self.hideUnsetVars && !self.state.enabled[field.key] && !query) return false;
        return self.matchesSearch(field, query) || self.state.enabled[field.key];
      }));
      if (self.hideEmptyGroups && visibleFields.length === 0) return;
      var expanded = self.state.expanded[groupName] || !!query;
      html += '<div class="namelist-input-group' + (CORE_GROUPS[groupName] ? ' namelist-input-group-core' : '') + '" id="nml-group-' + esc(groupName) + '">';
      html += '<div class="namelist-input-group-header">';
      html += '<button type="button" class="btn btn-link btn-sm p-0 mr-2 namelist-input-group-toggle" data-group="' + esc(groupName) + '"><i class="fas ' + (expanded ? 'fa-chevron-down' : 'fa-chevron-right') + '"></i></button>';
      html += '<h5 class="mb-0">&' + esc(groupName) + '</h5>';
      html += '<span class="badge badge-light ml-2">' + visibleFields.length + '</span>';
      if (CORE_GROUPS[groupName]) html += '<span class="badge badge-primary ml-2">core</span>';
      html += '</div>';
      html += '<div class="namelist-input-variables" style="display:' + (expanded ? 'block' : 'none') + '">';
      var currentSub = null;
      visibleFields.forEach(function (field) {
        if (field.subsectionLabel) {
          if (field.subsectionLabel !== currentSub) {
            if (currentSub !== null) html += '</div></details>';
            currentSub = field.subsectionLabel;
            var subKey = self.getSubsectionStateKey(field);
            var isOpen = self.state.subsectionExpanded[subKey];
            if (typeof isOpen === 'undefined') isOpen = true;
            html += '<details class="namelist-input-subsection" data-subsection-key="' + esc(subKey) + '" ' + (isOpen ? 'open' : '') + '><summary class="namelist-input-subsection-title">' + esc(field.subsectionLabel) + '</summary><div class="namelist-input-subsection-body">';
          }
        } else if (currentSub !== null) {
          html += '</div></details>';
          currentSub = null;
        }
        html += self.renderField(field);
      });
      if (currentSub !== null) html += '</div></details>';
      html += '</div></div>';
    });
    this.$container.html(html);
    this.$summary.text(enabledCount + ' enabled / ' + totalCount + ' total');
    this.bindRenderedEvents();
    this.updateDocPanel(this.state.selectedKey);
  };

  HybridNamelistInputEditor.prototype.renderField = function (field) {
    var enabled = !!this.state.enabled[field.key];
    var compat = this.evaluateFieldCompatibility(field);
    var engineIssues = this.showCompatibility ? this.getIssuesForField(field) : [];
    var cls = 'namelist-input-variable';
    if (!enabled) cls += ' namelist-input-variable-unset';
    if (compat.status) cls += ' compatibility-' + compat.status;
    if (engineIssues.some(function (i) { return i.type === 'error'; })) cls += ' compatibility-bad';
    else if (engineIssues.some(function (i) { return i.type === 'warning'; })) cls += ' compatibility-maybe';
    var html = '<div class="' + cls + '" id="nml-var-' + esc(field.key.replace(/\./g, '-')) + '" data-key="' + esc(field.key) + '">';
    html += '<div class="namelist-input-variable-row d-flex flex-wrap align-items-start">';
    html += '<div class="mr-2 mt-1"><input type="checkbox" class="namelist-input-toggle" data-key="' + esc(field.key) + '" ' + (enabled ? 'checked' : '') + '></div>';
    html += '<div class="namelist-input-variable-name flex-grow-1" data-key="' + esc(field.key) + '"><strong>' + esc(field.name) + '</strong>';
    if (this.state.suggestedFields && this.state.suggestedFields[field.key]) html += ' <span class="badge badge-info">suggested</span>';
    if (this.isWrf48PlusOnlyField(field)) html += ' <span class="badge badge-warning" title="Available in WRF 4.8.0 and newer">4.8.0+</span>';
    var arwCtxForBadges = this.getArwContextForField(field);
    if (arwCtxForBadges && arwCtxForBadges.badges && arwCtxForBadges.badges.length) {
      arwCtxForBadges.badges.slice(0, 3).forEach(function (badge) { html += ' <span class="badge badge-light">' + esc(badge) + '</span>'; });
    }
    html += '<div class="small text-muted">' + esc(field.entries) + ' · ' + esc(field.type) + '</div>';
    html += '</div>';
    html += '<div class="namelist-input-variable-value">' + this.renderFieldInput(field) + '</div>';
    html += '</div>';
    html += '<div class="namelist-input-variable-description">' + esc(field.description || 'No description available.') + '</div>';
    var suggestionNote = this.getFieldSuggestionNote(field.key);
    if (suggestionNote) html += '<div class="small text-info namelist-input-variable-suggestion"><strong>Suggested:</strong> ' + esc(suggestionNote) + '</div>';
    if (field.key === 'domains.time_step' && !suggestionNote) html += '<div class="small text-muted namelist-input-variable-suggestion">Suggested starting point: time_step ≈ 6 × d01 dx_km. This is informational and user-editable.</div>';
    if ((field.key === 'time_control.run_days' || field.key === 'time_control.run_hours' || field.key === 'time_control.run_minutes' || field.key === 'time_control.run_seconds') && !suggestionNote) html += '<div class="small text-muted namelist-input-variable-suggestion">Suggested from namelist.wps start_date/end_date duration when available. Editing any run_* value preserves manual runtime settings.</div>';
    if (field.key === 'physics.radt' && !suggestionNote) html += '<div class="small text-muted namelist-input-variable-suggestion">Suggested from innermost active dx using radt ≈ 1 minute per km. The same value is applied to all active domains and remains user-editable.</div>';
    if (compat.messages.length) {
      html += '<div class="namelist-input-variable-compatibility small text-muted">' + esc(compat.messages.join(' | ')) + '</div>';
    }
    html += this.renderEngineIssuesHtml(engineIssues);
    html += '</div>';
    return html;
  };

  HybridNamelistInputEditor.prototype.renderFieldInput = function (field) {
    var count = resolveEntries(field.entries, this.maxDom);
    var value = this.state.values[field.key];
    if (count > 1) {
      if (this.shouldUseCompactArrayEditor(field)) {
        var compactValue = this.formatCompactArrayValue(field, value);
        var helper = count + ' entries · compact editor';
        return '<div class="namelist-input-variable-array-compact">' +
          '<textarea class="form-control form-control-sm namelist-input-field-array" data-key="' + esc(field.key) + '" rows="3">' + esc(compactValue) + '</textarea>' +
          '<div class="small text-muted mt-1">' + esc(helper) + '</div>' +
          '</div>';
      }
      var html = '<div class="namelist-input-variable-multivalue">';
      var prefix = this.getEntryLabelPrefix(field.entries);
      for (var i = 0; i < count; i++) {
        var label = prefix ? (prefix + String(i + 1).padStart(2, '0')) : String(i + 1).padStart(2, '0');
        html += '<div class="namelist-input-variable-multivalue-row"><div class="small text-muted mr-2">' + esc(label) + '</div>' + this.renderSingleInput(field, value[i], i) + '</div>';
      }
      html += '</div>';
      return html;
    }
    return this.renderSingleInput(field, value, null);
  };

  HybridNamelistInputEditor.prototype.renderSingleInput = function (field, value, index) {
    var dataIndex = index == null ? '' : ' data-index="' + index + '"';
    var isBlankValue = value === null || value === undefined || String(value) === '';
    if (field.type === 'logical') {
      return '<select class="form-control form-control-sm namelist-input-field namelist-input-logical-select" data-key="' + esc(field.key) + '"' + dataIndex + '>' +
        '<option value="" ' + (isBlankValue ? 'selected' : '') + '></option>' +
        '<option value="true" ' + (value === true ? 'selected' : '') + '>.true.</option>' +
        '<option value="false" ' + (value === false ? 'selected' : '') + '>.false.</option>' +
        '</select>';
    }
    if (field.type === 'selection') {
      var html = '<select class="form-control form-control-sm namelist-input-field" data-key="' + esc(field.key) + '"' + dataIndex + '>';
      html += '<option value="" ' + (isBlankValue ? 'selected' : '') + '></option>';
      Object.keys(field.enumValues || {}).forEach(function (opt) {
        html += '<option value="' + esc(opt) + '" ' + (String(value) === String(opt) ? 'selected' : '') + '>' + esc(opt + ' — ' + field.enumValues[opt]) + '</option>';
      });
      html += '</select>';
      return html;
    }
    var numericField = field.type === 'integer' || field.type === 'real';
    var useNumberInput = numericField && isHtmlNumberSafe(value);
    var typeAttr = useNumberInput ? 'number' : 'text';
    var stepAttr = useNumberInput ? (field.type === 'integer' ? ' step="1"' : ' step="any"') : '';
    var fallbackClass = numericField && !useNumberInput ? ' namelist-input-numeric-text-fallback' : '';
    return '<input class="form-control form-control-sm namelist-input-field' + fallbackClass + '" data-key="' + esc(field.key) + '"' + dataIndex + ' type="' + typeAttr + '" value="' + esc(value == null ? '' : value) + '"' + stepAttr + '>';
  };

  HybridNamelistInputEditor.prototype.bindRenderedEvents = function () {
    var self = this;
    this.$container.find('.namelist-input-group-toggle').off('click').on('click', function () {
      var group = $(this).data('group');
      self.state.expanded[group] = !self.state.expanded[group];
      self.render();
    });
    this.$container.find('.namelist-input-subsection').off('toggle').on('toggle', function () {
      var key = $(this).data('subsection-key');
      if (key) self.state.subsectionExpanded[key] = $(this).prop('open');
    });
    this.bindCompatibilityPanelEvents();
    this.$container.find('.namelist-input-toggle').off('change').on('change', function () {
      var key = $(this).data('key');
      self.state.enabled[key] = this.checked;
      self.updateText();
      self.render();
    });
    this.$container.find('.namelist-input-field').off('change input').on('change input', function () {
      var key = $(this).data('key');
      var index = $(this).data('index');
      var field = self.findFieldByKey(key);
      var newVal = self.parseScalarValueForField(field, $(this).val());
      if (index === undefined) self.state.values[key] = newVal;
      else self.state.values[key][parseInt(index, 10)] = newVal;
      self.state.enabled[key] = true;
      self.markFieldUserEdited(key);
      self.updateText();
      self.refreshCompatibilityDisplay();
    });
    this.$container.find('.namelist-input-field-array').off('change input').on('change input', function () {
      var key = $(this).data('key');
      var field = self.findFieldByKey(key);
      self.state.values[key] = self.parseCompactArrayValue(field, $(this).val());
      self.state.enabled[key] = true;
      self.markFieldUserEdited(key);
      self.updateText();
      self.refreshCompatibilityDisplay();
    });
    this.$container.find('.namelist-input-variable-name').off('click').on('click', function () {
      self.state.selectedKey = $(this).data('key');
      self.updateDocPanel(self.state.selectedKey);
      $('#tab-namelist-input-info').tab('show');
    });
    this.$container.find('.namelist-input-apply-fix').off('click').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      self.applyCompatibilityFix($(this).data('issue-id'));
    });
  };

  HybridNamelistInputEditor.prototype.findFieldByKey = function (key) {
    var parts = key.split('.');
    var arr = this.catalog.groups[parts[0]] || [];
    for (var i = 0; i < arr.length; i++) if (arr[i].key === key) return arr[i];
    return null;
  };


  HybridNamelistInputEditor.prototype.getArwContextForField = function (field) {
    var ctx = this.arwContext || {};
    var topics = ctx.topics || {};
    var fieldMap = ctx.fields || {};
    var groupMap = ctx.groups || {};
    var pieces = [];
    var seenTopicIds = {};
    function addPiece(piece, source) {
      if (!piece) return;
      var copy = {
        source: source || '',
        summary: piece.summary || '',
        topicIds: piece.topicIds || [],
        related: piece.related || []
      };
      pieces.push(copy);
      copy.topicIds.forEach(function (id) { seenTopicIds[id] = true; });
    }
    addPiece(fieldMap[field.key], 'field');
    Object.keys(fieldMap).forEach(function (pattern) {
      if (pattern.indexOf('*') < 0) return;
      var rx = new RegExp('^' + pattern.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\\\*/g, '.*') + '$', 'i');
      if (rx.test(field.key)) addPiece(fieldMap[pattern], 'field-pattern');
    });
    addPiece(groupMap[field.group], 'group');
    Object.keys(groupMap).forEach(function (pattern) {
      if (pattern.indexOf('*') < 0) return;
      var rx = new RegExp('^' + pattern.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\\\*/g, '.*') + '$', 'i');
      if (rx.test(field.group)) addPiece(groupMap[pattern], 'group-pattern');
    });
    var topicList = Object.keys(seenTopicIds).map(function (id) {
      var t = topics[id] || {};
      return {
        id: id,
        label: t.label || id,
        chapter: t.chapter || '',
        pageHint: t.pageHint || '',
        summary: t.summary || '',
        badges: t.badges || []
      };
    });
    var badges = [];
    topicList.forEach(function (t) {
      (t.badges || []).forEach(function (b) {
        if (badges.indexOf(b) < 0) badges.push(b);
      });
    });
    return { pieces: pieces, topics: topicList, badges: badges, metadata: ctx.metadata || {} };
  };

  HybridNamelistInputEditor.prototype.renderArwContextBlock = function (field) {
    var context = this.getArwContextForField(field);
    if (!context || (!context.pieces.length && !context.topics.length)) return '';
    var html = '<div class="mb-3 p-2 border rounded bg-white">';
    html += '<div class="d-flex flex-wrap align-items-center mb-1"><strong>ARW Technical Note scientific context</strong>';
    html += '<span class="badge badge-light ml-2">reference-only</span></div>'; 
    if (context.badges.length) {
      html += '<div class="mb-2">';
      context.badges.slice(0, 8).forEach(function (badge) {
        html += '<span class="badge badge-info mr-1 mb-1">' + esc(badge) + '</span>';
      });
      html += '</div>';
    }
    context.pieces.forEach(function (piece) {
      if (piece.summary) html += '<div class="small mb-1">' + esc(piece.summary) + '</div>';
      if (piece.related && piece.related.length) {
        html += '<div class="small text-muted">Related: ' + esc(piece.related.join(', ')) + '</div>';
      }
    });
    if (context.topics.length) {
      html += '<div class="small text-muted mt-2">';
      html += context.topics.map(function (topic) {
        var label = topic.label;
        if (topic.chapter) label += ' (Chapter ' + topic.chapter + ')';
        return label;
      }).join(' · ');
      html += '</div>';
    }
    html += '<div class="small mt-2"><a href="docs/references/v4_technote.pdf" target="_blank" rel="noopener noreferrer">Open ARW Technical Note v4 PDF</a></div>';
    html += '</div>';
    return html;
  };

  HybridNamelistInputEditor.prototype.updateDocPanel = function (key) {
    if (!key) {
      this.$doc.html('<div class="text-muted">Select a variable in the editor to see merged documentation, defaults, sources, and option metadata here.</div>');
      return;
    }
    var field = this.findFieldByKey(key);
    if (!field) return;
    var compat = this.evaluateFieldCompatibility(field);
    var html = '<h5 class="mb-1">' + esc(field.key) + '</h5>';
    html += '<div class="small text-muted mb-2">Type: ' + esc(field.type) + ' · Entries: ' + esc(field.entries) + '</div>';
    html += '<div class="mb-2"><strong>Description</strong><div>' + esc(field.description || 'No description available.') + '</div></div>';
    html += this.renderArwContextBlock(field);
    var defaultLabel = field.semantics && field.semantics.requiresUserValue ? 'User selection required' : formatValue(field.defaultValue);
    html += '<div class="mb-2"><strong>Default</strong><div class="font-namelist">' + esc(defaultLabel) + '</div></div>';
    if (field.key === 'domains.time_step') {
      var tsNote = this.getFieldSuggestionNote(field.key) || 'Suggested starting point: time_step ≈ 6 × d01 dx_km. The editor only fills this when blank and does not lock the value.';
      html += '<div class="mb-2"><strong>Suggested time step</strong><div class="small text-muted">' + esc(tsNote) + '</div></div>';
    }
    if (field.key === 'time_control.run_days' || field.key === 'time_control.run_hours' || field.key === 'time_control.run_minutes' || field.key === 'time_control.run_seconds') {
      var runNote = this.getFieldSuggestionNote(field.key) || 'Suggested runtime is calculated from namelist.wps start_date/end_date when available. Editing any run_* field stops automatic updates for the run_* group.';
      html += '<div class="mb-2"><strong>Suggested runtime</strong><div class="small text-muted">' + esc(runNote) + '</div></div>';
    }
    if (field.key === 'physics.radt') {
      var radtNote = this.getFieldSuggestionNote(field.key) || 'Suggested radiation call interval is calculated from the innermost active dx using radt ≈ 1 minute per km. The value is applied across all active domains and can be changed by the user.';
      html += '<div class="mb-2"><strong>Suggested radiation timestep</strong><div class="small text-muted">' + esc(radtNote) + '</div></div>';
    }
    if (field.subsectionLabel) html += '<div class="mb-2"><strong>Subsection</strong><div>' + esc(field.subsectionLabel) + '</div></div>';
    html += '<div class="mb-2"><strong>Sources</strong><div class="small text-muted">' + esc(Object.keys(field.sources).filter(function (name) { return field.sources[name] && field.sources[name].length; }).join(', ') || 'registry') + '</div></div>';
    if (compat.messages.length) html += '<div class="mb-2"><strong>Compatibility</strong><div class="small">' + esc(compat.messages.join(' | ')) + '</div></div>';
    var engineIssues = this.getIssuesForField(field);
    if (engineIssues.length) {
      html += '<div class="mb-2"><strong>Runtime engine issues</strong><div class="small">';
      engineIssues.forEach(function (issue) { html += '<div><strong>' + esc(issue.id) + ':</strong> ' + esc(issue.message) + '</div>'; });
      html += '</div></div>';
    }
    this.$doc.html(html);
  };

  HybridNamelistInputEditor.prototype.isObsprocGroup = function (groupName) {
    return /^obsproc_record\d+$/i.test(groupName || '');
  };

  HybridNamelistInputEditor.prototype.exportGroupName = function (groupName, exportKind) {
    if (exportKind === 'obsproc' && this.isObsprocGroup(groupName)) {
      return String(groupName).replace(/^obsproc_/i, '');
    }
    return groupName;
  };

  HybridNamelistInputEditor.prototype.shouldIncludeGroupForExport = function (groupName, exportKind) {
    var isObsproc = this.isObsprocGroup(groupName);
    if (exportKind === 'obsproc') return isObsproc;
    return !isObsproc;
  };

  HybridNamelistInputEditor.prototype.exportFilenameForKind = function (exportKind) {
    return exportKind === 'obsproc' ? 'namelist.obsproc' : 'namelist.input';
  };

  HybridNamelistInputEditor.prototype.exportTitleForKind = function (exportKind) {
    return exportKind === 'obsproc' ? 'namelist.obsproc' : 'namelist.input';
  };

  HybridNamelistInputEditor.prototype.buildNamelistText = function (exportKind) {
    exportKind = exportKind || 'input';
    var out = [];
    var self = this;
    if (!this.catalog || !this.catalog.groups) return '';
    orderGroups(Object.keys(this.catalog.groups)).forEach(function (groupName) {
      if (!self.shouldIncludeGroupForExport(groupName, exportKind)) return;
      var lines = [];
      var orderedFields = self.sortFieldsForRender((self.catalog.groups[groupName] || []).filter(function (field) {
        return !!self.state.enabled[field.key];
      }));
      orderedFields.forEach(function (field) {
        var value = self.state.values[field.key];
        if (Array.isArray(value)) {
          if (value.length === 0 || hasAnyBlankArrayEntry(value)) return;
          var arrayText = value.map(formatValue).join(', ');
          if (arrayText === '') return;
          lines.push(' ' + field.name + ' = ' + arrayText + ',');
          return;
        }
        var text = formatValue(value);
        if (text === '') return;
        lines.push(' ' + field.name + ' = ' + text + ',');
      });
      if (lines.length) {
        out.push('&' + self.exportGroupName(groupName, exportKind));
        Array.prototype.push.apply(out, lines);
        out.push('/');
        out.push('');
      }
    });
    return out.join('\n');
  };

  HybridNamelistInputEditor.prototype.downloadTextAs = function (text, filename) {
    var blob = new Blob([text || ''], { type: 'text/plain;charset=utf-8' });
    if (global.saveAs) {
      global.saveAs(blob, filename);
      return;
    }
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    setTimeout(function () {
      URL.revokeObjectURL(link.href);
      link.remove();
    }, 0);
  };

  HybridNamelistInputEditor.prototype.getMissingRequiredFields = function (exportKind) {
    exportKind = exportKind || 'input';
    var missing = [];
    var self = this;
    if (!this.catalog || !this.catalog.groups) return missing;
    orderGroups(Object.keys(this.catalog.groups)).forEach(function (groupName) {
      if (!self.shouldIncludeGroupForExport(groupName, exportKind)) return;
      (self.catalog.groups[groupName] || []).forEach(function (field) {
        if (!self.state.enabled[field.key]) return;
        var semantics = field.semantics || {};
        var isRequired = semantics.requiresUserValue === true || semantics.defaultSemantics === 'user_required_choice';
        if (!isRequired) return;
        var value = self.state.values[field.key];
        if (Array.isArray(value)) {
          var blanks = [];
          for (var i = 0; i < value.length; i++) {
            if (isBlankNamelistValue(value[i])) blanks.push('d' + String(i + 1).padStart(2, '0'));
          }
          if (blanks.length) missing.push({ key: field.key, name: field.name, blanks: blanks });
        } else if (isBlankNamelistValue(value)) {
          missing.push({ key: field.key, name: field.name, blanks: [] });
        }
      });
    });
    return missing;
  };

  HybridNamelistInputEditor.prototype.formatMissingRequiredWarning = function (missing, exportKind) {
    var shown = missing.slice(0, 16).map(function (item) {
      return '- ' + item.key + (item.blanks && item.blanks.length ? ' (' + item.blanks.join(', ') + ')' : '');
    });
    if (missing.length > shown.length) shown.push('- ...and ' + (missing.length - shown.length) + ' more');
    var exportName = this.exportTitleForKind(exportKind || 'input');
    return 'Required ' + exportName + ' selections are still blank.\n\n' +
      shown.join('\n') +
      '\n\nContinue export anyway?\n\nChoose Cancel to return to the editor and fill the missing values.';
  };


  HybridNamelistInputEditor.prototype.updateText = function (exportKind) {
    exportKind = exportKind || 'input';
    this.$text.val(this.buildNamelistText(exportKind));
    this.$summary.text(this.countEnabled() + ' enabled / ' + this.countTotal() + ' total');
  };

  HybridNamelistInputEditor.prototype.countEnabled = function () {
    var n = 0; var self = this;
    Object.keys(this.state.enabled).forEach(function (k) { if (self.state.enabled[k]) n++; });
    return n;
  };
  HybridNamelistInputEditor.prototype.countTotal = function () {
    return Object.keys(this.state.enabled).length;
  };

  HybridNamelistInputEditor.prototype.copy = function (exportKind) {
    exportKind = exportKind || 'input';
    navigator.clipboard.writeText(this.buildNamelistText(exportKind) || '');
  };

  HybridNamelistInputEditor.prototype.downloadCurrentText = function (exportKind) {
    exportKind = exportKind || this._saveDialogExportKind || 'input';
    var text = this.buildNamelistText(exportKind);
    this.downloadTextAs(text, this.exportFilenameForKind(exportKind));
  };

  HybridNamelistInputEditor.prototype.save = function (exportKind) {
    exportKind = exportKind || 'input';
    var missing = this.getMissingRequiredFields ? this.getMissingRequiredFields(exportKind) : [];
    if (missing.length && !global.confirm(this.formatMissingRequiredWarning(missing, exportKind))) {
      return;
    }
    var text = this.buildNamelistText(exportKind);
    this._saveDialogExportKind = exportKind;
    this._saveDialogFilename = this.exportFilenameForKind(exportKind);
    this._saveDialogTextValue = text;
    if (this.$saveDialogTitle && this.$saveDialogTitle.length) {
      this.$saveDialogTitle.text(this.exportTitleForKind(exportKind));
    }
    if (this.$saveDialogText && this.$saveDialogText.length) {
      this.$saveDialogText.val(text);
    }
    if (this.$saveDialogDownload && this.$saveDialogDownload.length) {
      this.$saveDialogDownload.attr('title', 'Download ' + this.exportFilenameForKind(exportKind));
    }
    if (this.$saveDialogCopy && this.$saveDialogCopy.length) {
      this.$saveDialogCopy.attr('title', 'Copy ' + this.exportFilenameForKind(exportKind) + ' text to the clipboard');
    }
    if (this.$saveDialog && this.$saveDialog.length && typeof this.$saveDialog.modal === 'function') {
      this.captureModalState();
      this._returnToEditorAfterSaveDialog = !!(this.$modal && this.$modal.length && this.$modal.hasClass('show'));
      if (this._returnToEditorAfterSaveDialog) {
        this._saveDialogQueued = true;
        this.$modal.modal('hide');
      } else {
        this.$saveDialog.modal('show');
      }
      return;
    }
    this.downloadTextAs(text, this.exportFilenameForKind(exportKind));
  };

  HybridNamelistInputEditor.prototype.saveAll = function () {
    var inputMissing = this.getMissingRequiredFields ? this.getMissingRequiredFields('input') : [];
    if (inputMissing.length && !global.confirm(this.formatMissingRequiredWarning(inputMissing, 'input'))) {
      return;
    }
    var inputText = this.buildNamelistText('input');
    var obsprocText = this.buildNamelistText('obsproc');
    this.downloadTextAs(inputText, 'namelist.input');
    if (obsprocText && obsprocText.trim()) {
      this.downloadTextAs(obsprocText, 'namelist.obsproc');
    } else {
      global.alert('namelist.input was downloaded. No enabled OBSPROC fields were found, so namelist.obsproc was not generated.');
    }
  };

  $(function () {
    if (!$('#button-namelist-input').length) return;
    global.HybridNamelistInputEditorInstance = new HybridNamelistInputEditor({ jsonBaseUrl: 'data/raw', runtimeBaseUrl: 'data/runtime' });
  });

})(window, window.jQuery);
