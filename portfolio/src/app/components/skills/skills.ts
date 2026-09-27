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
    'C++',
    'C#',
    'Python',
    'HTML',
    'CSS',
    'Typescript'
  ];

  frameworks = [
    'Angular',
    '.NET Framework',
    'Unreal Engine',
    'Unity'
  ];

  tools = [
    'Git',
    'GitHub',
    'Docker',
    'Perforce',
    'SQLServer',
    'Postman',
    'AzureDevOps',
    'Terraform'
  ];
}
