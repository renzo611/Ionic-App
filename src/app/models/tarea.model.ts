export class Tarea{
    id!: number;
    descripcion!: string;
    titulo! : string;
    fechaInicio!: Date;
    fechaFin!: Date;
    usuarioAsignado!: string;

    constructor(id?: number, descripcion?: string, titulo? : string, usuarioAsignado?: string){
        this.id = id!;
        this.descripcion = descripcion!;
        this.titulo = titulo!;
        this.usuarioAsignado = usuarioAsignado!;
        const timestamp = 1631347200000;
        this.fechaInicio = new Date(timestamp);
        this.fechaFin = new Date(timestamp);
    }
}