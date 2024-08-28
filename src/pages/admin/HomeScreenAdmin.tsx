import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Header, IconButton } from "../../components";
import "../../styles/pages/HomeScreen.css";

export const HomeScreenAdmin = () => {
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
                    style={{ color: "white", marginRight: 30, backgroundColor: "#D39E00", width: 170 }}
                />
                <Button
                    text="Grupos"
                    onClick={() => handleNavigation("/grupos-admin")}
                    style={{ color: "white", marginRight: 30 }}
                />
                <Button
                    text="Settings"
                    onClick={() => handleNavigation("/settings-profes")}
                    style={{ color: "white", marginRight: 30 }}
                />
            </Header>
            <div>
                <Button
                    text="Crear perfil profesor"
                    onClick={() => handleNavigation("/crear-profe-admin")}
                    style={{ marginTop: 150, width: "290px" }}
                />
                <Button
                    text="Modificar perfil profesor"
                    onClick={() => handleNavigation("/modificar-profe-admin")}
                    style={{ marginLeft: 100, width: "340px" }}
                />
            </div>
        </div>
    );
};
