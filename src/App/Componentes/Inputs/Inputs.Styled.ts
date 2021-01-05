import styled from 'styled-components';

interface InputProps {
  largura?: string
	altura?: string
}

export const BlocoInput = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${(prop) => prop.largura || '50%'};
	height: ${(prop) => prop.altura || '70px'};
	background: none;
	padding: 5px;

  input, select {
		outline: none;
		border: none;
		height: 30px;
		padding-left: 10px;
		background-color: #fff;
		-webkit-box-shadow: 0px 0px 3px 1px rgba(23, 23, 23, 0.11);
		-moz-box-shadow: 0px 0px 3px 1px rgba(23, 23, 23, 0.11);
		box-shadow: 0px 0px 3px 1px rgba(23, 23, 23, 0.11);
    width: 100%;
	}


	span {
		font-weight: 700;
		font-size: 15px;
		font-smooth: initial;
		margin-bottom: 5px;
	}
`;

export const BlocoInputGrande = styled(BlocoInput)`
  width: 100%;

  // Adicionar Estilos, q ele replicará o bloco feito Acima
`