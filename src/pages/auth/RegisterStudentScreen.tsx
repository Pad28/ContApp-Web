import Swal from "sweetalert2";
import { Button, Header, InputPrimary } from "../../components";
import { usePeticionPost } from "../../hooks/requests/useRequestPost";
import "../../styles/pages/RegisterSutdentScreen.css";
import { useParams } from "react-router-dom";

export const RegisterStudentScreen = () => {
    const { token } = useParams();

    const {
        form,
        isLoading: isLoadingForm,
        onChange,
        peticionPost,
        setIsLoading: setIsLoadingForm,
        clearValues
    } = usePeticionPost({
        nombre: '', apellidos: '', password: '', id_grupo: '', confirmPassword: ''
    });

    const handlePeticionPost = (token: string) => {
        console.log(form);

        if (form.password !== form.confirmPassword) {
            return Swal.fire({
                icon: 'error',
                text: 'Las contraseñas no coinciden',
                customClass: { popup: 'alert' }
            });
        }

        peticionPost(`/api/auth/alumno/register/${token}`, form)
            .then(() => Swal.fire({
                icon: 'success',
                text: 'Registro exitoso!',
                customClass: { popup: 'alert' }
            }))
            .catch(error => {
                setIsLoadingForm(false)
                Swal.fire({
                    icon: 'error',
                    text: `${error.message}`,
                    customClass: { popup: 'alert' }
                });
            })
            .finally(() => clearValues());
    }


    return (
        <div>
            <Header text="Ingresa tus datos" />

            {(isLoadingForm) ? (
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "15rem"
                }} >
                    Cargando...
                </div>
            ) : (
                <>
                    <div
                        className="container-body"
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            alignItems: "start",
                            width: "80%",
                            marginInline: "auto",
                            marginTop: "25rem"
                        }}
                    >

                        <div className="column" >
                            <InputPrimary
                                icon=""
                                onChange={(value) => onChange(value, "nombre")}
                                placeholder="Nombre"
                                type="text"
                                style={{ width: "60rem", textAlign: "start", padding: "2rem" }}
                            />
                            <InputPrimary
                                icon=""
                                onChange={(value) => onChange(value, "apellidos")}
                                placeholder="Apellidos"
                                style={{ width: "60rem", textAlign: "start", padding: "2rem" }}
                                type="text"
                            />
                            <InputPrimary
                                icon=""
                                onChange={(value) => onChange(value, "id_grupo")}
                                placeholder="grupo"
                                style={{ width: "60rem", textAlign: "start", padding: "2rem" }}
                                type="text"
                            />
                        </div>

                        <div className="column" >
                            <InputPrimary
                                icon=""
                                onChange={(value) => onChange(value, "password")}
                                placeholder="Contraseña"
                                style={{ width: "60rem", textAlign: "start", padding: "2rem" }}
                                type="password"
                            />

                            <InputPrimary
                                icon=""
                                onChange={(value) => onChange(value, "confirmPassword")}
                                placeholder="Confirmar contraseña"
                                style={{ width: "60rem", textAlign: "start", padding: "2rem" }}
                                type="password"
                            />
                        </div>


                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center"
                        }}

                    >
                        <Button
                            text="Registrarme"
                            onClick={() => handlePeticionPost((!token) ? "no-token" : token)}
                            style={{ width: "30rem", height: "8rem", marginTop: "6rem" }}
                        />
                    </div>
                </>
            )}

        </div>
    );
}
