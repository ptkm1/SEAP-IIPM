import { PDFExport } from '@progress/kendo-react-pdf';
import React, { FormEvent, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Api from '../../../Infra/Servicos/Api';
import { BotãoPreto } from '../Botoes/Botoes.Styled';
import { BlocoInputGrande, PesquisaInput } from '../Inputs/Inputs.Styled';
import { RelatoriosPDF } from '../Tables/Table.Canceladas';
import { Container, Inputs } from './Styles';


interface IFormInput {
  DataDeCriacaoInicial?: string
  DataDeCriacaoFinal?: string
  Posto?: string
}


const RelatorioGeralAdmin: React.FC = () => {

  const [ListDemaisVias,setListDemaisVias]: any = useState()

  const { register, handleSubmit } = useForm()

  const Pesquisar = async (data: IFormInput) => {
    console.log(data)
    try {
      const {data: response} = await Api.post('/demaisvias',data) // Mudar a rota

      setListDemaisVias(response)
    } catch (error: any) {
      console.log(error)
    }
  }

  const pdfExportComponent = React.useRef<PDFExport>(null);

  return (
    <Container>
      <Inputs>
      <form onSubmit={handleSubmit(Pesquisar)}>
          <BlocoInputGrande>
            <label>Data Inicial</label>
            <input type="date" {...register("DataDeCriacaoInicial")} placeholder="Data Inicial" />
          </BlocoInputGrande>
          <BlocoInputGrande>
            <label>Data Final</label>
            <input type="date" {...register("DataDeCriacaoFinal")} placeholder="Data Final" />
          </BlocoInputGrande>
          <BlocoInputGrande>
            <label>Posto</label>
            <input type="text" {...register("Posto")} placeholder="posto" />
          </BlocoInputGrande>
          <BotãoPreto type="submit"> Criar </BotãoPreto>
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
      paperSize="letter"
      landscape={true}
      margin="4mm"
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

export default RelatorioGeralAdmin;