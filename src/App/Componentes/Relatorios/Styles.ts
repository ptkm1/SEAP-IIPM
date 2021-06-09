import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  background: white;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 900;
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TableContent = styled.div`
  width: 100%;
  height: 50vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`