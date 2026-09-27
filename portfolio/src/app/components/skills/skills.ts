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
    'ASP.NET Core',
    'Azure Functions'
  ];

  databases = [
    'SQL Server'
  ]

  tools = [
    'Git',
    'GitHub',
    'Docker',
    'Perforce',
    'Postman',
    'AzureDevOps',
    'Terraform'
  ];

  engines = [
    'Unreal Engine',
    'Unity'
  ]
}
