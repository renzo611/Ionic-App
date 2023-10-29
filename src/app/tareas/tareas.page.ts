import { Component, OnInit } from '@angular/core';
import { Contacto } from '../models/contacto.model';
import { Tarea } from '../models/tarea.model';
import { NavController } from '@ionic/angular';
import { TareasService } from './tareas.service';
import Swal from 'sweetalert2';
import { ContactosService } from '../contactos/contactos.service';
import { ContactModel } from '../models/contact_response.model';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {


  listaTareas : Tarea[] = [];
  tareasFiltradas: Tarea[] = [];
  formularioEnEdicion = false;
  listaDeContactos : ContactModel[] = []; 

  filtro = {
    titulo: '',
    usuario: ''
  };

  constructor(private navCtrl: NavController, private readonly tareaService: TareasService, private contactoServices: ContactosService){
    this.getAllTareas();
    this.cargarContactos();
  }
  ngOnInit(): void {
  }

  getAllTareas(){
    const idString = localStorage.getItem('id');
    const idNumber = parseInt(idString!, 10);
    this.tareaService.getAllByUser(idNumber).subscribe( response => {
      this.listaTareas = response;
      this.tareasFiltradas = response;
    }, err => {
      console.log(err);
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
    const idString = localStorage.getItem('id');
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
  eliminarTarea(id : number) {
    Swal.fire({
      title: '¿Estás seguro de eliminar esta tarea?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      heightAuto: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.tareaService.delete(id).subscribe((resp) => {
          Swal.fire({
            title: 'Tarea eliminada',
            icon: 'success',
            heightAuto: false
          }).then(() => {
            window.location.reload();
          });
        });
      }
    });
  }
}
