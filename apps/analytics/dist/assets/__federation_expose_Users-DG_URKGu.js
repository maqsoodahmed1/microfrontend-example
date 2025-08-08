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
const Card = dt.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`;
const UserTable = dt.table`
  width: 100%;
  border-collapse: collapse;
`;
const TableHeader = dt.thead`
  background: #f9fafb;
`;
const TableRow = dt.tr`
  &:hover {
    background: #f9fafb;
  }
`;
const TableCell = dt.td`
  padding: 12px;
  border-bottom: 1px solid #e5e7eb;
  color: #6b7280;
`;
const TableHeaderCell = dt.th`
  padding: 12px;
  text-align: left;
  font-weight: 600;
  color: #374151;
`;
const StatusBadge = dt.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background: ${(props) => props.status === "active" ? "#d1fae5" : "#fee2e2"};
  color: ${(props) => props.status === "active" ? "#059669" : "#dc2626"};
`;
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", lastLogin: "2024-08-08", status: "active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", lastLogin: "2024-08-07", status: "active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", lastLogin: "2024-08-05", status: "inactive" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", lastLogin: "2024-08-08", status: "active" }
];
const Users = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "👥 User Analytics" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "User Activity Overview" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Track user engagement and behavior patterns." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(UserTable, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeaderCell, { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeaderCell, { children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeaderCell, { children: "Last Login" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeaderCell, { children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: users.map((user) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { style: { fontWeight: 500, color: "#1f2937" }, children: user.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: user.email }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: user.lastLogin }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: user.status, children: user.status.charAt(0).toUpperCase() + user.status.slice(1) }) })
        ] }, user.id)) })
      ] })
    ] })
  ] });
};

export { Users as default };
