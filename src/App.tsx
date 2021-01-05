import React from 'react'
import { AutProvider } from './App/Contexts/Autenticacao'
import RegistroProvider from './App/Contexts/RegistroRGBD'
import Rotas from './App/Rotas/Index'

const App: React.FC = () => {
  return (
    <AutProvider>
      <RegistroProvider>
        <Rotas />
      </RegistroProvider>
    </AutProvider>
  )
}

export default App