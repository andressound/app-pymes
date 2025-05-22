import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  private url = 'http://localhost/Apisavewithus/getusuario.php';

  usuarios: Usuario[] = []; // Aquí se guardarán los usuarios obtenidos

  constructor(private http: HttpClient) { }

  obtener_usuarios(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.get<Usuario[]>('http://localhost/Apisavewithus/getusuario.php').subscribe({
        next: (data) => {
          this.usuarios = data;
          resolve();
        },
        error: (err) => reject(err)
      });
    });
  }

  buscar_usuario(id_usuario: number): Usuario | null {
    console.log(this.usuarios);
    for (let usuario of this.usuarios) {
      if (usuario.id_usuario == id_usuario) {
        console.log("Usuario encontrado");
        return usuario;
      }
    }
    return null;
  }
}
