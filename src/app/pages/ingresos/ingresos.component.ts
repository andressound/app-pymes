import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LateralComponent } from '../../components/lateral/lateral.component';
import { Header2Component } from '../../components/header2/header2.component';
import { Footer2Component } from '../../components/footer2/footer2.component';


@Component({
  selector: 'app-ingresos',
  imports: [CommonModule, RouterModule,Header2Component,Footer2Component],
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})

export class IngresosComponent {

}
