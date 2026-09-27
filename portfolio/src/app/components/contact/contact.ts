import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  whatsapp = '34600000000';

  email = 'tuemail@gmail.com';

  linkedin = 'https://www.linkedin.com/in/tuusuario';
}
