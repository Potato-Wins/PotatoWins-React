import React from "react";
import styled from "styled-components";
import { notifications } from "./NoticeData"; 

// 스타일 정의
const NoticeContainer = styled.div`

  border-radius: 10px;
  color: #e0e0e0;
  max-width: 400px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
  margin-left:100px;

`;

const NoticeTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const NoticeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NotificationItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  border : 1px solid #737373;
  padding: 10px 15px;
  margin-bottom: 30px;
  color: #A0CDFF;
  background-color:rgba(134,139,147,0.2);
  width:1070px;
`;

const NoticeCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => (props.type === "warning" ? "red" : "green")};
`;

const NoticeMessage = styled.span`
  display: flex;
  align-items: center;
`;

const NoticeTime = styled.span`
  font-size: 0.9rem;
  color: #5581B2;
`;



// 컴포넌트 정의
function Notice() {
  return (
    <NoticeContainer>
      <NoticeTitle>Notification</NoticeTitle>
      <NoticeList>
        {notifications.map((notification, index) => (
          <NotificationItem key={index}>
            <NoticeMessage>
              <NoticeCircle type={notification.type} />
              {notification.message}
            </NoticeMessage>
            <NoticeTime>{notification.time}</NoticeTime>
          </NotificationItem>
        ))}
      </NoticeList>
    </NoticeContainer>
  );
}

export default Notice;
