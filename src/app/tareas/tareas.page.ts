import { Component } from '@angular/core';
import { Tarea } from '../models/tarea.model';
import { NavController } from '@ionic/angular';
import { TareasService } from './tareas.service';
import { ContactosService } from '../contactos/contactos.service';
import { ContactModel } from '../models/contact_response.model';
import { SharedService } from '../tabs/shared.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage {


  listaTareas : Tarea[] = [];
  tareasFiltradas: Tarea[] = [];
  formularioEnEdicion = false;
  listaDeContactos : ContactModel[] = []; 

  filtro = {
    titulo: '',
    usuario: ''
  };

  constructor(private readonly navCtrl: NavController, 
              private readonly tareaService: TareasService, 
              private readonly contactoServices: ContactosService,
              private readonly sharedService: SharedService){
    this.getAllTareas();
    this.cargarContactos();
  }

  getAllTareas(){
    const idString = sessionStorage.getItem('id');
    const idNumber = parseInt(idString!, 10);
    this.tareaService.getAllByUser(idNumber).subscribe( response => {
      this.listaTareas = response;
      this.tareasFiltradas = response;
    });
  }

  agregarNuevaTarea(){
    this.navCtrl.navigateForward('/nueva-tarea');
  }

  filtrarPorTitulo() {
    if(this.filtro.titulo.length <= 3){
      this.tareasFiltradas = this.listaTareas;
    }else{
      this.tareasFiltradas = this.tareasFiltradas.filter(tarea => tarea.name.startsWith(this.filtro.titulo));
    }
  }

  filtrarPorContacto(event: Event) {
    const customEvent = event as CustomEvent;
    const contactId = customEvent.detail.value;
    
    if (contactId === 'all') {
      this.tareasFiltradas = this.listaTareas;
    } else {
      const contact: ContactModel = contactId as ContactModel;
      this.tareasFiltradas = this.tareasFiltradas.filter(tarea => tarea.contactId === contact.id);
    }
  }

  cargarContactos(){
    const idString = sessionStorage.getItem('id');
    const idNumber = parseInt(idString!, 10);
    this.contactoServices.getAllContactos(idNumber).subscribe( data => {
      this.listaDeContactos = data;
    });
  }

  editarTarea(tarea: Tarea) {
    this.navCtrl.navigateForward(`/editar-tarea`, {
      state: {
        task: tarea,
      },
    });
  }

  eliminarTarea(id: number) {
    this.sharedService.showConfirmationAlert(
      '¿Estás seguro de eliminar esta tarea?',
      'Esta acción no se puede deshacer',
      () => {
        this.tareaService.delete(id).subscribe(() => {
          this.sharedService.showAlert('Tarea eliminada', 'OK', () => {
            window.location.reload();
          });
        });
      }
    );
  }
  
}
