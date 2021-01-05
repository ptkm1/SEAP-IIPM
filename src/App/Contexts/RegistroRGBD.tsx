import { createContext } from "react";


interface IRefs {
  Refs?: any
  setRefs?: any
  CarregarDados?: any
}


export const RegistroContext = createContext<IRefs>({} as IRefs)

const RegistroProvider: React.FC = ({ children }) => {



  return(
    <RegistroContext.Provider
    value={{   }} >
      { children }
    </RegistroContext.Provider>
  )

}

export default RegistroProvider