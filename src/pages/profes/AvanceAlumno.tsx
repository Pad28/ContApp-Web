import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header, IconButton } from "../../components";
import { FaChartLine, FaClipboard, FaCog, FaTasks, FaUpload } from "react-icons/fa";
import "../../styles/pages/AvanceAlumno.css";

import { Avance } from "../../components/activity/Avance";
import { IconButtonNav } from "../../components/buttons/IconButtonNav";
import { CircularProgress, colors } from "@mui/material";
import { LocalStorageKeys } from "../../providers/LocalStorage";
import { LoginResponse } from "../../interfaces/LoginResponse";
import { useRequestGet } from "../../hooks";
import { ListAnsweredActivity } from "../../interfaces/ListAnsweredAtivity";

export const AvanceAlumno = () => {
    const { matricula } = useParams();
    const navigate = useNavigate();
    const userJson = localStorage.getItem(LocalStorageKeys.USER_DATA);
    if (!userJson) return;
    const { token } = JSON.parse(userJson) as LoginResponse;

    const { isLoading, requestGetAlert, setIsLoading } = useRequestGet();
    const [activitiesList, setActivitiesList] = useState<ListAnsweredActivity>({ results: [] });

    useEffect(() => {
        (async () => {
            const response = (await requestGetAlert({
                path: `/api/actividad-contestada/activities-by-alumno/${matricula}`,
                config: {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            }) as ListAnsweredActivity);

            setActivitiesList(response);
        }
        )();
    }, []);


    return (

        <div className="home-container">
            <Header text="">
                <IconButton
                    icon="home"
                    onClick={() => navigate("/avances-alumnos-profes")}
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
            <div style={{ height: 150 }} />
            <div className="content">
                {isLoading ? (
                    <CircularProgress
                        style={{ color: colors.blue[900], marginTop: '8rem' }}
                        size={100}
                    />
                ) : (
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: 20
                    }}>
                        {(activitiesList.results.length == 0) ? (
                            <h1 style={{ textAlign: "center" }} >No hay avances disponibles!</h1>
                        ) : (
                            activitiesList.results.map((activity, i) => (
                                <Avance
                                    nameActivity=""
                                    icon={FaTasks}
                                    onClickButton={() => setIsLoading(true)}
                                    text="10"
                                    titulo={`Actividad ${i + 1}`}
                                    key={activity.id}
                                />
                            ))
                        )}

                    </div>
                )}

            </div>
        </div>
    );
};