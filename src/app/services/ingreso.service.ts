import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingreso } from '../models/Ingreso';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {
  private url = 'http://localhost/Apisavewithus/postingreso.php';

  constructor(private http: HttpClient) {}

  registrarIngreso(ingreso: Ingreso): Observable<{codigo: string, mensaje: string}> {
    return this.http.post<{codigo: string, mensaje: string}>(this.url, ingreso);
  }
      obtenerIngresos(): Observable<any> {
    return this.http.get(`${this.url}/getingresos.php`);
}

}
