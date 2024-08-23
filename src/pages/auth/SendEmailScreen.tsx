import { CircularProgress, colors } from "@mui/material";
import { Button, Header, InputPrimary } from "../../components";
import { usePeticionPost } from "../../hooks/requests/useRequestPost";

export const SendEmailScreen = () => {
    const { isLoading, onChange, form, peticionPostSwall } = usePeticionPost({ matricula: "" });

    const handleButton = () => {
        console.log(form);
        
        peticionPostSwall({
            paht: `/api/auth/alumno/send-email/${form.matricula}`,
            body: {},
            messageSuccess: 'Se ha enviado un correo de verificación. ' + 
            'Esto puede demorar entre 5 a 10.',
        });
    }

    return(
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
