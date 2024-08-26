import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Header, InputPrimary } from "../../components";
import { useForm } from "../../hooks";
import "../../styles/pages/HomeScreen.css";


export const RecuperarContraProfes = () => {
    const navigate = useNavigate();
    const {onChange} = useForm({correo:""});
    const handleNavigation = (path: string) => {
        navigate(path);
    };

    // Función para verificar si la ruta actual es la misma que la ruta del botón
    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="home-container">
            <Header text="Recuperar contraseña"/>
                <div  
                    style={{
                    color: "black",
                    fontSize: "30px",
                    fontWeight: "bold",
                    marginTop: 200,
                    textAlign: "center"
                    }}
                >
                      Ingrese su correo institucional de correo para recuperar la contraseña
                <InputPrimary
                        icon="material-symbols-outlined" // Puedes agregar el icono de usuario si tienes uno
                        onChange={(value) => onChange(value, "correo")}
                        placeholder="Correo institucional de empleado"
                        type="text"
                        style={{ marginBottom: "1rem", marginTop: 80, width: 320, alignContent: "center" }}
                />

                <Button
                        text="Recuperar"
                        onClick={()=>{}}
                        style={{ width: 200, marginTop: "1rem"}} 
                />
                </div>
        </div>
    );
};