import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'registro',
        loadChildren: () => import('../registro/registro.module').then(m => m.RegistroPageModule)
      },
      {
        path: 'contactos',
        loadChildren: () => import('../contactos/contactos.module').then(m => m.ContactosPageModule)
      },
      {
        path: 'tareas',
        loadChildren: () => import('../tareas/tareas.module').then(m => m.TareasPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
