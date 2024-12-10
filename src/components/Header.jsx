import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0px;
  background-color: black;
  padding: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center; /* 중앙 정렬 */
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  border-bottom: 0.3px solid #505050;
`;

const Header = () => {
  return <HeaderContainer>L M S</HeaderContainer>;
};

export default Header;
