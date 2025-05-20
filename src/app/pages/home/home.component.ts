import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { Header1Component } from '../../components/header1/header1.component';
import { Footer1Component } from '../../components/footer1/footer1.component';

@Component({
  selector: 'app-home',
  imports: [Header1Component, Footer1Component, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
