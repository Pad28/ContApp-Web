import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Header, IconButton } from "../../components";
import "../../styles/pages/HomeScreen.css";
import { IconButtonNav } from "../../components/buttons/IconButtonNav";
import { FaChartLine } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { CircularProgress } from "@mui/material";
// import { usePeticionPost } from "../../hooks";
export const PublicarProfes = () => {
    const navigate = useNavigate();


    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event: any) => {
        setSelectedFile(event.target.files[0]);
    };
    // const [opcion, setOpcion] = useState(""); // Nuevo estado para el dropdown
    const [descripcion, setDescripcion] = useState(""); // Nuevo estado para la descripción
    // const {
    //     clearValues, form, isLoading, onChange, peticionPostSwall, setIsLoading
    // } = usePeticionPost({
    //     titulo: "",
    //     contenido: "",
    //     id_profesor: "",
    //     id_grupo: "",
    // });

    // const handleSubmit = async () => {
    //     const formData = new FormData();
    // }

    console.log(selectedFile);

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
                    style={{ backgroundColor: "#D39E00" }}
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
            {(true) ? (
                <CircularProgress
                    style={{
                        marginTop: "40rem"
                    }}
                    size={80}
                />
            ) : (
                <>
                    <div
                        style={{
                            color: "black",
                            fontSize: "40px",
                            fontWeight: "bold",
                            marginTop: 140,
                        }}>
                        Llene los campos solicitados para hacer una publicacion al grupo
                    </div>

                    <div className="input-group">
                        <label style={{ fontSize: 25 }}>Título de la publicación: </label>
                        <input
                            onChange={() => { }}
                            placeholder="Ingrese un título"
                            style={{ fontSize: 20, marginTop: 25, width: 250 }}
                        />
                    </div>

                    {/* Input para subir archivo */}
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        style={{ display: 'block', marginTop: '25px', width: 320, fontSize: 15, backgroundColor: "white" }}
                    />

                    {/* Campo de texto para descripción */}
                    <input
                        type="text"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        placeholder="Ingrese la descripción aquí..."
                        style={{ display: 'block', width: 400, height: 55, marginTop: '25px', padding: '10px', fontSize: '16px' }}
                    />

                    {/* Botón de enviar */}
                    <Button
                        text="Publicar"
                        onClick={() => { }}
                        style={{ marginTop: '25px', fontSize: '30px', padding: '10px 20px', }}
                    />

                </>
            )}
        </div>

    );
};