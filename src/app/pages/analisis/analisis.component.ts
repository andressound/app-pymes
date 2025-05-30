import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalisisService } from '../../services/analisis.service';

@Component({
  selector: 'app-analisis',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './analisis.component.html',
  styleUrl: './analisis.component.css'
})
export class AnalisisComponent implements OnInit {
  diagnostico: string = "";
  cargando: boolean = false;
  error: string | null = null;

  constructor(private analisisService: AnalisisService) { } // Nombre del servicio corregido

  ngOnInit(): void {
    this.obtenerDiagnostico(); // Nombre del método corregido
  }

  obtenerDiagnostico(): void { // Método corregido
    this.cargando = true;
    this.error = null;

    this.analisisService.obtenerAnalisisFinanciero().subscribe({ // Método del servicio corregido
      next: (response: any) => { // Tipo explícito añadido
        this.diagnostico = response.diagnostico;
        this.cargando = false;
      },
      error: (err: any) => { // Tipo explícito añadido
        this.error = 'Error al obtener el diagnóstico financiero';
        this.cargando = false;
        console.error(err);
      }
    });
  }
}