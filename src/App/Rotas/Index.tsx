import React, { useContext } from 'react'
import AutContext from '../Contexts/Autenticacao'
import RotasLiberadas from './RotasLiberadas'
import RotasProtegidas from './RotasProtegidas'




const Rotas: React.FC = () => {

  const { logado } = useContext( AutContext )

  return ( logado ? <RotasProtegidas /> : <RotasLiberadas /> )

}

export default Rotas