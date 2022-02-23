import { by, element } from 'protractor';

export class PacientePage {
    private linkCrearPaciente = element(by.id('linkCrearPaciente'));
    private linkListarPaciente = element(by.id('linkListarPaciente'));
    private inputNombrePaciente = element(by.id('nombrePaciente'));
    private inputCedula = element(by.id('cedula'));
    private listaPacientes = element.all(by.css('tr.pacientes td'));

    async clickBotonCrearPaciente() {
        await this.linkCrearPaciente.click();
    }

    async clickBotonListarPacientes() {
        await this.linkListarPaciente.click();
    }

    async ingresarNombrePaciente(nombrePaciente) {
        await this.inputNombrePaciente.sendKeys(nombrePaciente);
    }

    async ingresarCedula(cedula) {
        await this.inputCedula.sendKeys(cedula);
    }

    async contarPacientes() {
        return this.listaPacientes.count();
    }
}