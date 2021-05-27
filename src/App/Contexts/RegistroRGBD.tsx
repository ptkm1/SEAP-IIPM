import { createContext, useState } from "react";


interface IRefs {
  Refs?: any
  setRefs?: any
  CarregarDados?: any
  imagemRegistro?: any
  setImagemRegistro?: any
  modal?: any
  setModal?: any
}


export const RegistroContext = createContext<IRefs>({} as IRefs)

const RegistroProvider: React.FC = ({ children }) => {

  const [ imagemRegistro, setImagemRegistro ] = useState<any>('Optou por não tirar foto')
  const [modal, setModal] = useState<any>(false);

  return(
    <RegistroContext.Provider
    value={{ imagemRegistro, setImagemRegistro, modal, setModal }} >
      { children }
    </RegistroContext.Provider>
  )

}

export default RegistroProvider