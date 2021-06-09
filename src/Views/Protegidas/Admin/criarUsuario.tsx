import React, { FormEvent, useRef } from 'react'
import { CgArrowLeft } from 'react-icons/cg'
import { useHistory } from 'react-router-dom'
import { BTNVoltar } from '../../../App/Componentes/Botoes/BotoesVoltar.Styled'
import Menu from '../../../App/Componentes/Menu'
import { Container, Form } from '../../../App/Styles/FormTemplate.Styled'
import { useForm, SubmitHandler } from "react-hook-form";
import Api from '../../../Infra/Servicos/Api'
import { BlocoInputGrande } from '../../../App/Componentes/Inputs/Inputs.Styled'
import { BotãoPreto } from '../../../App/Componentes/Botoes/Botoes.Styled'


interface IFormInput {
  nome: string
  email: string
  senha: string
  posto: string
}


const CriarUsuario: React.FC = () => {

  const history = useHistory();
  const { register, handleSubmit } = useForm()

  
  const Criar = async (data: IFormInput) => {
    try {
      const {data: response} = await Api.post('/usuarios/criar', data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Menu />
      <BTNVoltar onClick={() => history.goBack()}>
				<CgArrowLeft size="17px" /> <h3>Voltar</h3>
			</BTNVoltar>
      <Container>
        <Form>
          <form onSubmit={handleSubmit(Criar)}>
          <BlocoInputGrande>
            <label>Nome</label>
            <input type="text" {...register("nome")} placeholder="nome" />
          </BlocoInputGrande>

          <BlocoInputGrande>
            <label>Usuario</label>
            <input type="text" {...register("email")} placeholder="usuario de login" />
          </BlocoInputGrande>

          <BlocoInputGrande>
            <label>Senha</label>
            <input type="text" {...register("senha")} placeholder="senha" />
          </BlocoInputGrande>
          <BlocoInputGrande>
            <label>Posto</label>
            <input type="text" {...register("posto")} placeholder="posto" />
          </BlocoInputGrande>
          <BotãoPreto type="submit"> Criar </BotãoPreto>
          </form>
        </Form>
      </Container>
    </>
  )
}

export default CriarUsuario
