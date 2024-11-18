import React,{ useState }  from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.svg?react";

const SidebarContainer = styled.div`

`
const Sidebar = styled.div`
  width: ${(props) => (props.isOpen ? "80px" : "0")};
  background-color: #261e35;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => (props.isOpen ? "20px 0" : "0")};
  overflow: hidden;
  transition: width 0.3s ease;
  position: fixed; /* 사이드바 고정 */
  left: 0;
  top: 0;
  height: 100%;
  z-index: 20;
  border-right: 1px solid #505050;
`;
const ToggleButton = styled.button`
  position: absolute;
  top: 350px;
  left: ${(props) => (props.isOpen ? "70px" : "0.2px")};
  background-color: #29263a;
  border: none;
  color: white;
  font-size: 13px;
  cursor: pointer;
  padding: 5px;
  border-radius: 100px;
  transition: left 0.3s ease;
  z-index: 30;
`;

function LeftSideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 <ToggleButton onClick={toggleSidebar} isOpen={isSidebarOpen}>
        {isSidebarOpen ? "<" : ">"}
      </ToggleButton>

  return (
    <SidebarContainer>
      <Sidebar isOpen={isSidebarOpen}>
        <Logo />
        {/* 각 섹션에 대한 아이콘 추가 */}
      </Sidebar>
      <ToggleButton onClick={toggleSidebar} isOpen={isSidebarOpen}>
        {isSidebarOpen ? "<" : ">"}
      </ToggleButton>

    </SidebarContainer>
  );
}

export default LeftSideBar;