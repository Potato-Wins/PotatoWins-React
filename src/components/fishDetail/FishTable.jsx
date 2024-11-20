import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3c354a;
  border-radius: 10px;
  border: 1px solid #737373;
  padding: 15px;
  max-width: 800px;
  margin: auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  height: 630px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 8px;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #737373; /* 선 색상 */
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  color: #e0e0e0;
  font-family: Arial, sans-serif;
`;

const TableHead = styled.thead`
  background-color: #3c354a;
  color: #ffffff;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #0a1330;
  }

  &:nth-child(odd) {
    background-color: #3c354a;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  text-align: center;
  font-size: 14px;

  &.status {
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const TableHeaderCell = styled.th`
  padding: 12px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
`;

const StatusBadge = styled.span`
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.color || "#ffffff"};
  background-color: ${(props) => props.bgColor || "transparent"};
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  accent-color: #8c64f8;
`;

const fishData = [
  { id: "#1532", date: "Dec 30, 10:06 AM", status: "Good" },
  { id: "#1531", date: "Dec 29, 2:59 AM", status: "Bad" },
  { id: "#1403", date: "Dec 14, 15:19 AM", status: "Normal" },
  { id: "#1532", date: "Dec 30, 10:06 AM", status: "Bad" },
  { id: "#1403", date: "Dec 14, 15:19 AM", status: "Normal" },
  { id: "#1532", date: "Dec 30, 10:06 AM", status: "Good" },
];

const getStatusStyles = (status) => {
  switch (status) {
    case "Good":
      return { color: "#1abc9c", bgColor: "#0d503f" };
    case "Bad":
      return { color: "#e74c3c", bgColor: "#582221" };
    case "Normal":
      return { color: "#f39c12", bgColor: "#4a3920" };
    default:
      return {};
  }
};

const FishTable = () => {
  return (
    <TableContainer>
      <Title>Fishes</Title>
      <Divider />
      <Table>
        <TableHead>
          <tr>
            <TableHeaderCell>
              <Checkbox />
            </TableHeaderCell>
            <TableHeaderCell>Order</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </tr>
        </TableHead>
        <tbody>
          {fishData.map((fish, index) => {
            const statusStyles = getStatusStyles(fish.status);
            return (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{fish.id}</TableCell>
                <TableCell>{fish.date}</TableCell>
                <TableCell className="status">
                  <StatusBadge
                    color={statusStyles.color}
                    bgColor={statusStyles.bgColor}
                  >
                    {fish.status}
                  </StatusBadge>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default FishTable;
