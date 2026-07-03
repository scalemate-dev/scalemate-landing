// ── Phase 1 ──
export const EVENTS = {
  PAGE_VIEWED: 'page_viewed',
  CTA_CLICKED: 'cta_clicked',
  DEMO_FORM_VIEWED: 'demo_form_viewed',
  DEMO_FORM_STARTED: 'demo_form_started',
  DEMO_FORM_SUBMITTED: 'demo_form_submitted',
  DEMO_FORM_ERRORED: 'demo_form_errored',

  // ── Phase 2 ──
  UPLOADER_FILES_SELECTED: 'uploader_files_selected',
  UPLOADER_PLATFORM_CONNECT_STARTED: 'uploader_platform_connect_started',
  UPLOADER_PLATFORM_CONNECTED: 'uploader_platform_connected',
  UPLOADER_ACCOUNT_SELECTED: 'uploader_account_selected',
  UPLOADER_UPLOAD_STARTED: 'uploader_upload_started',
  UPLOADER_UPLOAD_COMPLETED: 'uploader_upload_completed',
  UPLOADER_SIGNUP_CTA_CLICKED: 'uploader_signup_cta_clicked',
  UPLOADER_ERROR_OCCURRED: 'uploader_error_occurred',
  AI_WAITLIST_FORM_VIEWED: 'ai_waitlist_form_viewed',
  AI_WAITLIST_FORM_SUBMITTED: 'ai_waitlist_form_submitted',
  AI_WAITLIST_FORM_ERRORED: 'ai_waitlist_form_errored',
  OUTBOUND_LINK_CLICKED: 'outbound_link_clicked',

  // ── Phase 3 ──
  ROI_CALCULATOR_INTERACTED: 'roi_calculator_interacted',
  ROI_CALCULATOR_RESULT_VIEWED: 'roi_calculator_result_viewed',
  ROI_CALCULATOR_DEMO_CLICKED: 'roi_calculator_demo_clicked',
  FAQ_ITEM_TOGGLED: 'faq_item_toggled',
  ROLE_TAB_SELECTED: 'role_tab_selected',
  SCROLL_DEPTH_REACHED: 'scroll_depth_reached',
  CASE_STUDY_CARD_CLICKED: 'case_study_card_clicked',
  NAV_ITEM_CLICKED: 'nav_item_clicked',
  NAV_DROPDOWN_OPENED: 'nav_dropdown_opened',

  // ── Quick Launch ──
  QUICK_LAUNCH_CAMPAIGN_SELECTED: 'quick_launch_campaign_selected',
  QUICK_LAUNCH_ADSET_SELECTED: 'quick_launch_adset_selected',
  QUICK_LAUNCH_SOURCE_AD_SELECTED: 'quick_launch_source_ad_selected',
  QUICK_LAUNCH_FILES_ADDED: 'quick_launch_files_added',
  QUICK_LAUNCH_UPLOAD_STARTED: 'quick_launch_upload_started',
  QUICK_LAUNCH_UPLOAD_COMPLETED: 'quick_launch_upload_completed',
  QUICK_LAUNCH_LAUNCHED: 'quick_launch_launched',
  QUICK_LAUNCH_LAUNCH_RESULT: 'quick_launch_launch_result',
  QUICK_LAUNCH_ERROR_OCCURRED: 'quick_launch_error_occurred',

  // ── Blog ──
  BLOG_ARTICLE_VIEWED: 'blog_article_viewed',
  BLOG_ARTICLE_CARD_CLICKED: 'blog_article_card_clicked',
  BLOG_TOC_CLICKED: 'blog_toc_clicked',
} as const
