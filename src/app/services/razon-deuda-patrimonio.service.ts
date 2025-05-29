import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RazonDeudaPatrimonioService {
  private url = 'http://localhost/Apisavewithus/postrazon_deuda_patrimonio.php';
  constructor(private http: HttpClient) {}

  registrar(data: any): Observable<any> {
    return this.http.post<any>(this.url, data);
  }

  obtener(): Observable<any> {
    return this.http.get(`${this.url}/getrazon_deuda_patrimonio.php`);
  }
}

