import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Header, IconButton } from "../../components";
import "../../styles/pages/HomeScreen.css";

export const PublicarProfes = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    const [opcion, setOpcion] = useState(""); // Nuevo estado para el dropdown
    const [descripcion, setDescripcion] = useState(""); // Nuevo estado para la descripción

   

    // Función para verificar si la ruta actual es la misma que la ruta del botón
    const isActive = (path: string) => location.pathname === path;

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
                    style={{ color: "white", marginRight: 30, backgroundColor: "#D39E00"} }
                />
                <Button
                    text="Quizz"
                    onClick={() => handleNavigation("/quiz-profes")}
                    style={{ color: "white", marginRight: 30} }
                />
                <Button
                    text="Settings"
                    onClick={() => handleNavigation("/settings-profes")}
                    style={{ color: "white", marginRight: 30} }
                />
                </Header>
                <div
                    style={{
                        color: "black",
                        fontSize: "40px",
                        fontWeight: "bold",
                        marginTop: 140,
                        }}>
                Seleccione la opcion a realizar
                </div>

                {/* Dropdown para seleccionar opción */}
                <select 
                    value={opcion} 
                    onChange={(e) => setOpcion(e.target.value)} 
                    style={{ padding: '10px', marginTop: '40px', fontSize: '16px', width: 210 }}
                >
                    <option value="" disabled>Seleccione una opción</option>
                    <option value="Aviso">Aviso</option>
                    <option value="Documento">Documento</option>
                </select>

                {/* Campo de texto para descripción */}
                <textarea 
                    placeholder="Ingrese la descripción aquí..." 
                    value={descripcion} 
                    onChange={(e) => setDescripcion(e.target.value)} 
                    style={{ display: 'block', width: '100%', height: '100px', marginTop: '40px', padding: '10px', fontSize: '16px' }}
                />

                {/* Botón de enviar */}
                <Button 
                    text="Enviar" 
                    onClick={()=>{}} 
                    style={{ marginTop: '40px', fontSize: '30px', padding: '10px 20px',  }}
                />
            </div>
         
    );
};