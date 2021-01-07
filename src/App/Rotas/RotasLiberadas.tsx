import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// Importações das Views
import Login from '../../Views/Liberadas/Login'




const RotasProtegidas: React.FC = () => {

  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
    </BrowserRouter>
  )
}

export default RotasProtegidas