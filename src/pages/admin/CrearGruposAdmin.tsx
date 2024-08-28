import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Header, IconButton } from "../../components";
import "../../styles/pages/HomeScreen.css";

export const CrearGrupoAdmin = () => {
    const navigate = useNavigate();

    const isActive = (path: string) => window.location.pathname === path;

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    // Estado para almacenar los valores de los campos de entrada
    const [employeeNumber, setEmployeeNumber] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    // Función para manejar el envío del formulario
    const handleRegister = () => {
        // Aquí puedes manejar el registro del profesor, por ejemplo, enviando los datos a un backend
        console.log({
            employeeNumber,
            email,
            firstName,
            lastName,
            password
        });
        alert('Profesor registrado con éxito.');
    };

    return (
        <div className="home-container">
            <Header text="">
                <Button
                    text="Profesores"
                    onClick={() => handleNavigation("/inicio-admin")}
                    style={{
                        backgroundColor: isActive("/crear-profe-admin") ? "#D39E00" : "white",
                        color: isActive("/crear-profe-admin") ? "white" : "white",
                        marginRight: 30, width: 170
                    }}
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
                    style={{
                        backgroundColor: isActive("/crear-profe-admin") ? "#D39E00" : "white",
                        color: isActive("/crear-profe-admin") ? "black" : "white",
                        width: 290, marginTop: 150, 
                    }}
                />
                <Button
                    text="Modificar perfil profesor"
                    onClick={() => handleNavigation("/modificar-profe-admin")}
                    style={{ marginLeft: 100, width: "340px" }}
                />
            </div>
            <div className="content" style={{textAlign: "center"}}>
                <div className="input-group" style={{ marginTop: 10 }}>
                    <label style={{fontSize: 25}}>Número de empleado: </label>
                    <input
                        type="text"
                        value={employeeNumber}
                        onChange={(e) => setEmployeeNumber(e.target.value)}
                        placeholder="Ingrese número de empleado"
                        style={{fontSize: 20, marginTop: 10, marginBottom: 20, width: 280}}
                    />
                </div>
                <div className="input-group">
                    <label style={{fontSize: 25}}>Correo: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ingrese correo"
                        style={{fontSize: 20, marginTop: 10, marginBottom: 20, width: 250 }}
                    />
                </div>
                <div className="input-group">
                    <label style={{fontSize: 25}}>Nombre: </label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Ingrese nombre"
                        style={{fontSize: 20, marginTop: 10, marginBottom: 20, width: 250}}
                    />
                </div>
                <div className="input-group">
                    <label style={{fontSize: 25}}>Apellidos: </label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Ingrese apellidos"
                        style={{fontSize: 20, marginTop: 10, marginBottom: 20, width: 250 }}
                    />
                </div>
                <div className="input-group">
                    <label style={{fontSize: 25}}>Contraseña: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Ingrese contraseña"
                        style={{fontSize: 20, marginTop: 10, width: 250}}
                    />
                </div>
                <Button
                    text="Registrar profesor"
                    onClick={handleRegister}
                    style={{ marginTop: 40, width: "260px" }}
                />
            </div>
        </div>
    );
};
