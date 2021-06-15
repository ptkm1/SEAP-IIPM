import React from 'react';
import { useForm } from 'react-hook-form';
import { CgArrowLeft } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';
import { BotãoPreto } from '../../../App/Componentes/Botoes/Botoes.Styled';
import { BTNVoltar } from '../../../App/Componentes/Botoes/BotoesVoltar.Styled';
import { BlocoInputGrande } from '../../../App/Componentes/Inputs/Inputs.Styled';
import Menu from '../../../App/Componentes/Menu';
import RelatorioGeralAdmin from '../../../App/Componentes/Relatorios/adminGeral';
import { Form } from '../../../App/Styles/FormTemplate.Styled';
import { Container } from '../../../App/Styles/Login.Styled';
import Api from '../../../Infra/Servicos/Api';


const RelatoriosAdmin: React.FC = () => {

  const history = useHistory()

  return (
    <>
      <Menu />
      <BTNVoltar onClick={() => history.goBack()}>
				<CgArrowLeft size="17px" /> <h3>Voltar</h3>
			</BTNVoltar>
      <Container>
      <RelatorioGeralAdmin />
      </Container>
    </>
  )
}

export default RelatoriosAdmin;