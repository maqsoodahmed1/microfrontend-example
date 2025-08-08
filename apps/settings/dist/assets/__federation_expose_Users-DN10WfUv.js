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
const SettingsSection = dt.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`;
const Header = dt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
const SectionTitle = dt.h3`
  margin: 0;
  color: #1f2937;
  font-size: 18px;
`;
const Button = dt.button`
  background: #3b82f6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background: #2563eb;
  }
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
const RoleBadge = dt.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background: ${(props) => {
  switch (props.role) {
    case "admin":
      return "#fef3c7";
    case "manager":
      return "#ddd6fe";
    case "user":
      return "#e0f2fe";
    default:
      return "#f3f4f6";
  }
}};
  color: ${(props) => {
  switch (props.role) {
    case "admin":
      return "#d97706";
    case "manager":
      return "#7c3aed";
    case "user":
      return "#0369a1";
    default:
      return "#6b7280";
  }
}};
`;
const ActionButton = dt.button`
  background: transparent;
  border: 1px solid #d1d5db;
  color: #6b7280;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  margin-right: 8px;
  
  &:hover {
    background: #f9fafb;
  }
`;
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "admin", lastLogin: "2024-08-08" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "manager", lastLogin: "2024-08-07" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "user", lastLogin: "2024-08-05" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "user", lastLogin: "2024-08-08" }
];
const Users = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "👥 User Management" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SettingsSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Header, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "System Users" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "Add New User" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(UserTable, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeaderCell, { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeaderCell, { children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeaderCell, { children: "Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeaderCell, { children: "Last Login" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeaderCell, { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: users.map((user) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { style: { fontWeight: 500, color: "#1f2937" }, children: user.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: user.email }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBadge, { role: user.role, children: user.role.charAt(0).toUpperCase() + user.role.slice(1) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: user.lastLogin }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ActionButton, { children: "Edit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ActionButton, { children: "Delete" })
          ] })
        ] }, user.id)) })
      ] })
    ] })
  ] });
};

export { Users as default };
