import React from "react";
import "../../styles/components/navigation/Header.css";
import logo from "../../assets/logo-removebg-preview.png";

interface Props {
    text: string;
    style?: React.CSSProperties;
    children?: React.ReactNode; // Añade esta línea para aceptar children
}

export const Header = ({text, style, children}: Props) => {
    return (
        <header className='container-header' style={style} >
            <img src={logo} className="img-header" />
            <h1 className='text-header' > {text} </h1>
            <div className="header-buttons"> {/* Añade esta línea para mostrar los botones */}
                {children}
            </div>
        </header>
    );
}
