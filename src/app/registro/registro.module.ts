import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroPageRoutingModule } from './registro-routing.module';
import { RegistroPage } from './registro.page';
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [RegistroPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegistroPageRoutingModule,
        ExploreContainerComponentModule,
        ReactiveFormsModule
    ]
})
export class RegistroPageModule {}
