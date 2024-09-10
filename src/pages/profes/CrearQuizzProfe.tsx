import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Header, IconButton } from "../../components";
import "../../styles/pages/HomeScreen.css";
import { FaChartLine } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { IconButtonNav } from "../../components/buttons/IconButtonNav";
export const CrearQuizProfes = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([
        { question: "", answers: ["", "", "", ""], correctAnswer: null as number | null }
    ]);

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    const isActive = (path: string) => window.location.pathname === path;

    const handleAddQuestion = () => {
        setQuestions([...questions, { question: "", answers: ["", "", "", ""], correctAnswer: null }]);
    };

    const handleRemoveQuestion = (index: number) => {
        setQuestions(questions.filter((_, qIndex) => qIndex !== index));
    };

    const handleQuestionChange = (index: number, value: string) => {
        const newQuestions = [...questions];
        newQuestions[index].question = value;
        setQuestions(newQuestions);
    };

    const handleAnswerChange = (qIndex: number, aIndex: number, value: string) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].answers[aIndex] = value;
        setQuestions(newQuestions);
    };

    const handleCorrectAnswerChange = (qIndex: number, aIndex: number) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].correctAnswer = aIndex;
        setQuestions(newQuestions);
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
            <div className="content"
                style={{ textAlign: "center" }}
            >
                <Button
                    text="Crear Quizz"
                    onClick={() => handleNavigation("/crear-quiz-profes")}
                    style={{
                        backgroundColor: isActive("/crear-quiz-profes") ? "#D39E00" : "white",
                        color: isActive("/crear-quiz-profes") ? "black" : "white",
                        marginTop: 150, width: "200px"
                    }}
                />
                {questions.map((q, qIndex) => (
                    <div key={qIndex} style={{ marginBottom: "20px", padding: "20px", border: "1px solid #ccc", marginTop: 20 }}>
                        <input
                            type="text"
                            placeholder="Ingrese la pregunta"
                            value={q.question}
                            onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                            style={{ width: 500, padding: "10px", marginBottom: "10px", fontSize: 15 }}
                        />
                        {q.answers.map((answer, aIndex) => (
                            <div key={aIndex}>
                                <input
                                    type="text"
                                    placeholder={`Respuesta ${aIndex + 1}`}
                                    value={answer}
                                    onChange={(e) => handleAnswerChange(qIndex, aIndex, e.target.value)}
                                    style={{ width: "80%", padding: "10px", marginBottom: "10px", fontSize: 15 }}
                                />
                                <input
                                    type="radio"
                                    name={`correctAnswer-${qIndex}`}
                                    checked={q.correctAnswer === aIndex}
                                    onChange={() => handleCorrectAnswerChange(qIndex, aIndex)}
                                    style={{ marginLeft: "10px" }}
                                />
                                <label>Respuesta correcta</label>
                            </div>
                        ))}
                        <Button
                            text="Eliminar Pregunta"
                            onClick={() => handleRemoveQuestion(qIndex)}
                            style={{ marginTop: "10px", backgroundColor: "red", color: "white", width: 270 }}
                        />
                    </div>
                ))}
                <Button
                    text="Agregar Pregunta"
                    onClick={handleAddQuestion}
                    style={{ marginTop: "20px", backgroundColor: "green", color: "white", width: 270 }}
                />
            </div>
            <Button
                text="Publicar Quizz"
                onClick={() => { }}
                style={{ fontSize: 30, marginTop: 20, width: 220, marginBottom: 20 }}
            />
            <div style={{ height: 150 }}></div>
        </div>
    );
};
