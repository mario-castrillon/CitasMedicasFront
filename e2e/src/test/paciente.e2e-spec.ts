//import { browser, logging } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { PacientePage } from '../page/paciente/paciente.po';

describe('workspace-project Paciente', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let paciente: PacientePage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        paciente = new PacientePage();
    });

    it('Deberia crear PACIENTE', () => {
        const NOMBRE_PACIENTE = 'Juan';
        const CEDULA = '123456789';

        page.navigateTo();
        navBar.clickBotonPacientes();
        paciente.clickBotonCrearPaciente();
        paciente.ingresarNombrePaciente(NOMBRE_PACIENTE);
        paciente.ingresarCedula(CEDULA);
        
        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar PACIENTES', () => {
        page.navigateTo();
        navBar.clickBotonPacientes();
        paciente.clickBotonListarPacientes();

        expect(27).toBe(paciente.contarPacientes());
    });
});