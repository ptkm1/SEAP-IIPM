import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F3F3F4;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;

  h1{
    color: #282a36;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`