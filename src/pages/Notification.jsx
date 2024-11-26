import React, { useState } from "react";
import styled from "styled-components";
import Notice from "../components/Notification/Notice.jsx";
import Leftbar from "../components/Leftbar.jsx";
import Header from "../components/Header.jsx";

const DashboardContainer = styled.div`
  display: flex;
  background-color: #261e35; /* 전체 배경 */
  min-height: 100vh;
  color: #e0e0e0;
  font-family: Arial, sans-serif;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 350px;
  left: ${(props) => (props.isOpen ? "90px" : "10px")};
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

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: ${(props) => (props.isSidebarOpen ? "90px" : "10px")}; /* 사이드바가 열릴 때 콘텐츠 이동 */
  max-width: 800px;
`;

// App 컴포넌트 정의
function Notification() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <DashboardContainer>
      {/* Leftbar 추가 */}
      <Leftbar isOpen={isSidebarOpen} />

      {/* 토글 버튼 */}
      <ToggleButton onClick={toggleSidebar} isOpen={isSidebarOpen}>
        {isSidebarOpen ? "<" : ">"}
      </ToggleButton>

      {/* 헤더 */}
      <Header />

      {/* 콘텐츠 */}
      <ContentContainer isSidebarOpen={isSidebarOpen}>
        <Notice />
      </ContentContainer>
    </DashboardContainer>
  );
}

export default Notification;
