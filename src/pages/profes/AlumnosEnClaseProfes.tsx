
import { useNavigate, useParams } from "react-router-dom";
import { Button, Header, IconButton } from "../../components";
import "../../styles/pages/HomeScreen.css";
import { IconButtonNav } from "../../components/buttons/IconButtonNav";
import { FaChartLine } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { useRequestGet } from "../../hooks";
import { useEffect, useState } from "react";
import { ListStudentsByGroup } from "../../interfaces/ListStudentsByGroupResponse";
import { CircularProgress, colors } from "@mui/material";
import { LocalStorageKeys } from "../../providers/LocalStorage";
import { LoginResponse } from "../../interfaces/LoginResponse";
export const AlumnosClaseProfe = () => {
    const userJson = localStorage.getItem(LocalStorageKeys.USER_DATA);
    if (!userJson) return;
    const { token } = JSON.parse(userJson) as LoginResponse;

    const navigate = useNavigate();
    const { grupo } = useParams();

    const { isLoading, requestGetAlert } = useRequestGet();
    const [alumnosList, setAlimnosList] = useState<ListStudentsByGroup>({ results: [] });


    useEffect(() => {
        (async () => {
            const response = (await requestGetAlert({
                path: `/api/user/alumnos-por-grupo/${grupo}`,
                messageError: "Grupo no disponible",
                config: {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            }) as ListStudentsByGroup);
            setAlimnosList(response);
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
            <div style={{ height: "20rem" }} />

            {(isLoading) ? (
                <CircularProgress
                    style={{ color: colors.blue[900], marginTop: '8rem' }}
                    size={100}
                />
            ) : (
                (alumnosList.results.length == 0) ? (
                    <h1>No hay alumnos en este grupo!</h1>
                ) : (
                    alumnosList.results.map((user) => (
                        <Button
                            style={{ width: "auto", marginBlock: "0.6rem" }}
                            key={user.matricula}
                            text={`${user.nombre} ${user.apellidos}`}
                            onClick={() => navigate(`/`)}
                        />
                    ))
                )
            )}


        </div>

    );
};