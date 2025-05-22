import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  // Importante para retornar el observable

@Injectable({
  providedIn: 'root'
})
export class RegistrarseService {

  private url = 'http://localhost/Apisavewithus/postusuario.php';

  constructor(private http: HttpClient) { }

  registrar_cuenta(usuario: any): Observable<any> {
    return this.http.post<any>(this.url, usuario);
  }
}
