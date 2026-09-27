import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  whatsapp = '34633667012';

  email = 'javito16102002@gmail.com';

  linkedin = 'https://www.linkedin.com/in/wilson-javier-simba%C3%B1a-ganazhapa-b4a1bb311/';
}
