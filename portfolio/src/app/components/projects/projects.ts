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
      id: 'Unwoven',
      title: 'Unwoven',
      description: 'Twin-stick shooter desarrollado en Unreal Engine 5.',
      details:
        '',

      images: [
        'gameplay/gameplay1.png',
        'gameplay/gameplay2.png'
      ],

      video: 'gameplay/videoGameplay.mov',

      technologies: [
        'Unreal Engine',
        'Jenkins'
      ],

      demo: 'https://store.steampowered.com/app/4551090/Unwoven/'
    },

    {
      id: 'GGTrack',
      title: 'GGTrack',
      description: '',
      details:
        '',

      images: [],

      technologies: [
        'Angular',
        'Django',
        'REST API'
      ],

      github: ''
    },
    {
      id: 'ElonMusk',
      title: 'ElonMusk',
      description: '',
      details:
        '',

      images: [],

      technologies: [
        'Unity'
      ],

      demo: 'https://davidperuchoconde.itch.io/e-mask',
      video: 'assets/projects/ecommerce.mp4'
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
