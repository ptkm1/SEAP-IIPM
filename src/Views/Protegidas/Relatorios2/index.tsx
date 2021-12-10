import React, { useState } from 'react'
import { CgArrowLeft } from 'react-icons/cg'
import { MdAddToQueue, MdSearch, MdViewDay, MdContentPaste, MdFilter1, MdDescription, MdCancel } from 'react-icons/md'
import { useHistory } from 'react-router'
import { BotaoOpcao } from '../../../App/Componentes/Botoes/BotoesOpcoes.Styled'
import { BTNVoltar } from '../../../App/Componentes/Botoes/BotoesVoltar.Styled'
import Menu from '../../../App/Componentes/Menu'
import RelatorioCanceladas from '../../../App/Componentes/Relatorios/Canceladas'
import RelatorioGeral from '../../../App/Componentes/Relatorios/Geral'
import { Container } from '../../../App/Styles/Home.Styled'
import Api from '../../../Infra/Servicos/Api'


function Relatorios2() {

const history = useHistory()

const [Show, setShow]: any  = useState()

  const [ListDemaisVias,setListDemaisVias] = useState()
  // console.log(ListDemaisVias)
  const DemaisVias = async () => {
    try {
      const {data} = await Api.get('/demaisvias')
      setListDemaisVias(data)
    } catch (error: any) {
      console.log(error)
    }
  }

  const [ListCanceladas,setListCanceladas]: any = useState()
  // console.log(ListCanceladas)
  const FichasCanceladas = async () => {
    try {
      const {data} = await Api.get('/fichascanceladas')
      setListCanceladas(data)
    } catch (error: any) {
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

    { Show === "Canceladas" && <RelatorioCanceladas /> }
    { Show === "Geral" && <RelatorioGeral/> }

      <BotaoOpcao onClick={ () => setShow("Geral") } >
        <MdDescription size="70%" color="#656565" />
        <span>Demais Vias</span>
      </BotaoOpcao>

  
      <BotaoOpcao onClick={ () => setShow("Canceladas") } >
        <MdCancel size="70%" color="#656565" />
        <span>Fichas Canceladas</span>
      </BotaoOpcao>


        
    
           

      </Container>
    </>
  )
}

export default Relatorios2