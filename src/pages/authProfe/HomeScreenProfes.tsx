import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Header } from "../../components";
import "../../styles/pages/HomeScreen.css";

export const HomeScreenProfes = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <div className="home-container">
            <Header text="Grupos" />
            <div className="top-nav">
                <Button
                    text="Publicar"
                    onClick={() => handleNavigation("/grupos")}
                    style={{ backgroundColor: "#D39E00", color: "white" }}
                />
                <Button
                    text="Avances"
                    onClick={() => handleNavigation("/alumnos")}
                    style={{ backgroundColor: "white", color: "black" }}
                />
                <Button
                    text="Avance"
                    onClick={() => handleNavigation("/avance")}
                    style={{ backgroundColor: "white", color: "black" }}
                />
            </div>

            <div className="groups-container" style={{flexDirection:"column"}}>

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
                    <Button
                        text="ISC91"
                        onClick={() => handleNavigation("/alumnos-en-clase-profes")}
                        style={{ backgroundColor: "#800020", color: "white", marginTop: 10, height: 100, width: 230, marginInline: 15, alignSelf: "center"  }}
                    />
                    <Button
                        text="ISC91"
                        onClick={() => handleNavigation("/alumnos-en-clase-profes")}
                        style={{ backgroundColor: "#800020", color: "white", marginTop: 10, height: 100, width: 230, marginInline: 15, alignSelf: "center"  }}
                    />
            </div>

                    
            
        </div>
    );
};
