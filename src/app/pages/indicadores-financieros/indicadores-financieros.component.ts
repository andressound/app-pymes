import { Component } from '@angular/core';
import { Header2Component } from '../../components/header2/header2.component';
import { Footer2Component } from '../../components/footer2/footer2.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-indicadores-financieros',
  imports: [Header2Component, RouterLink, FormsModule,Footer2Component],
  templateUrl: './indicadores-financieros.component.html',
  styleUrl: './indicadores-financieros.component.css'
})
export class IndicadoresFinancierosComponent {
  
  // Indicador de Apalancamiento
  pasivosTotal: number = 0;
  activosTotal: number = 0;
  deudaTotal: number = 0;
  patrimonioTotal: number = 0;

  // Indicador de Eficiencia
  ventasNetas: number = 0;
  activoTotalPromedio: number = 0;
  fechaEficiencia: string = '';
  costosBienesVendidos: number = 0;
  valorPromedioInventario: number = 0;
  ventasNetasCreditos: number = 0;

  // Indicador de Rentabilidad
  ventasNetasRentabilidad: number = 0;
  beneficioBruto: number = 0;
  fechaRentabilidad: string = '';
  ventasNetasOperativo: number = 0;
  utilidadOperativa: number = 0;
  fechaOperativo: string = '';
  utilidadNeta: number = 0;

  // Indicador de Liquidez
  efectivoDisponible: number = 0;
  pasivoCorriente: number = 0;
  fechaLiquidez: string = '';

  // Indicador de Valor de Mercado
  precioAccion: number = 0;
  beneficioPorAccion: number = 0;
  fechaMercado: string = '';

  // Variables para control de errores
  formError: string = "";
  registroExitoso: boolean = false;

  constructor() { }

  registrarIndicadores(): void {
    // Resetear errores
    this.formError = "";

    // Validación básica
    if (this.validarCampos()) {
      const indicadores = {
        apalancamiento: {
          pasivosTotal: this.pasivosTotal,
          activosTotal: this.activosTotal,
          deudaTotal: this.deudaTotal,
          patrimonioTotal: this.patrimonioTotal
        },
        eficiencia: {
          ventasNetas: this.ventasNetas,
          activoTotalPromedio: this.activoTotalPromedio,
          fecha: this.fechaEficiencia,
          costosBienesVendidos: this.costosBienesVendidos,
          valorPromedioInventario: this.valorPromedioInventario,
          ventasNetasCreditos: this.ventasNetasCreditos
        },
        rentabilidad: {
          ventasNetas: this.ventasNetasRentabilidad,
          beneficioBruto: this.beneficioBruto,
          fecha: this.fechaRentabilidad,
          ventasNetasOperativo: this.ventasNetasOperativo,
          utilidadOperativa: this.utilidadOperativa,
          fechaOperativo: this.fechaOperativo,
          utilidadNeta: this.utilidadNeta
        },
        liquidez: {
          efectivoDisponible: this.efectivoDisponible,
          pasivoCorriente: this.pasivoCorriente,
          fecha: this.fechaLiquidez
        },
        valorMercado: {
          precioAccion: this.precioAccion,
          beneficioPorAccion: this.beneficioPorAccion,
          fecha: this.fechaMercado
        }
      };

      console.log('Indicadores a registrar:', indicadores);
      this.registroExitoso = true;
    }
  }

  private validarCampos(): boolean {
    // Validación básica - todos los campos numéricos deben ser mayores a 0
    const camposNumericos = [
      this.pasivosTotal, this.activosTotal, this.deudaTotal, this.patrimonioTotal,
      this.ventasNetas, this.activoTotalPromedio, this.costosBienesVendidos,
      this.valorPromedioInventario, this.ventasNetasCreditos,
      this.ventasNetasRentabilidad, this.beneficioBruto, this.ventasNetasOperativo,
      this.utilidadOperativa, this.utilidadNeta, this.efectivoDisponible,
      this.pasivoCorriente, this.precioAccion, this.beneficioPorAccion
    ];

    const camposFecha = [this.fechaEficiencia, this.fechaRentabilidad, this.fechaOperativo, this.fechaLiquidez, this.fechaMercado];

    if (camposNumericos.some(campo => campo <= 0)) {
      this.formError = "Todos los campos numéricos deben ser mayor a 0";
      return false;
    }

    if (camposFecha.some(fecha => !fecha)) {
      this.formError = "Todas las fechas son requeridas";
      return false;
    }

    return true;
  }

  cerrarModal(): void {
    this.registroExitoso = false;
    // Aquí podrías redirigir o limpiar el formulario
    this.limpiarFormulario();
  }

  private limpiarFormulario(): void {
    // Resetear todos los campos
    this.pasivosTotal = 0;
    this.activosTotal = 0;
    this.deudaTotal = 0;
    this.patrimonioTotal = 0;
    this.ventasNetas = 0;
    this.activoTotalPromedio = 0;
    this.fechaEficiencia = '';
    this.costosBienesVendidos = 0;
    this.valorPromedioInventario = 0;
    this.ventasNetasCreditos = 0;
    this.ventasNetasRentabilidad = 0;
    this.beneficioBruto = 0;
    this.fechaRentabilidad = '';
    this.ventasNetasOperativo = 0;
    this.utilidadOperativa = 0;
    this.fechaOperativo = '';
    this.utilidadNeta = 0;
    this.efectivoDisponible = 0;
    this.pasivoCorriente = 0;
    this.fechaLiquidez = '';
    this.precioAccion = 0;
    this.beneficioPorAccion = 0;
    this.fechaMercado = '';
  }
}
