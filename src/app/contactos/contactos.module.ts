import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactosPageRoutingModule } from './contactos-routing.module';

import { ContactosPage } from './contactos.page';
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";
import { ContactosService } from './contactos.service';

@NgModule({
    declarations: [ContactosPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ContactosPageRoutingModule,
        ExploreContainerComponentModule,
    ],
    providers: []
})
export class ContactosPageModule {}
