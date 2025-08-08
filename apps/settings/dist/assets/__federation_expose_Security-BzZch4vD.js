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
const SettingsSection = dt.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`;
const SectionTitle = dt.h3`
  margin: 0 0 16px;
  color: #1f2937;
  font-size: 18px;
`;
const ToggleContainer = dt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
`;
const ToggleInfo = dt.div`
  flex: 1;
`;
const ToggleLabel = dt.div`
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 4px;
`;
const ToggleDescription = dt.div`
  font-size: 14px;
  color: #6b7280;
`;
const Toggle = dt.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`;
const ToggleInput = dt.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + span {
    background-color: #3b82f6;
  }
  
  &:checked + span:before {
    transform: translateX(24px);
  }
`;
const ToggleSlider = dt.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #d1d5db;
  transition: 0.2s;
  border-radius: 24px;
  
  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
  }
`;
const PasswordSection = dt.div`
  margin-top: 20px;
`;
const FormGroup = dt.div`
  margin-bottom: 16px;
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
  max-width: 400px;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;
const Button = dt.button`
  background: #3b82f6;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #2563eb;
  }
`;
const Security = () => {
  const [settings, setSettings] = useState({
    twoFactorAuth: true,
    smsNotifications: false,
    emailNotifications: true,
    loginAlerts: true,
    sessionTimeout: false
  });
  const handleToggle = (setting) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "🔒 Security Settings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SettingsSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "Authentication" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleContainer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleInfo, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleLabel, { children: "Two-Factor Authentication" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleDescription, { children: "Add an extra layer of security to your account" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Toggle, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ToggleInput,
            {
              type: "checkbox",
              checked: settings.twoFactorAuth,
              onChange: () => handleToggle("twoFactorAuth")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleSlider, {})
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleContainer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleInfo, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleLabel, { children: "SMS Notifications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleDescription, { children: "Receive security alerts via SMS" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Toggle, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ToggleInput,
            {
              type: "checkbox",
              checked: settings.smsNotifications,
              onChange: () => handleToggle("smsNotifications")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleSlider, {})
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleContainer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleInfo, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleLabel, { children: "Email Notifications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleDescription, { children: "Receive security alerts via email" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Toggle, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ToggleInput,
            {
              type: "checkbox",
              checked: settings.emailNotifications,
              onChange: () => handleToggle("emailNotifications")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleSlider, {})
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleContainer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleInfo, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleLabel, { children: "Login Alerts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleDescription, { children: "Get notified when someone logs into your account" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Toggle, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ToggleInput,
            {
              type: "checkbox",
              checked: settings.loginAlerts,
              onChange: () => handleToggle("loginAlerts")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleSlider, {})
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleContainer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleInfo, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleLabel, { children: "Automatic Session Timeout" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleDescription, { children: "Automatically log out after 30 minutes of inactivity" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Toggle, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ToggleInput,
            {
              type: "checkbox",
              checked: settings.sessionTimeout,
              onChange: () => handleToggle("sessionTimeout")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleSlider, {})
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SettingsSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "Change Password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(PasswordSection, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "currentPassword", children: "Current Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", id: "currentPassword" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "newPassword", children: "New Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", id: "newPassword" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "confirmPassword", children: "Confirm New Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", id: "confirmPassword" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "Update Password" })
      ] })
    ] })
  ] });
};

export { Security as default };
