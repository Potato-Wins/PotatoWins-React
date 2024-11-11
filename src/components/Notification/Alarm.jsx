// src/components/Alarm.jsx
import React from 'react';
import styled from 'styled-components';

const AlarmContainer = styled.div`
  border-radius: 8px;
  padding: 5px;
  color: #e0e0e0;
  
`;
const Alarmtitle =styled.div`
align-self: flex-start;
font-size: 1rem;
font-weight: bold;
`;
const List = styled.ul`
 padding:10px;
 `;

const NotificationItem = styled.li`
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => (props.type === 'warning' ? 'red' : 'green')};
`;


const notifications = [
  { message: '14:30에 비 예보', type: 'warning' },
  { message: '새로운 메시지가 도착했습니다', type: 'safe' },
  { message: '20분 후 음식이 도착합니다', type: 'safe' },
];

function Alarm() {
  return (
    <AlarmContainer>
      <Alarmtitle>Notification</Alarmtitle>
      <List>
        {notifications.map((notification, index) => (
          <NotificationItem key={index}>
            <Circle type={notification.type} />
            {notification.message}
          </NotificationItem>
        ))}
      </List>
    </AlarmContainer>
  );
}

export default Alarm;
