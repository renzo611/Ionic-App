import { Component, OnInit } from '@angular/core';
import { Contacto } from '../models/contacto.model';
import { Tarea } from '../models/tarea.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {


  listaTareas : Tarea[] = [];
  tareasFiltradas: Tarea[] = [];
  formularioEnEdicion = false;
  listaDeContactos : Contacto[] = []; 
  listaDeContactosFiltrados : Contacto[] = [];

  filtro = {
    titulo: '',
    usuario: ''
  };

  constructor(private navCtrl: NavController){
    this.getAllTareas();
    this.cargarContactos();
  }
  ngOnInit(): void {
  }

  getAllTareas(){
    this.tareasFiltradas = [
      new Tarea(
        1,
        "Tarea numero 1",
        "Tarea",
        "Renzo Fajardo"
      ),
      new Tarea(
        2,
        "Tarea numero 1",
        "Tarea",
        "Pedro Sanchez"
      ),
    ]
  }

  agregarNuevaTarea(){
    this.navCtrl.navigateForward('/nueva-tarea');
  }

  filtrarPorTitulo() {

  }

  filtrarPorContacto(){

  }

  cargarContactos(){
    this.listaDeContactos = [
      new Contacto(
        1,
        "Renzo Fajardo",
        "renzofajardo@gmail.com",
        "+543825413369"
      ),
      new Contacto(
        2,
        "Pedro Sanchez",
        "pedrosanchez@gmail.com",
        "+543825413312"
      ),
    ]
  }

  editarTarea(tarea: Tarea) {
  }
  eliminarTarea(id : number) {
  }
}
