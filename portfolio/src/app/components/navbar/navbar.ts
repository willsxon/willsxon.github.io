import { Component, signal, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

type Language = 'es' | 'en';


@Component({
  imports: [TranslatePipe],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {

  private translate = inject(TranslateService);

  menuOpen = signal(false);
  currentLanguage = signal<Language>('es');

  constructor() {
    const savedLanguage = localStorage.getItem('language') as Language | null;

    const language: Language =
      savedLanguage === 'en' ? 'en' : 'es';

    this.currentLanguage.set(language);
    this.translate.use(language);
  }

  toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  changeLanguage(language: Language): void {
    this.currentLanguage.set(language);
    this.translate.use(language);

    localStorage.setItem('language', language);

    this.closeMenu();
  }
}
