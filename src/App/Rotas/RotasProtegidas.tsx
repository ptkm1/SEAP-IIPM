import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import AdminDashboard from '../../Views/Protegidas/Admin/dashboard'
import Admin from '../../Views/Protegidas/Admin'
// Importações das Views
import Home from '../../Views/Protegidas/Home'
import Pesquisar from '../../Views/Protegidas/Pesquisar'
import Registro from '../../Views/Protegidas/Registro'
import Relatorios from '../../Views/Protegidas/Relatorios'
import Relatorios2 from '../../Views/Protegidas/Relatorios2'
import SegundaVia from '../../Views/Protegidas/SegundaVia'
import VerificacaoDiaria from '../../Views/Protegidas/VerificacaoDiaria'
import CriarUsuario from '../../Views/Protegidas/Admin/criarUsuario'




const RotasProtegidas: React.FC = () => {

  return (
    <BrowserRouter>
      <Route path="/" exact component={ Home } />
      <Route path="/registrorgbd" component={ Registro } />
      <Route path="/pesquisarregistro" component={ Pesquisar } />
      <Route path="/segundavia" component={ SegundaVia } />
      <Route path="/verificacaodiaria" component={ VerificacaoDiaria } />
      <Route path="/relatorios" component={ Relatorios2 } />

      <Route path="/adminlogin" component={ Admin } />
      <Route path="/dashboard" component={ AdminDashboard } />
      <Route path="/criarusuario" component={CriarUsuario} />
    </BrowserRouter>
  )
}

export default RotasProtegidas