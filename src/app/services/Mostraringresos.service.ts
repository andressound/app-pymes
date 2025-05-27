import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingreso } from '../models/Ingreso';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  private apiUrl = 'http://localhost/Apisavewithus/getingreso.php'; // Base URL

    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }


     getIngreso(idEmpresa: number): Observable<Ingreso[]> {
    return this.http.get<Ingreso[]>(`${this.apiUrl}/getingreso.php?id_empresa=${idEmpresa}`);
  }
  
}
