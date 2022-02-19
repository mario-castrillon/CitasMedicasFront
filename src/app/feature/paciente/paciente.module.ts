import { NgModule } from '@angular/core';

import { PacienteRoutingModule } from './paciente-routing.module';
import { ListarPacientesComponent } from './components/listar-pacientes/listar-pacientes.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { SharedModule } from '@shared/shared.module';
import { PacienteService } from './shared/service/paciente.service';
import { BorrarPacienteComponent } from './components/borrar-paciente/borrar-paciente.component';
import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';
import { ActualizarPacienteComponent } from './components/actualizar-paciente/actualizar-paciente.component';

@NgModule({
  declarations: [
    ListarPacientesComponent,
    BorrarPacienteComponent,
    PacienteComponent,
    CrearPacienteComponent,
    ActualizarPacienteComponent,
    ActualizarPacienteComponent
  ],
  imports: [
    PacienteRoutingModule,
    SharedModule
  ],
  providers: [PacienteService]
})
export class PacienteModule { }
