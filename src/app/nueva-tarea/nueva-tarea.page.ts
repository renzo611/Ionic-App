import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea.model';
import { Contacto } from '../models/contacto.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.page.html',
  styleUrls: ['./nueva-tarea.page.scss'],
})
export class NuevaTareaPage implements OnInit {
  tarea: Tarea = new Tarea();
  tareas: Tarea[] = [];
  fechaActual!: string;
  listaDeContactos : Contacto[] = [];

  constructor(private navCtrl: NavController) {}


  ngOnInit(): void {
    this.tarea.fechaInicio = new Date();
    this.fechaActual = this.tarea.fechaInicio.getDate() + '/' + (this.tarea.fechaInicio.getMonth() + 1) + '/' + this.tarea.fechaInicio.getFullYear();
    this.cargarContactos();
  }

  submitForm() {
    console.log(this.tarea);
    if (this.tarea.titulo.length > 2) {
      /*this.tareaService.addTarea(this.tarea).subscribe(() => {
        this.dialogoService.abrirDialogoNuevaTarea(false);
      });*/
    } else {

    }
  }

  cargarContactos(){
    /*this.contactosService.getAllContactos().subscribe(( resp : Contacto[]) => {
      this.listaDeContactos = resp;
    });*/
  }

  cerrarPagina(){
    this.navCtrl.navigateBack('/tabs/tareas');
  }
}
