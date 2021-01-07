import React, { FormEvent, useCallback, useRef, useState } from 'react';
import { CgSearch } from "react-icons/cg";
import { MdArrowBack, MdEdit } from "react-icons/md";
import { useHistory } from 'react-router-dom';
import { PesquisaInput } from '../../../App/Componentes/Inputs/Inputs.Styled';
import Menu from '../../../App/Componentes/Menu';
import { Bloco30item, Container, TabelaResultadoPesquisa, TabelaResultadoPesquisaItem } from '../../../App/Styles/Pesquisa.Styled';
import Api from '../../../Infra/Servicos/Api';


const Pesquisar: React.FC = () => {
  const history = useHistory()

  const [ resultado, setResultado ] = useState<any>(null)

  const nomeRef:any =  useRef<HTMLInputElement>()
  const nomeMaeRef:any =  useRef<HTMLInputElement>()

  const PesquisarDados = useCallback( async ( event: FormEvent )=>{

    event.preventDefault()

    try {
      const { data } = await Api
      .post(`/pesquisar`,
        { nome: nomeRef.current?.value,
          mae: nomeMaeRef.current?.value })


    return setResultado(data)

    } catch (error) {
      alert(error.response.data.mensagem)
    }


  },[])

  return (
    <>
      <Menu />
      <Container>
        <form onSubmit={ PesquisarDados } >
        <a href="#" onClick={ () => history.replace('/') } > <MdArrowBack /> Voltar </a>
            <PesquisaInput largura="250px" >
            <label htmlFor="pesquisarnome"> Pesquisar por nome </label>
            <input type="text" id="pesquisarnome" ref={ nomeRef } />
          </PesquisaInput>
          <PesquisaInput largura="250px" >
            <label htmlFor="pesquisarNomeMae"> Pesquisar por nome da mãe </label>
            <input type="text" id="pesquisarNomeMae" ref={ nomeMaeRef } />
            <button type="submit"> <CgSearch /> </button>
          </PesquisaInput>
        </form>

      <TabelaResultadoPesquisa>

      { resultado ? (
        resultado.map( (e:any) => {
          return (
          <TabelaResultadoPesquisaItem key={e.id} >
            <Bloco30item>
              <span>{e.id}</span>
            </Bloco30item>
            <Bloco30item>
              <span>{e.NRG}</span>
            </Bloco30item>
            <Bloco30item>
              <span>{e.NomeCompleto}</span>
            </Bloco30item>
            <button onClick={ () => history.push(`/segundavia/${e.id}`) } >
              <MdEdit size="17px" />
            </button>
          </TabelaResultadoPesquisaItem>
          )
        })

      ) : <div></div> }




      </TabelaResultadoPesquisa>


      </Container>
    </>
  )
}

export default Pesquisar