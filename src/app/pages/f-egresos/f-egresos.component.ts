import { Component } from '@angular/core';
import { Header2Component } from "../../components/header2/header2.component";
import { Footer2Component } from "../../components/footer2/footer2.component";
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EgresoService } from '../../services/egreso.service';
import { Egreso } from '../../models/egreso';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-f-egresos',
  standalone: true,
  imports: [Header2Component, Footer2Component, RouterLink, FormsModule, CommonModule],
  templateUrl: './f-egresos.component.html',
  styleUrls: ['./f-egresos.component.css']
})
export class FEgresosComponent {
  pago_proveedores: number = null!;
  gasto_nomina: number = null!;
  gasto_operativo: number = null!;
  marketing: number = null!;
  fecha: string = '';
  id_empresa: number = Number(localStorage.getItem('id_empresa')) || 1;

  proveedoresError: string = '';
  nominaError: string = '';
  operativoError: string = '';
  marketingError: string = '';
  fechaError: string = '';
  formError: string = '';

  registroExitoso: boolean = false;
  registroFallido: boolean = false;

  constructor(private egresoService: EgresoService) {}

  registrarEgreso(): void {
    this.proveedoresError = '';
    this.nominaError = '';
    this.operativoError = '';
    this.marketingError = '';
    this.fechaError = '';
    this.formError = '';
    this.registroExitoso = false;
    this.registroFallido = false;

    let isValid = true;

    if (this.pago_proveedores == null) {
      this.proveedoresError = 'Campo requerido';
      isValid = false;
    }

    if (this.gasto_nomina == null) {
      this.nominaError = 'Campo requerido';
      isValid = false;
    }

    if (this.gasto_operativo == null) {
      this.operativoError = 'Campo requerido';
      isValid = false;
    }

    if (this.marketing == null) {
      this.marketingError = 'Campo requerido';
      isValid = false;
    }

    if (!this.fecha) {
      this.fechaError = 'Fecha requerida';
      isValid = false;
    }

    if (!isValid) {
      this.formError = 'Por favor completa todos los campos correctamente';
      return;
    }

    const egreso: Egreso = {
      pago_proveedores: this.pago_proveedores,
      gasto_nomina: this.gasto_nomina,
      gasto_operativo: this.gasto_operativo,
      marketing: this.marketing,
      fecha: this.fecha,
      id_empresa: this.id_empresa
    };

    this.egresoService.registraregreso(egreso).subscribe({
      next: (respuesta) => {
        console.log('Respuesta:', respuesta);
        if (respuesta.codigo == '1') {
          this.registroExitoso = true;
          this.limpiarFormulario();
        } else {
          this.registroFallido = true;
          this.formError = respuesta.mensaje;
        }
      },
      error: (err) => {
        console.error('Error HTTP:', err);
        this.formError = 'Ocurrió un error al registrar el egreso';
        this.registroFallido = true;
      }
    });
  }

  limpiarFormulario(): void {
    this.pago_proveedores = null!;
    this.gasto_nomina = null!;
    this.gasto_operativo = null!;
    this.marketing = null!;
    this.fecha = '';
  }

  cambiar_registros(): void {
    this.registroExitoso = false;
    this.registroFallido = false;
    this.formError = '';
  }
}
