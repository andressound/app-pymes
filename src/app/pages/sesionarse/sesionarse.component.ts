import { Component } from '@angular/core';
import { Header1Component } from '../../components/header1/header1.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sesionarse',
  imports: [Header1Component, RouterLink],
  templateUrl: './sesionarse.component.html',
  styleUrl: './sesionarse.component.css'
})
export class SesionarseComponent {

}
