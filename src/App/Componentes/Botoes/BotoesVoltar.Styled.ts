import styled from 'styled-components';

export const BTNVoltar = styled.button`
  display: flex;
  top: 50%;
  position: fixed;
  background: #282a36;
  width: 35px;
  height: 35px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;

  :hover {
    background-color: #273785;
    transition: 1s;
  }
  
  @media print {
			display: none;
	}
`;