import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(134, 139, 147, 0.2);
  border-radius: 10px;
  border: 1px solid #737373;
  padding: 15px;
  max-width: 800px;
  margin: auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 26px;
`;

const Video = styled.video`
  max-width: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

const FishVideo = ({ videoSrc }) => {
  return (
    <Container>
      <Title>The condition of a fish</Title>
      <Video controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </Container>
  );
};

export default FishVideo;
