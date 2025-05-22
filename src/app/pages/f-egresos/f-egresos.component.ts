import { Component } from '@angular/core';
import { Header2Component } from "../../components/header2/header2.component";
import { Footer2Component } from "../../components/footer2/footer2.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-f-egresos',
  imports: [Header2Component, Footer2Component, RouterLink],
  templateUrl: './f-egresos.component.html',
  styleUrl: './f-egresos.component.css'
})
export class FEgresosComponent {

}
