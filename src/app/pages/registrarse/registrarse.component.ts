import { Component } from '@angular/core';
import { Header1Component } from '../../components/header1/header1.component';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-registrarse',
  imports: [Header1Component, RouterLink],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent {

}
