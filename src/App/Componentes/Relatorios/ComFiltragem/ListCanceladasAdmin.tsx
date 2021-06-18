import { PDFExport } from '@progress/kendo-react-pdf';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Api from '../../../../Infra/Servicos/Api';
import { BotãoPreto } from '../../Botoes/Botoes.Styled';
import { AutoComplete } from '../../Inputs/Autocomplete.Styled';
import { BlocoInputGrande } from '../../Inputs/Inputs.Styled';
import { Container, Inputs } from '../Styles';
import { DataTable } from '../tables/Canceladas/Index';

interface IFormInput {
  DataDeCriacaoInicial?: string
  DataDeCriacaoFinal?: string
  Posto?: string
}



const ListCanceladasAdmin: React.FC = () => {

  const [ListCanceladasAdmin, setListCanceladasAdmin] = useState()
  

  const { register, handleSubmit } = useForm()

  const Pesquisar = async (data: IFormInput) => {
    try {

      data.Posto = Search

      const { data: response } = await Api.post('/fichascanceladas', data) // Mudar a rota
      if(response.length > 0) {
        setListCanceladasAdmin(response)
      }
    } catch (error) {
      console.log(error)
    }
  }


  const [Postos, setPostos]: any = useState()

  const [Display, setDisplay]: any = useState(false)
  const [Search, setSearch]: any = useState('')
  console.log(Search)

  const wrapperRef = useRef(null);

  const handleClickOutside = (event: any) => {
    const { wrap }: any = wrapperRef.current
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };


  useEffect(() => {
    (async () => {
      const { data } = await Api.get('/usuarios')
      const newarray = data.map((posto: any) => posto.posto)
      console.log(newarray)
      setPostos(newarray)
    })()
  }, [])

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const updateValor = (posto:any) => {
    setSearch(posto);
    setDisplay(!Display);
  };



  const pdfExportComponent = React.useRef<PDFExport>(null);

  return (
    <Container ref={wrapperRef}>
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
            <input type="text" {...register("Posto")} placeholder="posto"
              onChange={event => setSearch(event.target.value)}
              onClick={() => setDisplay(!Display)}
              value={Search}
              required
            />
          </BlocoInputGrande>

{Display && ( <AutoComplete>
          {Display &&
            Postos.filter((posto: any) => posto.indexOf(Search.toLowerCase()) > -1)
            .map((data: any, i: any) => {
              return (
                    <li key={i} onClick={() => { 
                      setSearch(data);
                      setDisplay(!Display);
                     }}>{data}</li>
                    )
                  })
                }
          </AutoComplete>) }

          <BotãoPreto type="submit"> Criar </BotãoPreto>
        </form>
      </Inputs>

      {ListCanceladasAdmin && (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            Relatório gerado
            <BotãoPreto
              style={{ zIndex: 99999999999999, width: 150 }}
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
              margin="4mm"
              ref={pdfExportComponent}
            >
              <DataTable data={ListCanceladasAdmin} />
            </PDFExport>
          </div>
        </>
      )}

    </Container>
  )
}

export default ListCanceladasAdmin;