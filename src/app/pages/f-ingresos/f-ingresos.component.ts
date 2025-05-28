import { Component } from '@angular/core';
import { Footer2Component } from "../../components/footer2/footer2.component";
import { Header2Component } from "../../components/header2/header2.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IngresoService } from '../../services/ingreso.service';
import { Ingreso } from '../../models/ingreso';

@Component({
  selector: 'app-f-ingresos',
  imports: [Footer2Component, Header2Component, RouterLink, FormsModule, CommonModule],
  templateUrl: './f-ingresos.component.html',
  styleUrl: './f-ingresos.component.css'
})
export class FIngresosComponent {
  venta: number = null!;
  neto: number = null!;
  bruto: number = null!;
  fecha: string = '';
  id_empresa: number = Number(localStorage.getItem('id_empresa')) || 1;

  ventaError: string = '';
  netoError: string = '';
  brutoError: string = '';
  fechaError: string = '';
  formError: string = '';

  registroExitoso: boolean = false;
  registroFallido: boolean = false;

  constructor(private ingresoService: IngresoService) {}

  registrarIngreso(): void {
    this.ventaError = '';
    this.netoError = '';
    this.brutoError = '';
    this.fechaError = '';
    this.formError = '';
    this.registroExitoso = false;
    this.registroFallido = false;

    let isValid = true;

    if (this.venta == null) {
      this.ventaError = 'Campo requerido';
      isValid = false;
    }

    if (this.neto == null) {
      this.netoError = 'Campo requerido';
      isValid = false;
    }

    if (this.bruto == null) {
      this.brutoError = 'Campo requerido';
      isValid = false;
    }

    if (!this.fecha) {
      this.fechaError = 'Campo requerido';
      isValid = false;
    }

    if (!isValid) {
      this.formError = 'Por favor completa todos los campos correctamente.';
      return;
    }

    const   ingreso: Ingreso = {
      venta: this.venta,
      neto: this.neto,
      bruto: this.bruto,
      fecha: this.fecha,
      id_empresa: this.id_empresa
    };

    this.ingresoService.registrarIngreso(ingreso).subscribe({
      next: (res) => {
        if (res.codigo === '1') {
          this.registroExitoso = true;
          this.limpiarFormulario();
        } else {
          this.formError = res.mensaje;
          this.registroFallido = true;
        }
      },
      error: () => {
        this.formError = 'Ocurrió un error al registrar el ingreso.';
        this.registroFallido = true;
      }
    });
  }

  limpiarFormulario(): void {
    this.venta = null!;
    this.neto = null!;
    this.bruto = null!;
    this.fecha = '';
  }

  cambiar_registros(): void {
    this.registroExitoso = false;
    this.registroFallido = false;
    this.formError = '';
  }
}
