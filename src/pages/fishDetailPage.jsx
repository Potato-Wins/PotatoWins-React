import React, { useState } from "react";
import styled from "styled-components";
import RightSideBar from "../components/RightSideBar.jsx";
import Data from "../components/Data.jsx";
import Leftbar from "../components/Leftbar.jsx";
import FishVideo from "../components/fishDetail/FishVideo.jsx";
import FishTable from "../components/fishDetail/FishTable.jsx";
import Header from "../components/Header.jsx"
const DashboardContainer = styled.div`
  display: flex;
  background-color: black;
  color: white;
  height: 100vh;
  position: relative;
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

const dummyData = [
  { name: "Jan", uv: 40, pv: 24 },
  { name: "Feb", uv: 30, pv: 13 },
  { name: "Mar", uv: 20, pv: 98 },
  { name: "Apr", uv: 27, pv: 39 },
];

const FishDetailPage = () => {
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
        <Header></Header>
        <DataContainer>
          <FishVideo imageSrc={"../assets/fish-video.png"}></FishVideo>
          <FishTable></FishTable>
        </DataContainer>
      </MainContent>
    </DashboardContainer>
  );
};

export default FishDetailPage;
