import styled from 'styled-components';

export const Modal = styled.div`
  background-color: white;
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 5px;

  left: 35%;
  top: 25%;
  color: black;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    span {
      width: 90%;

      h3 {
        padding-left: 50px;
      }
    }

    button {
      background-color: #fff;
      color: #000;
      transition: none;
      border: 0;
      padding: 0;
      outline: none;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  input {
    width: 60%;
    height: 25px;
    margin-bottom: 15px;

    border: 0;
    border-radius: 5px;
  }
`;
