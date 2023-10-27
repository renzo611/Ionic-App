import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TareasPageRoutingModule } from './tareas-routing.module';
import { TareasPage } from './tareas.page';
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

@NgModule({
    declarations: [TareasPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TareasPageRoutingModule,
        ExploreContainerComponentModule
    ]
})
export class TareasPageModule {}
