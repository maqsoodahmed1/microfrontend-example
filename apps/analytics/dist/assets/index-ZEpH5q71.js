import { importShared } from './__federation_fn_import-gVVR6EuA.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';
import { r as reactDomExports } from './index-D9Af7wOI.js';
import Sales from './__federation_expose_Sales-DcQ0YouA.js';
import Users from './__federation_expose_Users-DG_URKGu.js';
import Performance from './__federation_expose_Performance-hUwAOxdY.js';

var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}

const {useState} = await importShared('react');
const App = () => {
  const [currentPage, setCurrentPage] = useState("sales");
  const renderPage = () => {
    switch (currentPage) {
      case "sales":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Sales, {});
      case "users":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Users, {});
      case "performance":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Performance, {});
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Sales, {});
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "20px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Analytics App (Standalone)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: "8px", marginBottom: "16px" }, children: [
      { key: "sales", label: "Sales Analytics" },
      { key: "users", label: "User Analytics" },
      { key: "performance", label: "Performance" }
    ].map(({ key, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setCurrentPage(key),
        style: {
          background: currentPage === key ? "#3b82f6" : "#e5e7eb",
          color: currentPage === key ? "white" : "black",
          border: "none",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer"
        },
        children: label
      },
      key
    )) }),
    renderPage()
  ] });
};

const React = await importShared('react');
const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
  );
}
