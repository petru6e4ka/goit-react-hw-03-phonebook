import styled from 'styled-components';

export const Button = styled.button`
  margin-right: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0px;
  cursor: pointer;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  text-transform: uppercase;
  min-width: 64px;
  padding: 5px 15px;
  border-radius: 4px;
  border: 1px solid rgba(25, 118, 210, 0.5);
  color: rgb(25, 118, 210);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover,
  &:active {
    border: 1px solid rgb(25, 118, 210);
    background-color: rgba(25, 118, 210, 0.04);
  }
`;

export const Input = styled.input`
  display: block;
  background: none;
  width: 200px;
  height: 1em;
  margin-right: 20px;
  padding: 16px 14px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1em;
  color: rgba(0, 0, 0, 0.87);
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid rgba(25, 118, 210, 0.5);
  outline: none;

  &:focus {
    border: 1px solid rgb(25, 118, 210);
  }
`;

export const BlockContainer = styled.div`
  min-height: 100vh;
  padding: 25px;
  display: flex;
  flex-direction: column;
  background: #edf0f7;

  h1 {
    font-size: 2.125rem;
    line-height: 1.235;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.334;
  }
`;
