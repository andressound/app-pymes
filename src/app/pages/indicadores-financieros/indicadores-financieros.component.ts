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
  fechaCapacidadEndeudamiento: string = '';
  deudaTotal: number = 0;
  patrimonioTotal: number = 0;
  fechaRazonDeudaPatrimonio:string='';

  // Indicador de Eficiencia
  ventasNetas: number = 0;
  activoTotalPromedio: number = 0;
  fechaEficiencia: string = '';
  costosBienesVendidos: number = 0;
  valorPromedioInventario: number = 0;
  fechaRotacionInventario: String='';
  ventasNetasCreditos: number = 0;
  cuentasCobrarPromedio:number=0;
  fechaIndiceRotacionCuentasCobrar:string='';
  IndiceCostosBienesVendidos:number=0;
  IndiceCuentasPagar:number=0;
  fechaIndiceRotacionPagar:string='';

  // Indicador de Rentabilidad
  ventasNetasRentabilidad: number = 0;
  beneficioBruto: number = 0;
  fechaRentabilidad: string = '';
  ventasNetasOperativo: number = 0;
  utilidadOperativa: number = 0;
  margenOperativoCol:number=0;
  fechaOperativo: string = '';
  utilidadNeta: number = 0;
  patrimonioTotalRoa:number=0;
  fechaRoa: string ='';
  utilidadNetaROE:number=0;
  patrimonioTotalROE:number=0;
  fechaROE:string='';


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
          fechaCapacidadEndeudamiento: this.fechaCapacidadEndeudamiento,
          deudaTotal: this.deudaTotal,
          patrimonioTotal: this.patrimonioTotal,
          fechaRazonDeudaPatrimonio: this.fechaRazonDeudaPatrimonio
        },
        eficiencia: {
          ventasNetas: this.ventasNetas,
          activoTotalPromedio: this.activoTotalPromedio,
          fecha: this.fechaEficiencia,
          costosBienesVendidos: this.costosBienesVendidos,
          valorPromedioInventario: this.valorPromedioInventario,
          fechaRotacionInventario: this.fechaRotacionInventario,
          ventasNetasCreditos: this.ventasNetasCreditos,
          cuentasCobrarPromedio:this.cuentasCobrarPromedio,
          fechaIndiceRotacionCuentasCobrar:this.fechaIndiceRotacionCuentasCobrar,
          IndiceCostosBienesVendidos:this.IndiceCostosBienesVendidos,
          IndiceCuentasPagar:this.IndiceCuentasPagar,
          fechaIndiceRotacionPagar:this.fechaIndiceRotacionPagar
        },
        rentabilidad: {
          ventasNetas: this.ventasNetasRentabilidad,
          beneficioBruto: this.beneficioBruto,
          fecha: this.fechaRentabilidad,
          ventasNetasOperativo: this.ventasNetasOperativo,
          utilidadOperativa: this.utilidadOperativa,
          margenOperativoCol: this.margenOperativoCol,
          fechaOperativo: this.fechaOperativo,
          utilidadNeta: this.utilidadNeta,
          patrimonioTotalRoa:this.patrimonioTotalRoa,
          fechaRoa: this.fechaRoa,
          utilidadNetaROE: this.utilidadNetaROE,
          patrimonioTotalROE: this.patrimonioTotalROE,
          fechaROE: this.fechaROE
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
      this.valorPromedioInventario, this.ventasNetasCreditos,this.cuentasCobrarPromedio,this.IndiceCostosBienesVendidos,this.IndiceCuentasPagar,
      this.ventasNetasRentabilidad, this.beneficioBruto, this.ventasNetasOperativo,
      this.utilidadOperativa,this.margenOperativoCol,this.patrimonioTotalRoa, this.utilidadNeta,this.utilidadNetaROE,this.patrimonioTotalROE, this.efectivoDisponible,
      this.pasivoCorriente, this.precioAccion, this.beneficioPorAccion
    ];

    const camposFecha = [this.fechaCapacidadEndeudamiento,this.fechaRazonDeudaPatrimonio,this.fechaIndiceRotacionPagar,this.fechaEficiencia,
      this.fechaRotacionInventario,this.fechaIndiceRotacionCuentasCobrar, this.fechaRentabilidad,this.fechaRoa,this.fechaROE,
      this.fechaOperativo, this.fechaLiquidez, this.fechaMercado];

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
    this.fechaCapacidadEndeudamiento='';
    this.deudaTotal = 0;
    this.patrimonioTotal = 0;
    this.fechaRazonDeudaPatrimonio='';
    this.ventasNetas = 0;
    this.activoTotalPromedio = 0;
    this.fechaEficiencia = '';
    this.costosBienesVendidos = 0;
    this.valorPromedioInventario = 0;
    this.fechaRotacionInventario = '';
    this.ventasNetasCreditos = 0;
    this.cuentasCobrarPromedio =0;
    this.IndiceCostosBienesVendidos=0;
    this.IndiceCuentasPagar=0;
    this.fechaIndiceRotacionPagar='';
    this.ventasNetasRentabilidad = 0;
    this.beneficioBruto = 0;
    this.fechaRentabilidad = '';
    this.ventasNetasOperativo = 0;
    this.utilidadOperativa = 0;
    this.margenOperativoCol=0;
    this.fechaOperativo = '';
    this.utilidadNeta = 0;
    this.utilidadNetaROE=0;
    this.patrimonioTotalROE=0;
    this.patrimonioTotalRoa=0;
    this.fechaRoa='';
    this.fechaROE='';
    this.efectivoDisponible = 0;
    this.pasivoCorriente = 0;
    this.fechaLiquidez = '';
    this.precioAccion = 0;
    this.beneficioPorAccion = 0;
    this.fechaMercado = '';
  }
}
