import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualizarPacienteComponent } from './components/actualizar-paciente/actualizar-paciente.component';
import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';
import { ListarPacientesComponent } from './components/listar-pacientes/listar-pacientes.component';
//import { PacienteComponent } from './components/paciente/paciente.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listar',
        component: ListarPacientesComponent
      },
      {
        path: 'nuevo',
        component: CrearPacienteComponent
      },
      {
        path: 'actualizar/:idPaciente',
        component: CrearPacienteComponent
      },
      {
        path: 'nuevo/:idPaciente',
        component: CrearPacienteComponent
      },
      {
        path: 'actualizar',
        component: ActualizarPacienteComponent
      },
      {
        path: '**',
        component: ListarPacientesComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
