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
const Table = dt.table`
  width: 100%;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;
const TableHeader = dt.thead`
  background: #f9fafb;
`;
const TableHeaderCell = dt.th`
  padding: 16px;
  text-align: left;
  font-weight: 600;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
`;
const TableRow = dt.tr`
  &:hover {
    background: #f9fafb;
  }
`;
const TableCell = dt.td`
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  color: #6b7280;
  
  &:last-child {
    border-bottom: none;
  }
`;
const StockBadge = dt.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background: ${(props) => {
  switch (props.level) {
    case "low":
      return "#fee2e2";
    case "medium":
      return "#fef3c7";
    case "high":
      return "#d1fae5";
    default:
      return "#f3f4f6";
  }
}};
  color: ${(props) => {
  switch (props.level) {
    case "low":
      return "#dc2626";
    case "medium":
      return "#d97706";
    case "high":
      return "#059669";
    default:
      return "#6b7280";
  }
}};
`;
const inventory = [
  { id: 1, name: "Wireless Headphones", sku: "WH-001", stock: 45, price: "$99.99", status: "high" },
  { id: 2, name: "Smart Watch", sku: "SW-002", stock: 23, price: "$199.99", status: "medium" },
  { id: 3, name: "Coffee Maker", sku: "CM-003", stock: 8, price: "$79.99", status: "low" },
  { id: 4, name: "Yoga Mat", sku: "YM-004", stock: 67, price: "$29.99", status: "high" },
  { id: 5, name: "Laptop Stand", sku: "LS-005", stock: 15, price: "$49.99", status: "medium" },
  { id: 6, name: "Bluetooth Speaker", sku: "BS-006", stock: 3, price: "$59.99", status: "low" }
];
const Inventory = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "📋 Inventory Management" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeaderCell, { children: "Product Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeaderCell, { children: "SKU" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeaderCell, { children: "Stock Level" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeaderCell, { children: "Price" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeaderCell, { children: "Status" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: inventory.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { style: { fontWeight: 500, color: "#1f2937" }, children: item.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: item.sku }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
          item.stock,
          " units"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { style: { fontWeight: 600, color: "#059669" }, children: item.price }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StockBadge, { level: item.status, children: item.status === "low" ? "Low Stock" : item.status === "medium" ? "Medium" : "In Stock" }) })
      ] }, item.id)) })
    ] })
  ] });
};

export { Inventory as default };
