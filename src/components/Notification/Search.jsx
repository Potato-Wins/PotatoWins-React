import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../assets/Search.svg?react';

// 스타일 정의
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: none;
  color: #ccc;
  border-radius: 15px;
  width: 250px;
  padding-left:10px;
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: #ccc;
  font-size: 16px;
  width: 100%;

  ::placeholder {
    color: #888;
  }
`;

const IconWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Search() {
  return (
    <SearchContainer>
      <SearchInput placeholder="Search" />
      <IconWrapper>
      <SearchIcon/>
      </IconWrapper>
    </SearchContainer>
  );
}

export default Search;
