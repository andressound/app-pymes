import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionarseService {
  private url = 'http://localhost/Apisavewithus/getusuario.php';

  usuarios: any[] = []; // Aquí se guardarán los usuarios obtenidos

  constructor(private http: HttpClient) { }

  // Método para obtener usuarios usando GET
  obtener_usuarios(): void {
    this.http.get<any[]>(this.url).subscribe(
      (respuesta) => {
        this.usuarios = respuesta; // Almacena los usuarios en el array
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );

  }

  buscar_usuario(correo: string, contrasena: string): number {
    for (let usuario of this.usuarios) {
      if (usuario.correo === correo && usuario.contraseña === contrasena) {
        return usuario.id_usuario; // Retorna el ID si encuentra coincidencia
      }
    }
    return 0; // Retorna 0 si no encuentra ningún usuario con esos datos
  }

}
