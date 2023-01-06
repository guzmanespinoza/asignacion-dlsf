import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  selectedCar!: number;

  hoy: any = new Date();

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  data: any[] = [];

  dtOptions: any = {};

  message = '';
  info: any;


  constructor(private api: ApiService) {

  }


  someClickHandler(info: any): void {
    this.message = info.id + ' - ' + info.nombreCompleto;
    this.info = info;
  }


  ngOnInit(): void {

    /* this.api.getDashboard().subscribe(response => {
      this.data = response;
    }) */
    this.dtOptions = {
      ajax: (dataTablesParameters: any, callback: any) => {
        this.api.getDashboard().subscribe(resp => {
          callback({
            recordsTotal: resp,
            recordsFiltered: resp,
            data: resp             // <-- see here
          });
        })
      },
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
          title: 'Avance',
          data: 'estadoOcupado'
        },

        {
          title: 'Cliente',
          data: 'cliente.nombre'
        }
        ,
        /* {
          title: 'Contrato',
          data: 'contrato.nombre'
        }, */
        /* {
          title: 'País',
          data: 'pais.nombre'
        } */
      ],
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons

      buttons: [

        'colvis',
        'pdf',
        'copy',
        'print',
        'excel'/* ,
        {
          text: 'Some button',
          key: '1',
          action: function (e: any, dt: any, node: any, config: any) {
            alert('Button activated');
          }
        } */
      ],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        // Note: In newer jQuery v3 versions, `unbind` and `bind` are 
        // deprecated in favor of `off` and `on`
        $('td', row).off('click');
        $('td', row).on('click', () => {
          self.someClickHandler(data);
        });
        return row;
      }
    };
  }
}
