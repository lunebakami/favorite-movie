import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  border: 1px solid #fff;
  border-radius: 5px;
  height: 350px;
  width: 230px;
  overflow: hidden;
  position: relative;

  img {
    padding: 0;
    height: 350px;
    z-index: -1;
    position: absolute;
  }

  div#movie-info {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    width: 100%;
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: column;
  }
`;
