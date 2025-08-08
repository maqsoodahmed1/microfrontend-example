import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';
import { d as dt } from './styled-components.browser.esm-CY80oHyE.js';

const Container = dt.div`
  padding: 24px;
`;
const Title = dt.h2`
  margin: 0 0 24px;
  color: #1f2937;
  font-size: 24px;
`;
const MetricsGrid = dt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
`;
const MetricCard = dt.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;
const MetricValue = dt.div`
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 8px;
`;
const MetricLabel = dt.div`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 12px;
`;
const MetricChange = dt.div`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.positive ? "#059669" : "#dc2626"};
`;
const Performance = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "⚡ Performance Analytics" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(MetricsGrid, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(MetricCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricValue, { children: "2.4s" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricLabel, { children: "Avg Page Load Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricChange, { positive: true, children: "↗ 15% improvement" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(MetricCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricValue, { children: "99.8%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricLabel, { children: "Uptime" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricChange, { positive: true, children: "↗ 0.2% increase" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(MetricCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricValue, { children: "1.2MB" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricLabel, { children: "Bundle Size" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricChange, { positive: false, children: "↘ 5% increase" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(MetricCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricValue, { children: "45ms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricLabel, { children: "API Response Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricChange, { positive: true, children: "↗ 8% improvement" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(MetricCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricValue, { children: "12,345" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricLabel, { children: "Requests/Hour" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricChange, { positive: true, children: "↗ 23% increase" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(MetricCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricValue, { children: "0.02%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricLabel, { children: "Error Rate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricChange, { positive: true, children: "↗ 0.01% decrease" })
      ] })
    ] })
  ] });
};

export { Performance as default };
