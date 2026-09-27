import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Contact } from './components/contact/contact';
import { Skills } from './components/skills/skills';
import { Heroe } from './components/heroe/heroe';
import { Education } from './components/education/education';
import { Projects } from './components/projects/projects';
import { About } from './components/about/about';

@Component({
  imports: [RouterOutlet, Navbar, Contact, Skills, Heroe, Projects, Education, About],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');
}
