export interface ListAnsweredActivity {
    results: Result[];
}

export interface Result {
    id: string;
    fecha: Date;
    id_alumno: string;
    id_actividad: string;
    fk_actividad: FkActividad;
}

export interface FkActividad {
    id: string;
    nombre: string;
    fecha_creacion: Date;
    fecha_activacion: Date;
    fecha_limite: Date;
    id_grupo: string;
    fk_pregunta: FkPregunta[];
}

export interface FkPregunta {
    id: string;
    pregunta: string;
    id_actividad: string;
    fk_pregunta_respondida: FkPreguntaRespondida[];
}

export interface FkPreguntaRespondida {
    id: string;
    id_pregunta: string;
    id_respuesta: string;
    fk_respuesta: FkRespuesta;
}

export interface FkRespuesta {
    id: string;
    respuesta: string;
    esCorrecta: boolean;
    id_pregunta: string;
}
