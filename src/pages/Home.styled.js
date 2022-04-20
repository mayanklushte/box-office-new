import styled from "styled-components";

export const SearchInput = styled.input`
  display: block;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 20%;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid black;
  font-size: 14px;
  border-radius: 12px;
  color: black;

  &::placeholder {
    font-weight: 300;
    color: black;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;
