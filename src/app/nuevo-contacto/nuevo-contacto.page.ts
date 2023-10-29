import { Component, OnInit } from '@angular/core';
import { Contacto } from '../models/contacto.model';
import { NavController } from '@ionic/angular';
import { ContactosService } from '../contactos/contactos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.page.html',
  styleUrls: ['./nuevo-contacto.page.scss'],
})
export class NuevoContactoPage implements OnInit {

  contacto : Contacto = new Contacto();

  constructor(private navCtrl: NavController,
              private readonly contactoService: ContactosService){}

  ngOnInit(): void {
  }

  cerrarPagina() {
    this.navCtrl.navigateBack('/tabs/contactos');
  }

  submitForm() {
    if (this.contacto.email.length > 2) {
      const idString = localStorage.getItem('id');
      const idNumber = parseInt(idString!, 10);
      this.contacto.userId = idNumber
      this.contactoService.addContacto(this.contacto).subscribe(() => {
        this.contactCreated();
      });
    }
  }

  contactCreated(){
    Swal.fire({
      title: 'Registro exitoso',
      text: 'Tu contacto se ha creado con exito',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK',
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.navCtrl.navigateRoot('/tabs/contactos');
      }
    });
  }

}
