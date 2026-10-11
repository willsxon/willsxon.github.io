import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  age = 25;

  height = 2;

  location = 'Madrid, España';

  company = 'Nombre de empresa';

  position = 'Software Developer';
}
