import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Egreso } from '../models/egreso';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MostrarEgresoService {

  private apiUrl = 'http://localhost/Apisavewithus/getegreso.php'; // Base URL

    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }


     getEgreso(idEmpresa: number): Observable<Egreso[]> {
    return this.http.get<Egreso[]>(`${this.apiUrl}/getegreso.php?id_empresa=${idEmpresa}`);
  }
  
}

