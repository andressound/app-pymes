import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalisisService {
  private apiUrl = 'http://localhost:5000'; // Asegúrate que coincida con tu puerto Flask

  constructor(private http: HttpClient) { }

  obtenerAnalisisFinanciero(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/`);
  }
}