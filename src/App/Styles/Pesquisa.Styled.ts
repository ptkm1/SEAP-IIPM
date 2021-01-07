import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 30px;
  padding-left: 5%;
  padding-right: 5%;
  background: #F3F3F4;
  height: 100vh;
  display: grid;
  grid-template-columns:  1fr;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  a{
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    :hover{
      color: gray;
    }
  }

`
export const CaixaPesquisaBloco = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`

export const TabelaResultadoPesquisa = styled.div`
  width: 100%;
  height: max-content;
  min-height: 300px;
  padding: 5px;
`
export const TabelaResultadoPesquisaItem = styled.div`
  background-color: #fff;
	-webkit-box-shadow: 0px 0px 3px 1px rgba(23, 23, 23, 0.11);
	-moz-box-shadow: 0px 0px 3px 1px rgba(23, 23, 23, 0.11);
	box-shadow: 0px 0px 3px 1px rgba(23, 23, 23, 0.11);
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;

  button {
    width: 30px;
    height: 30px;
    border: none;
    background-color: #fff;
    -webkit-box-shadow: 0px 0px 3px 1px rgba(23, 23, 23, 0.11);
    -moz-box-shadow: 0px 0px 3px 1px rgba(23, 23, 23, 0.11);
    box-shadow: 0px 0px 3px 1px rgba(23, 23, 23, 0.11);
    transition: cubic-bezier(0.215, 0.610, 0.355, 1) 0.6s all;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
      color: white;
      background-color: black;
      transition: cubic-bezier(0.215, 0.610, 0.355, 1) 0.6s all;
    }
  }

`
export const Bloco30item = styled.div`
  width: 30%;

  span{
    font-size: 13px;
  }

  h1{
    font-size: 17px;
    margin: 5px;
  }
`