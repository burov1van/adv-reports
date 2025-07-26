let globalData = {};

// Main function to initialize the report
function initReport(data) {
  globalData = data;
  injectTables();
  fillBasicChartData();
  replaceTextPlaceholders();
  renderCharts();
  applyPrintRules();
}

// 1. Inject HTML tables
function injectTables() {
  const tables = globalData.tables || {};
  const placeholders = document.querySelectorAll(".placeholder");
  placeholders.forEach((el) => {
    const text = el.textContent.trim();
    if (text.startsWith("{{") && text.endsWith("}}")) {
      const key = text.slice(2, -2).trim();
      if (tables[key]) {
        el.innerHTML = tables[key];
      }
    }
  });
}

// 2. Compute and fill basic chart and click rate
function fillBasicChartData() {
  const charts = globalData.charts || {};
  const basic = charts.CHART_BASIC;
  const clicks = Number(globalData.clicks);
  const planClicks = Number(globalData.clicks_plan);

  if (basic && !isNaN(clicks) && !isNaN(planClicks)) {
    basic.labels = ["Clicks (actual)", "Plan"];
    basic.data = [clicks, planClicks];

    if (!globalData.click_rate_percentage && planClicks > 0) {
      const rate = Math.round((clicks / planClicks) * 100);
      globalData.click_rate_percentage = rate + "%";
    }
  }
}

// 3. Replace text placeholders {{key}} with actual data
function replaceTextPlaceholders() {
  const allElements = document.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i++) {
    const el = allElements[i];
    for (let j = 0; j < el.childNodes.length; j++) {
      const node = el.childNodes[j];
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.nodeValue;
        if (text.includes("{{")) {
          const newText = text.replace(/{{\s*(.*?)\s*}}/g, (match, key) => {
            return globalData[key.trim()] || "—";
          });
          node.nodeValue = newText;
        }
      }
    }
  }
}

// 4. Render all charts based on configuration
function renderCharts() {
  const charts = globalData.charts || {};
  for (const chartKey in charts) {
    const chartConfig = charts[chartKey];
    renderSingleChart(chartKey, chartConfig);
  }
}

// Render one chart into its placeholder
function renderSingleChart(key, config) {
  const wrappers = document.querySelectorAll(".image-wrapper");
  for (let i = 0; i < wrappers.length; i++) {
    const wrapper = wrappers[i];
    if (wrapper.textContent.includes(`[[${key}]]`)) {
      wrapper.innerHTML = "";
      const canvas = document.createElement("canvas");
      canvas.id = key;
      canvas.width = 700;
      canvas.height = 200;
      wrapper.appendChild(canvas);
      drawChart(canvas, config);
    }
  }
}

// Create Chart.js instance
function drawChart(canvas, config) {
  const colors = getDefaultColors();
  new Chart(canvas, {
    type: config.type,
    data: {
      labels: config.labels,
      datasets: [{ data: config.data, backgroundColor: colors }],
    },
    options: {
      responsive: false,
      plugins: { legend: { position: "bottom" } },
    },
  });
}

// Default color palette
function getDefaultColors() {
  return ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"];
}

// 5. Hide sections without data and adjust print layout
function applyPrintRules() {
  const sections = document.querySelectorAll("[data-if]");
  sections.forEach((el) => {
    const key = el.getAttribute("data-if");
    const value1 = globalData[key];
    const value2 = globalData.tables ? globalData.tables[key] : null;
    const value = value1 || value2;
    if (!value) {
      el.classList.add("hide-on-print");
    }
  });

  const pages = document.querySelectorAll(".page_wrapper");
  if (pages.length > 0) {
    const last = pages[pages.length - 1];
    last.style.pageBreakAfter = "avoid";
  }
}

// Start processing
initReport(data);
