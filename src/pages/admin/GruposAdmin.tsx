
import { useNavigate } from "react-router-dom";
import { Button, Header } from "../../components";
import "../../styles/pages/HomeScreen.css";
import { IconButtonNav } from "../../components/buttons/IconButtonNav";
import { FaChalkboardTeacher, FaCog, FaUsers } from "react-icons/fa";

export const GruposScreenAdmin = () => {
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
                    style={{ marginTop: 150, width: "180px" }}
                />
                <Button
                    text="Modificar grupo"
                    onClick={() => handleNavigation("/modificar-grupos-admin")}
                    style={{ marginLeft: 100, width: "230px" }}
                />
            </div>
        </div>
    );
};
