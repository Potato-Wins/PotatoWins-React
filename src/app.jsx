import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/detailPage";
import Notification from "./pages/Notification";
import FishDetailPage from "./pages/FishDetailPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/settings" element={<FishDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
