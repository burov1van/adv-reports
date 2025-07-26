const data = {
  date_range: "July 1, 2025 – July 25, 2025",
  client_name: "Acme Corp example",
  impressions: "120,000",
  clicks: "3,600",
  clicks_plan: "4,000",
  ctr_overall: "3.0%",
  ctr_search: "4.5%",
  multi_site_leads_count: "150",
  conversion_breakdown: "Leads: 125, Sales: 75",
  basic_metrics_analysis:
    "Performance is close to plan, with a slight shortfall in clicks this period. Consider increasing budget for high-performing keywords.",

  bounce_rate: "45%",
  time_on_site: "00:02:15",
  page_depth: "3.2",
  traffic_quality_analysis:
    "Bounce rate is moderate, but page depth indicates solid engagement. Review landing page to reduce bounces.",

  new_user_share: "60%",
  returning_user_share: "40%",
  analysis_new_vs_returning_users:
    "Returning users show a 20% higher conversion rate compared to new users.",

  geography_clicks:
    "United States: 70%, Canada: 15%, United Kingdom: 10%, Australia: 5%",
  geography_recommendations:
    "Expand targeting in the UK and Australia to capitalize on untapped markets.",
  device_data: "Mobile: 65%, Desktop: 30%, Tablet: 5%",
  device_analysis:
    "Mobile traffic dominates; ensure mobile-friendly site experience.",

  audience_data:
    "Age 25-34: 40%, Age 35-44: 30%, Age 18-24: 20%, Age 45-54: 10%",
  audience_analysis:
    "Focus on the 25-34 age group with tailored ad creatives and offers.",

  click_rate_percentage: "90%",
  results_summary:
    "Achieved 90% of planned clicks; consider boosting budget to meet targets.",

  keyword_summary:
    "Top keywords: 'best widgets' (1,200 clicks), 'affordable widgets' (800 clicks), 'widget sale' (600 clicks)",
  search_query_summary:
    "Common queries: 'buy widgets online', 'widget reviews', 'widget discounts'",
  platform_summary: "Google Search: 60%, Facebook Ads: 25%, Instagram Ads: 15%",
  call_tracking_summary:
    "120 calls, 100 qualified leads, average call duration 3:45",

  charts: {
    CHART_BASIC: {
      type: "bar",
      labels: ["Clicks (actual)", "Plan"],
      data: [3600, 4000],
    },

    CHART_RETURNING_USERS: {
      type: "pie",
      labels: ["New", "Returning"],
      data: [2160, 1440],
    },

    CHART_GEO: {
      type: "pie",
      labels: ["US", "Canada", "UK", "Australia"],
      data: [70, 15, 10, 5],
    },
    CHART_AUDIENCE: {
      type: "pie",
      labels: ["25-34", "35-44", "18-24", "45-54"],
      data: [40, 30, 20, 10],
    },
    CHART_DEVICE: {
      type: "pie",
      labels: ["Smartphones", "Desktop", "Tablets"],
      data: [65, 30, 5],
    },
  },

  tables: {
    table_search_keyword:
      "<table class='data-table'><thead><tr><th>Search Query</th><th>Impressions</th><th>Clicks</th><th>CTR</th></tr></thead><tbody><tr><td>buy widgets online</td><td>10,000</td><td>300</td><td>3.0%</td></tr><tr><td>widget reviews</td><td>8,000</td><td>200</td><td>2.5%</td></tr></tbody></table>",
    table_keyword:
      "<table class='data-table'><thead><tr><th>Keyword</th><th>Clicks</th><th>Impressions</th></tr></thead><tbody><tr><td>best widgets</td><td>1,200</td><td>50,000</td></tr><tr><td>affordable widgets</td><td>800</td><td>30,000</td></tr><tr><td>widget sale</td><td>600</td><td>20,000</td></tr></tbody></table>",
    table_display:
      "<table class='data-table'><thead><tr><th>Platform</th><th>Impressions</th><th>Clicks</th><th>CTR</th></tr></thead><tbody><tr><td>Google Search</td><td>70,000</td><td>2,100</td><td>3.0%</td></tr><tr><td>Facebook Ads</td><td>30,000</td><td>900</td><td>3.0%</td></tr><tr><td>Instagram Ads</td><td>20,000</td><td>600</td><td>3.0%</td></tr></tbody></table>",
    table_calltracking:
      "<table class='data-table'><thead><tr><th>Source</th><th>Calls</th><th>Qualified Leads</th></tr></thead><tbody><tr><td>Website</td><td>80</td><td>70</td></tr><tr><td>Landing Page</td><td>40</td><td>30</td></tr></tbody></table>",
  },
};
