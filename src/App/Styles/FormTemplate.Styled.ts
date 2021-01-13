import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 54px;
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

`
export const Form = styled.div`
  display: grid;
  grid-template-columns:  1fr 1fr 1fr 1fr 1fr;
`

export const Form2 = styled.div`
  display: grid;
  grid-template-columns:  1.5fr 1fr;

  textarea{
    outline: none;
		border: none;
    resize: none;
    padding: 10px;
		background-color: #fff;
		-webkit-box-shadow: 0px 0px 3px 1px rgba(23, 23, 23, 0.11);
		-moz-box-shadow: 0px 0px 3px 1px rgba(23, 23, 23, 0.11);
    box-shadow: 0px 0px 3px 1px rgba(23, 23, 23, 0.11);
    margin-left: 5px;
    height: 100%;

    
		@media print {
			box-shadow: none;
		}
  }
`
export const Form2L = styled.div`
  display: grid;
  grid-template-columns:  1fr 1fr 1fr 1fr;
`

export const Form2R = styled.div`
  display: grid;
  grid-template-columns:  1fr 1fr;
`
export const Form2X = styled.div`
  display: grid;
  grid-template-columns:  1fr 1fr 2fr;
`