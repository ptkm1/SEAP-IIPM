import React, { FormEvent, useCallback, useRef, useState } from 'react'
import { CgSearch } from 'react-icons/cg'
import { MdArrowBack, MdCancel, MdDelete, MdEdit } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { PesquisaInput } from '../../../App/Componentes/Inputs/Inputs.Styled'
import Menu from '../../../App/Componentes/Menu'
import {
  Bloco30item,
  Container,
  TabelaResultadoPesquisa,
  TabelaResultadoPesquisaItem,
} from '../../../App/Styles/Pesquisa.Styled'
import Api from '../../../Infra/Servicos/Api'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

const VerificacaoDiaria: React.FC = () => {
  const history = useHistory()

  const Usuario: any = localStorage.getItem('@pml/usuario')

  const [resultado, setResultado] = useState<any>(null)

  const Dia: any = useRef<HTMLInputElement>()

  async function PesquisarDados (event?: FormEvent) {
    event?.preventDefault()

    try {
      const { data } = await Api.post(`/verificacaodiaria`, { dia: new Date(Dia.current.value) })
      data && setResultado(data)
    } catch (error) {
      alert(error.response.data.mensagem)
    }
  }

  const Cancelar = async (id: string) => {

    try {
      let st = window.confirm('Tem Certeza que deseja cancelar essa ficha?')
      if(st) {
        const {data} = await Api.patch('/verificacaodiaria', { id, Status: 'cancelado' })

        PesquisarDados() 
      }

    } catch (error) {
      alert(error.response.data.mensagem)
    }
  }

  const Deletar = async (id: string) => {

    try {
      let st = window.confirm('Tem Certeza que deseja cancelar essa ficha?')
      if(st) {
        const {data} = await Api.delete(`/verificacaodiaria/${id}`)

          console.log(data)
          PesquisarDados()
      }

      
    } catch (error) {
      alert(error.response.data.mensagem)
    }
  }

  const FecharDia = async () => {

    try {
      let st = window.confirm('Tem Certeza que deseja Fechar o dia?')
      if(st) {
        const {data} = await Api.post(`/fechardia`, {
          Usuario: JSON.parse(Usuario).nome,
          DataDeIdentificacao: Dia.current.value,
        } )

        alert(data.mensagem)
        window.location.replace('/')
      }

      
    } catch (error) {
      alert(error.response.data.mensagem)
    }
  }

  // EXPORTS
  const pdfExportComponent = React.useRef<PDFExport>(null);

  return (
    <>
      <Menu />
      <Container>
          
        <TabelaResultadoPesquisa>
        <form onSubmit={PesquisarDados}>
          <a href="#" onClick={() => history.replace('/')}>
            <MdArrowBack /> Voltar
          </a>
          <PesquisaInput largura="250px">
            <label htmlFor="pesquisardata"> Escolha a data </label>
            <input type="date" id="pesquisardata" ref={ Dia } />
            <button type="submit">
              <CgSearch />
            </button>
          </PesquisaInput>

        </form>
          { resultado && (
            <>
            <button onClick={() => FecharDia()}>
                      <MdDelete  size="17px" /> Fechar dia
                    </button>

                    <button
          className="k-button"
          onClick={() => {
            if (pdfExportComponent.current) {
              pdfExportComponent.current.save();
            }
          }}
        >
          Export PDF
        </button>





            <TabelaResultadoPesquisaItem style={{ fontWeight: 'bold', marginBottom: 10 }}>
                  <Bloco30item>
                    <span>Nome completo</span>
                  </Bloco30item>
                  <Bloco30item>
                    <span>Numero de RG</span>
                  </Bloco30item>
                  <Bloco30item>
                    <span>Via</span>
                  </Bloco30item>
                  <Bloco30item>
                    <span>Ficha</span>
                  </Bloco30item>
                  <Bloco30item>
                    <span>Data de Identificação</span>
                  </Bloco30item>
                  <Bloco30item>
                    <span>Valor</span>
                  </Bloco30item>
                  <Bloco30item>
                    <span>Isenção</span>
                  </Bloco30item>
                  <Bloco30item>
                    <span>Cancelar</span>
                  </Bloco30item>
                  <Bloco30item>
                    <span>Deletar</span>
                  </Bloco30item>
          </TabelaResultadoPesquisaItem>
          </>
          ) }
          
          {resultado ? (
            
            resultado.map((e: any) => {
              return (
                <TabelaResultadoPesquisaItem key={e.id}>
                  <Bloco30item>
                    <span>{e.NomeCompleto}</span>
                  </Bloco30item>
                  <Bloco30item>
                    <span>{e.NRG}</span>
                  </Bloco30item>
                  <Bloco30item>
                    <span>{e.Via}</span>
                  </Bloco30item>
                  <Bloco30item>
                    <span>{e.NumeroDaFicha}</span>
                  </Bloco30item>
                  <Bloco30item>
                    <span>{e.DataRegistro}</span>
                  </Bloco30item>
                  <Bloco30item>
                    <span>{e.Result}</span>
                  </Bloco30item>
                  <Bloco30item>
                    <span>{e.Isençao}</span>
                  </Bloco30item>
                  <Bloco30item>
                  { e.Status === "cancelado" ? (<span>Cancelado</span>) : (
                    <button  onClick={() => Cancelar(e.id)}>
                      <MdCancel size="17px" />
                    </button>
                  ) }
                  </Bloco30item>
                  <Bloco30item>
                    <button onClick={() => Deletar(e.id)}>
                      <MdDelete  size="17px" />
                    </button>
                  </Bloco30item>
                </TabelaResultadoPesquisaItem>
                
              )
            })
            
                  
            
          ) : (
            <div></div>
          )}
        </TabelaResultadoPesquisa>
      </Container>
    </>
  )
}

export default VerificacaoDiaria
