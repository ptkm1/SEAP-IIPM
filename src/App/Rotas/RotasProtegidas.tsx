import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// Importações das Views
import Home from '../../Views/Protegidas/Home'
import Pesquisar from '../../Views/Protegidas/Pesquisar'
import Registro from '../../Views/Protegidas/Registro'
import Relatorios from '../../Views/Protegidas/Relatorios'
import Relatorios2 from '../../Views/Protegidas/Relatorios2'
import SegundaVia from '../../Views/Protegidas/SegundaVia'
import VerificacaoDiaria from '../../Views/Protegidas/VerificacaoDiaria'




const RotasProtegidas: React.FC = () => {

  return (
    <BrowserRouter>
      <Route path="/" exact component={ Home } />
      <Route path="/registrorgbd" component={ Registro } />
      <Route path="/pesquisarregistro" component={ Pesquisar } />
      <Route path="/segundavia" component={ SegundaVia } />
      <Route path="/verificacaodiaria" component={ VerificacaoDiaria } />
      <Route path="/relatorios" component={ Relatorios2 } />
    </BrowserRouter>
  )
}

export default RotasProtegidas