export interface Experiencia {
    id: number;
    nombre: string;
    puesto: string;
    descripcion: string;
    imagen: string;
    fechaInicio: Date | null;
    fechaFin: Date | null;
}