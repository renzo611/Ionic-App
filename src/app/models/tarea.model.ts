export class Tarea{
    id!: number;
    description!: string;
    name! : string;
    startDate!: Date;
    endDate!: Date;
    contactName!: string;
    contactId!: number;

    constructor(id?: number, descripcion?: string, titulo? : string, usuarioAsignado?: string){
        this.id = id!;
        this.description = descripcion!;
        this.name = titulo!;
        this.contactName = usuarioAsignado!;
        const timestamp = 1631347200000;
        this.startDate = new Date(timestamp);
        this.endDate = new Date(timestamp);
    }
}