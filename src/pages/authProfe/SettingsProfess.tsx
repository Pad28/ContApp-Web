import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Header, IconButton } from "../../components";
import "../../styles/pages/HomeScreen.css";

export const SettingsProfes = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    // Función para verificar si la ruta actual es la misma que la ruta del botón
    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="home-container">
            <Header text="">
                <IconButton
                    icon="home"
                    onClick={() => handleNavigation("/inicio-profesor")}
                    style={{ backgroundColor: "transparent", color: "white", marginRight: 70 }}
                />
                <Button
                    text="Alumnos"
                    onClick={() => handleNavigation("/alumnos-en-clase-profes")}
                    style={{ color: "white", marginRight: 30 }}
                />
                <Button
                    text="Avances"
                    onClick={() => handleNavigation("/avances-alumnos-profes")}
                    style={{ color: "white", marginRight: 30 }}
                />
                <Button
                    text="Publicar"
                    onClick={() => handleNavigation("/publicar-profes")}
                    style={{ color: "white", marginRight: 30 }}
                />
                <Button
                    text="Quiz"
                    onClick={() => handleNavigation("/quiz-profes")}
                    style={{ color: "white", marginRight: 30 }}
                />
                <Button
                    text="Settings"
                    onClick={() => handleNavigation("/settings-profes")}
                    style={{ 
                        backgroundColor: isActive("/settings-profes") ? "#D39E00" : "white",
                        color: isActive("/settings-profes") ? "black" : "white"
                    }}
                />
                </Header>
            <div className="content">
                {/* Aquí puedes agregar el contenido adicional */}
            </div>
        </div>
    );
};