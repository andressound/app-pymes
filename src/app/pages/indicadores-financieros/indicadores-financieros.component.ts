import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header2Component } from "../../components/header2/header2.component";
import { Footer2Component } from "../../components/footer2/footer2.component";

import { CapacidadEndeudamientoService } from '../../services/capacidad-endeundamiento.service';
import { RazonDeudaPatrimonioService } from '../../services/razon-deuda-patrimonio.service';
import { RotacionActivosService } from '../../services/rotacion-activos.service';
import { RotacionInventarioService } from '../../services/rotacion-inventario.service';
import { RotacionCuentasCobrarService } from '../../services/rotacion-cuenta-cobrar.service';
import { RotacionCuentasPagarService } from '../../services/rotacion-pagar.service';
import { MargenBrutoService } from '../../services/margen-bruto.service';
import { MargenOperativoService } from '../../services/margen-operativo.service';
import { RoaService } from '../../services/roa.service';
import { RoeService } from '../../services/roe.service';
import { RatioCajaService } from '../../services/ratio-caja.service';
import { PrecioBeneficioService } from '../../services/precio-beneficio.service';

@Component({
  selector: 'app-f-indicadores',
  templateUrl: './indicadores-financieros.component.html',
  styleUrl: './indicadores-financieros.component.css',
  standalone: true,
  imports: [
    Header2Component,
    Footer2Component,
    FormsModule,
    CommonModule,
    RouterLink
  ]
})
export class IndicadoresComponent {
  // Variables de modelo
  pasivosTotal: number = 0;
  activosTotal: number = 0;
  fechaCapacidadEndeudamiento: string = '';

  deudaTotal: number = 0;
  patrimonioTotal: number = 0;
  fechaRazonDeudaPatrimonio: string = '';

  ventasNetas: number = 0;
  activoTotalPromedio: number = 0;
  fechaEficiencia: string = '';

  costosBienesVendidos: number = 0;
  valorPromedioInventario: number = 0;
  fechaRotacionInventario: string = '';

  ventasNetasCreditos: number = 0;
  cuentasCobrarPromedio: number = 0;
  fechaIndiceRotacionCuentasCobrar: string = '';

  IndiceCostosBienesVendidos: number = 0;
  IndiceCuentasPagar: number = 0;
  fechaIndiceRotacionPagar: string = '';

  ventasNetasRentabilidad: number = 0;
  beneficioBruto: number = 0;
  fechaRentabilidad: string = '';

  ventasNetasOperativo: number = 0;
  utilidadOperativa: number = 0;
  margenOperativoCol: number = 0;
  fechaOperativo: string = '';

  utilidadNeta: number = 0;
  patrimonioTotalRoa: number = 0;
  fechaRoa: string = '';

  utilidadNetaROE: number = 0;
  patrimonioTotalROE: number = 0;
  fechaROE: string = '';

  efectivoDisponible: number = 0;
  pasivoCorriente: number = 0;
  fechaLiquidez: string = '';

  precioAccion: number = 0;
  beneficioPorAccion: number = 0;
  fechaMercado: string = '';

  formError: string = '';
  registroExitoso: boolean = false;

  constructor(
    private capacidadService: CapacidadEndeudamientoService,
    private razonDeudaService: RazonDeudaPatrimonioService,
    private rotacionActivosService: RotacionActivosService,
    private rotacionInventarioService: RotacionInventarioService,
    private rotacionCuentasCobrarService: RotacionCuentasCobrarService,
    private rotacionCuentasPagarService: RotacionCuentasPagarService,
    private margenBrutoService: MargenBrutoService,
    private margenOperativoService: MargenOperativoService,
    private roaService: RoaService,
    private roeService: RoeService,
    private ratioCajaService: RatioCajaService,
    private precioBeneficioService: PrecioBeneficioService
  ) {}

  registrarIndicadores(): void {
    this.formError = '';
    this.registroExitoso = false;

    const id_empresa = Number(localStorage.getItem('id_empresa')) || 1;

    const promesas = [
      this.capacidadService.registrar({
        pasivos_totales: this.pasivosTotal,
        activos_totales: this.activosTotal,
        fecha: this.fechaCapacidadEndeudamiento,
        id_empresa
      }).toPromise(),

      this.razonDeudaService.registrar({
        patrimonio_total: this.patrimonioTotal,
        deuda_total: this.deudaTotal,
        fecha: this.fechaRazonDeudaPatrimonio,
        id_empresa
      }).toPromise(),

      this.rotacionInventarioService.registrar({
  costo_bienes_vendidos: this.costosBienesVendidos, // CORREGIDO
  valor_promedio_inventario: this.valorPromedioInventario,
  fecha: this.fechaRotacionInventario,
  id_empresa
}).toPromise(),

      this.rotacionCuentasCobrarService.registrar({
  ventas_netas_credito: this.ventasNetasCreditos, // CORREGIDO
  cuentas_cobrar_promedio: this.cuentasCobrarPromedio,
  fecha: this.fechaIndiceRotacionCuentasCobrar,
  id_empresa
}).toPromise(),

      this.rotacionCuentasPagarService.registrar({
  costo_bienes_vendidos: this.IndiceCostosBienesVendidos, // CORREGIDO
  cuentas_pagar: this.IndiceCuentasPagar,
  fecha: this.fechaIndiceRotacionPagar,
  id_empresa
}).toPromise(),

      this.ratioCajaService.registrar({
        efectivo_disponible: this.efectivoDisponible, 
        pasivo_corriente: this.pasivoCorriente,
        fecha: this.fechaLiquidez,
        id_empresa
      }).toPromise(),
      
      this.margenBrutoService.registrar({
        ventas_netas: this.ventasNetasRentabilidad,
        beneficio_bruto: this.beneficioBruto,
        fecha: this.fechaRentabilidad,
        id_empresa
      }).toPromise(),

     
      this.roaService.registrar({
        utilidad_neta: this.utilidadNeta,
        patrimonio_total: this.patrimonioTotalRoa,
        fecha: this.fechaRoa,
        id_empresa
      }).toPromise(),

      this.roeService.registrar({
        utilidad_neta: this.utilidadNetaROE,
        patrimonio_total: this.patrimonioTotalROE,
        fecha: this.fechaROE,
        id_empresa
      }).toPromise(),

    ];

    Promise.all(promesas).then(() => {
      this.registroExitoso = true;
    }).catch(() => {
      this.formError = 'Error al registrar los indicadores';
    });
  }

  cerrarModal(): void {
    this.registroExitoso = false;
  }
}

