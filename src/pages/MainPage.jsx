import React, { useState } from "react";
import styled from "styled-components";
import Leftbar from "../components/Leftbar.jsx";
import RightSideBar from "../components/RightSideBar.jsx";
import Data from "../components/Data.jsx";
import Header from "../components/Header.jsx";

const DashboardContainer = styled.div`
  display: flex;
  background-color: #261e35;
  color: white;
  position: relative;
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

const MainContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: ${(props) => (props.isSidebarOpen ? "90px" : "10px")};
  padding: 20px;
  margin-top: 70px;
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

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <DashboardContainer>
      <Leftbar isOpen={isSidebarOpen} />
      <ToggleButton
        onClick={toggleSidebar}
        isOpen={isSidebarOpen}
      ></ToggleButton>

      <MainContent isSidebarOpen={isSidebarOpen}>
        <Header />

        <DataContainer>
          <Data title="온도" data={dummyData} type="line" />
          <Data title="압력" data={dummyData} type="bar" />
          <Data title="탁도" data={dummyData} type="bar" />
          <Data title="DDM" data={dummyData} type="line" />
        </DataContainer>
      </MainContent>

      <RightSideBar />
    </DashboardContainer>
  );
}

export default Dashboard;
