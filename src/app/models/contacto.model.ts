export class Contacto {
    id!: number;
    nombre!: string;
    email!: string;
    telefono!: string;

    constructor(id?: number, nombre?: string, email?: string, telefono?: string){
        this.id = id!;
        this.nombre = nombre!;
        this.email = email!;
        this.telefono = telefono!;
    }
}