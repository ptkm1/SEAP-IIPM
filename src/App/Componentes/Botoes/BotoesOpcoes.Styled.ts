import styled from 'styled-components';

export const BotaoOpcao = styled.div`
  width: 40%;
  height: 40%;
  //background: #273785;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.13);
  border-radius: 7px;
  margin: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;
  transition: all 0.25s ease 0s;

  span {
    color: #656565;
    font-size: 1.2rem;
    font-weight: bold;
  }
  :hover {
    transform: perspective(700px) translate(0px, -5px);
    transform-origin: center 37%;
  }

  @media (max-width: 425px) {
    width: 80%;
    height: 80%;

    margin-top: 100px;
  }
`;
