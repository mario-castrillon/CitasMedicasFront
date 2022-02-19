import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '@paciente/shared/model/paciente';
import { PacienteService } from '../../shared/service/paciente.service';



@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css']
})
export class ListarPacientesComponent implements OnInit {
  public pacientes: Paciente[] = []

  constructor(protected pacienteService: PacienteService,
              protected router: Router
              ) { }

  ngOnInit(): void {
    this.pacienteService.consultar()
      .subscribe( pacientes => {
       this.pacientes = pacientes;
      });
  }

  eliminarPaciente(idPaciente: number){
    this.pacienteService.eliminar(idPaciente).subscribe(paciente => {
      this.pacientes = this.pacientes.filter(paciente => paciente.idPaciente != idPaciente);
      console.log("Paciente Eliminado: " + paciente);
    });
  }

  seleccionarPacienteActualizar(paciente: Paciente){
    this.pacienteService.pacienteSeleccionado = paciente;
    this.router.navigateByUrl('/pacientes/actualizar');
  }

  
}
