import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
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
      console.log('Entro al guard por if')
      return this.navCtrl.navigateRoot(['/tabs/tareas']);
    }
    console.log('Entro al guard');
    return false;
  }
  
}
