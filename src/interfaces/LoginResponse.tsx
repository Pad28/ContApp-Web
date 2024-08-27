export interface LoginResponse {
    user:  User;
    token: string;
}

export interface User {
    matricula: string;
    nombre:    string;
    apellidos: string;
    correo:    string;
    rol:       string;
    id_grupo:  null;
}
