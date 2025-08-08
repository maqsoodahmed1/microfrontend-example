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
const IntegrationGrid = dt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
`;
const IntegrationCard = dt.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;
const IntegrationHeader = dt.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const IntegrationIcon = dt.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;
const IntegrationInfo = dt.div`
  flex: 1;
`;
const IntegrationName = dt.h3`
  margin: 0 0 4px;
  color: #1f2937;
  font-size: 18px;
`;
const IntegrationStatus = dt.div`
  font-size: 14px;
  color: ${(props) => props.connected ? "#059669" : "#6b7280"};
  font-weight: 500;
`;
const IntegrationDescription = dt.p`
  color: #6b7280;
  font-size: 14px;
  margin: 0 0 16px;
  line-height: 1.5;
`;
const ActionButton = dt.button`
  background: ${(props) => props.connected ? "#dc2626" : "#3b82f6"};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${(props) => props.connected ? "#b91c1c" : "#2563eb"};
  }
`;
const integrations = [
  {
    id: 1,
    name: "Slack",
    icon: "💬",
    description: "Get notifications and alerts directly in your Slack workspace.",
    connected: true
  },
  {
    id: 2,
    name: "Google Analytics",
    icon: "📊",
    description: "Track website performance and user behavior with Google Analytics.",
    connected: false
  },
  {
    id: 3,
    name: "Stripe",
    icon: "💳",
    description: "Process payments and manage subscriptions with Stripe.",
    connected: true
  },
  {
    id: 4,
    name: "Mailchimp",
    icon: "📧",
    description: "Sync contacts and manage email marketing campaigns.",
    connected: false
  },
  {
    id: 5,
    name: "GitHub",
    icon: "🐙",
    description: "Connect your repositories and manage deployments.",
    connected: true
  },
  {
    id: 6,
    name: "Zapier",
    icon: "⚡",
    description: "Automate workflows between your favorite apps.",
    connected: false
  }
];
const Integrations = () => {
  const handleToggleIntegration = (id, connected) => {
    const action = connected ? "disconnect" : "connect";
    alert(`${action.charAt(0).toUpperCase() + action.slice(1)} integration (This is a demo)`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "🔗 Integrations" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IntegrationGrid, { children: integrations.map((integration) => /* @__PURE__ */ jsxRuntimeExports.jsxs(IntegrationCard, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(IntegrationHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IntegrationIcon, { children: integration.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(IntegrationInfo, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IntegrationName, { children: integration.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(IntegrationStatus, { connected: integration.connected, children: integration.connected ? "Connected" : "Not Connected" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IntegrationDescription, { children: integration.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ActionButton,
        {
          connected: integration.connected,
          onClick: () => handleToggleIntegration(integration.id, integration.connected),
          children: integration.connected ? "Disconnect" : "Connect"
        }
      )
    ] }, integration.id)) })
  ] });
};

export { Integrations as default };
