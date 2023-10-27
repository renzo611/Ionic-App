import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoginPageRoutingModule,
        ExploreContainerComponentModule,
        ReactiveFormsModule
    ]
})
export class LoginPageModule {}
