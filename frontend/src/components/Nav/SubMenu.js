import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLinkBase = styled.div`
  display: flex;
  color: white;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    border-left: 4px solid #f5f5f5;
    color: #a855f7;
  }
`;

const SidebarLink = styled(Link)`
  display: flex;
  color: white;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    border-left: 4px solid #f5f5f5;
    cursor: pointer;
    color: #a855f7;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #6d28d9;
    cursor: pointer;
  }
`;

const SubMenu = ({ item, onNavigate, onCloseSidebar }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    if (onNavigate && sectionId) {
      onNavigate(sectionId);
      if (onCloseSidebar) onCloseSidebar();
    }
  };

  const useScroll = onNavigate && item.sectionId;

  return (
    <>
      {useScroll ? (
        <SidebarLinkBase
          onClick={(e) => handleSectionClick(e, item.sectionId)}
        >
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </SidebarLinkBase>
      ) : (
        <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
          {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
        </SidebarLink>
      )}
      {subnav &&
        item.subNav &&
        item.subNav.map((subItem, index) => (
          <DropdownLink to={subItem.path} key={index}>
            {subItem.icon}
            <SidebarLabel>{subItem.title}</SidebarLabel>
          </DropdownLink>
        ))}
    </>
  );
};

export default SubMenu;