import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { SesionarseComponent } from './pages/sesionarse/sesionarse.component';
import { IngresosComponent } from './pages/ingresos/ingresos.component';
import { EgresosComponent } from './pages/egresos/egresos.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'registrarse', component: RegistrarseComponent },
    { path: 'sesionarse', component: SesionarseComponent },
    {path: 'ingresos', component: IngresosComponent},
    {path: 'egresos', component: EgresosComponent}
];
