import { Component } from '@angular/core';
import { ContactModel } from '../models/contact_response.model';
import { NavController } from '@ionic/angular';
import { ContactosService } from '../contactos/contactos.service';
import { SharedService } from '../tabs/shared.service';

@Component({
  selector: 'app-editar-contacto',
  templateUrl: './editar-contacto.page.html',
  styleUrls: ['./editar-contacto.page.scss'],
})
export class EditarContactoPage {

  contacto!: ContactModel;

  constructor(
    private readonly navCtrl: NavController,
    private readonly contactoService: ContactosService,
    private readonly sharedService: SharedService,
  ) { 
    this.contacto = history.state.contact;
  }

  updateContact(){
    this.contactoService.actualizarContacto(this.contacto.id, this.contacto)
    .subscribe( data => {
      this.sharedService.showAlert(
        'Contacto actualizado',
        'OK',
        () => {
          this.navCtrl.navigateRoot('/tabs/contactos');
        }
      );
    }, err => {
      
    });
  }

  cerrarPagina() {
    this.navCtrl.navigateBack('/tabs/contactos');
  }
}
