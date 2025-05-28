import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Empresa } from '../models/Empresa';
import { Ingreso } from '../models/Ingreso';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private apiUrl = 'http://localhost/Apisavewithus/getempresa.php?id_empresa=1'; // Base URL

  constructor(private http: HttpClient) { }

  getEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${this.apiUrl}/getempresa.php`);
  }

  actualizarEmpresa(nit: string, empresa: Empresa): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateempresa.php?id=${nit}`, empresa);
    // Note: You'll need to create updateempresa.php endpoint
  }
}