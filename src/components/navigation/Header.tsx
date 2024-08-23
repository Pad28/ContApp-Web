import React from "react";
import "../../styles/components/navigation/Header.css";
import logo from "../../assets/logo-removebg-preview.png";

interface Props {
    text: string;
    style?: React.CSSProperties;
}

export const Header = ({text, style}: Props) => {
    return (
        <header className='container-header' style={style} >
            <img src={logo} className="img-header" />
            <h1 className='text-header' > {text} </h1>
        </header>
    );
}
