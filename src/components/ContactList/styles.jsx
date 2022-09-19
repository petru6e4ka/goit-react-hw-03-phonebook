import styled from 'styled-components';

export const ContactListBlock = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    padding: 10px;
    border-bottom: 1px solid rgba(25, 118, 210, 0.5);

    button {
      display: inline-block;
      margin: 0 10px;
      background: none;
      outline: none;
      border-radius: 4px;
      border: 1px solid rgba(25, 118, 210, 0.5);
      cursor: pointer;
    }
  }
`;
