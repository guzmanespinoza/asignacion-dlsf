import { Component } from '@angular/core';

@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.scss']
})
export class AsignacionComponent {

  selected!: number;
  asignado!: number;

  registros = [
    { id: 1, name: 'Registro 1' },
    { id: 2, name: 'Registro 2' },
    { id: 3, name: 'Registro 3' },
    { id: 4, name: 'Registro 4' },
  ];

}
