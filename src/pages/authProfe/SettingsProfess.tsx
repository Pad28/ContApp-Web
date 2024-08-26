import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Header, IconButton } from "../../components";
import "../../styles/pages/SettingsProfes.css";
import { Modal } from "../../components/modals/Modal";

export const SettingsProfes = () => {
    const navigate = useNavigate();
    const [isNameModalOpen, setIsNameModalOpen] = useState(false);
    const [isLastNameModalOpen, setIsLastNameModalOpen] = useState(false);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [isCerrarSesionOpen, setIsCerrarSesionOpen] = useState(false);

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    const handleCerrarSesion = ()=> {
        navigate("/login");
    }

    const handleSaveName = (newName: string) => {
        console.log("Nombre guardado:", newName);
    };

    const handleSaveLastName = (newLastName: string) => {
        console.log("Apellido guardado:", newLastName);
    };

    const handleSavePassword = (newPassword: string) => {
        console.log("Contraseña guardada:", newPassword);
    };

    return (
        <div className="home-container">
            <Header text="">
                <IconButton
                    icon="home"
                    onClick={() => handleNavigation("/inicio-profesor")}
                    style={{ backgroundColor: "#123456", color: "white", marginRight: 250, alignSelf:"center", padding:"1.5rem" }}
                />
                <Button
                    text="Avances"
                    onClick={() => handleNavigation("/avances-alumnos-profes")}
                    style={{ color: "white", marginRight: 30}}
                />
                <Button
                    text="Publicar"
                    onClick={() => handleNavigation("/publicar-profes")}
                    style={{ color: "white", marginRight: 30} }
                />
                <Button
                    text="Quizz"
                    onClick={() => handleNavigation("/quiz-profes")}
                    style={{ color: "white", marginRight: 30} }
                />
                <Button
                    text="Settings"
                    onClick={() => handleNavigation("/settings-profes")}
                    style={{ color: "white", marginRight: 30, backgroundColor: "#D39E00"} }
                />
            </Header>
            <div style={{ height: 150 }}></div>
            <div className="content">
                <div className="settings-container">
                    <div className="setting-item">
                        <span className="setting-label">Nombre:</span>
                        <Button
                            text="Yahir"
                            style={{ backgroundColor: "#002855", color: "white", width: "200px", borderRadius: "10px" }}
                            onClick={() => setIsNameModalOpen(true)}
                        />
                    </div>
                    <div className="setting-item">
                        <span className="setting-label">Apellido:</span>
                        <Button
                            text="Gutierre Cano"
                            style={{ backgroundColor: "#002855", color: "white", width: "200px", borderRadius: "10px" }}
                            onClick={() => setIsLastNameModalOpen(true)}
                        />
                    </div>
                    <div className="setting-item">
                        <span className="setting-label">Contraseña:</span>
                        <Button
                            text="*********"
                            style={{ backgroundColor: "#002855", color: "white", width: "200px", borderRadius: "10px" }}
                            onClick={() => setIsPasswordModalOpen(true)}
                        />
                    </div>
                    <hr className="divider" />
                    <Button
                        text="Cerrar sesión"
                        style={{ backgroundColor: "red", color: "white", width: "200px", marginTop: "20px", borderRadius: "10px" }}
                        onClick={() => setIsCerrarSesionOpen(true)}
                    />
                </div>
            </div>

            {/* Modales */}
            <Modal
                isOpen={isNameModalOpen}
                onClose={() => setIsNameModalOpen(false)}
                onSave={handleSaveName}
                placeholder="Nombre"
                inputType="text"
            />
            <Modal
                isOpen={isCerrarSesionOpen}
                onClose={() => setIsNameModalOpen(false)}
                onSave={handleCerrarSesion}
                placeholder="¿Desea cerrar sesión?"
                inputType="text"
            />
            <Modal
                isOpen={isLastNameModalOpen}
                onClose={() => setIsLastNameModalOpen(false)}
                onSave={handleSaveLastName}
                placeholder="Apellidos"
                inputType="text"
            />
            <Modal
                isOpen={isPasswordModalOpen}
                onClose={() => setIsPasswordModalOpen(false)}
                onSave={handleSavePassword}
                placeholder="Contraseña"
                inputType="password"
            />
        </div>
    );
};
