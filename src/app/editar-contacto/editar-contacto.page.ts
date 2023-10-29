import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../models/contact_response.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ContactosService } from '../contactos/contactos.service';
import Swal from 'sweetalert2';
import { SharedService } from '../tabs/shared.service';

@Component({
  selector: 'app-editar-contacto',
  templateUrl: './editar-contacto.page.html',
  styleUrls: ['./editar-contacto.page.scss'],
})
export class EditarContactoPage implements OnInit {

  contacto!: ContactModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private readonly contactoService: ContactosService,
    private readonly sharedService: SharedService,
  ) { 
    this.contacto = history.state.contact;
    console.log(this.contacto);
  }

  ngOnInit() {
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
