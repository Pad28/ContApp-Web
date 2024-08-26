import React from 'react';
import "../../styles/components/buttons/IconButton.css";

interface IconButtonProps {
  icon: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  styleIcon?: React.CSSProperties;
}

export const IconButton = ({ icon, onClick, style, styleIcon }: IconButtonProps) => {
  return (
    <button onClick={onClick} style={style} className="icon-button">
      <span style={styleIcon} className="material-symbols-outlined" >{icon}</span>
    </button>
  );
};
