import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { SesionarseComponent } from './pages/sesionarse/sesionarse.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { FIngresosComponent } from './pages/f-ingresos/f-ingresos.component';   
import { FEgresosComponent } from './pages/f-egresos/f-egresos.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'registrarse', component: RegistrarseComponent },
    { path: 'sesionarse', component: SesionarseComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: 'f-ingresos', component: FIngresosComponent },
    { path: 'f-egresos', component: FEgresosComponent },
];
