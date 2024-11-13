import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.svg?react";
import NotificationCom from "../components/NotificationCom.jsx";
import Data from "../components/Notification/Data.jsx";
import SliderComponent from "../components/detail/SliderComponent.jsx";
import GaugeComponent from "../components/detail/GaugeComponent.jsx";

const DashboardContainer = styled.div`
  display: flex;
  background-color: #261e35;
  color: white;
  height: 100vh;
  position: relative;
`;

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

const MainContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: ${(props) => (props.isSidebarOpen ? "80px" : "0")};
  padding: 20px;
  margin-top: 70px;
`;

const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0px;
  background-color: #261e35;
  padding: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  border-bottom: 0.3px solid #505050;
`;

const DataContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const dummyData = [
  { name: "Jan", uv: 40, pv: 24 },
  { name: "Feb", uv: 30, pv: 13 },
  { name: "Mar", uv: 20, pv: 98 },
  { name: "Apr", uv: 27, pv: 39 },
];

const DetailPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <DashboardContainer>
      <Sidebar isOpen={isSidebarOpen}>
        <Logo />
        {/* 각 섹션에 대한 아이콘 추가 */}
      </Sidebar>
      <ToggleButton onClick={toggleSidebar} isOpen={isSidebarOpen}>
        {isSidebarOpen ? "<" : ">"}
      </ToggleButton>

      <MainContent isSidebarOpen={isSidebarOpen}>
        <Header>L M S</Header>

        <DataContainer>
          <Data title="염도" data={dummyData} type="line" />
        </DataContainer>
        <DataContainer>
          <SliderComponent></SliderComponent>
          <GaugeComponent></GaugeComponent>
        </DataContainer>
      </MainContent>
      <NotificationCom />
    </DashboardContainer>
  );
};

export default DetailPage;
