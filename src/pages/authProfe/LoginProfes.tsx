import React, { useState } from "react";
import Swal from "sweetalert2";
import { Button, Header, InputPrimary } from "../../components";
import "../../styles/pages/LoginProfes.css";

export const LoginScreen = () => {
    const [form, setForm] = useState({ usuario: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);

    const onChange = (value: string, field: string) => {
        setForm({ ...form, [field]: value });
    };

    const handleLogin = () => {
        if (form.usuario === "" || form.password === "") {
            return Swal.fire({
                icon: 'error',
                text: 'Por favor, complete todos los campos.',
                customClass: { popup: 'alert' }
            });
        }

        setIsLoading(true);

        // Simulando una petición de login
        setTimeout(() => {
            setIsLoading(false);
            Swal.fire({
                icon: 'success',
                text: 'Inicio de sesión exitoso!',
                customClass: { popup: 'alert' }
            });
        }, 2000);
    };

    return (
        <div className="login-container">
            <Header text="Inicio de sesión" />
            

            

            {isLoading ? (
                <div className="loading">Cargando...</div>
            ) : (
                <>
                    <div className="login-form">
                        <InputPrimary
                            icon="user-icon" // Puedes agregar el icono de usuario si tienes uno
                            onChange={(value) => onChange(value, "usuario")}
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
                            <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
                        </div>

                        <Button
                            text="Ingresar"
                            onClick={handleLogin}
                            style={{ width: "100%", marginTop: "1rem" }}
                        />
                    </div>

                    
                </>
            )}
        </div>
    );
};
