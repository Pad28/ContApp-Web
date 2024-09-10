import { Button, Header, InputPrimary } from "../../components";
import "../../styles/pages/LoginProfes.css";
import { useNavigate } from "react-router-dom";
import { LoginResponse } from "../../interfaces/LoginResponse";
import { usePeticionPost } from "../../hooks/requests/useRequestPost";
import { LocalStorageKeys } from "../../providers/LocalStorage";
import { CircularProgress, colors } from "@mui/material";

export const LoginScreenProfes = () => {
    const navigate = useNavigate();
    const { form, onChange, peticionPostSwall, isLoading } = usePeticionPost({ correo: "", password: "" })

    const handleLogin = async () => {
        const result = (await peticionPostSwall({
            body: form,
            paht: "/api/auth/profesor"
        })) as LoginResponse;
        if (!result) return;
        localStorage.setItem(LocalStorageKeys.USER_DATA, JSON.stringify(result));
        localStorage.setItem(LocalStorageKeys.IS_LOGIN, "true");
        if (result.user.rol == "ADMIN") {
            navigate("/inicio-admin");
            return;
        }
        navigate("/inicio-profesor");
    };


    return (
        <div className="login-container">
            <Header text="Inicio de sesión" />

            {isLoading ? (
                <div className="loading">vacio</div>
            ) : (
                <>
                    <div className="login-form">
                        <InputPrimary
                            icon="user-icon" // Puedes agregar el icono de usuario si tienes uno
                            onChange={(value) => onChange(value, "correo")}
                            placeholder="Usuario"
                            type="text"
                            style={{ marginBottom: "1rem" }}
                        />
                        <InputPrimary
                            icon="lock-icon" // Puedes agregar el icono de candado si tienes uno
                            onChange={(value) => onChange(value, "password")}
                            placeholder="Contraseña"
                            type="password"
                            style={{ marginBottom: "1rem" }}
                        />

                        <div className="forgot-password">
                            <a onClick={() => navigate("/forgot-password")}>¿Olvidaste tu contraseña?</a>
                        </div>

                        {(isLoading) ? (
                            <CircularProgress
                                style={{ color: colors.blue[900], marginTop: '8rem', alignSelf: "center" }}
                                size={100}
                            />
                        ) : (
                            <Button
                                text="Ingresar"
                                onClick={() => {
                                    handleLogin();
                                }}
                                style={{ width: "100%", marginTop: "1rem" }}
                            />
                        )}


                    </div>


                </>
            )}
        </div>
    );
};
