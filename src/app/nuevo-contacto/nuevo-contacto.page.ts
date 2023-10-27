import { Component, OnInit } from '@angular/core';
import { Contacto } from '../models/contacto.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.page.html',
  styleUrls: ['./nuevo-contacto.page.scss'],
})
export class NuevoContactoPage implements OnInit {

  contacto : Contacto = new Contacto();

  constructor(private navCtrl: NavController){}

  ngOnInit(): void {
  }

  cerrarPagina() {
    this.navCtrl.navigateBack('/tabs/contactos');
  }

  submitForm() {
    if (this.contacto.email.length > 2) {
      /*this.contactoService.addContacto(this.contacto).subscribe(() => {
        this.dialogoService.abrirDialogoNuevaTarea(false);
      });*/
    }
  }

}
