import { useState } from "react"
import { AxiosRequestConfig } from "axios";
import Swal from "sweetalert2";
import { contAppApi } from "../../api/server";
import { useForm } from "../util/useForm";

interface peticionPostSwallOptions {
    paht: string;
    body: Object;
    config?: AxiosRequestConfig;
    messageSuccess?: string;
    messageError?: string;
}

export const usePeticionPost = <T extends Object>(initState: T) => {
    const [isLoading, setIsLoading] = useState(false);
    const { form, onChange, validateEmptyFields, clearValues } = useForm(initState);

    const peticionPost = async(paht: string, body: Object, config?: AxiosRequestConfig) => {
        setIsLoading(true);
        validateEmptyFields('Completa todos los campos');

        const response  = await contAppApi.post(paht, body, config)
            .catch(error => {
                setIsLoading(false);
                if(error.response) {
                    if(error.response.data.error) throw new Error(error.response.data.error);
                    throw new Error(error.response.data.errors[0].msg);
                }

                if(error.request) throw new Error('Ups... ocurrio un error, intentalo mas tarde.');
            });

        setIsLoading(false);
        if(!response) return 'Error en la peticion';
        return response.data;
    }

    const peticionPostSwall = (options: peticionPostSwallOptions) => {
        const { body, paht, config, messageError, messageSuccess } = options;
        peticionPost(paht, body, config)
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    text: (messageSuccess) ? messageSuccess : `${res.msg}`,
                    customClass: { popup: 'alert' }
                });
            })
            .catch(error => {
                setIsLoading(false)
                Swal.fire({
                    icon: 'error',
                    text: (messageError) ? messageError : `${error.message}`,
                    customClass: { popup: 'alert' }
                });
            });
    }

    return {
        form,
        isLoading,
        onChange,
        peticionPost,
        setIsLoading,
        peticionPostSwall,
        clearValues
    }
}