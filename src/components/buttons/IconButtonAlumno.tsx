import React from 'react';
import "../../styles/components/buttons/IconButtonAlumno.css";
import { IconType } from 'react-icons';

interface IconButtonProps {
  icon: IconType; // Cambiado para aceptar un componente de icono
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  styleIcon?: React.CSSProperties;
  styleText?: React.CSSProperties;
}

export const IconButtonAlumno = ({ icon: Icon, onClick, style, styleIcon, text, styleText }: IconButtonProps) => {
  return (
    <button onClick={onClick} style={style} className="icon-button-alumno">
      <Icon style={styleIcon} className="icon" />  {/* Aquí renderiza el componente de icono */}
      <span style={styleText} className="text" >{text}</span>
    </button>
  );
};