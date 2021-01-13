import styled from 'styled-components';

export const Menu = styled.div`
  width: 100%;
  height: 45px;
  background: #FFFFFF;
  box-shadow: 2px 1px 4px #9E9E9E;
  position: fixed;
  padding: 5px 5%;

  display: flex;
  justify-content: space-between;

  @media print {
    display: none;
  }
`

export const Logo = styled.img`
  width: 35px;
  height: 35px;
`

export const Painel = styled.div`
  width: 80px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  #DeslogarBTN {
    border-radius: 100%;
    width: 20px;
    height: 20px;
    background-color: #282a36;
    padding: 3px;
    color: #f8f8f2;
    cursor: pointer;
  }
  #DeslogarBTN:hover {
    transition: 0.5s;
    color: #282a36;
    background-color: #F3F3F4;
  }

`
export const PerfilImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  border: solid 1px;
  object-fit: cover;
`