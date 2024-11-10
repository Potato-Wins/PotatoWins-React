// components/Data.jsx
import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DataContainer = styled.div`
  flex: 1;
  min-width: 250px;
  background-color: #2a2d3e;
  border-radius: 8px;
  padding: 20px;
  position: relative;
`;

const DataTitle = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  color: #e0e0e0;
`;

function Data({ title, data, type }) {
  let datacontent;

  if (type === 'line') {
    datacontent = (
      <LineChart data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    );
  } else {
    datacontent = (
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" />
        <Bar dataKey="pv" fill="#8884d8" />
      </BarChart>
    );
  }

  return (
    <DataContainer>
      <DataTitle>{title}</DataTitle>
      <ResponsiveContainer width="100%" height={150}>
        {datacontent}
      </ResponsiveContainer>
    </DataContainer>
  );
}

export default Data;
