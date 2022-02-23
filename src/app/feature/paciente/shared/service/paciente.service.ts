import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  pacienteSeleccionado: Paciente;

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Paciente[]>(`${environment.endpoint}/pacientes`, this.http.optsName('consultar pacientes'));
  }

  public guardar(paciente: Paciente) {
    return this.http.doPost<Paciente, boolean>(`${environment.endpoint}/pacientes/`, paciente,
      this.http.optsName('crear/actualizar paciente'));
  }

  public actualizar(paciente: Paciente) {
    return this.http.doPut<Paciente, boolean>(`${environment.endpoint}/pacientes/`
      + paciente.idPaciente, paciente, this.http.optsName('actualizar pacientes'));
  }

  public eliminar(idPaciente: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/pacientes/${idPaciente}`,
      this.http.optsName('eliminar paciente'));
  }
}
