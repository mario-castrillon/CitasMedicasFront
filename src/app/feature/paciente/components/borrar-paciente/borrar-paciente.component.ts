import { Component, OnInit } from '@angular/core';
import { Paciente } from '@paciente/shared/model/paciente';
import { PacienteService } from '@paciente/shared/service/paciente.service';

@Component({
  selector: 'app-borrar-paciente',
  templateUrl: './borrar-paciente.component.html',
  styleUrls: ['./borrar-paciente.component.css']
})
export class BorrarPacienteComponent implements OnInit {

  pacientes: Paciente[] = [];

  constructor(
    protected pacienteService: PacienteService
  ) { }

  ngOnInit(): void {
    this.pacienteService.consultar().subscribe(pacientes => this.pacientes = pacientes);
  }

  eliminarPaciente(idPaciente: number){
    this.pacienteService.eliminar(idPaciente).subscribe(response => {
      console.log("Paciente Eliminado" + response)
    });
  }

}
