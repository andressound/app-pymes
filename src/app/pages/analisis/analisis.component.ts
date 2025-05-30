import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalisisService } from '../../services/analisis.service';
import { Header2Component } from "../../components/header2/header2.component";
import { Footer2Component } from "../../components/footer2/footer2.component";

@Component({
  selector: 'app-analisis',
  imports: [CommonModule, Header2Component, Footer2Component],
  standalone: true,
  templateUrl: './analisis.component.html',
  styleUrl: './analisis.component.css'
})
export class AnalisisComponent implements OnInit {
  diagnostico: string = "";
  cargando: boolean = false;
  error: string | null = null;
  iniciado: boolean = false; // Nueva propiedad para controlar el estado

  constructor(private analisisService: AnalisisService) { }

  ngOnInit(): void {
    // Removemos la llamada automática aquí
    // this.obtenerDiagnostico();
  }

  iniciarAnalisis(): void { // Nuevo método para iniciar el análisis
    this.iniciado = true;
    this.obtenerDiagnostico();
  }

  obtenerDiagnostico(): void {
    this.cargando = true;
    this.error = null;

    this.analisisService.obtenerAnalisisFinanciero().subscribe({
      next: (response: any) => {
        this.diagnostico = response.diagnostico;
        this.cargando = false;
      },
      error: (err: any) => {
        this.error = 'Error al obtener el diagnóstico financiero';
        this.cargando = false;
        console.error(err);
      }
    });
  }
}