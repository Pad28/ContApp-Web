import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Header, IconButton } from "../../components";
import "../../styles/pages/HomeScreen.css";
import { IconButtonAlumno } from "../../components/buttons/IconButtonAlumno";

export const AvancesAlumnosProfe = () => {
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
                    style={{ backgroundColor: "#123456", color: "white", marginRight: 250, alignSelf: "center", padding: "1.5rem" }}

                />
                <Button
                    text="Avances"
                    onClick={() => handleNavigation("/avances-alumnos-profes")}
                    style={{ color: "white", marginRight: 30, backgroundColor: "#D39E00" }}
                />
                <Button
                    text="Publicar"
                    onClick={() => handleNavigation("/publicar-profes")}
                    style={{ color: "white", marginRight: 30 }}
                />
                <Button
                    text="Quizz"
                    onClick={() => handleNavigation("/quiz-profes")}
                    style={{ color: "white", marginRight: 30 }}
                />
                <Button
                    text="Settings"
                    onClick={() => handleNavigation("/settings-profes")}
                    style={{ color: "white", marginRight: 30 }}
                />
            </Header>
            <div className="content">
                {/* Aquí puedes agregar el contenido adicional */}
                <div style={{ height: 150 }}></div>
                <IconButtonAlumno
                    icon="home"
                    text="Diego de Jesús Tenorio Miranda"
                    onClick={() => { }}
                    style={{ backgroundColor: "#123456", color: "white", width: 1000, marginTop: 10}}
                    styleIcon={{ justifySelf: "flex-start", width: 80, marginLeft: "1rem" }}
                    styleText={{ justifySelf: "start" }}
                />

                <IconButtonAlumno
                    icon="home"
                    text="Miguel Angel Padilla Perez"
                    onClick={() => { }}
                    style={{ backgroundColor: "#123456", color: "white", width: 1000, marginTop: 10 }}
                    styleIcon={{ justifySelf: "flex-start", width: 80, marginLeft: "1rem" }}
                    styleText={{ justifySelf: "start" }}
                />

            </div>
        </div>
    );
};