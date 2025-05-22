import { Component } from '@angular/core';
import { Header1Component } from '../../components/header1/header1.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistrarseService } from '../../services/registrarse.service';

@Component({
  selector: 'app-registrarse',
  imports: [Header1Component, RouterLink, FormsModule, CommonModule],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})

export class RegistrarseComponent {
  nombre: string = "";
  correo: string = "";
  contrasena: string = "";
  contrasenaConfirmada: string = "";

  // Variables para control de errores
  nombreError: string = "";
  correoError: string = "";
  contrasenaError: string = "";
  confirmacionError: string = "";
  formError: string = "";

  registroExitoso: boolean = false;
  registroFail: boolean = false;

  constructor(public registrarseService: RegistrarseService) { }

  registrar_cuenta(): void {
    // Resetear errores
    this.nombreError = "";
    this.correoError = "";
    this.contrasenaError = "";
    this.confirmacionError = "";
    this.formError = "";

    // Validar campos
    let isValid = true;

    if (!this.nombre) {
      this.nombreError = "El nombre es requerido";
      isValid = false;
    }

    if (!this.correo) {
      this.correoError = "El correo es requerido";
      isValid = false;
    } else if (!this.validarEmail(this.correo)) {
      this.correoError = "El correo no tiene un formato válido";
      isValid = false;
    }

    if (!this.contrasena) {
      this.contrasenaError = "La contraseña es requerida";
      isValid = false;
    } else if (this.contrasena.length < 6) {
      this.contrasenaError = "La contraseña debe tener al menos 6 caracteres";
      isValid = false;
    }

    if (!this.contrasenaConfirmada) {
      this.confirmacionError = "Debes confirmar tu contraseña";
      isValid = false;
    } else if (this.contrasena !== this.contrasenaConfirmada) {
      this.confirmacionError = "Las contraseñas no coinciden";
      isValid = false;
    }

    if (!isValid) {
      this.formError = "Por favor completa todos los campos correctamente";
      return;
    }

    const usuario = {
      nombre: this.nombre,
      correo: this.correo,
      contraseña: this.contrasena
    };

    this.registrarseService.registrar_cuenta(usuario).subscribe({
      next: (respuesta) => {
        console.log('Código:', respuesta.codigo);
        console.log('Mensaje:', respuesta.mensaje);
        console.log('Conflictos:', respuesta.conflictos);

        if (respuesta.codigo == "1") {
          this.registroExitoso = true;
        }

        if (respuesta.codigo == "-1") {
          this.registroFail = true;
        }

      },
      error: (error) => {
        console.error('Error HTTP:', error);
      }
    });


  }

  cambiar_registros() {
    this.registroExitoso = false;
    this.registroFail = false;
  }

  private validarEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
}