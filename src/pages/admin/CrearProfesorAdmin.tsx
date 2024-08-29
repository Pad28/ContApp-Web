import { useNavigate } from "react-router-dom";
import { Button, Header, InputPrimary } from "../../components";
import "../../styles/pages/HomeScreen.css";
import { IconButtonNav } from "../../components/buttons/IconButtonNav";
import { FaChalkboardTeacher, FaCog, FaUsers } from "react-icons/fa";
import { usePeticionPost } from "../../hooks/requests/useRequestPost";
import { CrearProfeInterfaz } from "../../interfaces/CrearProfesorInterfaz";
import { LocalStorageKeys } from "../../providers/LocalStorage";
import { LoginResponse } from "../../interfaces/LoginResponse";
import Swal from "sweetalert2";

export const CrearProfeAdmin = () => {
    const navigate = useNavigate();

    const isActive = (path: string) => window.location.pathname === path;

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    // Estado para almacenar los valores de los campos de entrada
    


    const {form, onChange, peticionPostSwall, isLoading } = usePeticionPost({ matricula: "", correo: "", nombre: "", apellidos: "", password: ""})

    const handleCrearProfe = async () => {
        const data = localStorage.getItem(LocalStorageKeys.USER_DATA);
        const obj = JSON.parse(data!) as LoginResponse;
        const result = (await peticionPostSwall({
            body: form,
            paht: "/api/user/profesor",
            config: {headers:{Authorization:"Bearer "+obj.token}}
            
        })) as CrearProfeInterfaz;
        if (!result) return;
        Swal.fire({
            icon: "success",
            text: "Profesor creado con éxito",
            title: "Aviso",
            timer: 2000
        });
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
                    <InputPrimary
                        type="text"
                        onChange={(value) => onChange(value, "matricula")}
                        placeholder="Ingrese número de empleado"
                        style={{fontSize: 20, marginTop: 10, marginBottom: 20, width: 280}}
                    />
                </div>
                <div className="input-group">
                    <label style={{fontSize: 25}}>Correo: </label>
                    <InputPrimary
                        type="email"
                        onChange={(value) => onChange(value, "correo")}
                        placeholder="Ingrese correo"
                        style={{fontSize: 20, marginTop: 10, marginBottom: 20, width: 250 }}
                    />
                </div>
                <div className="input-group">
                    <label style={{fontSize: 25}}>Nombre: </label>
                    <InputPrimary
                        type="text"
                        onChange={(value) => onChange(value, "nombre")}
                        placeholder="Ingrese nombre"
                        style={{fontSize: 20, marginTop: 10, marginBottom: 20, width: 250}}
                    />
                </div>
                <div className="input-group">
                    <label style={{fontSize: 25}}>Apellidos: </label>
                    <InputPrimary
                        type="text"
                        onChange={(value) => onChange(value, "apellidos")}
                        placeholder="Ingrese apellidos"
                        style={{fontSize: 20, marginTop: 10, marginBottom: 20, width: 250 }}
                    />
                </div>
                <div className="input-group">
                    <label style={{fontSize: 25}}>Contraseña: </label>
                    <InputPrimary
                        type="password"
                        onChange={(value) => onChange(value, "password")}
                        placeholder="Ingrese contraseña"
                        style={{fontSize: 20, marginTop: 10, width: 250}}
                    />
                </div>
                <Button
                    text="Registrar profesor"
                    onClick={handleCrearProfe}
                    style={{ marginTop: 40, width: "260px" }}
                />
            </div>
        </div>
    );
};
