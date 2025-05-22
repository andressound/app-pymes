import { Component } from '@angular/core';
import { Header1Component } from '../../components/header1/header1.component';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SesionarseService } from '../../services/sesionarse.service';

@Component({
  selector: 'app-sesionarse',
  imports: [Header1Component, RouterLink, FormsModule],
  templateUrl: './sesionarse.component.html',
  styleUrl: './sesionarse.component.css'
})
export class SesionarseComponent {
  id_usuario: number = 0;
  correo: string = "";
  contrasena: string = "";

  parametrosIncorrectos: boolean = false;

  constructor(
    public sesionarseService: SesionarseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sesionarseService.obtener_usuarios();
  }

  buscar_cuenta() {
    this.id_usuario = this.sesionarseService.buscar_usuario(this.correo, this.contrasena);
    if (this.id_usuario == 0) {
      this.parametrosIncorrectos = true;
    } else {
      // Envía el id_usuario como parámetro en la ruta
      this.router.navigate(['/principal', this.id_usuario]);

      // Alternativa si prefieres usar queryParams (URL sería /principal?user=123)
      // this.router.navigate(['/principal'], { queryParams: { user: this.id_usuario } });
    }
  }

  quitar_modal() {
    this.parametrosIncorrectos = false;
  }
}