import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  isLogin(){
    if(localStorage.getItem('jwt') && localStorage.getItem('id'))
      return true;

    return false;
  }
}
