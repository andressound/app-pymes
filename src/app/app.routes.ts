import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { SesionarseComponent } from './pages/sesionarse/sesionarse.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { IngresosComponent } from './pages/ingresos/ingresos.component';
import { EgresosComponent } from './pages/egresos/egresos.component';
import { LateralComponent } from './components/lateral/lateral.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { FIngresosComponent } from './pages/f-ingresos/f-ingresos.component';   
import { FEgresosComponent } from './pages/f-egresos/f-egresos.component';
import { IndicadoresFinancierosComponent } from './pages/indicadores-financieros/indicadores-financieros.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'registrarse', component: RegistrarseComponent },
    { path: 'sesionarse', component: SesionarseComponent },

    { path: 'principal', component: PrincipalComponent },
    {path: 'ingresos', component:IngresosComponent},
    {path: 'egresos', component:EgresosComponent},
    {path:'empresa', component:EmpresaComponent},
    { path: 'principal/:user', component: PrincipalComponent },
    { path: 'f-ingresos', component: FIngresosComponent },
    { path: 'f-egresos', component: FEgresosComponent },
    {path:'indicadores',component:IndicadoresFinancierosComponent},

];
