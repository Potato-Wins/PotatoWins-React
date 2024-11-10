import React, { useState } from 'react';
import styled from 'styled-components';
import Data from '../components/Data.jsx';
import Weather from '../components/Weather.jsx';
import  Logo from '../assets/Logo.svg?react'

const DashboardContainer = styled.div`
  display: flex;
  background-color: #1d1b31;
  color: white;
  height: 100vh;
  position: relative;
`;

const Sidebar = styled.div`
  width: ${(props) => (props.isOpen ? '80px' : '0')};
  background-color: #29263a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => (props.isOpen ? '20px 0' : '0')};
  overflow: hidden;
  transition: width 0.3s ease;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  left: ${(props) => (props.isOpen ? '80px' : '10px')};
  background-color: #29263a;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  transition: left 0.3s ease;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const DataContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const NotificationContainer = styled.div`
  width: 300px;
  margin-left: 20px;
  color: #e0e0e0;
`;

const Notification = styled.div`
  background-color: #2a2d3e;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
`;

const dummyData = [
  { name: 'Jan', uv: 40, pv: 24 },
  { name: 'Feb', uv: 30, pv: 13 },
  { name: 'Mar', uv: 20, pv: 98 },
  { name: 'Apr', uv: 27, pv: 39 },
];

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <DashboardContainer>
      <Sidebar isOpen={isSidebarOpen}>
        <Logo/>
        {/* 각 섹션에 대한 아이콘 추가 */}
      </Sidebar>
      <ToggleButton onClick={toggleSidebar} isOpen={isSidebarOpen}>
        {isSidebarOpen ? '<' : '>'}
      </ToggleButton>
      <MainContent>
        <Header>LMS 대시보드</Header>
        <DataContainer>
          <Data title="온도" data={dummyData} type="line" />
          <Data title="압력" data={dummyData} type="bar" />
          <Data title="탁도" data={dummyData} type="bar" />
          <Data title="DDM" data={dummyData} type="line" />
          {/* 필요한 만큼 Data 컴포넌트 추가 */}
        </DataContainer>
      </MainContent>
      <NotificationContainer>
        <Notification>
          <Weather/>
        </Notification>
        <Notification>
          <div>알림</div>
          <ul>
            <li>14:30에 비 예보</li>
            <li>새로운 메시지가 도착했습니다</li>
            <li>20분 후 음식이 도착합니다</li>
          </ul>
        </Notification>
      </NotificationContainer>
    </DashboardContainer>
  );
}

export default Dashboard;
