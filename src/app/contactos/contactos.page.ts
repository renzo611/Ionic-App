import { Component } from '@angular/core';
import { ContactosService } from './contactos.service';
import { NavController } from '@ionic/angular';
import { ContactModel } from '../models/contact_response.model';
import { SharedService } from '../tabs/shared.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage{

  contactos : ContactModel[] = [];
  formularioEnEdicion: boolean = false;

  constructor(private navCtrl: NavController,
    private readonly contactosService: ContactosService,
    private readonly sharedService: SharedService){
    this.cargarContactos();
  }
  
  editarContacto(contacto : ContactModel){
    this.navCtrl.navigateForward(`/editar-contacto`, {
      state: {
        contact: contacto,
      },
    });
  }

  eliminarContacto(id: number) {
    this.sharedService.showConfirmationAlert(
      '¿Estás seguro de eliminar el contacto?',
      'Esta acción no se puede deshacer',
      () => {
        this.contactosService.deleteContacto(id).subscribe((resp) => {
          this.sharedService.showConfirmationAlert(
            'Contacto eliminado',
            '',
            () => window.location.reload()
          );
        });
      }
    );
  }
  

  agregarContacto(){
    /*this.formularioEnEdicion = !this.formularioEnEdicion;
    this.cargarContactos();*/
    this.navCtrl.navigateBack('/nuevo-contacto');
  }

  cargarContactos(){
    const idString = sessionStorage.getItem('id');
    const idNumber = parseInt(idString!, 10);
    this.contactosService.getAllContactos(idNumber).subscribe(( resp : ContactModel[]) => {
      this.contactos = resp;
    })
  }

}
