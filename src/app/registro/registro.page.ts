import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from './registro.service';
import { RegistroRequest } from './dto/registro.request.dto';
import { NavController } from '@ionic/angular';
import { SharedService } from '../tabs/shared.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  registerForm : FormGroup = this.fb.group({
    nombre: ['',[Validators.required, ]],
    email: ['',[Validators.required, ],],
    username: ['',[Validators.required]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required]],
  },{})

  constructor(private readonly fb: FormBuilder, 
              private readonly registroService: RegistroService,
              private readonly navCtrl: NavController,
              private readonly sharedService: SharedService,
    ){}

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
        this.registerUser();
      }
    }, (err) => {
      this.errorLogin(err.error.message);
    })
  }

  registerUser() {
    this.sharedService.showAlert(
      'Registro exitoso',
      'Sí, ir al inicio de sesión',
      () => {
        this.navCtrl.navigateRoot('/tabs/login');
      },
      'No, quedarme aquí'
    );
  }
  

  errorLogin(mensaje: string) {
    this.sharedService.showErrorAlert('Error', mensaje);
  }
  

}
