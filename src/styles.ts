import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  .App {
    display: flex;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;

export const AddButton = styled.button`
  border: 0;
  position: absolute;
  top: 80px;

  align-self: flex-end;

  background-color: #fff;
  border-radius: 5px;

  color: #000;
  cursor: pointer;
`;
