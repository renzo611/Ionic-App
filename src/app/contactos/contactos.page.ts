import { Component, OnInit } from '@angular/core';
import { Contacto } from '../models/contacto.model';
import { ContactosService } from './contactos.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit{

  contactos : Contacto[] = [];
  formularioEnEdicion: boolean = false;

  constructor(private navCtrl: NavController,
    private contactosService: ContactosService){
    this.cargarContactos();
  }

  ngOnInit(): void {
  }
  
  editarContacto(contacto : Contacto){
    /*this.formularioEnEdicion = !this.formularioEnEdicion;
    this.cargarContactos();*/
  }

  eliminarContacto(id : number){
    /*this.contactosServices.deleteContacto(id).subscribe(( resp: any) => {
      this.cargarContactos();
    });*/
  } 

  agregarContacto(){
    /*this.formularioEnEdicion = !this.formularioEnEdicion;
    this.cargarContactos();*/
    this.navCtrl.navigateBack('/nuevo-contacto');
  }

  cargarContactos(){
    /*this.contactosServices.getAllContactos().subscribe(( resp : Contacto[]) => {
      this.contactos = resp;
    })*/
    this.contactos = [
      new Contacto(
        1,
        "Renzo Fajardo",
        "renzofajardo@gmail.com",
        "+543825413369"
      ),
      new Contacto(
        2,
        "Pedro Sanchez",
        "pedrosanchez@gmail.com",
        "+543825413312"
      ),
    ]
  }

}
