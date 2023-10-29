import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

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

  showAlert(title: string, confirmButtonText: string, confirmFunction: () => void, cancelButtonText?: string, cancelFunction?: () => void) {
    Swal.fire({
      title: title,
      icon: 'success',
      showCancelButton: cancelButtonText ? true : false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {
        confirmFunction();
      } else if (result.dismiss === Swal.DismissReason.cancel && cancelFunction) {
        cancelFunction();
      }
    });
  }


  showErrorMessage(){}
}
