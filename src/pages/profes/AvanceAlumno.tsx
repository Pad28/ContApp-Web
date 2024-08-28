import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Header, IconButton } from "../../components";
import { FaUser} from "react-icons/fa";
import "../../styles/pages/AvanceAlumno.css";
import { IconButtonAlumno } from "../../components/buttons/IconButtonAlumno";
import { FaArrowLeft } from "react-icons/fa";

export const AvanceAlumno = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    
    return (
        
        <div className="home-container">
            <Header text="">
                <IconButton
                    icon="home"
                    onClick={() => handleNavigation("/avances-alumnos-profes")}
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
                
            </div>
        </div>
    );
};