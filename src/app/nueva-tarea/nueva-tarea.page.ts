import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea.model';
import { NavController } from '@ionic/angular';
import { NewTask } from '../models/new_task.model';
import { TareasService } from '../tareas/tareas.service';
import { ContactosService } from '../contactos/contactos.service';
import { ContactModel } from '../models/contact_response.model';
import { SharedService } from '../tabs/shared.service';

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

  constructor(private readonly navCtrl: NavController,
              private readonly tareaService: TareasService,
              private readonly contactoService: ContactosService,
              private readonly sharedService: SharedService,) {}


  ngOnInit(): void {
    this.tarea.startDate = new Date();
    this.fechaActual = this.tarea.startDate.getDate() + '/' + (this.tarea.startDate.getMonth() + 1) + '/' + this.tarea.startDate.getFullYear();
    this.cargarContactos();
  }

  submitForm() {
    const idString = sessionStorage.getItem('id');
    const idNumber = parseInt(idString!, 10);
    this.tarea.userId = idNumber;

    if (this.tarea.name.length > 2) {
      this.tareaService.create(this.tarea).subscribe(() => {
        this.taskCreated();
      });
    }
  }

  cargarContactos(){
    const idString = sessionStorage.getItem('id');
    const idNumber = parseInt(idString!, 10);
    this.contactoService.getAllContactos(idNumber).subscribe(( resp : ContactModel[]) => {
      this.listaDeContactos = resp;
    });
  }

  cerrarPagina(){
    this.navCtrl.navigateBack('/tabs/tareas');
  }

  taskCreated() {
    this.sharedService.showAlert(
      'Registro exitoso',
      'OK',
      () => {
        this.navCtrl.navigateRoot('/tabs/tareas');
      }
    );
  }
  

  onUsuarioAsignadoChange(event: Event) {
    const customEvent = event as CustomEvent;
    const selectedValue = (customEvent.detail.value);
    this.tarea.contactId = selectedValue;
  }
  

}
