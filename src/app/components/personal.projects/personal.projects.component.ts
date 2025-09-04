import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-projects',
  imports: [],
  templateUrl: './personal.projects.component.html',
})
export class PersonalProjectsComponent {
  public cardProjects = [
    {
      titulo: 'Tienda Online',
      parrafo:
        'Tienda online con uso de APIS como (fakestoreapi,otra APi) con una interfaz agradable y moderna',
      img: 'Proyecto_3.png',
      enlace: 'https://github.com/Leonardo-Rodriguez2/Tienda-Online',
    },
    {
      titulo: 'Conversor de Dólar',
      parrafo:
        'Un sistema de conversión del dolar, para calcular el valor del dólar de direferentes paises APIs(dolarapi)',
      img: 'Proyecto_4.png',
      enlace: 'https://github.com/Leonardo-Rodriguez2/Tienda-Online',
    },
    {
      titulo: 'Copiar de Trello',
      parrafo:
        'Un sistema de conversión del dolar, para calcular el valor del dólar de direferentes paises APIs(dolarapi)',
      img: 'Proyecto_3.png',
      enlace: 'https://github.com/Leonardo-Rodriguez2/Tienda-Online',
    },
  ];
}
