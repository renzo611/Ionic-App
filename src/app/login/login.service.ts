import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from './dto/login.model';
import { LoginResponse } from './dto/login_response.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly URL_BASE = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  loginUser(loginModel: LoginModel){
    return this.http.post<LoginResponse>(`${this.URL_BASE}/auth/login`, loginModel);
  }

  setCredentials(loginResponse: LoginResponse){
    localStorage.setItem('jwt', loginResponse.jwt);
    localStorage.setItem('id', loginResponse.userId.toString());
  }
}
