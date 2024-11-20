import React, { useState } from "react";
import styled from "styled-components";
import RightSideBar from "../components/RightSideBar.jsx";
import Data from "../components/Data.jsx";
import Leftbar from "../components/Leftbar.jsx";
import GaugeComponent from "../components/detail/GaugeComponent.jsx";
import SliderComponent from "../components/detail/SliderComponent.jsx";

const DashboardContainer = styled.div`
  display: flex;
  background-color: #261e35;
  color: white;
  height: 100vh;
  position: relative;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 350px;
  left: ${(props) => (props.isOpen ? "100px" : "10px")};
  background-color: #41475a;
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
  margin-left: ${(props) => (props.isSidebarOpen ? "100px" : "10px")};
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
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  max-width: 100%;
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
      <Leftbar isOpen={isSidebarOpen} />

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
      <RightSideBar />
    </DashboardContainer>
  );
};

export default DetailPage;
