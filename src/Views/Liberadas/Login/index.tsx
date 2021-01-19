import React, { useRef } from 'react'
import { BotãoPreto } from '../../../App/Componentes/Botoes/Botoes.Styled'
import { BlocoInput } from '../../../App/Componentes/Inputs/Inputs.Styled'
import {
	BlocoFormLogin,
	BlocoLogin, Container,
	ImagemLateral
} from '../../../App/Styles/Login.Styled'
import Api from '../../../Infra/Servicos/Api'


const Login: React.FC = (): JSX.Element => {

  const emailLoginRef: any = useRef()
	const senhaLoginRef: any = useRef()

const Autenticar = async ( event: React.FormEvent<HTMLFormElement> ) => {
		event.preventDefault()
		try{
      const {data} = await Api.post('/autenticar',
      { email: emailLoginRef.current.value,
				senha: senhaLoginRef.current.value })

				localStorage.setItem('@pml/usuario', JSON.stringify(data.usuario))

      if(data.token){
				localStorage.setItem('@pml/token', data.token)
				return window.location.href = "/"
			}

		}catch (erro) {

			console.log(erro)
			alert("Não foi possivel autenticar")

		}

}


  return (
		<Container>
			<BlocoLogin>
				<BlocoFormLogin onSubmit={ Autenticar }>
					<BlocoInput>
						<span>Usuario</span>
						<input type="text" ref={ emailLoginRef } />
					</BlocoInput>

					<BlocoInput>
						<span>Senha</span>
						<input type="password" ref={ senhaLoginRef } />
					</BlocoInput>

					<BotãoPreto altura="30px" largura="48%" type="submit">
						Login
					</BotãoPreto>
				</BlocoFormLogin>
				<ImagemLateral>
					<img
						src="https://i2.wp.com/www.edenevaldoalves.com.br/wp-content/uploads/2020/02/sspba.jpg?fit=600%2C399&ssl=1"
						alt="imagem"
					/>
				</ImagemLateral>
			</BlocoLogin>
		</Container>
  );
}

export default Login