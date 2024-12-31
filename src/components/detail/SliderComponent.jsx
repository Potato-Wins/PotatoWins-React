import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchSensorData } from "../../api/sensorData";

const SliderContainer = styled.div`
  background-color: rgba(134, 139, 147, 0.2);
  padding: 20px;
  border-radius: 10px;
  width: 548px;
  text-align: center;
  color: #fff;
  margin: 30px 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  margin-right: 10px;
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const SliderRound = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) =>
    props.checked ? "rgba(134, 139, 147, 0.5);" : "#ccc"};
  border-radius: 20px;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background-color: #fff;
    bottom: 3px;
    left: ${(props) => (props.checked ? "16px" : "3px")};
    transition: 0.4s;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

const RangeSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  background: #737373;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  margin: 0 10px;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 8px;
    height: 20px;
    border-radius: 20%;
    background-color: #ffc76d;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
`;

const GaugeLabel = styled.span`
  position: absolute;
  left: calc(${(props) => props.value}% - 10px);
  top: -25px;
  background-color: #fff;
  color: #000;
  padding: 2px 5px;
  border-radius: 5px;
  font-size: 12px;
`;

const Marks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  padding: 0 10px;

  span {
    flex: 1;
    text-align: center;
  }
`;

const PowerButton = styled.button`
  background: ${(props) =>
    props.on ? " rgba(134, 139, 147, 0.2);" : "rgba(134, 139, 147, 0.7);"};
  border: none;
  border-radius: 50%;
  color: white;
  width: 40px;
  height: 40px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 16px;
`;

const PowerStatus = styled.p`
  margin-top: 10px;
`;

const SaltInfo = styled.div`
  margin-bottom: 30px;
  padding: 10px 20px;
  background-color: rgba(134, 139, 147, 0.1);
  border-radius: 10px;
  text-align: left;
`;

const SliderComponent = () => {
  const [sliderValue, setSliderValue] = useState(75);
  const [isAIEnabled, setIsAIEnabled] = useState(true);
  const [isPowerOn, setIsPowerOn] = useState(false);
  const [saltData, setSaltData] = useState({
    requiredWater: null,
    message: "",
    value: null,
  });
  const [loading, setLoading] = useState(true);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const toggleAI = () => {
    setIsAIEnabled(!isAIEnabled);
  };

  const togglePower = () => {
    setIsPowerOn(!isPowerOn);
  };

  const extractMessageContent = (message) => {
    const match = message.match(/\((.*?)\)/);
    return match ? match[1] : "No data available";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSensorData();
        if (response) {
          const { salt } = response;
          setSaltData({
            requiredWater: salt.requiredWater ?? "N/A",
            message: extractMessageContent(salt.message),
            value: salt.value ?? "N/A",
          });
        }
      } catch (error) {
        console.error("Failed to fetch sensor data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <SliderContainer>
      <Header>
        <h3>Salt Information</h3>
        <ToggleContainer>
          <Label>AI</Label>
          <Switch>
            <SwitchInput
              type="checkbox"
              checked={isAIEnabled}
              onChange={toggleAI}
            />
            <SliderRound checked={isAIEnabled} />
          </Switch>
        </ToggleContainer>
      </Header>
      <SaltInfo>
        <p>
          <strong>필요한 물의 양:</strong> {saltData.requiredWater ?? "N/A"} ml
        </p>
        <p>
          <strong>메세지:</strong> {saltData.message ?? "No data available"}
        </p>
        <p>
          <strong>현재 염분:</strong> {saltData.value ?? "N/A"}
        </p>
      </SaltInfo>
      <SliderWrapper>
        <GaugeLabel value={sliderValue}>{sliderValue}</GaugeLabel>
        <span>0</span>
        <RangeSlider
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <span>100</span>
      </SliderWrapper>
      <Marks>
        <span>25</span>
        <span>50</span>
        <span>75</span>
      </Marks>
      <PowerButton on={isPowerOn} onClick={togglePower}>
        ⏻
      </PowerButton>
      <PowerStatus>{isPowerOn ? "Water ON" : "Water OFF"}</PowerStatus>
    </SliderContainer>
  );
};

export default SliderComponent;
