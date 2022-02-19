import { Component, OnInit } from '@angular/core';
import { Paciente } from '@paciente/shared/model/paciente';
import { PacienteService } from '@paciente/shared/service/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-paciente',
  templateUrl: './actualizar-paciente.component.html',
  styleUrls: ['./actualizar-paciente.component.css']
})
export class ActualizarPacienteComponent implements OnInit {

  public pacienteActualizar: Paciente;

  constructor(protected pacienteService: PacienteService,
    protected activateRoute: ActivatedRoute,
    protected router: Router) { }

    pacienteFormulario: FormGroup;
    paciente: Paciente = this.pacienteService.pacienteSeleccionado;

  ngOnInit(): void {
    this.construirFormularioPaciente();
  }

  private construirFormularioPaciente(){
    this.pacienteFormulario = new FormGroup({
      idPaciente: new FormControl(this.paciente.idPaciente, [Validators.required]),
      nombrePaciente: new FormControl(this.paciente.nombrePaciente, [Validators.required]),
      cedula: new FormControl(this.paciente.cedula, [Validators.required])
    });
  }

  actualizar(){
    

    this.pacienteService.actualizar(this.pacienteFormulario.value).subscribe(() => this.router.navigate(['paciente']));
  }

}
