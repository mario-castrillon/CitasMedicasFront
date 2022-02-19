import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-base';
  public pacientes: MenuItem[] = [
    { url: '/home', nombre: 'home' },
    { url: '/pacientes', nombre: 'pacientes' }
    
  ];

  
}
