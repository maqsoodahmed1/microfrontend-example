import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ConfigProvider, Form, Menu, MenuProps } from "antd";
import type { MenuInfo } from "rc-menu/lib/interface";
import Sider from "antd/es/layout/Sider";

import { ROUTES } from "../constants/app-routes.constants";
import { COLORS } from "../constants/colors.constants";
import { BulletIcon, ContactsIcon, DataphoneDIcon, DataphoneLogo, LiveCallsIcon, ReportsIcon, SettingsIcon, SidebarTriggerIcon, SmsIcon } from "../assets/icons";
import DPSelect from "./shared/atoms/dp-select";
import { cn } from "../helpers/general.helpers";

interface SideCollapsedProps {
  sideBarCollapsed: (collapsed: boolean) => void;
}

interface IScreenSize {
  width?: number;
  height?: number;
}

export default function Sidebar({ sideBarCollapsed }: SideCollapsedProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const [screenSize, setScreenSize] = useState<IScreenSize>();
  const [collapse, setCollapse] = useState<boolean>(false);

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const getMenuKeys = (pathname: string) => {
    // Define sidebar groups and their route prefixes
    const groups: Array<{ parentKey: string; routes: string[] }> = [
      { parentKey: "calls", routes: [ROUTES.CALLS.LIVE_CALLS, ROUTES.CALLS.CALL_CENTER] },
      { parentKey: "sms", routes: Object.values(ROUTES.SMS) as string[] },
      { parentKey: "reports", routes: Object.values(ROUTES.REPORTS) as string[] },
      { parentKey: "contacts", routes: Object.values(ROUTES.CONTACTS) as string[] },
      { parentKey: "settings", routes: Object.values(ROUTES.SETTINGS) as string[] },
    ];

    // Find the group whose child route best matches the current path
    for (const group of groups) {
      // Choose the longest matching route prefix so nested paths still select correctly
      let bestMatch: string | undefined;
      for (const route of group.routes) {
        if (pathname.startsWith(route)) {
          if (!bestMatch || route.length > bestMatch.length) bestMatch = route;
        }
      }
      if (bestMatch) {
        return { selectedKeys: [bestMatch], openKeys: [group.parentKey] };
      }
    }

    return { selectedKeys: [pathname], openKeys: [] };
  };

  const getCurrentDimension = useCallback(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }, []);

  const updateDimension = useCallback(() => {
    setScreenSize(getCurrentDimension());
  }, [setScreenSize, getCurrentDimension]);


  const collapsedFunc = (collapsed: boolean) => {
    // Always update internal and parent state when collapse changes
    sideBarCollapsed(collapsed);
    setCollapse(collapsed);
  };

  function onSelect(e: MenuInfo) {
    navigate(e.key);
  }

  useEffect(() => {
    const { openKeys: newOpenKeys, selectedKeys: newSelectedKeys } =
      getMenuKeys(location.pathname);
    setOpenKeys(newOpenKeys);
    setSelectedKeys(newSelectedKeys);
  }, [location.pathname]);

  useEffect(() => {
    updateDimension();
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [updateDimension]);


  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemHeight: 60,
            itemBorderRadius: 0,
            itemMarginInline: 0,
            iconSize: 12,
            fontSize: 13,
            itemActiveBg: "transparent",
            itemSelectedBg: "transparent",
            itemHoverColor: COLORS.PRIMARY,
            itemSelectedColor: "rgb(255,255,255)",
            itemBg: "#081221)",
            itemColor: "rgba(255,255,255,0.88)",
            colorText: "rgba(255,255,255,0.88)",
          },
          Layout: {
            siderBg: "#ffffff",
          },
        },
      }}
    >
      <Sider
        ref={sidebarRef}
        breakpoint="lg"
        width="280"
        collapsible
        onCollapse={(collapsed) => {
          collapsedFunc(collapsed);
        }}
        collapsed={collapse}
        zeroWidthTriggerStyle={{
          backgroundColor: "#09112A",
          color: "#FFFFFF",
          border: 0,
          top: "12px",
          zIndex: "999",
        }}
        trigger={<SidebarTriggerIcon />}
        collapsedWidth={0}
        id="sider"
        className={cn(
          "sidebar-menu",
          { "absolute": screenSize?.width && screenSize.width <= 991 },
        )}
      >
        <div className="group relative border-b border-gray-200 flex h-20 items-center justify-center overflow-hidden transition-all duration-200 ease-in-out hover:bg-primary/5">
          <DataphoneLogo className=" transform transition-transform duration-200 ease-in-out group-hover:scale-105" />
        </div>
        <div className="no-scrollbar mt-8 h-[calc(100vh-180px)] overflow-auto">
          <Menu
            selectedKeys={selectedKeys}
            className="!text-sm 2xl:!text-base 4xl:!text-lg [&_.ant-menu-submenu-selected]:!font-medium [&_.ant-menu-submenu-selected_.ant-menu-submenu-title_.ant-menu-title-content]:font-semibold font-medium !px-2"
            openKeys={openKeys}
            mode="inline"
            items={adminSidebarItems}
            onOpenChange={setOpenKeys}
            onClick={(info) => {
              if (screenSize?.width && screenSize.width <= 991) {
                collapsedFunc(true);
              }
              onSelect(info);
            }}
          />
        </div>
        <div className="px-4">
          <Form.Item className="relative">
            <DPSelect
              options={[{ label: "test", value: "test", }, { label: "test", value: "stest" }]} className="w-full !h-14 [&_.ant-select-selector]:!pl-14 [&_.ant-select-selection-search-input]:!pl-11" showSearch placeholder="Dataphone Accounts"
            />
            <DataphoneDIcon className="absolute top-[50%] -translate-y-[50%] left-6" />
          </Form.Item>
        </div>
      </Sider>
    </ConfigProvider>
  )
}

const menuItems = [
  {
    key: 'calls',
    label: "Calls",
    icon: <LiveCallsIcon className="size-5 2xl:size-6 text-dp-gray" />,
    children: [
      {
        key: ROUTES.CALLS.LIVE_CALLS,
        label: "Live Calls",
      },
      {
        key: ROUTES.CALLS.CALL_CENTER,
        label: "Call Center",
      },
    ],
  },
  {
    key: 'sms',
    label: "SMS",
    icon: <SmsIcon className="size-5 2xl:size-6 text-dp-gray" />,
    children: [
      { key: ROUTES.SMS.DASHBOARD, label: "Dashboard" },
      { key: ROUTES.SMS.SMS, label: "SMS" },
      { key: ROUTES.SMS.BULK_MESSAGE, label: "Bulk Messages" },
      { key: ROUTES.SMS.SCHEDULED_MESSAGE, label: "Scheduled" },
      { key: ROUTES.SMS.NUMBER, label: "Number" },
      { key: ROUTES.SMS.TEMPLATES, label: "Templates" },
      { key: ROUTES.SMS.INTEGRATION, label: "Integration" },
      { key: ROUTES.SMS.REPORTS, label: "Reports" },
      { key: ROUTES.SMS.CONFIGURATION, label: "Configuration" },
    ]
  },
  {
    key: 'reports',
    label: "Reports",
    icon: <ReportsIcon className="size-5 2xl:size-6 text-dp-gray" />,
    children: [
      { key: ROUTES.REPORTS.DASHOBARD, label: "Dashboard" },
      { key: ROUTES.REPORTS.ANALYTICS, label: "Analytics" },
      { key: ROUTES.REPORTS.CUSTOM_REPORTS, label: "Custom Reports" },
    ]
  },
  {
    key: 'contacts',
    label: "Contacts",
    icon: <ContactsIcon className="size-5 2xl:size-6 text-dp-gray" />,
    children: [
      { key: ROUTES.CONTACTS.DASHBOARD, label: "Dashboard" },
      { key: ROUTES.CONTACTS.CONTACTS, label: "Contacts" },
      { key: ROUTES.CONTACTS.CATEGORIES, label: "Categories" },
      { key: ROUTES.CONTACTS.TAGS, label: "Tags" },
    ]
  },
  {
    key: 'settings',
    label: "Settings",
    icon: <SettingsIcon className="size-5 2xl:size-6 text-dp-gray" />,
    children: [
      { key: ROUTES.SETTINGS.ACCOUNTS, label: "Accounts" },
      { key: ROUTES.SETTINGS.USERS, label: "Users" },
      { key: ROUTES.SETTINGS.ROLE_MANAGEMENT, label: "Role Management" },
    ]
  },
  {
    key: 'single',
    label: "single",
    icon: <SettingsIcon className="size-5 2xl:size-6 text-dp-gray" />,
  },
];

export const adminSidebarItems: MenuProps["items"] = menuItems.map((item) => {
  return {
    key: item.key,
    label: item.label,
    icon: item.icon,
    children: item.children?.map((child) => ({
      key: child.key,
      label: (
        <span className="flex items-center">
          <BulletIcon className="mr-3 size-2 child-bullet text-dp-gray text-sm" />
          {child.label}
        </span>
      ),
    })),
    className:
      "p-0 cursor-no-drop [&.ant-menu-item-disabled]:!text-[#ffffff]",
    style: {
      height: "auto",
      lineHeight: "auto",
      marginBottom: "0.5rem",
      cursor: "pointer",
      opacity: "1",
    },
  };
});
