import {
    CloseButton,
    TarjetaModal,
    ContenedorModal,
    DescripcionModal,
    ImagenModal,
    TituloModal,
    CotenedorTexto,
  } from "./styled";
import {INoticiasNormalizadas} from "./Noticias"
import { SuscribeImage, CloseButton as Close } from "../../assets"
import SusButton from "./SusButton"

export interface Imodal{
    img:string;
    title:String;
    desc:String;
    setModal:React.Dispatch<React.SetStateAction<INoticiasNormalizadas | null>>
    esPremium: Boolean;
}


const ModalComponent: React.FC<Imodal> = ({img, title, desc, setModal, esPremium}) => {

  const suscriptionTitle = "Suscríbete a nuestro Newsletter"
  const suscriptionDescription = "Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos."



    return(
        <ContenedorModal>
        <TarjetaModal>
          <CloseButton onClick={() => setModal(null)}>
            <img src={Close} alt="close-button" />
          </CloseButton>
          <ImagenModal src={esPremium ? img: SuscribeImage} alt={esPremium? "news-image":"mr-burns-excelent" } />
          <CotenedorTexto>
            <TituloModal>{esPremium?title:suscriptionTitle}</TituloModal>
            <DescripcionModal> {esPremium?desc:suscriptionDescription}</DescripcionModal>
              {esPremium&&<SusButton setModal={setModal}/>}
           </CotenedorTexto>
        </TarjetaModal>
      </ContenedorModal>


    );
};
export  default ModalComponent;