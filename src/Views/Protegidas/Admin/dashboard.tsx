import React from 'react'
import { BiUser } from 'react-icons/bi'
import {
  MdAddToQueue,
  MdSearch,
  MdContentPaste,
} from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { BotaoOpcao } from '../../../App/Componentes/Botoes/BotoesOpcoes.Styled'
import Menu from '../../../App/Componentes/Menu'
import { Container } from '../../../App/Styles/Home.Styled'

const AdminDashboard: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <Menu />
      <Container>
        <BotaoOpcao onClick={() => history.push('/registrorgbd')}>
          <MdAddToQueue size="70%" color="#656565" />
          <span>Cadastrar</span>
        </BotaoOpcao>
        <BotaoOpcao onClick={() => history.push('/pesquisarregistro')}>
          <MdSearch size="70%" color="#656565" />
          <span>Procurar</span>
        </BotaoOpcao>

        <BotaoOpcao onClick={() => history.push('/criarusuario')}>
          <BiUser size="70%" color="#656565" />
          <span>Criação de usuário</span>
        </BotaoOpcao>

        {/* <BotaoOpcao onClick={() => history.push('/verificacaodiaria')}>
          <MdViewDay size="70%" color="#656565" />
          <span>Verificação Diária</span>
        </BotaoOpcao> */}

        <BotaoOpcao onClick={() => history.push('/adminrel')}>
          <MdContentPaste size="70%" color="#656565" />
          <span>Relatório de demais vias</span>
        </BotaoOpcao>

        <BotaoOpcao onClick={() => history.push('/adminrelcanceladas')}>
          <MdContentPaste size="70%" color="#656565" />
          <span>Rel. fichas Canceladas</span>
        </BotaoOpcao>
      </Container>
    </>
  )
}

export default AdminDashboard
