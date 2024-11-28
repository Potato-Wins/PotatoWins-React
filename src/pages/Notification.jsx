import React, { useState } from "react";
import styled from "styled-components";
import Notice from "../components/Notification/Notice.jsx";
import Leftbar from "../components/Leftbar.jsx";
import Header from "../components/Header.jsx";

const DashboardContainer = styled.div`
  display: flex;
  background-color: black; /* 전체 배경 */
  min-height: 100vh;
  color: #e0e0e0;
  font-family: Arial, sans-serif;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 380px;
  left: ${(props) => (props.isOpen ? "75px" : "10px")};
  background-color: black;
  border: 0.3px solid #505050; /* 테두리 색과 두께 */
  color: #505050;
  font-size: 20px; /* 글자 크기 */
  cursor: pointer;
  padding: 5px 10px; /* 버튼 안쪽 여백 */
  border-radius: 50%; /* 원형 버튼 */
  transition: left 0.3s ease;
  z-index: 30;
  width: 30px; /* 버튼 너비 */
  height: 30px; /* 버튼 높이 */
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
