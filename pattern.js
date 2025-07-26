const data = {
  date_range: "",
  client_name: "",
  impressions: "",
  clicks: "",
  clicks_plan: "",
  ctr_overall: "",
  ctr_search: "",
  multi_site_leads_count: "",
  conversion_breakdown: "",
  basic_metrics_analysis: "",

  bounce_rate: "",
  time_on_site: "",
  page_depth: "",
  traffic_quality_analysis: "",

  new_user_share: "",
  returning_user_share: "",
  analysis_new_vs_returning_users: "",

  geography_clicks: "",
  geography_recommendations: "",
  device_data: "",
  device_analysis: "",

  audience_data: "",
  audience_analysis: "",

  click_rate_percentage: "",
  results_summary: "",

  keyword_summary: "",
  search_query_summary: "",
  platform_summary: "",
  call_tracking_summary: "",

  charts: {
    CHART_BASIC: {
      type: "bar",
      labels: ["Clicks (actual)", "Plan"],
      data: [],
    },

    CHART_RETURNING_USERS: {
      type: "pie",
      labels: ["New", "Returning"],
      data: [],
    },

    CHART_GEO: { type: "pie", labels: [], data: [] },
    CHART_AUDIENCE: { type: "pie", labels: [], data: [] },
    CHART_DEVICE: {
      type: "pie",
      labels: ["Smartphones", "Desktop", "Tablets"],
      data: [],
    },
  },

  tables: {
    table_search_keyword: "<table class='data-table'>...</table>",
    table_keyword: "<table class='data-table'>...</table>",
    table_display: "<table class='data-table'>...</table>",
    table_calltracking: "<table class='data-table'>...</table>",
  },
};
