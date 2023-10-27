import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private navCtrl: NavController) {}

  login(){
    this.navCtrl.navigateForward('/tabs/login')
  }

  register(){
    this.navCtrl.navigateForward('/tabs/registro')
  }
}
