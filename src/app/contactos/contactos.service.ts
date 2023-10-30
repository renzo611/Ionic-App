import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto.model';
import { ContactModel } from '../models/contact_response.model';
import { GeneralResponse } from '../models/general_response.model';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  private readonly baseUrl: string = "http://localhost:8080/contact";
  private headers!: HttpHeaders;

  constructor(public http: HttpClient) {
    this.setupHeaders();
  }

  private setupHeaders(): void {
    const jwt = sessionStorage.getItem('jwt');
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
  }

  private getHeaders(): HttpHeaders {
    return this.headers;
  }

  getAllContactos(id: number): Observable<ContactModel[]> {
    return this.http.get<ContactModel[]>(`${this.baseUrl}/by-user/${id}`, { headers: this.getHeaders() });
  }

  addContacto(contacto: Contacto): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, contacto, { headers: this.getHeaders() });
  }

  deleteContacto(id: number): Observable<GeneralResponse> {
    return this.http.delete<GeneralResponse>(`${this.baseUrl}/${id}`, { headers: this.getHeaders() });
  }

  actualizarContacto(id: number, contactoActualizado: ContactModel): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put(url, contactoActualizado, { headers: this.getHeaders() });
  }
}
