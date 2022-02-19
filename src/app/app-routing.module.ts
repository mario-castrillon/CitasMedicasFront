import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';

const routes: Routes = [
  { 
    path: '', redirectTo: '/pacientes', pathMatch: 'full' 
  },
  { 
    path: 'home', component: HomeComponent, canActivate: [SecurityGuard] 
  },
  {
    path: 'pacientes', loadChildren: () => import('@paciente/paciente.module').then(mod => mod.PacienteModule)
  },
  {
    path: '**', redirectTo: '/pacientes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot ( routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
