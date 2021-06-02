import styled from 'styled-components';

export const AllTable = styled.div`
  border: solid #DCDEEB 1px;
  border-radius: 7px;
  overflow: hidden;
  padding: 7px;

  @media (max-width: 1560px) {
    margin-top: 5%;
  }
`

export const Container = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  background: white;
  z-index: 0;
`;

export const Row = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: scroll;
  transition: all 0.5s;
  color: #739AFF;
  font-weight: 400;
  font-smooth: always;
  -webkit-font-smoothing: antialiased;
  border: solid 1px #DCDEEB;

  margin-bottom: 5px;

  :hover {
    background-color: #F3F6FD;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1560px) {
    margin-top: 5%;
    overflow: scroll;

    ::-webkit-scrollbar {
      /* display: none; */
    }
  }
`

export const Column = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85em;
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-all;
  font-size: 0.6em;
  letter-spacing: 0.3em;
  
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const ColumnHead = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85em;
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-all;
  background: #739AFF;
  color: white;
  font-size: 0.6em;
  
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const NotFound = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px;

  h2 {
    color: #739AFF;
    margin-bottom: 50px;
  }
`