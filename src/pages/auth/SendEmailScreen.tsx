import { CircularProgress, colors } from "@mui/material";
import { Button, Header, InputPrimary } from "../../components";
import { usePeticionPost } from "../../hooks/requests/useRequestPost";
import Swal from "sweetalert2";

export const SendEmailScreen = () => {
    const { isLoading, onChange, form, peticionPostSwall } = usePeticionPost({ matricula: "" });

    const handleButton = async () => {
        console.log(form);

        const response = await peticionPostSwall({
            paht: `/api/auth/alumno/send-email/${form.matricula}`,
            body: {},
        });

        if (!response) return;
        Swal.fire({
            icon: "success",
            title: "Aviso",
            text: `Se ha enviado un correo de verificación a tu cuenta institucional.` +
                'Esto puede demorar entre 5 a 10 minutos.',
            customClass: { popup: 'alert' }

        });

    }

    return (
        <div>
            <Header text="Bienvenido a ContApp" />

            <div className="container-body" >
                {(isLoading) ? (
                    <CircularProgress
                        style={{ color: colors.blue[900], marginTop: '12rem' }}
                        size={80}
                    />
                ) : (
                    <>
                        <InputPrimary
                            onChange={(value) => {
                                onChange(value, "matricula")
                            }}
                            placeholder="Ingresa tu matrícula"
                            type="text"
                            style={{ marginTop: "10rem" }}
                            icon="person"
                        />

                        <Button
                            onClick={handleButton}
                            text="Enviar"
                            style={{ marginTop: "5rem" }}
                        />
                    </>
                )}

            </div>
        </div>
    );
}
