import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  miFormulario : FormGroup = this.fb.group({
    nombre: ['',[Validators.required, ]],
    email: ['',[Validators.required, ],],
    username: ['',[Validators.required]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required]],
  },{})

  constructor(private fb: FormBuilder ){}

  ngOnInit(): void {

  }

  campoNoValido( campo : string){
    return this.miFormulario.get(campo)?.invalid
           && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    this.miFormulario.markAllAsTouched();
  }

}
