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
  ];


skillCategories = [

  // 1. Motores de videojuegos

  {
    id: 'engines',
    title: 'skills.engines.title',
    items: [
      {
        name: 'Unreal Engine 5',
        level: 'skills.levels.basic'      
      },
      {
        name: 'Unity',
        level: 'skills.levels.basic' 
      }
    ]
  },

  // 2. Lenguajes de programación

  {
    id: 'languages',
    title: 'skills.languages.title',
    items: [
      { name: 'C++', level: 'skills.levels.basic' },
      { name: 'C#', level: 'skills.levels.intermediate' },
      { name: 'Python', level: 'skills.levels.basic' },
      { name: 'TypeScript', level: 'skills.levels.intermediate' }
    ]
  },


  // 4. Herramientas

  {
    id: 'tools',
    title: 'skills.tools.title',
    items: [
      { name: 'Git / GitHub', level: 'skills.levels.intermediate' },
      { name: 'Perforce', level: 'skills.levels.basic' },
      { name: 'Jenkins', level: 'skills.levels.basic' },
      { name: 'Docker', level: 'skills.levels.intermediate' }
    ]
  },

  // 5. Desarrollo de software adicional

  {
    id: 'software',
    title: 'skills.software.title',
    items: [
      { name: 'Angular', level: 'skills.levels.intermediate' },
      { name: 'ASP.NET Core', level: 'skills.levels.intermediate' },
      { name: 'SQL Server', level: 'skills.levels.intermediate' },
      { name: 'Azure Functions', level: 'skills.levels.intermediate' }
    ]
  }

];

}
