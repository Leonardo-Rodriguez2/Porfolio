import { Component } from '@angular/core';

@Component({
  selector: 'app-technology-stack',
  imports: [],
  templateUrl: './technology.stack.component.html',
})
export class TechnologyStackComponent {
  cardTechnology = [
    { titulo: 'HTML', img: 'HTML.png' },
    { titulo: 'CSS', img: 'CSS.png' },
    { titulo: 'JAVASCRIPT', img: 'JAVASCRIPT.png', },
    { titulo: 'TYPESCRIPT', img: 'TYPESCRIPT.png', },
    { titulo: 'ANGULAR', img: 'ANGULAR.png', },
    { titulo: 'TAILWINDCSS', img: 'TAILWIND.png', },
    { titulo: 'PHP', img: 'PHP.png', },
    { titulo: 'LARAVEL', img: 'LARAVEL.png', },
    { titulo: 'GIT', img: 'GIT.png',},
  ];
}
