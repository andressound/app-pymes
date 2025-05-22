import { Component, OnInit } from '@angular/core';
import { Header2Component } from '../../components/header2/header2.component';
import { Footer2Component } from '../../components/footer2/footer2.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { PrincipalService } from '../../services/principal.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterLink, Header2Component, Footer2Component],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  usuario: Usuario | null = null;
  id_usuario: number = 0;

  constructor(public principalService: PrincipalService, public route: ActivatedRoute) {
    const user = route.snapshot.params['user'];
    this.id_usuario = user;
  }

  async ngOnInit() {
    await this.principalService.obtener_usuarios();
    this.usuario = this.principalService.buscar_usuario(this.id_usuario);
  }
}

