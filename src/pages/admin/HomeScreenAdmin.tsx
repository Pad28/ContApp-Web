import { useNavigate } from "react-router-dom";
import { Button, Header } from "../../components";
import "../../styles/pages/HomeScreen.css";
import { IconButtonNav } from "../../components/buttons/IconButtonNav";
import { FaChalkboardTeacher, FaCog, FaUsers } from "react-icons/fa";

export const HomeScreenAdmin = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
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
                    style={{ marginTop: 150, width: "290px" }}
                />
                <Button
                    text="Modificar perfil profesor"
                    onClick={() => handleNavigation("/modificar-profe-admin")}
                    style={{ marginLeft: 100, width: "340px" }}
                />
            </div>
        </div>
    );
};
