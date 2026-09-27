import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-heroe',
  styleUrl: './heroe.scss',
  templateUrl: './heroe.html',
})
export class Heroe {}
