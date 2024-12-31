import React, { useState } from "react";
import styled from "styled-components";
import RightSideBar from "../components/RightSideBar.jsx";
import PHComponent from "../components/detail/pHComponent.jsx";
import Leftbar from "../components/Leftbar.jsx";
import GaugeComponent from "../components/detail/GaugeComponent.jsx";
import SliderComponent from "../components/detail/SliderComponent.jsx";
import Header from "../components/Header.jsx";

const DashboardContainer = styled.div`
  display: flex;
  background-color: black;
  color: white;
  position: relative;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 380px;
  left: ${(props) => (props.isOpen ? "75px" : "10px")};
  background-color: black;
  border: 0.3px solid #505050;
  color: #505050;
  font-size: 20px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 50%;
  transition: left 0.3s ease;
  z-index: 30;
  width: 30px;
  height: 30px;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: ${(props) => (props.isSidebarOpen ? "100px" : "10px")};
  padding: 20px;
  margin-top: 70px;
`;

const DataContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  max-width: 100%;
`;

const IframeContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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
        <Header />
        <DataContainer>
          <IframeContainer>
            <iframe
              src="http://localhost:5601/app/dashboards#/view/ec1d0256-094e-4159-a1fd-f4d0dba060da?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))&hide-filter-bar=true"
              height="400"
              width="1000"
              title="Kibana Dashboard"
              style={{ border: "none" }}
            ></iframe>
          </IframeContainer>
        </DataContainer>
        <DataContainer>
          <SliderComponent />
          <div>
            <GaugeComponent />
            <PHComponent />
          </div>
        </DataContainer>
      </MainContent>
      <RightSideBar />
    </DashboardContainer>
  );
};

export default DetailPage;
