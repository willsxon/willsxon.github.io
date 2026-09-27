import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';


interface Project {
  id: string
  title: string;
  description: string;
  details: string;

  images: string[];

  video?: string;

  technologies: string[];

  github?: string;
  demo?: string;
}

@Component({
  imports: [TranslatePipe],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})

export class Projects {
 projects: Project[] = [

    {
      id: 'ecommerce',
      title: 'E-commerce',
      description: 'Tienda online desarrollada con Angular.',
      details:
        'Desarrollo del frontend, autenticación, gestión de productos e integración con una API REST.',

      images: [
        'assets/projects/ecommerce-1.jpg',
        'assets/projects/ecommerce-2.jpg',
        'assets/projects/ecommerce-3.jpg'
      ],

      video: 'assets/projects/ecommerce.mp4',

      technologies: [
        'Angular',
        'TypeScript',
        'REST API'
      ],

      github: 'https://github.com/tuusuario/proyecto1',
      demo: 'https://ejemplo.com'
    },

    {
      id: 'taskManager',
      title: 'Task Manager',
      description: 'Aplicación para gestionar tareas y proyectos.',
      details:
        'Backend desarrollado con Spring Boot y conexión con base de datos MySQL.',

      images: [],

      technologies: [
        'Java',
        'Spring Boot',
        'MySQL'
      ],

      github: 'https://github.com/tuusuario/proyecto2'
    }

  ];

  currentImage: number[] = [];

  constructor() {
    this.currentImage = this.projects.map(() => 0);
  }

  nextImage(projectIndex: number): void {
    const project = this.projects[projectIndex];

    if (!project.images.length) {
      return;
    }

    this.currentImage[projectIndex] =
      (this.currentImage[projectIndex] + 1) % project.images.length;
  }

  previousImage(projectIndex: number): void {
    const project = this.projects[projectIndex];

    if (!project.images.length) {
      return;
    }

    this.currentImage[projectIndex] =
      (this.currentImage[projectIndex] - 1 + project.images.length) %
      project.images.length;
  }

  selectImage(projectIndex: number, imageIndex: number): void {
    this.currentImage[projectIndex] = imageIndex;
  }
}
