import styled from 'styled-components';

interface IBotoes{
  largura?: string;
  altura?: string;
  espaçoInterno?: string;
}

export const BotãoPreto = styled.button<IBotoes>`
  width: ${ prop => prop.largura || "100%"};
  height: ${ prop => prop.altura || "40px"};
  background-color: #273785;
  color: #f8f8f2;
  border-radius: 9px;
  border: none;
  margin: 5px;
  cursor: pointer;
  font-weight: 700;
  padding: ${ prop => prop.espaçoInterno || "5px" };
  display: flex;
  justify-content: space-around;
  align-items: center;

  :hover{
    background-color: #656565;
    color: #f8f8f2;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s;
  }

  @media print {
			display: none;
		}
`;