import { PDFExport } from '@progress/kendo-react-pdf';
import React, { FormEvent, useRef, useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import { MdArrowBack } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import Api from '../../../Infra/Servicos/Api';
import { BotãoPreto } from '../Botoes/Botoes.Styled';
import { BotaoOpcao } from '../Botoes/BotoesOpcoes.Styled';
import { PesquisaInput } from '../Inputs/Inputs.Styled';
import { Container, Inputs } from './Styles';
import { DataTable } from './tables/Canceladas/Index';

const RelatorioGeral: React.FC = () => {

  const history = useHistory()

  const DataInicial = useRef<any>()
  const DataFinal = useRef<any>()
  const Posto: any = localStorage.getItem('@pml/usuario')

  const [ListDemaisVias,setListDemaisVias] = useState()

  const PesquisarDados = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const {data} = await Api.post('/demaisvias', { 
        DataDeCriacaoInicial: DataInicial.current.value,
        DataDeCriacaoFinal: DataFinal.current.value,
        Posto: JSON.parse(Posto).posto
      })
      setListDemaisVias(data)
    } catch (error) {
      console.log(error)
    }
  }

  const pdfExportComponent = React.useRef<PDFExport>(null);

  return (
    <Container>
      <Inputs>
      <form onSubmit={ PesquisarDados } >
        <a href="#" onClick={ () => history.replace('/') } > <MdArrowBack /> Voltar </a>
            <PesquisaInput largura="250px" >
            <label htmlFor="DataInicial"> Data Inicial </label>
            <input type="date" id="DataInicial" ref={ DataInicial } />
          </PesquisaInput>
          <PesquisaInput largura="250px" >
            <label htmlFor="DataFinal"> Data Final </label>
            <input type="date" id="DataFinal" ref={ DataFinal } />
          </PesquisaInput>
            <button type="submit"> <CgSearch /> </button>
        </form>
      </Inputs>

      { ListDemaisVias && (
      <>
      
      <BotãoPreto
          style={{zIndex: 99999999999999, position: 'absolute', top: 50, right: 30, width: 150 }}
          onClick={() => {
            if (pdfExportComponent.current) {
              pdfExportComponent.current.save();
            }
          }}
        >
          Export PDF
        </BotãoPreto>
    <PDFExport
      avoidLinks={true}
      paperSize="Letter"
      landscape={true}
      margin="1cm"
      ref={pdfExportComponent}
    >
      <DataTable data={ListDemaisVias} /> 
    </PDFExport>
    </>
      )}

    </Container>
  )
}

export default RelatorioGeral;