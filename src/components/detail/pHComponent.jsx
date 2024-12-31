import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchSensorData } from "../../api/sensorData";

const PHInfo = styled.div`
  margin-bottom: 30px;
  padding: 10px 20px;
  background-color: rgba(134, 139, 147, 0.2);
  border-radius: 10px;
  text-align: left;
`;

const PHComponent = () => {
  const [phData, setPHData] = useState({
    value: null,
    message: "",
  });
  const [loadingPH, setLoadingPH] = useState(true);

  const extractMessageContent = (message) => {
    const match = message.match(/\((.*?)\)/);
    return match ? match[1] : "No data available";
  };

  useEffect(() => {
    const fetchPHData = async () => {
      try {
        const response = await fetchSensorData();
        if (response && response.pH) {
          const { value, message } = response.pH;
          setPHData({
            value: value ?? "N/A",
            message: extractMessageContent(message),
          });
        }
      } catch (error) {
        console.error("pH 데이터를 가져오는 데 실패:", error);
      } finally {
        setLoadingPH(false);
      }
    };

    fetchPHData();
  }, []);

  return (
    <PHInfo>
      <h4>pH Information</h4>
      <p>
        <strong>Value:</strong> {phData.value ?? "N/A"}
      </p>
      <p>
        <strong>Message:</strong> {phData.message ?? "No data available"}
      </p>
    </PHInfo>
  );
};

export default PHComponent;
