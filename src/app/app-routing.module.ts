import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs/login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tabs/registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tabs/contactos',
    loadChildren: () => import('./contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'tabs/tareas',
    loadChildren: () => import('./tareas/tareas.module').then( m => m.TareasPageModule)
  },
  {
    path: 'nueva-tarea',
    loadChildren: () => import('./nueva-tarea/nueva-tarea.module').then( m => m.NuevaTareaPageModule)
  },
  {
    path: 'nuevo-contacto',
    loadChildren: () => import('./nuevo-contacto/nuevo-contacto.module').then( m => m.NuevoContactoPageModule)
  },
  {
    path: 'editar-tarea',
    loadChildren: () => import('./editar-tarea/editar-tarea.module').then( m => m.EditarTareaPageModule)
  },
  {
    path: 'editar-contacto',
    loadChildren: () => import('./editar-contacto/editar-contacto.module').then( m => m.EditarContactoPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
