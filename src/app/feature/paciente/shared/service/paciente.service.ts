import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';


import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Paciente } from '../model/paciente';

@Injectable()
export class PacienteService {

  constructor(protected http: HttpService) { }

  pacienteSeleccionado: Paciente;

  public consultar(): Observable<Paciente[]>{
    return this.http.doGet<Paciente[]>(`${environment.endpoint}/pacientes`, this.http.optsName('consultar pacientes'));
  }

  public consultarPorId(idPaciente: number): Observable<Paciente>{
    return this.http.doGet<Paciente>(`${environment.endpoint}/pacientes/`+ idPaciente, this.http.optsName('consultar pacientes'));
  }
  

  public eliminar(idPaciente: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/pacientes/${idPaciente}`,
                                                 this.http.optsName('eliminar pacientes'));
                                                 
  }

  public crear(paciente: Paciente) {
    return this.http.doPost<Paciente, boolean>(`${environment.endpoint}/pacientes/`, paciente, this.http.optsName('crear pacientes'));
  }

  public actualizar(paciente: Paciente) {
      
      return this.http.doPut<Paciente, boolean>(`${environment.endpoint}/pacientes/`+ paciente.idPaciente, paciente, this.http.optsName('actualizar pacientes'));
    }
}

