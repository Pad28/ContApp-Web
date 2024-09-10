import { useNavigate } from "react-router-dom";
import { Header, IconButton } from "../../components";
import "../../styles/pages/HomeScreen.css";
import { FaChartLine } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { IconButtonNav } from "../../components/buttons/IconButtonNav";
import { CircularProgress } from "@mui/material";
export const QuizProfes = () => {
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
                    style={{ backgroundColor: "#D39E00" }}
                />
                <IconButtonNav
                    text="Settings"
                    onClick={() => handleNavigation("/settings-profes")}
                    icon={FaCog}
                />
            </Header>
            <div className="content">
                {/* <Button
                    text="Crear Quizz"
                    onClick={() => handleNavigation("/crear-quiz-profes")}
                    style={{ marginTop: 150, width: "200px" }}
                /> */}
                <CircularProgress
                    style={{
                        marginTop: "40rem"
                    }}
                    size={100}
                />
            </div>
        </div>
    );
};