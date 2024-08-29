import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, IconButton } from "../../components";
import { FaChartLine, FaClipboard, FaCog, FaTasks, FaUpload } from "react-icons/fa";
import "../../styles/pages/AvanceAlumno.css";

import { Avance } from "../../components/activity/Avance";
import { IconButtonNav } from "../../components/buttons/IconButtonNav";

export const AvanceAlumno = () => {
    const navigate = useNavigate();
    const [nombreActivity] = useState("Actividad 1")
    const handleNavigation = (path: string) => {
        navigate(path);
    };


    return (

        <div className="home-container">
            <Header text="">
                <IconButton
                    icon="home"
                    onClick={() => handleNavigation("/avances-alumnos-profes")}
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
            <div style={{ height: 150 }}></div>
            <div className="content">
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 20
                }}>
                    <Avance
                        nameActivity={nombreActivity}
                        icon={FaTasks}
                        text="8"
                        titulo="Actividad 1"
                        onClickButton={()=>{}}
                    />

                    <Avance
                        nameActivity={nombreActivity}
                        icon={FaTasks}
                        text="10"
                        titulo="Actividad 2"
                        onClickButton={()=>{}}
                    />


                </div>

            </div>
        </div>
    );
};