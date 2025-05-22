import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header2Component } from '../../components/header2/header2.component';
import { Footer2Component } from '../../components/footer2/footer2.component';
@Component({
  selector: 'app-egresos',
  imports: [RouterModule, CommonModule,Header2Component,Footer2Component],
  templateUrl: './egresos.component.html',
  styleUrl: './egresos.component.css'
})
export class EgresosComponent {

}
