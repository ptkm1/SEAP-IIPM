import styled from 'styled-components';

interface Props {
  width?: string
}

export const Container = styled.div<Props>`
  width: 100%;
  height: max-content;
  background: white;
`;

export const Header = styled.div<Props>`
  width: ${ prop => prop.width || "100%" };
  display: flex;
  flex-direction: column;
  background: #F5F5F7;
  border-radius: 15px;
  margin-bottom: 25px;
  padding: 20px;
`
export const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h2 {
    margin-left: 30px;
    color: #273785;
  }
`


export const Row = styled.tr<Props>`
  display: flex;
  align-items: center;
  width: 100%;
  height: max-content;
  min-height: 60px;
  background: #F5F5F7;
  border-radius: 15px;
  margin-bottom: 5px;
`

export const HeadRow = styled.tr<Props>`
  display: flex;
  align-items: center;
  width: 100%;
  height: max-content;
  min-height: 60px;

  background: #F5F5F7;
  margin-bottom: 5px;
  border-radius: 15px;
`

export const Column = styled.td<Props>`
  width: ${ prop => prop.width || "100%" };
  height: max-content;
  text-align: center;
  font-size: 9px;
  white-space: nowrap;
`

export const RelatorioGeral = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`