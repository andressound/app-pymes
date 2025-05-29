import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class RotacionCuentasCobrarService {
  private url = 'http://localhost/Apisavewithus/postindice_rotacion_cuentas_cobrar.php';
  constructor(private http: HttpClient) {}

  registrar(data: any): Observable<any> {
    return this.http.post<any>(this.url, data);
  }

  obtener(): Observable<any> {
    return this.http.get(`${this.url}/getindice_rotacion_cuentas_cobrar.php`);
  }
}
