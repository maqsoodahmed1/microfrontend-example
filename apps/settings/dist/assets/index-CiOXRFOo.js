import { importShared } from './__federation_fn_import-gVVR6EuA.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';
import { r as reactDomExports } from './index-D9Af7wOI.js';
import General from './__federation_expose_General-Z3k38Zm4.js';
import Users from './__federation_expose_Users-DN10WfUv.js';
import Security from './__federation_expose_Security-BzZch4vD.js';
import Integrations from './__federation_expose_Integrations-DHXw1CXL.js';

var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}

const {useState} = await importShared('react');
const App = () => {
  const [currentPage, setCurrentPage] = useState("general");
  const renderPage = () => {
    switch (currentPage) {
      case "general":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(General, {});
      case "users":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Users, {});
      case "security":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Security, {});
      case "integrations":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Integrations, {});
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(General, {});
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "20px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Settings App (Standalone)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: "8px", marginBottom: "16px" }, children: [
      { key: "general", label: "General" },
      { key: "users", label: "Users" },
      { key: "security", label: "Security" },
      { key: "integrations", label: "Integrations" }
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
