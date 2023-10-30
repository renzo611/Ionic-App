import { Component } from '@angular/core';
import { Contacto } from '../models/contacto.model';
import { NavController } from '@ionic/angular';
import { ContactosService } from '../contactos/contactos.service';
import { SharedService } from '../tabs/shared.service';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.page.html',
  styleUrls: ['./nuevo-contacto.page.scss'],
})
export class NuevoContactoPage {

  contacto : Contacto = new Contacto();

  constructor(private readonly navCtrl: NavController,
              private readonly contactoService: ContactosService,
              private readonly sharedService: SharedService,){}

  cerrarPagina() {
    this.navCtrl.navigateBack('/tabs/contactos');
  }

  submitForm() {
    if (this.contacto.email.length > 2) {
      const idString = sessionStorage.getItem('id');
      const idNumber = parseInt(idString!, 10);
      this.contacto.userId = idNumber;
      this.contactoService.addContacto(this.contacto).subscribe(() => {
        this.contactCreated();
      });
    }
  }

  contactCreated() {
    this.sharedService.showAlert(
      'Registro exitoso',
      'OK',
      () => {
        this.navCtrl.navigateRoot('/tabs/contactos');
      }
    );
  }

}
