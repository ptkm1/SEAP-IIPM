import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	background: #F3F3F4;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const BlocoLogin = styled.div`
	width: 80%;
	height: 80%;
	background: #FFFFFF;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
	display: grid;
	grid-template-columns: 1fr 1fr;

	@media (max-width: 700) {
		grid-template-rows: 1fr 1fr;
	}
`

export const BlocoFormLogin = styled.form`
	width: 100%;
	height: 100%;
	padding: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const ImagemLateral = styled.div`
	width: 100%;
	height: 100%;
img {
	height: 100%;
	width: 100%;
	object-position: center;
	object-fit: fill;
}
`