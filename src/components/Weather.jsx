import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// 스타일 정의
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  color: #ffffff;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Temperature = styled.h2`
  font-size: 3rem;
  color: #ffffff;
  font-weight: bold;
  margin: 0;
`;

const TemperatureRange = styled.div`
  font-size: 1rem;
  color: #90caf9;
  margin-top: 5px;
`;

const MaxTemperature = styled.span`
  color: #ff8a65;
`;

const WeatherDescription = styled.p`
  font-size: 1.2rem;
  color: #b0bec5;
  margin: 5px 0;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 10px;
`;

const LoadingText = styled.p`
  font-size: 1.2rem;
  color: #888;
  font-weight: bold;
`;

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      temp_max: 0,
      temp_min: 0,
      desc: '',
      icon: '',
      loading: true,
      location: '',
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.fetchWeatherData, this.handleError);
    } else {
      console.log("이 브라우저에서는 위치 서비스를 지원하지 않습니다.");
    }
  }

  fetchWeatherData = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    axios
      .get(url)
      .then((responseData) => {
        const data = responseData.data;
        this.setState({
          temp: data.main.temp,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
          desc: data.weather[0].description,
          icon: data.weather[0].icon,
          loading: false,
          location: data.name,
        });
      })
      .catch((error) => console.log(error));
  };

  handleError = (error) => {
    console.error(error);
    this.setState({ loading: false });
  };

  render() {
    const imgSrc = `https://openweathermap.org/img/w/${this.state.icon}.png`;
    const tempCelsius = (this.state.temp - 273.15).toFixed(0);
    const tempMaxCelsius = (this.state.temp_max - 273.15).toFixed(0);
    const tempMinCelsius = (this.state.temp_min - 273.15).toFixed(0);

    if (this.state.loading) {
      return <LoadingText>로딩 중...</LoadingText>;
    } else {
      return (
        <Wrapper>
          <h3>{this.state.location}</h3>
          <TopSection>
            <TextWrapper>
              <Temperature>{tempCelsius}°C</Temperature>
              <TemperatureRange>
                <span>{tempMinCelsius}°</span> / <MaxTemperature>{tempMaxCelsius}°</MaxTemperature>
              </TemperatureRange>
              <WeatherDescription>{this.state.desc}</WeatherDescription>
            </TextWrapper>
            <Icon src={imgSrc} alt="날씨 아이콘" />
          </TopSection>
        </Wrapper>
      );
    }
  }
}

export default Weather;
