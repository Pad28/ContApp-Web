
import { useNavigate } from "react-router-dom";
import { Header, IconButton } from "../../components";
import "../../styles/pages/HomeScreen.css";
import { IconButtonNav } from "../../components/buttons/IconButtonNav";
import { FaChartLine } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
export const AlumnosClaseProfe = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <div className="home-container">
            <Header text="">
                <IconButton
                    icon="home"
                    onClick={() => handleNavigation("/inicio-profesor")}
                    style={{ backgroundColor: "#123456", color: "white", marginRight: 250, alignSelf:"center", padding:"1.5rem" }}
                    
                />
                <IconButtonNav
                    icon={FaChartLine}
                    text="Avances"
                    onClick={() => handleNavigation("/avances-alumnos-profes")}
                    
                />
                <IconButtonNav
                    text="Publicar"
                    onClick={() => handleNavigation("/publicar-profes")}
                    icon={FaUpload}
                />
                <IconButtonNav
                    text="Quizz"
                    onClick={() => handleNavigation("/quiz-profes")}
                    icon={FaClipboard}
                    
                />
                <IconButtonNav
                    text="Settings"
                    onClick={() => handleNavigation("/settings-profes")}
                    icon={FaCog}
                />
                </Header>

            {/* Nuevo div para los botones en dos columnas 
            <div className="button-grid">
                <Button
                    text="Alumno 1"
                    onClick={() => handleNavigation("/")}
                    style={{ backgroundColor: "#800020" }}
                />
                <Button
                    text="Alumno 2"
                    onClick={() => handleNavigation("/")}
                    style={{ backgroundColor: "#800020" }}
                />
                <Button
                    text="Alumno 3"
                    onClick={() => handleNavigation("/")}
                    style={{ backgroundColor: "#800020" }}
                />
                <Button
                    text="Alumno 4"
                    onClick={() => handleNavigation("/")}
                    style={{ backgroundColor: "#800020" }}
                />
                {/* Agrega más botones si es necesario /}
            </div>*/}
        </div>
        
    );
};