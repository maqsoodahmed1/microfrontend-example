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
const CategoryGrid = dt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;
const CategoryCard = dt.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.3);
  }
`;
const CategoryIcon = dt.div`
  font-size: 48px;
  margin-bottom: 16px;
`;
const CategoryName = dt.h3`
  margin: 0 0 8px;
  font-size: 20px;
`;
const CategoryCount = dt.div`
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 16px;
`;
const CategoryDescription = dt.p`
  font-size: 14px;
  opacity: 0.8;
  margin: 0;
`;
const categories = [
  { id: 1, name: "Electronics", icon: "📱", count: 24, description: "Smartphones, laptops, gadgets and more" },
  { id: 2, name: "Home & Kitchen", icon: "🏠", count: 18, description: "Home appliances and kitchen essentials" },
  { id: 3, name: "Sports & Fitness", icon: "⚽", count: 15, description: "Sports equipment and fitness gear" },
  { id: 4, name: "Books", icon: "📚", count: 32, description: "Educational and entertainment books" },
  { id: 5, name: "Fashion", icon: "👔", count: 28, description: "Clothing and fashion accessories" },
  { id: 6, name: "Office Supplies", icon: "📋", count: 12, description: "Office equipment and stationery" }
];
const Categories = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "🗂️ Product Categories" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryGrid, { children: categories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs(CategoryCard, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryIcon, { children: category.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryName, { children: category.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CategoryCount, { children: [
        category.count,
        " products"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryDescription, { children: category.description })
    ] }, category.id)) })
  ] });
};

export { Categories as default };
