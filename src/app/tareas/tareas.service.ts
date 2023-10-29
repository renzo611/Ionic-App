import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewTask } from '../models/new_task.model';
import { Tarea } from '../models/tarea.model';
import { GeneralResponse } from '../models/general_response.model';
import { UpdateTask } from '../models/update_task.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private readonly URL_BASE = 'http://localhost:8080/task'
  constructor(private http: HttpClient) { }

  create(newTask : NewTask){
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + jwt);
    return this.http.post(`${this.URL_BASE}/create`, newTask, { headers });
  }

  getAllByUser(id: number){
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + jwt);
    return this.http.get<Tarea[]>(`${this.URL_BASE}/by-user/${id}`, { headers });
  }

  delete(id: number){
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + jwt);
    return this.http.delete<GeneralResponse[]>(`${this.URL_BASE}/${id}`, { headers });
  }

  update(id: number, task: UpdateTask){
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + jwt);
    return this.http.put(`${this.URL_BASE}/${id}`, task, { headers });
  }
}
