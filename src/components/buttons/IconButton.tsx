import React from 'react';
import "../../styles/components/buttons/IconButton.css";

interface IconButtonProps {
  icon: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const IconButton = ({ icon, onClick, style }: IconButtonProps) => {
  return (
    <button onClick={onClick} style={style} className="icon-button">
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  );
};
