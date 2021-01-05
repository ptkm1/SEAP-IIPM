import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// Importações das Views
import Home from '../../Views/Protegidas/Home'
import Registro from '../../Views/Protegidas/Registro'




const RotasProtegidas: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ Home } />
      <Route path="/registrorgbd" component={ Registro } />
    </BrowserRouter>
  )
}

export default RotasProtegidas