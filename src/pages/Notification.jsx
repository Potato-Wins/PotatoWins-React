import React from "react";
import styled from "styled-components";
import Notice from "../components/Notification/Notice.jsx" 
import LeftSideBar from "../components/LeftSideBar.jsx";
import Header from "../components/Header.jsx";

// 스타일 정의
const NotificationContainer = styled.div`
  background-color: #261e35; /* 전체 배경 */
  min-height: 100vh;
  margin-top:50px;
  padding: 20px;
  margin-left:0px;
  flex-direction: column;
  align-items: center;
  color: #e0e0e0;
  font-family: Arial, sans-serif;
`;


const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Icon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  width: 100%;
  margin-left:0px;

  max-width: 800px;
`;

// App 컴포넌트 정의
function Notification() {
  return (
    <NotificationContainer>
      <Header/>
      <LeftSideBar/>
      <ContentContainer>
        <Notice />
      </ContentContainer>
    </NotificationContainer>
    
  );
}

export default Notification;
