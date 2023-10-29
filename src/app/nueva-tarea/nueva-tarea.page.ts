import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea.model';
import { NavController } from '@ionic/angular';
import { NewTask } from '../models/new_task.model';
import { TareasService } from '../tareas/tareas.service';
import Swal from 'sweetalert2';
import { ContactosService } from '../contactos/contactos.service';
import { ContactModel } from '../models/contact_response.model';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.page.html',
  styleUrls: ['./nueva-tarea.page.scss'],
})
export class NuevaTareaPage implements OnInit {
  tarea: NewTask = new NewTask();
  tareas: Tarea[] = [];
  fechaActual!: string;
  listaDeContactos : ContactModel[] = [];

  constructor(private navCtrl: NavController,
              private tareaService: TareasService,
              private contactoService: ContactosService) {}


  ngOnInit(): void {
    this.tarea.startDate = new Date();
    this.fechaActual = this.tarea.startDate.getDate() + '/' + (this.tarea.startDate.getMonth() + 1) + '/' + this.tarea.startDate.getFullYear();
    this.cargarContactos();
  }

  submitForm() {
    console.log(this.tarea);
    const idString = localStorage.getItem('id');
    const idNumber = parseInt(idString!, 10);
    this.tarea.userId = idNumber;

    if (this.tarea.name.length > 2) {
      console.log(this.tarea);
      this.tareaService.create(this.tarea).subscribe(() => {
        this.taskCreated();
      });
    } else {

    }
  }

  cargarContactos(){
    const idString = localStorage.getItem('id');
    const idNumber = parseInt(idString!, 10);
    this.contactoService.getAllContactos(idNumber).subscribe(( resp : ContactModel[]) => {
      this.listaDeContactos = resp;
    });
  }

  cerrarPagina(){
    this.navCtrl.navigateBack('/tabs/tareas');
  }

  taskCreated(){
    Swal.fire({
      title: 'Registro exitoso',
      text: 'Tu tarea se ha creado con exito',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK',
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.navCtrl.navigateRoot('/tabs/tareas');
      }
    });
  }

  onUsuarioAsignadoChange(event: Event) {
    const customEvent = event as CustomEvent;
    const selectedValue = (customEvent.detail.value);
    this.tarea.contactId = selectedValue;
  }
  

}
