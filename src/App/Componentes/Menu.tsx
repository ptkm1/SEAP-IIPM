import React from 'react';
import { MdPowerSettingsNew } from "react-icons/md";
import { Logo, Menu as ContainerMenu, Painel, PerfilImg } from '../Styles/Menu.Styled';




const Menu: React.FC = () => {
  return (
    <ContainerMenu>
      <Logo
      src="https://static.blogdaresenhageral.com.br/wp-content/uploads/2015/08/DPT_BAHIA.png"
      />

    <Painel>
      <MdPowerSettingsNew id="DeslogarBTN" />
        <PerfilImg
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />

    </Painel>
    </ContainerMenu>
  )
}

export default Menu