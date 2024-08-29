import React, { useState } from "react";
import Swal from "sweetalert2";
import { Button, Header, InputPrimary } from "../../components";
import "../../styles/pages/LoginProfes.css";
import { useNavigate } from "react-router-dom";
import { LoginResponse } from "../../interfaces/LoginResponse";
import { usePeticionPost } from "../../hooks/requests/useRequestPost";
import { LocalStorageKeys } from "../../providers/LocalStorage";

export const LoginScreenProfes = () => {
    const navigate = useNavigate();
    const { form, onChange, peticionPostSwall, isLoading } = usePeticionPost({ correo: "", password: "" })

    const handleLogin = async () => {
        const result = (await peticionPostSwall({
            body: form,
            paht: "/api/auth/profesor"
        })) as LoginResponse;
        if (!result) return;
        localStorage.setItem(LocalStorageKeys.USER_DATA, JSON.stringify(result));
        localStorage.setItem(LocalStorageKeys.IS_LOGIN, "true");
        navigate("/inicio-profesor")
        // const data = localStorage.getItem(LocalStorageKeys.USER_DATA);
        // const obj = JSON.parse(data!) as LoginResponse;
        
    };
    const cargando = ()=>{
        
            const Toast = Swal.mixin({
                toast: true,
                position: "center",
                width: 200,
                heightAuto: true,
                showConfirmButton: false,
                timer: 400,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "info",
                title: "Cargando..."
              });
        
    }
 

    return (
        <div className="login-container">
            <Header text="Inicio de sesión" />

            {isLoading ? (
                <div className="loading">vacio</div>
            ) : (
                <>
                    <div className="login-form">
                        <InputPrimary
                            icon="user-icon" // Puedes agregar el icono de usuario si tienes uno
                            onChange={(value) => onChange(value, "correo")}
                            placeholder="Usuario"
                            type="text"
                            style={{ marginBottom: "1rem" }}
                        />
                        <InputPrimary
                            icon="lock-icon" // Puedes agregar el icono de candado si tienes uno
                            onChange={(value) => onChange(value, "password")}
                            placeholder="Contraseña"
                            type="password"
                            style={{ marginBottom: "1rem" }}
                        />

                        <div className="forgot-password">
                            <a onClick={()=>navigate("/forgot-password")}>¿Olvidaste tu contraseña?</a>
                        </div>

                        <Button
                            text="Ingresar"
                            onClick={()=>{
                                handleLogin();
                                cargando();
                            }}
                            style={{ width: "100%", marginTop: "1rem" }}
                        />
                    </div>

                    
                </>
            )}
        </div>
    );
};
