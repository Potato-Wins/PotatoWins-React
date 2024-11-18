import React from 'react';
import styled from 'styled-components';
import Search from './RightSidebar/Search.jsx';
import Weather from './RightSidebar/Weather.jsx';
import Alarm from './RightSidebar/Alarm.jsx';

const NotificationContainerWrapper = styled.div`
  width: 300px;
  margin-left: 0px;
  color: #e0e0e0;
  z-index: 5;
  border-left: 0.3px solid #505050;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  padding-top: 90px;
`;

const Notification = styled.div`
  background-color: rgba(134, 139, 147, 0.2);
  border-radius: 20px;
  border: 0.3px solid #505050;
  padding: 15px;
  padding-right: 0px;
  margin-bottom: 20px;
`;

const NotificationContainer = () => (
  <NotificationContainerWrapper>
    <Notification>
      <Search />
    </Notification>
    <Notification>
      <Weather />
    </Notification>
    <Notification>
      <Alarm />
    </Notification>
  </NotificationContainerWrapper>
);

export default NotificationContainer;
