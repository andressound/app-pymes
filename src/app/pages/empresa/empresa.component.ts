import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Header2Component } from '../../components/header2/header2.component';
import { Footer2Component } from '../../components/footer2/footer2.component';
import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../models/Empresa'; 
import { EmpresaService } from '../../services/empresa.service';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [CommonModule, RouterModule, Header2Component, Footer2Component],
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  empresa: Empresa | null = null;
  editando: boolean = false;
  empresaEditada: any = {};

  constructor(
    private empresaService: EmpresaService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.obtenerEmpresa();
  }

  obtenerEmpresa():void {
    // Si necesitas pasar un NIT específico, reemplaza '' con el valor adecuado
    this.http.get<Empresa[]>('http://localhost/Apisavewithus/getempresa.php?id=1')
      .pipe(
        tap(empresas => {
          if (empresas && empresas.length > 0) {
            this.empresa = empresas[0]; // Tomamos la primera empresa del array
          } else {
            console.warn('No se encontraron empresas');
          }
        }),
        catchError(error => {
          console.error('Error al cargar empresa:', error);
          return [];
        })
      ).subscribe();
  }

  editarEmpresa() {
    this.editando = true;
    if (this.empresa) {
      // Creamos una copia de los datos para editar
      this.empresaEditada = {...this.empresa};
    }
  }

  guardarEmpresa() {
    if (!this.empresaEditada || !this.empresaEditada.nit) {
      console.error('No hay datos válidos para guardar');
      return;
    }

    this.empresaService.actualizarEmpresa(this.empresaEditada.nit, this.empresaEditada).subscribe({
      next: (empresaActualizada) => {
        console.log('Empresa actualizada correctamente', empresaActualizada);
        this.empresa = empresaActualizada;
        this.editando = false;
        this.empresaEditada = {};
      },
      error: (err) => {
        console.error('Error al actualizar empresa:', err);
      }
    });
  }
}