import React from "react";
import styled from "styled-components";
import { notifications } from "../Notification/NoticeData"; // 알림 데이터 가져오기

// 스타일 정의
const AlarmContainer = styled.div`
  border-radius: 10px;
  color: #e0e0e0;
  max-width: 400px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
  margin-left: 10px;
`;

const AlarmTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const AlarmList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AlarmItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  margin-bottom: 30px;
  color: #a0cdff;
  width: 250px; /* 너비를 적절히 조정 */
`;

const AlarmCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => (props.type === "warning" ? "red" : "green")};
`;

const AlarmMessage = styled.span`
  display: flex;
  align-items: center;
`;

const AlarmTime = styled.span`
  font-size: 0.9rem;
  color: #5581b2;
`;

function Alarm() {
  
  // 최신 3개 알림 추출
  const latestNotifications = notifications.slice(0, 3);
  
  return (
    <AlarmContainer>
      <AlarmTitle>Notification</AlarmTitle>
      <AlarmList>
        {latestNotifications.map((notification, index) => (
          <AlarmItem key={index}>
            <AlarmMessage>
              <AlarmCircle type={notification.type} />
              {notification.message}
            </AlarmMessage>
            <AlarmTime>{notification.time}</AlarmTime>
          </AlarmItem>
        ))}
      </AlarmList>
    </AlarmContainer>
  );
}

export default Alarm;
