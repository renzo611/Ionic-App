import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroRequest } from './dto/registro.request.dto';
import { GeneralResponse } from '../models/general_response.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private readonly URL_BASE = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  registerUser(registroRequest: RegistroRequest){
    return this.http.post<GeneralResponse>(`${this.URL_BASE}/user/register`, registroRequest);
  }
}
