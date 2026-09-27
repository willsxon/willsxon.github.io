import { Component, signal } from '@angular/core';
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
  githubLabel?: string;
  demo?: string;
  demoLabel?: string;
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
        'gameplay/gameplay2.png',
        'gameplay/gameplay3.png'
      ],

      video: 'gameplay/videoGameplay.mov',

      technologies: [
        'Unreal Engine',
        'Jenkins'
      ],

      demo: 'https://store.steampowered.com/app/4551090/Unwoven/',
      demoLabel: 'show.steam'
    },

    {
      id: 'GGTrack',
      title: 'GGTrack',
      description: '',
      details:
        '',

      images: [
        'gameplay/ggTrack1.png',
        'gameplay/ggTrack2.png',
        'gameplay/ggTrack3.png'],

      technologies: [
        'Angular',
        'Django',
        'REST API'
      ],

      github: 'https://github.com/Willsy12/TFG',
      githubLabel: 'show.github'
    },
    {
      id: 'emusk',
      title: 'emusk',
      description: '',
      details:
        '',

      images: [
        'gameplay/e_mask1.png',
        'gameplay/e_mask2.png',
        'gameplay/e_mask3.png'],

      technologies: [
        'Unity'
      ],

      demo: 'https://davidperuchoconde.itch.io/e-mask',
      video: 'gameplay/e_mask.mov',
      demoLabel: 'show.demo'
    }

  ];

  currentImage: number[] = [];

  selectedImage = signal<string | null>(null);
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

  openImage(image: string): void {
    this.selectedImage.set(image);
  }

  closeImage(): void {
    this.selectedImage.set(null);
  }
}
