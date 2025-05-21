import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LateralComponent } from '../../components/lateral/lateral.component';


@Component({
  selector: 'app-ingresos',
  imports: [LateralComponent,CommonModule, RouterModule],
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})

export class IngresosComponent {

}
