import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 280px;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 24px 0;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
`;

const SidebarHeader = styled.div`
  padding: 0 24px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 24px;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

const Subtitle = styled.p`
  margin: 8px 0 0;
  font-size: 14px;
  opacity: 0.8;
`;

const MenuSection = styled.div`
  margin-bottom: 8px;
`;

const MenuHeader = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;
  margin: 0 16px;
  background: ${props => props.isOpen ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
`;

const MenuIcon = styled.div`
  margin-right: 12px;
  font-size: 18px;
`;

const ChevronIcon = styled.span<{ isOpen: boolean }>`
  transition: transform 0.2s ease;
  transform: rotate(${props => props.isOpen ? '90deg' : '0deg'});
  font-size: 12px;
`;

const MenuContent = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  margin-top: 8px;
`;

const MenuItem = styled(Link)<{ isActive: boolean }>`
  display: block;
  padding: 8px 24px 8px 48px;
  color: ${props => props.isActive ? 'white' : 'rgba(255, 255, 255, 0.8)'};
  text-decoration: none;
  font-size: 13px;
  transition: all 0.2s ease;
  border-left: ${props => props.isActive ? '3px solid #fff' : 'none'};
  background: ${props => props.isActive ? 'rgba(255, 255, 255, 0.15)' : 'transparent'};
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }
`;

interface MenuData {
  title: string;
  icon: string;
  items: Array<{
    label: string;
    path: string;
  }>;
}

const menuData: MenuData[] = [
  {
    title: 'SMS',
    icon: '�',
    items: [
      { label: 'Page 1', path: '/sms/page1' },
      { label: 'Page 2', path: '/sms/page2' },
      { label: 'Page 3', path: '/sms/page3' }
    ]
  },
  {
    title: 'Reports',
    icon: '�',
    items: [
      { label: 'Page 1', path: '/reports/page1' },
      { label: 'Page 2', path: '/reports/page2' },
      { label: 'Page 3', path: '/reports/page3' }
    ]
  },
  {
    title: 'Shared State Demo',
    icon: '🔗',
    items: [
      { label: 'User Management', path: '/user-demo' },
      { label: 'Shared Components', path: '/shared-info' }
    ]
  }
];

const Sidebar: React.FC = () => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    SMS: true,
    Reports: false,
    'Shared State Demo': false
  });
  const location = useLocation();

  const toggleMenu = (menuTitle: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuTitle]: !prev[menuTitle]
    }));
  };

  const isMenuItemActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <Logo>Micro Frontends</Logo>
        <Subtitle>Enterprise Dashboard</Subtitle>
      </SidebarHeader>
      
      {menuData.map((menu) => (
        <MenuSection key={menu.title}>
          <MenuHeader 
            isOpen={openMenus[menu.title]} 
            onClick={() => toggleMenu(menu.title)}
          >
            <MenuTitle>
              <MenuIcon>{menu.icon}</MenuIcon>
              {menu.title}
            </MenuTitle>
            <ChevronIcon isOpen={openMenus[menu.title]}>▶</ChevronIcon>
          </MenuHeader>
          <MenuContent isOpen={openMenus[menu.title]}>
            {menu.items.map((item) => (
              <MenuItem
                key={item.path}
                to={item.path}
                isActive={isMenuItemActive(item.path)}
              >
                {item.label}
              </MenuItem>
            ))}
          </MenuContent>
        </MenuSection>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

