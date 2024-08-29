import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Header } from "../../components";
import "../../styles/pages/HomeScreen.css";
import { IconButtonNav } from "../../components/buttons/IconButtonNav";
import { FaChalkboardTeacher, FaCog, FaUsers } from "react-icons/fa";

// Ejemplo de datos de profesores
const profesores = [
    { numeroEmpleado: "001", correo: "profesor1@example.com", nombre: "Juan", apellidos: "Pérez", contraseña: "12345" },
    { numeroEmpleado: "002", correo: "profesor2@example.com", nombre: "Ana", apellidos: "García", contraseña: "54321" },
    // Añadir más profesores según sea necesario
];

export const ModificarProfeAdmin = () => {
    const navigate = useNavigate();
    const [selectedProfesor, setSelectedProfesor] = useState(profesores[0].numeroEmpleado);
    const [email, setEmail] = useState(profesores[0].correo);
    const [firstName, setFirstName] = useState(profesores[0].nombre);
    const [lastName, setLastName] = useState(profesores[0].apellidos);
    const [password, setPassword] = useState(profesores[0].contraseña);

    const isActive = (path: string) => window.location.pathname === path;

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    // Manejar el cambio de selección en el ComboBox
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const numeroEmpleado = e.target.value;
        setSelectedProfesor(numeroEmpleado);

        // Buscar el profesor seleccionado en la lista y actualizar los campos
        const profesor = profesores.find((prof) => prof.numeroEmpleado === numeroEmpleado);
        if (profesor) {
            setEmail(profesor.correo);
            setFirstName(profesor.nombre);
            setLastName(profesor.apellidos);
            setPassword(profesor.contraseña);
        }
    };

    // Función para manejar la actualización del profesor
    const handleUpdate = () => {
        // Aquí puedes implementar la lógica para actualizar el profesor en la base de datos o backend
        console.log({
            numeroEmpleado: selectedProfesor,
            correo: email,
            nombre: firstName,
            apellidos: lastName,
            contraseña: password,
        });
        alert("Perfil del profesor actualizado con éxito.");
    };

    return (
        <div className="home-container">
            <Header text="">
            <IconButtonNav
                    text="Profesores"
                    onClick={() => handleNavigation("/inicio-admin")}
                    icon={FaChalkboardTeacher}
                    style={{width:200, backgroundColor: "#D39E00"}}
                    
                />
                <IconButtonNav
                    text="Grupos"
                    onClick={() => handleNavigation("/grupos-admin")}
                    icon={FaUsers}
                    
                />
                <IconButtonNav
                    text="Settings"
                    onClick={() => handleNavigation("/settings-admin")}
                    icon={FaCog}
                />
            </Header>
            <div>
                <Button
                    text="Crear perfil profesor"
                    onClick={() => handleNavigation("/crear-profe-admin")}
                    style={{ width: 290, marginTop: 150 }}
                />
                <Button
                    text="Modificar perfil profesor"
                    onClick={() => handleNavigation("/modificar-profe-admin")}
                    style={{
                        backgroundColor: isActive("/modificar-profe-admin") ? "#D39E00" : "white",
                        color: isActive("/modificar-profe-admin") ? "white" : "white",
                        width: 340, marginTop: 150, marginLeft: 100
                    }}
                />
            </div>
            <div className="content" style={{textAlign: "center"}}>
                <div className="input-group">
                    <label style={{fontSize: 25}}>Número de empleado: </label>
                    <select value={selectedProfesor} onChange={handleSelectChange}  style={{fontSize: 20, marginTop: 10, marginBottom: 20, width: 150 }}>
                        {profesores.map((prof) => (
                            <option key={prof.numeroEmpleado} value={prof.numeroEmpleado}>
                                {prof.numeroEmpleado}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-group">
                    <label style={{fontSize: 25}}>Correo: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ingrese correo"
                        style={{fontSize: 20, marginTop: 10, marginBottom: 20, width: 280}}
                    />
                </div>
                <div className="input-group">
                    <label style={{fontSize: 25}}>Nombre: </label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Ingrese nombre"
                        style={{fontSize: 20, marginTop: 10, marginBottom: 20, width: 250 }}
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
                        style={{fontSize: 20, marginTop: 10, marginBottom: 20, width: 250 }}
                    />
                </div>
                <Button
                    text="Guardar cambios"
                    onClick={handleUpdate}
                    style={{ marginTop: 20, width: "250px" }}
                />
            </div>
        </div>
    );
};
