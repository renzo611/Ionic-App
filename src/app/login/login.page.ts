import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginModel } from './dto/login.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioInicioSesion: FormGroup;
  errorMessage = '';
  showError = false;

  constructor(private formBuilder: FormBuilder, 
              private readonly loginService: LoginService, 
              private navCtrl: NavController) {
    this.formularioInicioSesion = this.formBuilder.group({
      email: ['test@gmail.com', [Validators.required, Validators.email]],
      password: ['1234@gai', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  submitFormulario() {
    const emailControl = this.formularioInicioSesion.get('email');
    const passwordControl = this.formularioInicioSesion.get('password');
  
    this.loginService.loginUser(new LoginModel(emailControl?.value, passwordControl?.value))
      .subscribe((data) => {
        if (data && data.jwt) {
          this.loginService.setCredentials(data);
          window.location.reload();
          this.navCtrl.navigateRoot('/tabs/tareas');
        }
      }, (err) => {
        if (err.status !== 200) {
          this.errorMessage = 'Credenciales incorrectas';
          this.showError = true;
        }
        throw(err);
      });
  }

}
