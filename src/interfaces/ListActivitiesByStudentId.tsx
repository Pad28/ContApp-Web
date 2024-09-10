export interface ListActivitiesByStudentID {
    results: Result[];
}

export interface Result {
    id: string;
    fecha: Date;
    id_alumno: string;
    id_actividad: string;
}
