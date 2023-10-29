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
  private readonly url: string = "http://localhost:8080/contact";

  constructor(public http: HttpClient) { 

  }

  getAllContactos(id: number): Observable<ContactModel[]>{
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + jwt);
    return this.http.get<ContactModel[]>(`${this.url}/by-user/${id}`, { headers });
  }

  addContacto(contacto : Contacto){
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + jwt);
    return this.http.post(`${this.url}/create`, contacto, { headers });
  }

  deleteContacto(id: number):Observable<any>{
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + jwt);
    return this.http.delete<GeneralResponse>(this.url + "/"  + id, { headers });
  }

  actualizarContacto(id: number, contactoActualizado: ContactModel): Observable<any> {
    const url = `${this.url}/${id}`;
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + jwt);
    return this.http.put(url, contactoActualizado, { headers });
  }
}
