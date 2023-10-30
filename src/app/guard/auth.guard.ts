import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { SharedService } from '../tabs/shared.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly sharedService: SharedService, private navCtrl: NavController){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    if (this.sharedService.isLogin()) {
      return this.navCtrl.navigateRoot(['/tabs/tareas']);
    }
    console.log('Entro al guard');
    return true;
  }
  
}
