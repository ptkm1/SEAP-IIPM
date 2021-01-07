import React, { createContext, useEffect, useState } from 'react'

const AutContext = createContext({ logado: false, Usuario: {} })

export const AutProvider: React.FC = ({ children }) => {

  const [ Usuario, setUsuario ] = useState<any>()


  useEffect(()=>{

    const token: any =
      localStorage
        .getItem('@pml/token')

    setUsuario( token )

    if(window.location.pathname !== '/') {
      if(!token) {
        window.location.href = "/"
      }
    }

  },[])

  return (
    <AutContext.Provider value={{ logado: Boolean(Usuario), Usuario }}>
      { children }
    </AutContext.Provider>
  )
}

export default AutContext