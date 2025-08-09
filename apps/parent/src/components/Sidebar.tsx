import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  type KeyboardEvent,
  type ReactNode,
  type SetStateAction,
} from "react";
import { Button, notification, Select, Space } from "antd";
import { useNavigate } from "react-router-dom";

import Typography from "../components/common/Typography";
import DropDownTitle from "../components/common/DropDownTitle";
// import { usePermissions } from "hooks/permissions";
import {
  ActiveIcon,
  CallCenterUnfilledIcon,
  ChevronBottomIcon,
  ContactsIcon,
  DataPhoneIcon,
  InActiveIcon,
  LiveCallsUnfilledIcon,
  LockUnfilledIcon,
  PbxPortalIcon,
  ReportIcon,
  SmsIcon,
} from "../assets";

import "./sidebar.scss";
// import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
// import { RootState } from "../../../redux/store";
// import { setAccountId } from "../../../redux/slices/api.slice";
// import { setSessionData } from "../../../redux/slices/session.slice";

// ---------------- Types ----------------
type MenuItem = {
  key: string;
  icon?: ReactNode;
  label: string | ReactNode;
  path?: string;
  className?: string;
  onClick?: () => void;
  children?: MenuItem[];
};

interface FlatOption {
  value: string;
  label: string;
}
interface GroupOption {
  label: string;
  options: FlatOption[];
}
interface Account {
  id: string;
  name: string;
  parent_id: string;
}

type AccountOptions = GroupOption[];

const SubMenuItemLabel: React.FC<{ label: string; icon: React.ReactNode }> = ({
  label,
}) => <span>{label}</span>;

// ---------------- Component ----------------
const SideBar = ({
  appMenu = [],
  appName,
  permissions,
  accounts = [],
  userAccount,
  setSelectedAccountId,
  selectedAccountId,
}: {
  appMenu: {
    key: string;
    label: string;
    icon: React.ReactNode;
    path: string;
  }[];
  appName: string;
  permissions: { [key: string]: string[] };
  accounts: Account[];
  userAccount: string;
  setSelectedAccountId: React.Dispatch<SetStateAction<string | null>>;
  selectedAccountId: string;
}) => {
  const [selectedTab, setSelectedTab] = useState<string>(appName);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [openKey, setOpenKey] = useState<string | null>(null);

  const navigate = useNavigate();

  // const [cookies, setCookie] = useCookies<"last_account_id">([

  const accountOptions = useMemo(() => {
    const parents = accounts.filter((a) => a.parent_id === null);

    return parents.map((parent) => {
      const subs = accounts.filter((a) => a.parent_id === parent.id);
      if (subs.length > 0) {
        return {
          label: parent.name,
          options: [
            { value: parent.id, label: parent.name },
            ...subs.map((sub) => ({ value: sub.id, label: sub.name })),
          ],
        };
      }
      return { value: parent.id, label: parent.name };
    });
  }, [accounts]) as AccountOptions;

  const subMenu = useMemo(() => {
    return appMenu.map((item) => {
      const isActive = item.path === window.location.pathname;
      return {
        key: item.key,
        icon: (
          <img
            src={isActive ? ActiveIcon : InActiveIcon}
            alt={isActive ? "active" : "inactive"}
          />
        ),
        label: (
          <SubMenuItemLabel
            label={item.label}
            icon={<img src={isActive ? ActiveIcon : InActiveIcon} alt="" />}
          />
        ),
        className: `custom-submenu-item ${isActive ? "menuItemSelected" : ""}`,
        onClick: () => navigate(item.path),
      };
    });
  }, [appMenu, navigate]);

  const menuItems: MenuItem[] = useMemo(() => {
    return [
      {
        key: "live-calls",
        icon: LiveCallsUnfilledIcon,
        label: "Live Calls",
        path: "/",
      },
      {
        key: "call-center",
        icon: CallCenterUnfilledIcon,
        label: "Call Center",
        path: "/call-center",
      },
      {
        key: "sms",
        icon: SmsIcon,
        label: "SMS",
        path: import.meta.env.VITE_SMS_URL || "#",
      },
      {
        key: "contacts",
        icon: ContactsIcon,
        label: "Contacts",
        path: import.meta.env.VITE_CONTACTS_URL || "#",
      },
      {
        key: "pbx-portal",
        icon: PbxPortalIcon,
        label: "PBX Portal",
        path: "#",
      },
      {
        key: "reports",
        icon: ReportIcon,
        label: "Report",
        path: import.meta.env.VITE_REPORTS_URL || "#",
      },
    ].map((item) => {
      // const permissionKey = getPermissionKey(item.key);
      // const isPermitted = !!permissions[permissionKey]?.length;
      // const hasSubMenu =
      //   ["reports", "sms", "contacts"].includes(item.key) && subMenu;

      return {
        ...item,
        disabled: true,
        icon: (
          <span className="icon-wrapper">
            <img src={item.icon} alt={`${item.label}`} height={22} width={22} />
          </span>
        ),
        label: (
          <span className="menu-label-wrapper">
            <span className="menu-label">{item.label}</span>
            {true && (
              <img src={LockUnfilledIcon} className="lock-icon" alt="lock" />
            )}
          </span>
        ),
        className: `custom-submenu-item ${
          item.path === window.location.pathname ? "menuItemSelected" : ""
        }`,
        onClick: true
          ? () => (window.location.href = item.path)
          : undefined,
        children: undefined,
      };
    });
  }, [permissions, subMenu]);

  // ---------------- Render ----------------
  return (
    <>
      <div
        className={`hamburger-icon ${isSidebarOpen ? "shift-left" : ""}`}
        aria-label="Toggle sidebar menu"
        role="button"
        tabIndex={0}
        onClick={() => setIsCollapsed((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsCollapsed((prev) => !prev);
          }
        }}
      >
        <i className="bx bx-menu" aria-hidden="true" />
      </div>

      {isSidebarOpen && (
        <div className="overlay"  aria-hidden="true" />
      )}

      <nav
        className={`sidebar-container${isSidebarOpen ? " open" : ""}${isCollapsed ? " collapsed" : ""}`}
        aria-label="Sidebar navigation"
      >
        <div className="sidebar-logo">
          <div className="logo">
            <img src={DataPhoneIcon} alt="DataPhone" style={{ width: isCollapsed ? 32 : '100%', height: isCollapsed ? 32 : '100%' }} />
          </div>
        </div>

        <div className="sidebar-items">
          <div className="top-items-container">
            <div className="top-items-2">
              {!isCollapsed && (
                <Typography variant="small-heading-4" className="heading-text">
                  Applications
                </Typography>
              )}
              <ul>
                {menuItems.map((item) => {
                  const isOpen = openKey === item.key;
                  const hasChildren = !!item.children;

                  const handleItemClick = () => {
                    setOpenKey((prev) => (prev === item.key ? null : item.key));
                    item.onClick?.();
                  };

                  return (
                    <React.Fragment key={item.key}>
                      <li
                        className={`$${
                          selectedTab === item.key ? "active selected" : ""
                        } ${!item.onClick ? "disabled" : ""}`}
                        onClick={handleItemClick}
                        aria-current={
                          selectedTab === item.key ? "page" : undefined
                        }
                        aria-label={`Select $${
                          typeof item.label === "string" ? item.label : item.key
                        }`}
                        role="button"
                        tabIndex={0}
                      >
                        {item.icon}
                        {!isCollapsed && (
                          <Typography
                            variant="body-text-2"
                            className="label-icon"
                          >
                            {item.label}
                            {hasChildren && (
                              <img
                                src={ChevronBottomIcon}
                                alt="chevron-down-icon"
                              />
                            )}
                          </Typography>
                        )}
                      </li>

                      {Array.isArray(item.children) &&
                        item.children.length > 0 && !isCollapsed && (
                          <ul
                            className={`submenu ${isOpen ? "open" : "closed"}`}
                          >
                            {item.children.map((child) => (
                              <li
                                key={child.key}
                                onClick={child.onClick}
                                className={child.className}
                                role="button"
                                tabIndex={0}
                              >
                                {child.icon}
                                <Typography variant="body-text-2">
                                  {child.label}
                                </Typography>
                              </li>
                            ))}
                          </ul>
                        )}
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
          </div>

          {!isCollapsed && (
            <div className="bottom-items">
              <Select<string, GroupOption>
                className="accountSelect"
                placeholder="Select Account"
                options={accountOptions}
                showSearch
                filterOption={(input, opt) =>
                  (opt?.label ?? "").toLowerCase().includes(input.toLowerCase())
                }
                labelRender={(value: any) => (
                  <DropDownTitle
                    label="Accounts"
                    value={value.label || "Select Account"}
                  />
                )}
              />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default SideBar;