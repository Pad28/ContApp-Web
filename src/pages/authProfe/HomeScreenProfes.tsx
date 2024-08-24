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

            <div className="groups-container">

                <div
                    style={{
                    color: "black",
                    fontSize: "40px",
                    fontWeight: "bold",
                    marginTop: 30,
                    marginLeft: -20
                    }}
                >
                    Seleccione uno de sus grupos asignados
                </div>
                <Button
                    text="ISC91"
                    onClick={() => handleNavigation("/alumnos-en-clase-profes")}
                    style={{ backgroundColor: "#800020", color: "white", marginTop: 150, height: 110, width: 230, marginLeft: -710}}
                />
                <Button
                    text="ISC92"
                    onClick={() => handleNavigation("/grupo2")}
                    style={{ backgroundColor: "#800020", color: "white", marginTop: 150, height: 110, width: 230, marginLeft: 200 }}
                />
                
            </div>
        </div>
    );
};
