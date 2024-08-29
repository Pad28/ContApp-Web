import { useNavigate } from "react-router-dom";
import { Header, IconButton } from "../../components";
import { FaUser } from "react-icons/fa";
import "../../styles/pages/HomeScreen.css";
import { IconButtonAlumno } from "../../components/buttons/IconButtonAlumno";
import { IconButtonNav } from "../../components/buttons/IconButtonNav";

import { FaChartLine } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
export const AvancesAlumnosProfe = () => {
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
                    style={{ backgroundColor: "#123456", color: "white", marginRight: 250, alignSelf: "center", padding: "1.5rem" }}

                />
                <IconButtonNav
                    icon={FaChartLine}
                    text="Avances"
                    onClick={() => handleNavigation("/avances-alumnos-profes")}
                    style={{backgroundColor: "#D39E00"}}
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
            <div className="content">
                {/* Aquí puedes agregar el contenido adicional */}
                <div style={{ height: 150 }}></div>
                

                <IconButtonAlumno
                    icon={FaUser}
                    text="Diego de Jesús Tenorio Miranda"
                    onClick={() => { handleNavigation("/avance-alumno") }}
                    style={{ backgroundColor: "#123456", color: "white", width: 1000, height: 50, marginTop: 10 }}
                    styleIcon={{ justifySelf: "flex-start", width: 30, height: 30, marginLeft: "2rem" }}
                    styleText={{ justifySelf: "start" }}
                />
                



            </div>
        </div>
    );
};