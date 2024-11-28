import React, { useState } from "react";
import styled from "styled-components";
import Leftbar from "../components/Leftbar.jsx";
import RightSideBar from "../components/RightSideBar.jsx";
import Data from "../components/Data.jsx";
import Header from "../components/Header.jsx";

const DashboardContainer = styled.div`
  display: flex;
  background-color: black;
  color: white;
  position: relative;
  height: 100vh; /* 화면 전체 높이로 설정 */
  width: 100%; /* 너비도 100%로 설정 */
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


const MainContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: ${(props) => (props.isSidebarOpen ? "90px" : "10px")};
  padding: 20px;
  margin-top: 70px;
`;

// const DataContainer = styled.div`
//   display: flex;
//   gap: 20px;
//   flex-wrap: wrap;
// `;

const IframeContainer = styled.div`
background-color: #3C354A;
  width: 100%;
  height: 10000px;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

// const dummyData = [
//   { name: "Jan", uv: 40, pv: 24 },
//   { name: "Feb", uv: 30, pv: 13 },
//   { name: "Mar", uv: 20, pv: 98 },
//   { name: "Apr", uv: 27, pv: 39 },
// ];

function Dashboard() {
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

        {/* <DataContainer>
          <Data title="온도" data={dummyData} type="line" />
          <Data title="압력" data={dummyData} type="bar" />
          <Data title="탁도" data={dummyData} type="bar" />
          <Data title="DDM" data={dummyData} type="line" />
        </DataContainer> */}

        {/* Kibana iframe 추가 */}
        <IframeContainer>
        <iframe
          src="http://localhost:5601/app/dashboards#/view/124287db-de02-4079-90f4-3036377f8b8d?embed=true&_g=(refreshInterval:(pause:!f,value:60000),time:(from:now-15m,to:now))"
          title="Kibana Dashboard"
          style={{ backgroundColor: "#3C354A" }} /* iframe 내부 스타일 */

          ></iframe>
        </IframeContainer>
      </MainContent>

      <RightSideBar />
    </DashboardContainer>
  );
}

export default Dashboard;
