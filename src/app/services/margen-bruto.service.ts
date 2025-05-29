import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class MargenBrutoService {
  private url = 'http://localhost/Apisavewithus/postmargenbruto.php';
  constructor(private http: HttpClient) {}

  registrar(data: any): Observable<any> {
    return this.http.post<any>(this.url, data);
  }

  obtener(): Observable<any> {
    return this.http.get(`${this.url}/getmargenbruto.php`);
  }
}
