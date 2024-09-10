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
import { LoginResponse } from "../../interfaces/LoginResponse";
import { LocalStorageKeys } from "../../providers/LocalStorage";
import { useRequestGet } from "../../hooks";
import { useEffect, useState } from "react";
import { LitsStudentsByTutor } from "../../interfaces/ListStudentsByIdTutor";
import { CircularProgress, colors } from "@mui/material";

export const AvancesAlumnosProfe = () => {
    const userJson = localStorage.getItem(LocalStorageKeys.USER_DATA);
    if (!userJson) return;
    const { token, user } = JSON.parse(userJson) as LoginResponse;
    const navigate = useNavigate();

    const { isLoading, requestGetAlert } = useRequestGet();
    const [alumnosList, setAlumnosList] = useState<LitsStudentsByTutor>({ results: [] });

    useEffect(() => {
        (async () => {
            const response = await requestGetAlert({
                path: `/api/user/alumnos-por-tutor/${user.matricula}`,
                messageError: "Grupo no disponible",
                config: {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            });
            if (!response) return;
            setAlumnosList(response as LitsStudentsByTutor);
        }
        )();
    }, []);


    return (

        <div className="home-container">
            <Header text="">
                <IconButton
                    icon="home"
                    onClick={() => navigate("/inicio-profesor")}
                    style={{ backgroundColor: "#123456", color: "white", marginRight: 250, alignSelf: "center", padding: "1.5rem" }}

                />
                <IconButtonNav
                    icon={FaChartLine}
                    text="Avances"
                    onClick={() => navigate("/avances-alumnos-profes")}
                    style={{ backgroundColor: "#D39E00" }}
                />
                <IconButtonNav
                    text="Publicar"
                    onClick={() => navigate("/publicar-profes")}
                    icon={FaUpload}
                />
                <IconButtonNav
                    text="Quizz"
                    onClick={() => navigate("/quiz-profes")}
                    icon={FaClipboard}
                />
                <IconButtonNav
                    text="Settings"
                    onClick={() => navigate("/settings-profes")}
                    icon={FaCog}
                />
            </Header>
            <div className="content">
                {/* Aquí puedes agregar el contenido adicional */}
                <div style={{ height: 150 }} />

                {(isLoading) ? (
                    <CircularProgress
                        style={{ color: colors.blue[900], marginTop: '8rem' }}
                        size={100}
                    />
                ) : (
                    (alumnosList.results.length == 0) ? (
                        <h1>No hay alumnos en este grupo disponibles!</h1>
                    ) : (
                        alumnosList.results.map(alumno => (
                            <IconButtonAlumno
                                key={alumno.matricula}
                                icon={FaUser}
                                text={`${alumno.nombre} ${alumno.apellidos}`}
                                onClick={() => navigate(`/avance-alumno/${alumno.matricula}`)}
                                style={{
                                    backgroundColor: "#123456",
                                    color: "white",
                                    width: 1000,
                                    height: 50,
                                    marginTop: 10
                                }}
                                styleIcon={{
                                    justifySelf: "flex-start",
                                    width: 30,
                                    height: 30,
                                    marginLeft: "2rem"
                                }}
                                styleText={{ justifySelf: "start" }}
                            />
                        ))
                    )
                )}

            </div>
        </div>
    );
};