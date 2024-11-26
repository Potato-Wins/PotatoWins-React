import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const SidebarContainer = styled.div`
  width: ${(props) => (props.isOpen ? "90px" : "0px")};
  background-color: #261e35;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  overflow: hidden;
  transition: width 0.3s ease;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 20;
  border-right: 1px solid #505050;
`;

const SidebarLogo = styled.div`
  margin: 20px;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 40px;
  width: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative;
  border-radius: 30px;
  background-color: ${(props) => (props.active ? "#372c44" : "transparent")};
  text-decoration: none;

  &:hover {
    background-color: #372c44;
  }

  img {
    width: 24px;
    height: 25px;
  }
`;

const Leftbar = ({ isOpen }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarLogo>
        <img src="/assets/Logo.svg" alt="Logo" />
      </SidebarLogo>

      <NavItem to="/" active={isActive("/")}>
        <img
          src={
            isActive("/")
              ? "/assets/nav-home-active.svg"
              : "/assets/nav-home.svg"
          }
          alt="Dashboard Icon"
        />
      </NavItem>

      <NavItem to="/detail" active={isActive("/detail")}>
        <img
          src={
            isActive("/detail")
              ? "/assets/nav-detail-active.svg"
              : "/assets/nav-detail.svg"
          }
          alt="Detail Icon"
        />
      </NavItem>

      <NavItem to="/notification" active={isActive("/notification")}>
        <img
          src={
            isActive("/notification")
              ? "/assets/nav-bag-active.svg"
              : "/assets/nav-bag.svg"
          }
          alt="Reports Icon"
        />
      </NavItem>

      <NavItem to="/settings" active={isActive("/settings")}>
        <img
          src={
            isActive("/settings")
              ? "/assets/nav-setting-active.svg"
              : "/assets/nav-setting.svg"
          }
          alt="Settings Icon"
        />
      </NavItem>
    </SidebarContainer>
  );
};

export default Leftbar;
