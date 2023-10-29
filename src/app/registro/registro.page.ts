import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from './registro.service';
import { RegistroRequest } from './dto/registro.request.dto';
import Swal from 'sweetalert2';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registerForm : FormGroup = this.fb.group({
    nombre: ['',[Validators.required, ]],
    email: ['',[Validators.required, ],],
    username: ['',[Validators.required]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required]],
  },{})

  constructor(private fb: FormBuilder, 
              private readonly registroService: RegistroService,
              private navCtrl: NavController,
    ){}

  ngOnInit(): void {

  }

  campoNoValido( campo : string){
    return this.registerForm.get(campo)?.invalid
           && this.registerForm.get(campo)?.touched;
  }

  submitFormulario(){
    const nameControl = this.registerForm.get('nombre');
    const emailControl = this.registerForm.get('email');
    const usernameControl = this.registerForm.get('username');
    const passwordControl = this.registerForm.get('password');
    this.registroService.registerUser(new RegistroRequest(
      nameControl?.value,
      emailControl?.value,
      usernameControl?.value,
      passwordControl?.value,
    )).subscribe((response) => {
      console.log(response);
      if(response.code < 400){
        this.registerForm.reset();
        this.successLogin();
      }
    }, (err) => {
      this.errorLogin(err.error.message);
    })
  }

  successLogin() {
    Swal.fire({
      title: 'Registro exitoso',
      text: 'Tu registro ha sido exitoso. ¿Deseas ir a la página de inicio de sesión?',
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, ir al inicio de sesión',
      cancelButtonText: 'No, quedarme aquí',
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.navCtrl.navigateRoot('/tabs/login');
      }
    });
  }

  errorLogin(mensaje: string){
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: mensaje,
      confirmButtonText: 'Cerrar',
      heightAuto: false
    });
  }

}
