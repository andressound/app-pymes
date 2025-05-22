import { Component } from '@angular/core';
import { Footer2Component } from "../../components/footer2/footer2.component";
import { Header2Component } from "../../components/header2/header2.component";
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-f-ingresos',
  imports: [Footer2Component, Header2Component, RouterLink],
  templateUrl: './f-ingresos.component.html',
  styleUrl: './f-ingresos.component.css'
})
export class FIngresosComponent {

}
