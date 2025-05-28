import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {
 private url = 'http://localhost/Apisavewithus/postegreso.php'
 
  constructor(private http: HttpClient) { }
  registraregreso(egreso: any): Observable<any> {
    return this.http.post<any>(this.url, egreso);
  }
    obtenerEgresos(): Observable<any> {
    return this.http.get(`${this.url}/getegresos.php`);
  }
}
