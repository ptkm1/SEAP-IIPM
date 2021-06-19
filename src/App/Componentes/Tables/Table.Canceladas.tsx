import React from 'react';
import { Container, Row, Column, Header, HeadRow, HeaderRow, RelatorioGeral } from './Styles'
// import { Fake as data } from './Fake';

const RelatoriosPDF = ({ data }: any) => {

  const FichaDados: any = sessionStorage.getItem('FichasDados')
  const primeiravia = data.filter((via: any) => via.Via === '1º VIA')
  const segundavia = data.filter((via: any) => via.Via === '2ª VIA')
  const terceiraviaoumais = data.filter((via: any) => via.Via === '3ª OU MAIS VIAS')
  const mec = data.filter((via: any) => via.Via === 'MEC')
  const retjud = data.filter((via: any) => via.Via === 'RET. JUDICIAL')
  const usuario = data.map((user: any) => user.Usuario)
  const posto = data.map((user: any) => user.Posto)

  const total = [primeiravia.length, segundavia.length, terceiraviaoumais.length, mec.length, retjud.length].reduce((acc, el) => acc += el)
  const totalArrecadado = data.map((e: any) => parseFloat(e.Result)).reduce((acc: number, el: any) => acc += el)

  return (
    <Container>
      <Header>
        <HeaderRow>
          <img src="assets/logo.png" width="60px" />
          IIPM - Sistema de Registro e impressão de fichas
        </HeaderRow>
        <HeaderRow>
          <Column>Posto: {posto[0]} </Column>
          <Column>Coordenador: {usuario[0]}</Column>
          <Column>Relatório de conveniados - no periodo de 
          {new Date(JSON.parse(FichaDados).DataDeCriacaoInicial).toLocaleString('pt-BR').split(' ')[0]} à {new Date(JSON.parse(FichaDados).DataDeCriacaoFinal).toLocaleString('pt-BR').split(' ')[0]}</Column>
        </HeaderRow>
      </Header>
      <HeadRow style={{ background: '#C2CAD9' }}>
        <Column>Nº da Ficha</Column>
        <Column>NomeCompleto</Column>
        <Column>Motivo</Column>
        <Column>Dt. de Nascimento</Column>
        <Column>RG</Column>
        <Column>Valor</Column>
        <Column>Usuario</Column>
      </HeadRow>
      {data && data.map((data: any, i: any) => (
        <Row key={i}>
          {console.log(43 + data)}
          <Column>{data.NumeroDaFicha}</Column>
          <Column>{data.NomeCompleto}</Column>
          {data.Via === '3ª OU MAIS VIAS' || data.Via === '2ª VIA' ?
            (
              <Column>2º e demais</Column>
            ) : (
              <Column>{data.Via}</Column>
            )}
          <Column>{new Date(data.DataNasc).toLocaleString('pt-BR')}</Column>
          <Column>{data.NRG}</Column>
          <Column>{data.Result}</Column>
          <Column>{data.Usuario}</Column>
        </Row>
      ))}

      <RelatorioGeral>
        <Row style={{ background: '#C2CAD9' }}>
          <Column>1º VIA</Column>
          <Column>2º VIA ou demais</Column>
          <Column>MEC</Column>
          <Column>RET. Judicial</Column>
          <Column>Total Arrecadado</Column>
          <Column>Total</Column>
        </Row>
        <Row>
          <Column>{primeiravia.length}</Column>
          <Column>{segundavia.length + terceiraviaoumais.length}</Column>
          <Column>{mec.length}</Column>
          <Column>{retjud.length}</Column>
          <Column>{totalArrecadado}</Column>
          <Column>{total}</Column>
        </Row>
      </RelatorioGeral>
    </Container>
  )
}

export { RelatoriosPDF }