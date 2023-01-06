import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  selectedCar!: number;

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  data: any[] = [];

  dtOptions: any = {};

  constructor(private api: ApiService) {

  }


  ngOnInit(): void {

    this.api.getDashboard().subscribe(response => {
      this.data = response;
    })
    this.dtOptions = {
      
      columns: [
        {
          title: 'Id',
          data: 'id'
        },
        {
          title: 'Ingeniero',
          data: 'nombreCompleto'
        },
        {
          title: 'Asignación',
          data: 'ocupacionActual'
        },
        {
          title: 'Estado',
          data: 'estadoOcupado'
        },
        {
          title: 'Detalle',
          data: 'Area-Marca-Producto'
        },
        {
          title: 'Cliente',
          data: 'cliente.nombre'
        }
        ,
        {
          title: 'Contrato',
          data: 'contrato.nombre'
        },
        {
          title: 'País',
          data: 'pais.nombre'
        }
      ],
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      "columnDefs": [
        { "visible": false },
      ],
      buttons: [
        
        'colvis',
        'pdf',
        'copy',
        'print',
        'excel',
        {
          text: 'Some button',
          key: '1',
          action: function (e: any, dt: any, node: any, config: any) {
            alert('Button activated');
          }
        }
      ]
    };
  }
}
