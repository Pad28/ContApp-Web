import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Header } from "../../components";
import "../../styles/pages/HomeScreen.css";
import { IconButtonNav } from "../../components/buttons/IconButtonNav";
import { FaChalkboardTeacher, FaCog, FaUsers } from "react-icons/fa";

const profesores = [
    { numeroEmpleado: "001", correo: "profesor1@example.com", nombre: "Juan", apellidos: "Pérez", contraseña: "12345" },
    { numeroEmpleado: "002", correo: "profesor2@example.com", nombre: "Ana", apellidos: "García", contraseña: "54321" },
    // Añadir más profesores según sea necesario
];

const grupos = [
    { grupo: "ADE11" },
    { grupo: "ADE23" },
    // Añadir más profesores según sea necesario
];

export const ModificarGrupoAdmin = () => {
    const navigate = useNavigate();

    const isActive = (path: string) => window.location.pathname === path;

    const [selectedProfesor, setSelectedProfesor] = useState(profesores[0].numeroEmpleado);
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

    const [selectedProfesor2, setSelectedProfesor2] = useState(profesores[0].numeroEmpleado);
    // Manejar el cambio de selección en el ComboBox
    const handleSelectChange2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
            <IconButtonNav
                    text="Profesores"
                    onClick={() => handleNavigation("/inicio-admin")}
                    icon={FaChalkboardTeacher}
                    style={{width:200}}
                />
                <IconButtonNav
                    text="Grupos"
                    onClick={() => handleNavigation("/grupos-admin")}
                    icon={FaUsers}
                    style={{ backgroundColor: "#D39E00" }}
                />
                <IconButtonNav
                    text="Settings"
                    onClick={() => handleNavigation("/settings-admin")}
                    icon={FaCog}
                />
            </Header>
            <div>
                <Button
                    text="Crear grupo"
                    onClick={() => handleNavigation("/crear-grupos-admin")}
                    style={{width: "180px", marginRight: 100 }}
                />
                <Button
                    text="Modificar grupo"
                    onClick={() => handleNavigation("/modificar-grupos-admin")}
                    style={{
                        backgroundColor: isActive("/modificar-grupos-admin") ? "#D39E00" : "white",
                        color: isActive("/modificar-grupos-admin") ? "black" : "white",
                        width: "230px", marginTop: 150
                    }}
                />
            </div>
            <div className="content" style={{textAlign: "center"}}>
                <div className="input-group" style={{ marginTop: 10 }}>
                    <label style={{fontSize: 25}}>Grupo(s): </label>
                    <select value={selectedProfesor2} onChange={handleSelectChange}  style={{fontSize: 20, marginTop: 10, marginBottom: 20, width: 150 }}>
                        {profesores.map((prof) => (
                            <option key={prof.numeroEmpleado} value={prof.numeroEmpleado}>
                                {prof.numeroEmpleado}
                            </option>
                        ))}
                    </select>
                </div>
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
                <Button
                    text="Modificar asignacion de grupo"
                    onClick={handleRegister}
                    style={{ marginTop: 40, width: "430px" }}
                />
            </div>
        </div>
    );
};
