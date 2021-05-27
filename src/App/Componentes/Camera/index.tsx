import React, { useContext } from "react";
import { IoImageSharp } from "react-icons/io5";
import Webcam from "react-webcam";
import { RegistroContext } from "../../Contexts/RegistroRGBD";
import { BotãoPreto } from "../Botoes/Botoes.Styled";

const Camera: React.FC = () => {
  const webcamRef = React.useRef<any>(null);
  const [imgSrc, setImgSrc] = React.useState<any>(null);


  const { setImagemRegistro, setModal, modal  } = useContext(RegistroContext)

  const capture = React.useCallback((e) => {
    e.preventDefault();
    const imageSrc = webcamRef.current.getScreenshot();
    setImagemRegistro(imageSrc)
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <div id="camera">
      <button onClick={()=> setModal(!modal)} >Abortar Foto</button>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        style={{ opacity: 1, width: 180, height: 150 }}
      />

      <BotãoPreto style={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', background: '#282a36', color: '#fff' }} onClick={capture}> <IoImageSharp size={15} /> </BotãoPreto>
      { imgSrc && (
      <>
        <span className="noprint" >Imagem final</span>
        <img src={imgSrc} style={{ width: 180, height: 150 }} />
      </>
      ) }
    </div>
  );
};

export default Camera;