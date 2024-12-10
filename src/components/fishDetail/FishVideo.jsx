import React from "react";
import styled from "styled-components";

const Container = styled.div`
`;

const Title = styled.h3`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 26px;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

const FishVideo = ({ imageSrc }) => {
  return (
    <Container>
      <Title>The condition of a fish</Title>
      <Image src={imageSrc} alt="Fish Condition" />
    </Container>
  );
};

export default FishVideo;
