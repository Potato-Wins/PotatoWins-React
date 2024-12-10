import React, { useState } from "react";
import styled from "styled-components";

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
  margin-bottom: 20px;
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
  background-color: ${(props) => (props.checked ? "rgba(134, 139, 147, 0.5);" : "#ccc")};
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
  background: ${(props) => (props.on ? " rgba(134, 139, 147, 0.2);" : "rgba(134, 139, 147, 0.7);")};
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

const SliderComponent = () => {
  const [sliderValue, setSliderValue] = useState(75);
  const [isAIEnabled, setIsAIEnabled] = useState(true);
  const [isPowerOn, setIsPowerOn] = useState(false);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const toggleAI = () => {
    setIsAIEnabled(!isAIEnabled);
  };

  const togglePower = () => {
    setIsPowerOn(!isPowerOn);
  };

  return (
    <SliderContainer>
      <Header>
        <h3>ADJUSTMENT</h3>
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
      <SliderWrapper>
        <span>0%</span>
        <RangeSlider
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <span>100%</span>
      </SliderWrapper>
      <Marks>
        <span>25%</span>
        <span>50%</span>
        <span>75%</span>
      </Marks>
      <PowerButton on={isPowerOn} onClick={togglePower}>
        ⏻
      </PowerButton>
      <PowerStatus>{isPowerOn ? "ON" : "OFF"}</PowerStatus>
    </SliderContainer>
  );
};

export default SliderComponent;
