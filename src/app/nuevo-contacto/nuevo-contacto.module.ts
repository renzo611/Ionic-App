import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoContactoPageRoutingModule } from './nuevo-contacto-routing.module';

import { NuevoContactoPage } from './nuevo-contacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoContactoPageRoutingModule
  ],
  declarations: [NuevoContactoPage]
})
export class NuevoContactoPageModule {}
