import React, { useEffect, useState } from 'react'
import { Container, Column, Row, NotFound } from './Style'
import imagem from '../../../../assets/notfound.svg'

import { BiEditAlt, BiTrashAlt } from 'react-icons/bi'
import { TableContent } from '../../Styles'


const DataTable = ({ data }: any) => {

  let columns = data && data[0] && Object.keys(data[0])

  const primeiravia = data.filter((via:any)=> via.Via === '1ª VIA')
  const segundavia = data.filter((via:any)=> via.Via === '2ª VIA')
  const terceiraviaoumais = data.filter((via:any)=> via.Via === '3ª OU MAIS VIAS')
  const MEC = data.filter((via:any)=> via.Via === 'MEC')
  const RET_JUD = data.filter((via:any)=> via.Via === 'RET. JUDICIAL')
  const total = [primeiravia.length, segundavia.length, terceiraviaoumais.length, MEC.length, RET_JUD.length].reduce((acc, el) => acc += el)
  const totalArrecadado = data.map((e:any)=> e.Result).reduce((acc:number, el:any) => acc + Number(el))
  
  

  return data.length > 0 ? (
    <Container>
      <Row> Relatório de Fichas</Row>

      <Row>
        {data[0] && columns.map((heading: any) => (<> {  heading === 'NRG' ? <Column> Numero de RG</Column> : <Column> {heading} </Column> } </> ))}
      </Row>
      <TableContent>
      {data.map((row: any) => (<>
          <Row>
            {columns.map((column: any) => (
              <>
              { column === null ? null : <Column>{row[column]}</Column>}
              </>
            ))}
          </Row>
          <hr style={{ border: '1px solid #EEF0F8', width: '95%', margin: '0 auto' }} />
        </>))}
        </TableContent>

        <TableContent>
          <Row>
            <Column>1º VIA</Column>
            <Column>2º VIA</Column>
            <Column>3º VIA ou MAIS</Column>
            <Column>MEC</Column>
            <Column>RET. Judicial</Column>
            <Column>Total</Column>
          </Row>
          <Row>
            <Column>{primeiravia.length}</Column>
            <Column>{segundavia.length}</Column>
            <Column>{terceiraviaoumais.length}</Column>
            <Column>{MEC.length}</Column>
            <Column>{RET_JUD.length}</Column>
            <Column>{total}</Column>
          </Row>
        </TableContent>
    </Container>
  ) : (
    <NotFound>
      <h2>Sem resultados, revise as informações...</h2>
    </NotFound>
  )
}

export { DataTable }