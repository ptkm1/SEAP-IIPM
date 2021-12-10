import { PDFExport } from '@progress/kendo-react-pdf';
import React, { FormEvent, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CgSearch } from 'react-icons/cg';
import { MdArrowBack } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import Api from '../../../Infra/Servicos/Api';
import { BotãoPreto } from '../Botoes/Botoes.Styled';
import { BotaoOpcao } from '../Botoes/BotoesOpcoes.Styled';
import { PesquisaInput } from '../Inputs/Inputs.Styled';
import { RelatoriosPDF } from '../Tables/Table.Canceladas';
import { Container, Inputs } from './Styles';


interface IFormInput {
  DataDeCriacaoInicial?: string
  DataDeCriacaoFinal?: string
  Posto?: string
}



const RelatorioGeral: React.FC = () => {

  const history = useHistory()

  const DataInicial = useRef<any>()
  const DataFinal = useRef<any>()
  const Posto: any = localStorage.getItem('@pml/usuario')

  const [ListDemaisVias,setListDemaisVias] = useState()

  

  const { register, handleSubmit } = useForm()

  const PesquisarDados = async (data: IFormInput) => {
    try {

      data.Posto = JSON.parse(Posto).posto
      console.log(data)

      sessionStorage.setItem('FichasDados',  JSON.stringify(data))

      const { data: response } = await Api.post('/demaisvias', data) // Mudar a rota
      setListDemaisVias(response)

    } catch (error: any) {
      console.log(error)
    }
  }



  const pdfExportComponent = React.useRef<PDFExport>(null);

  return (
    <Container>
      <Inputs>
      <form onSubmit={ handleSubmit(PesquisarDados) } >
        <a style={{ color: 'gray', textDecoration: 'none', display: 'flex', alignItems: 'center'}} href="#" onClick={ () => history.replace('/') } > <MdArrowBack /> Voltar </a>
        <PesquisaInput largura="250px" >
            <label htmlFor="DataInicial"> Data Inicial </label>
            <input type="date" {...register("DataDeCriacaoInicial")} id="DataInicial" />
          </PesquisaInput>
          <PesquisaInput largura="250px" >
            <label htmlFor="DataFinal"> Data Final</label>
            <input type="date" id="DataFinal" {...register("DataDeCriacaoFinal")} />
          </PesquisaInput>
            <BotãoPreto style={{width:40}} type="submit"> <CgSearch /> </BotãoPreto>
        </form>
      </Inputs>

      { ListDemaisVias && (
      <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        Relatório gerado
        <BotãoPreto
            style={{zIndex: 99999999999999,  width: 150 }}
            onClick={() => {
              if (pdfExportComponent.current) {
                pdfExportComponent.current.save();
              }
            }}
          >
            Baixar Relatório
          </BotãoPreto>
      </div>
    <div style={{ position: "absolute", left: "-1000px", top: 0 }}>
    <PDFExport
      avoidLinks={true}
      paperSize="Letter"
      landscape={true}
      margin="3mm"
      ref={pdfExportComponent}
    >
        <RelatoriosPDF data={ListDemaisVias} /> 
    </PDFExport>
    </div>
    </>
      )}

    </Container>
  )
}

export default RelatorioGeral;