import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Header, IconButton } from "../../components";
import "../../styles/pages/HomeScreen.css";

export const GruposScreenAdmin = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <div className="home-container">
            <Header text="">
                <Button
                    text="Profesores"
                    onClick={() => handleNavigation("/inicio-admin")}
                    style={{ color: "white", marginRight: 30, width: 170 }}
                />
                <Button
                    text="Grupos"
                    onClick={() => handleNavigation("/grupos-admin")}
                    style={{ color: "white", marginRight: 30, backgroundColor: "#D39E00" }}
                />
                <Button
                    text="Settings"
                    onClick={() => handleNavigation("/settings-profes")}
                    style={{ color: "white", marginRight: 30 }}
                />
            </Header>
            <div>
                <Button
                    text="Crear grupo"
                    onClick={() => handleNavigation("/crear-grupos-admin")}
                    style={{ marginTop: 150, width: "180px" }}
                />
                <Button
                    text="Modificar grupo"
                    onClick={() => handleNavigation("/modificar-profe-admin")}
                    style={{ marginLeft: 100, width: "230px" }}
                />
            </div>
        </div>
    );
};
