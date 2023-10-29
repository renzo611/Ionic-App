import { Component, OnInit } from '@angular/core';
import { ContactosService } from './contactos.service';
import { NavController } from '@ionic/angular';
import { ContactModel } from '../models/contact_response.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit{

  contactos : ContactModel[] = [];
  formularioEnEdicion: boolean = false;

  constructor(private navCtrl: NavController,
    private contactosService: ContactosService){
    this.cargarContactos();
  }

  ngOnInit(): void {
  }
  
  editarContacto(contacto : ContactModel){
    this.navCtrl.navigateForward(`/editar-contacto`, {
      state: {
        contact: contacto,
      },
    });
  }

  eliminarContacto(id: number) {
    Swal.fire({
      title: '¿Estás seguro de eliminar el contacto?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      heightAuto: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.contactosService.deleteContacto(id).subscribe((resp) => {
          Swal.fire({
            title: 'Contacto eliminado',
            icon: 'success',
            heightAuto: false
          }).then(() => {
            window.location.reload();
          });
        });
      }
    });
  }

  agregarContacto(){
    /*this.formularioEnEdicion = !this.formularioEnEdicion;
    this.cargarContactos();*/
    this.navCtrl.navigateBack('/nuevo-contacto');
  }

  cargarContactos(){
    const idString = localStorage.getItem('id');
    const idNumber = parseInt(idString!, 10);
    this.contactosService.getAllContactos(idNumber).subscribe(( resp : ContactModel[]) => {
      this.contactos = resp;
    })
  }

}
