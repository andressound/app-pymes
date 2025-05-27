import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LateralComponent } from '../../components/lateral/lateral.component';
import { Header2Component } from '../../components/header2/header2.component';
import { Footer2Component } from '../../components/footer2/footer2.component';
import { Component, OnInit } from '@angular/core';
import { IngresosService } from '../../services/Mostraringresos.service';
import { FormsModule } from '@angular/forms';
import { Ingreso } from '../../models/Ingreso';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { EmpresaService } from '../../services/empresa.service';
@Component({
  selector: 'app-ingresos',
  imports: [CommonModule, RouterModule, Header2Component, Footer2Component, FormsModule],
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})

export class IngresosComponent implements OnInit {
  ingresos: Ingreso[] = [];
  cargando: boolean = true;

constructor(private empresaService: EmpresaService, private http: HttpClient) {}
  ngOnInit(): void {
    this.obtenerIngresos();
  }

  obtenerIngresos(): void {
    this.cargando = true;
    this.http.get<Ingreso[]>('http://localhost/Apisavewithus/getingreso.php?id_empresa=1')
      .pipe(
        tap(ingresos => {
          this.ingresos = ingresos || [];
          this.cargando = false;
        }),
        catchError(error => {
          console.error('Error al cargar ingresos:', error);
          this.cargando = false;
          return [];
        })
      ).subscribe();
  }
}