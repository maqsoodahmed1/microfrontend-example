import { importShared } from './__federation_fn_import-gVVR6EuA.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';
import { r as reactDomExports } from './index-D9Af7wOI.js';
import ProductsList from './__federation_expose_ProductsList-BZN3ib-a.js';
import Categories from './__federation_expose_Categories-D3riJuUb.js';
import Inventory from './__federation_expose_Inventory-W9VFULXe.js';
import AddProduct from './__federation_expose_AddProduct-D3TRnMVR.js';

var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}

const {useState} = await importShared('react');
const App = () => {
  const [currentPage, setCurrentPage] = useState("list");
  const renderPage = () => {
    switch (currentPage) {
      case "list":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ProductsList, {});
      case "categories":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Categories, {});
      case "inventory":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Inventory, {});
      case "add":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AddProduct, {});
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ProductsList, {});
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "20px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Products App (Standalone)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: "8px", marginBottom: "16px" }, children: [
      { key: "list", label: "Product List" },
      { key: "categories", label: "Categories" },
      { key: "inventory", label: "Inventory" },
      { key: "add", label: "Add Product" }
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
