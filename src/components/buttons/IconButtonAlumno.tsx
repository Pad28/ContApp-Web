import React from 'react';
import "../../styles/components/buttons/IconButtonAlumno.css";

interface IconButtonProps {
  icon: string;
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  styleIcon?: React.CSSProperties;
  styleText?: React.CSSProperties;
}

export const IconButtonAlumno = ({ icon, onClick, style, styleIcon, text, styleText }: IconButtonProps) => {
  return (
    <button onClick={onClick} style={style} className="icon-button-alumno">
      <span style={styleIcon} className="material-symbols-outlined" >{icon}</span>
      <span style={styleText} className="text" >{text}</span>
    
    </button>
  );
};
