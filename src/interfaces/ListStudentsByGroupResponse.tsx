export interface ListStudentsByGroup {
    results: Result[];
}

export interface Result {
    nombre: string;
    apellidos: string;
    id_grupo: string;
    matricula: string;
    correo: string;
}
