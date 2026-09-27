import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-education',
  styleUrl: './education.scss',
  templateUrl: './education.html',
})
export class Education {}
