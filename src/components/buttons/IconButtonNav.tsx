
import "../../styles/components/buttons/IconButtonNav.css";
import { IconType } from 'react-icons';

interface IconButtonProps {
  icon: IconType; // Cambiado para aceptar un componente de icono
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const IconButtonNav = ({style, icon: Icon, onClick, text }: IconButtonProps) => {
  return (
    <button onClick={onClick} style={{
        width: "15rem",
    paddingBlock: "1rem",
    textAlign: "center",
    borderRadius: 10,
    marginInline: 10,
    ...style
    }} className="icon-button-nav">
      <Icon style={{
        paddingLeft:10,
        width:35,
        height:35
      }} className="icon" />  {/* Aquí renderiza el componente de icono */}
      <span style={{
        fontSize: "2.5rem"
      }} className="text" >{text}</span>
    </button>
  );
};