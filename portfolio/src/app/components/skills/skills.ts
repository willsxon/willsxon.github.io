import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  imports: [TranslatePipe],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  languages = [
    'TypeScript',
    'JavaScript',
    'Java',
    'Python',
    'HTML',
    'CSS'
  ];

  frameworks = [
    'Angular',
    'Spring Boot',
    'React',
    'Node.js'
  ];

  tools = [
    'Git',
    'GitHub',
    'Docker',
    'VS Code',
    'MySQL',
    'Postman'
  ];
}
