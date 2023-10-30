import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewTask } from '../models/new_task.model';
import { Tarea } from '../models/tarea.model';
import { GeneralResponse } from '../models/general_response.model';
import { UpdateTask } from '../models/update_task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private readonly URL_BASE = 'http://localhost:8080/task';
  private headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    this.setupHeaders();
  }

  private setupHeaders(): void {
    const jwt = sessionStorage.getItem('jwt');
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
  }

  private getHeaders(): HttpHeaders {
    return this.headers;
  }

  create(newTask: NewTask) {
    return this.http.post(`${this.URL_BASE}/create`, newTask, { headers: this.getHeaders() });
  }

  getAllByUser(id: number): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.URL_BASE}/by-user/${id}`, { headers: this.getHeaders() });
  }

  delete(id: number): Observable<GeneralResponse[]> {
    return this.http.delete<GeneralResponse[]>(`${this.URL_BASE}/${id}`, { headers: this.getHeaders() });
  }

  update(id: number, task: UpdateTask) {
    return this.http.put(`${this.URL_BASE}/${id}`, task, { headers: this.getHeaders() });
  }
}
