import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
background-color: rgba(134, 139, 147, 0.2);
  padding: 20px;
  border-radius: 10px;
  width: 310px;
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

const GaugeWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  margin: 0 auto;
`;

const GaugeSVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const BackgroundArc = styled.circle`
  fill: none;
  stroke: #6359e9;
  stroke-width: 20;
`;

const ForegroundArc = styled.circle`
  fill: none;
  stroke: #3a3a5a;
  stroke-width: 20;
  stroke-dasharray: ${(props) => props.circumference};
  stroke-dashoffset: ${(props) => props.circumference * (1 - props.value)};
  transition: stroke-dashoffset 0.5s ease;
  transform-origin: 50% 50%;
`;

const ValueText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
`;

const RangeSliderContainer = styled.div`
  position: relative;
  margin: 30px 0;
`;

const RangeSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  background: #737373;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  padding-top: 10px;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 7px;
    height: 24px;
    border-radius: 10%;
    background-color: #ffc76d;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
`;

const PercentageLabels = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 105%;
  top: -20px;
`;

const SliderValue = styled.div`
  position: absolute;
  top: 30px;
  left: ${(props) => props.value}%;
  transform: translateX(-50%);
  color: #ffc76d;
  font-size: 14px;
  font-weight: bold;
`;

const GaugeComponent = () => {
  const [value, setValue] = useState(0.75);
  const radius = 90;
  const circumference = 1 * Math.PI * radius;

  const handleSliderChange = (e) => {
    setValue(e.target.value / 100);
  };

  return (
    <Container>
      <Header>
        <h3>Appropriate value</h3>
      </Header>
      <GaugeWrapper>
        <GaugeSVG>
          <BackgroundArc cx="100" cy="100" r={radius} />
          <ForegroundArc
            cx="100"
            cy="100"
            r={radius}
            value={value}
            circumference={circumference}
          />
        </GaugeSVG>
        <ValueText>{Math.round(value * 100)}%</ValueText>
      </GaugeWrapper>
      <RangeSliderContainer>
        <SliderValue value={value * 100}>
          {Math.round(value * 100)}%
        </SliderValue>
        <RangeSlider
          type="range"
          min="0"
          max="100"
          value={value * 100}
          onChange={handleSliderChange}
        />
        <PercentageLabels>
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </PercentageLabels>
      </RangeSliderContainer>
    </Container>
  );
};

export default GaugeComponent;
