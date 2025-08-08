import { importShared } from './__federation_fn_import-gVVR6EuA.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';
import { d as dt } from './styled-components.browser.esm-CY80oHyE.js';

const {useState} = await importShared('react');
const Container = dt.div`
  padding: 24px;
`;
const Title = dt.h2`
  margin: 0 0 24px;
  color: #1f2937;
  font-size: 24px;
`;
const Form = dt.form`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  max-width: 600px;
`;
const FormGroup = dt.div`
  margin-bottom: 24px;
`;
const Label = dt.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #374151;
`;
const Input = dt.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;
const Select = dt.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;
const TextArea = dt.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;
const ButtonGroup = dt.div`
  display: flex;
  gap: 12px;
  margin-top: 32px;
`;
const Button = dt.button`
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${(props) => props.variant === "primary" ? `
    background: #3b82f6;
    color: white;
    border: none;
    
    &:hover {
      background: #2563eb;
    }
  ` : `
    background: white;
    color: #374151;
    border: 1px solid #d1d5db;
    
    &:hover {
      background: #f9fafb;
    }
  `}
`;
const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product data:", formData);
    alert("Product added successfully! (This is a demo)");
    setFormData({ name: "", category: "", price: "", stock: "", description: "" });
  };
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "➕ Add New Product" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Product Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "text",
            id: "name",
            name: "name",
            value: formData.name,
            onChange: handleChange,
            placeholder: "Enter product name",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "category", children: "Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            id: "category",
            name: "category",
            value: formData.category,
            onChange: handleChange,
            required: true,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "electronics", children: "Electronics" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "home-kitchen", children: "Home & Kitchen" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "sports", children: "Sports & Fitness" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "books", children: "Books" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "fashion", children: "Fashion" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "office", children: "Office Supplies" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "price", children: "Price" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "number",
            id: "price",
            name: "price",
            value: formData.price,
            onChange: handleChange,
            placeholder: "0.00",
            step: "0.01",
            min: "0",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "stock", children: "Initial Stock" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "number",
            id: "stock",
            name: "stock",
            value: formData.stock,
            onChange: handleChange,
            placeholder: "0",
            min: "0",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "description", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextArea,
          {
            id: "description",
            name: "description",
            value: formData.description,
            onChange: handleChange,
            placeholder: "Enter product description",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonGroup, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "primary", children: "Add Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", children: "Cancel" })
      ] })
    ] })
  ] });
};

export { AddProduct as default };
