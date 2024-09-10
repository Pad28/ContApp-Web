import { AxiosRequestConfig } from "axios";
import { useState } from "react";
import { contAppApi } from "../../api/server";
import Swal from "sweetalert2";

interface options {
    path: string;
    config?: AxiosRequestConfig;
    messageError?: string;
}

export const useRequestGet = () => {
    const [isLoading, setIsLoading] = useState(false);

    const requestGet = async ({ path, config }: options) => {
        setIsLoading(true);
        const response = await contAppApi.get(path, config)
            .catch(error => {
                if (error.response) {
                    if (error.response.data.msg) {
                        throw new Error(error.response.data.msg);
                    }
                    throw new Error(error.response.data.errors[0].msg);
                }
                if (error.request) {
                    throw new Error('Ups... ocurio un error, intentalo mas tarde');
                }
            })
            .finally(() => setIsLoading(false));
        if (!response) throw `Error response`;
        return response.data;
    }

    const requestGetAlert = async (options: options) => {
        const response = await requestGet(options)
            .catch(error => {
                Swal.fire({
                    title: "Error",
                    icon: "error",
                    text: (options.messageError) ? options.messageError : `${error.message}`,
                    customClass: { popup: 'alert' },
                })
            });
        return response;
    }

    return {
        isLoading,
        setIsLoading,
        requestGet,
        requestGetAlert,
    }
}

