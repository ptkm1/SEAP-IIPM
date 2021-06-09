import React, { useState } from 'react'
import { CgArrowLeft } from 'react-icons/cg'
import { MdAddToQueue, MdSearch, MdViewDay, MdContentPaste, MdFilter1, MdDescription, MdCancel } from 'react-icons/md'
import { useHistory } from 'react-router'
import { BotaoOpcao } from '../../../App/Componentes/Botoes/BotoesOpcoes.Styled'
import { BTNVoltar } from '../../../App/Componentes/Botoes/BotoesVoltar.Styled'
import Menu from '../../../App/Componentes/Menu'
import { Container } from '../../../App/Styles/Home.Styled'
import Api from '../../../Infra/Servicos/Api'


function Relatorios() {

  const history = useHistory()

  const [ListFichasGerais, setListFichasGerais] = useState()
  console.log(ListFichasGerais)
  const FichasGerais = async () => {
    try {
      const {data} = await Api.get('/fichasgerais')
      setListFichasGerais(data)
    } catch (error) {
      console.log(error)
    }
  }

  const [ListPrimeiraVia,setListPrimeiraVia] = useState()
  // console.log(ListPrimeiraVia)
  const PrimeiraVia = async () => {
    try {
      const {data} = await Api.get('/primeiravia')
      setListPrimeiraVia(data)
    } catch (error) {
      console.log(error)
    }
  }

  const [ListDemaisVias,setListDemaisVias] = useState()
  // console.log(ListDemaisVias)
  const DemaisVias = async () => {
    try {
      const {data} = await Api.get('/demaisvias')
      setListDemaisVias(data)
    } catch (error) {
      console.log(error)
    }
  }

  const [ListCanceladas,setListCanceladas] = useState()
  // console.log(ListCanceladas)
  const FichasCanceladas = async () => {
    try {
      const {data} = await Api.get('/fichascanceladas')
      setListCanceladas(data)
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

      <BotaoOpcao onClick={ () => FichasGerais() }>
        <MdContentPaste size="70%" color="#656565" />
        <span>Relatorio Geral de fichas</span>
      </BotaoOpcao>

      <BotaoOpcao onClick={ () => PrimeiraVia() } >
        <MdFilter1 size="70%" color="#656565" />
        <span>1º VIA</span>
      </BotaoOpcao>
      <BotaoOpcao onClick={ () => DemaisVias() } >
        <MdDescription size="70%" color="#656565" />
        <span>Demais Vias</span>
      </BotaoOpcao>

      <BotaoOpcao onClick={ () => FichasCanceladas() } >
        <MdCancel size="70%" color="#656565" />
        <span>Fichas Canceladas</span>
      </BotaoOpcao>       

      </Container>
    </>
  )
}

export default Relatorios