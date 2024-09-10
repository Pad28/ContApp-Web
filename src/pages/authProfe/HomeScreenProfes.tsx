
import { useNavigate } from "react-router-dom";
import { Button, Header } from "../../components";
import "../../styles/pages/HomeScreen.css";
import { useRequestGet } from "../../hooks";
import { CircularProgress, colors } from "@mui/material";
import { useEffect, useState } from "react";
import { ListGroupsResponse } from "../../interfaces/ListarGruposResponse";

export const HomeScreenProfes = () => {
    const navigate = useNavigate();
    const { isLoading, requestGetAlert } = useRequestGet();
    const [gruposList, setGruposList] = useState<ListGroupsResponse>({ results: [] });

    useEffect(() => {
        (async () => {
            const response = (await requestGetAlert({
                path: "/api/grupo",
            }) as ListGroupsResponse);
            setGruposList(response);
        }
        )();
    }, []);

    return (
        <div className="home-container">
            <Header text="Grupos" />
            {(isLoading) ? (
                <CircularProgress
                    style={{ color: colors.blue[900], marginTop: '40rem' }}
                    size={100}
                />
            ) : (
                <>
                    <div className="top-nav">
                        <Button
                            text="Publicar"
                            onClick={() => navigate("/grupos")}
                            style={{ backgroundColor: "#D39E00", color: "white" }}
                        />
                        <Button
                            text="Avances"
                            onClick={() => navigate("/alumnos")}
                            style={{ backgroundColor: "white", color: "black" }}
                        />
                        <Button
                            text="Avance"
                            onClick={() => navigate("/avance")}
                            style={{ backgroundColor: "white", color: "black" }}
                        />
                    </div>

                    <div className="groups-container" style={{ flexDirection: "column" }}>

                        <div>
                            <p
                                style={{
                                    color: "black",
                                    fontSize: "40px",
                                    fontWeight: "bold"
                                }}>Seleccione uno de sus grupos asignados</p>
                        </div>
                    </div>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr"
                    }}>
                        {(gruposList.results.length == 0) ? (
                            <h1>No hay grupos disponibles</h1>
                        ) : (
                            gruposList.results.map((group) => (
                                <Button
                                    key={group.id}
                                    text={group.id}
                                    onClick={() => navigate(`/alumnos-en-clase-profes/${group.id}`)}
                                    style={localStyles.selectGroup}
                                />
                            ))
                        )}
                    </div>



                </>
            )}
        </div>
    );
};

const localStyles: { [key: string]: React.CSSProperties } = {
    selectGroup: {
        backgroundColor: "#800020",
        color: "white",
        marginTop: 10,
        height: 100,
        width: 230,
        marginInline: 15,
        alignSelf: "center"
    }
};
