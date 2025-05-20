import { Component } from '@angular/core';
import { Header2Component } from '../../components/header2/header2.component';
import { Footer2Component } from '../../components/footer2/footer2.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-principal',
  imports: [RouterLink, Header2Component, Footer2Component],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
