import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LateralComponent } from '../../components/lateral/lateral.component';
import { Header2Component } from '../../components/header2/header2.component';
import { Footer2Component } from '../../components/footer2/footer2.component';
import { Component, OnInit } from '@angular/core';
import { MostrarEgresoService } from '../../services/mostraregreso.service';
import { FormsModule } from '@angular/forms';
import { Egreso } from '../../models/egreso';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { EmpresaService } from '../../services/empresa.service';
@Component({
  selector: 'app-ingresos',
  imports: [CommonModule, RouterModule, Header2Component, Footer2Component, FormsModule],
  templateUrl: './egresos.component.html',
  styleUrl: './egresos.component.css'
})

export class EgresosComponent implements OnInit {
  egresos: Egreso[] = [];
  cargando: boolean = true;

constructor(private empresaService: EmpresaService, private http: HttpClient) {}
  ngOnInit(): void {
    this.obtenerEgresos();
  }

  obtenerEgresos(): void {
    this.cargando = true;
    this.http.get<Egreso[]>('http://localhost/Apisavewithus/getegreso.php?id_empresa=1')
      .pipe(
        tap(egresos => {
          this.egresos = egresos || [];
          this.cargando = false;
        }),
        catchError(error => {
          console.error('Error al cargar egresos:', error);
          this.cargando = false;
          return [];
        })
      ).subscribe();
  }
}
