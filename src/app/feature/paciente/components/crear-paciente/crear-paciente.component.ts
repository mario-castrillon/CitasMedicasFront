import { Component, OnInit } from '@angular/core';
import { Paciente } from '@paciente/shared/model/paciente';
import { PacienteService } from '@paciente/shared/service/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {

  pacienteFormulario: FormGroup;

  //NgModel
  paciente: Paciente = new Paciente();
  actualizando: Boolean = false;
  //NgModelEnd

  constructor(protected pacienteService: PacienteService,
              protected activateRoute: ActivatedRoute,
              protected router: Router) { }

  ngOnInit(): void {
    
    //NgModel
    this.activateRoute.params.subscribe(params => {
      let idPaciente: number = params['idPaciente'];
      console.log("id paciente es: " + idPaciente);
      if(idPaciente){
        this.actualizando = true;
        this.paciente.idPaciente = idPaciente;
        this.pacienteService.consultarPorId(idPaciente)
        .subscribe(paciente => this.paciente = paciente);

      }
    })
    //EndNgModel

    this.construirFormularioPaciente();
  }

  //NgModel
  crearPaciente(){
    this.pacienteService.crear(this.paciente)
    .subscribe(() => this.router.navigate(['paciente']));
  }

  actualizarPaciente(){
    console.log("Id de paciente al actualizar es: " + this.paciente.idPaciente);
    this.pacienteService.actualizar(this.paciente)
      .subscribe(() => this.router.navigate(['paciente'])) 
  }

  cancelar(){
    this.router.navigate(['paciente']);
  }
  //NgModelEnd


  private construirFormularioPaciente(){
    this.pacienteFormulario = new FormGroup({
      
      nombrePaciente: new FormControl('', [Validators.required]),
      cedula: new FormControl('', [Validators.required])
    });
  }

  crear(): void{
    this.pacienteService.crear(this.pacienteFormulario.value).subscribe(() => this.router.navigate(['paciente']));
  }

 
 

}
