import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  cards = [
    {
      titulo: 'Nutri Vida',
      video: '',
      imagen: 'nutrivida.png',
      categoria: 'SPA',
      fecha: '2024',
      descripcion: 'Catálogo de ventas de productos orgánicos',
      lenguaje: 'React',
      repo: '',
      link: 'https://nutrivida.com.ar/',
      linkTexto: '¡Visitar!',
      tags: [
        'web',
        'app',
        'application',
        'carrito',
        'sql',
        'springboot',
        'angular',
      ],
    },
    {
      titulo: 'Micro-Notes & Tags',
      video: 'https://www.youtube.com/embed/opDXLnqacdA',
      categoria: 'FLUTTER',
      fecha: '2024',
      descripcion:
        'Aplicación multiplataforma para tomar NOTAS DE VOZ y etiquetarles descripciones',
      lenguaje: 'Flutter',
      repo: 'https://github.com/dsrrdiego/notas.git',
      link: '',
      linkTexto: '¡Visitar!',
      tags: ['Android', 'web', 'app', 'application', 'linux'],
    },
    {
      titulo: 'Instituto de la Caridad Universal',
      video: 'https://www.youtube.com/embed/lagCclC8cek',
      categoria: 'SPA',
      fecha: '2023',
      descripcion:
        'Single Page Application desarrollada para una organización sin fines de lucro. Donde se promocionan sus actividades y se invita a colaborar.',
      lenguaje: 'JavaScript',
      repo: 'https://github.com/dsrrdiego/I.C.U..git',
      link: 'https://dsrrdiego.github.io/I.C.U./',
      linkTexto: '¡Visitar!',
      tags: ['web', 'app', 'application', 'front'],
    },
    {
      titulo: 'Emerge Cultural',
      video: 'https://www.youtube.com/embed/Pk2FgA6MHGc',
      categoria: 'Spring Boot Api',
      fecha: '2022',
      descripcion:
        'Plataforma de audio para musicos independientes al estilo youtube.',
      lenguaje: 'Java - SpringBoot - Docker - AWS - Js - HTML - Css',
      repo: 'https://github.com/dsrrdiego/emergeSpringBoot.git',
      link: 'https://dsrrdiego.github.io/emergeF/',
      linkTexto: 'Visitar',
      tags: [
        'web',
        'app',
        'aplication',
        'front',
        'back',
        'front',
        'javascript',
        'js',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
