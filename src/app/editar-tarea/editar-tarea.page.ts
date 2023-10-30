import { Component } from '@angular/core';
import { Tarea } from '../models/tarea.model';
import { NavController } from '@ionic/angular';
import { ContactModel } from '../models/contact_response.model';
import { ContactosService } from '../contactos/contactos.service';
import { TareasService } from '../tareas/tareas.service';
import { SharedService } from '../tabs/shared.service';
import { UpdateTask } from '../models/update_task.model';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.page.html',
  styleUrls: ['./editar-tarea.page.scss'],
})
export class EditarTareaPage {

  tarea: Tarea;
  newTask!: UpdateTask;
  listaDeContactos : ContactModel[] = [];

  constructor(private readonly navCtrl: NavController,
              private readonly contactoService: ContactosService,
              private readonly tareaService: TareasService,
              private readonly sharedService: SharedService) {
    this.tarea = history.state.task;
    this.newTask = new UpdateTask(this.tarea.name, this.tarea.description, this.tarea.startDate, this.tarea.endDate, this.tarea.contactId);
    this.cargarContactos();
  }

  cerrarPagina(){
    this.navCtrl.navigateBack('/tabs/tareas');
  }

  updateTask(){
    this.tareaService.update(this.tarea.id, this.newTask).subscribe( data =>
      {
        this.sharedService.showAlert('Tarea actualizada correctamente', 'OK', () => {
          this.navCtrl.navigateRoot('/tabs/tareas');
        })
      }
    );
  }


  onUsuarioAsignadoChange(event: Event) {
    const customEvent = event as CustomEvent;
    const selectedValue = (customEvent.detail.value);
    this.newTask.contactId = selectedValue;
  }

  cargarContactos(){
    const idString = sessionStorage.getItem('id');
    const idNumber = parseInt(idString!, 10);
    this.contactoService.getAllContactos(idNumber).subscribe(( resp : ContactModel[]) => {
      this.listaDeContactos = resp;
    });
  }
}
