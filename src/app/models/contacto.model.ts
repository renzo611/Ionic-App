export class Contacto {
    userId!: number;
    name!: string;
    email!: string;
    phone!: string;

    constructor(id?: number, nombre?: string, email?: string, telefono?: string){
        this.userId = id!;
        this.name = nombre!;
        this.email = email!;
        this.phone = telefono!;
    }
}