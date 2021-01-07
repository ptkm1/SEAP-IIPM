import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// Importações das Views
import Home from '../../Views/Protegidas/Home'
import Pesquisar from '../../Views/Protegidas/Pesquisar'
import Registro from '../../Views/Protegidas/Registro'
import SegundaVia from '../../Views/Protegidas/SegundaVia'




const RotasProtegidas: React.FC = () => {

  return (
    <BrowserRouter>
      <Route path="/" exact component={ Home } />
      <Route path="/registrorgbd" component={ Registro } />
      <Route path="/pesquisarregistro" component={ Pesquisar } />
      <Route path="/segundavia" component={ SegundaVia } />
    </BrowserRouter>
  )
}

export default RotasProtegidas