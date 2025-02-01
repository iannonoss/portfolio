import {Component} from '@angular/core';
import {ThemeService} from "../theme.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [],
  template: `
    <div class="d-flex justify-content-between">
      <label class="mb-0">
        <div class="form-check form-switch d-flex align-items-center gap-2 p-3">
          ☀️
          <input class="form-check-input position-static" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                 (change)="onThemeToggle($event)">
          🌗
        </div>
      </label>
      <label class="mb-0">
        <div class="form-check form-switch d-flex align-items-center gap-2 p-3">
          🇮🇹
          <input class="form-check-input position-static"
                 type="checkbox"
                 role="switch"
                 [checked]="currentLanguage === 'en'"
                 (change)="changeLanguage($event)">
          🇬🇧
        </div>
      </label>
    </div>
  `,
  styleUrl: './theme-switcher.component.css'
})
export class ThemeSwitcherComponent {
  isDarkMode = false;
  currentLanguage: string = 'it';

  constructor(private themeService: ThemeService, private translate: TranslateService) {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
  }

  public onThemeToggle(event: Event) {
    this.isDarkMode = (event.target as HTMLInputElement).checked;
    this.themeService.toggleTheme(this.isDarkMode);
  }

  public changeLanguage(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.currentLanguage = isChecked ? 'en' : 'it';
    this.translate.use(this.currentLanguage);
    localStorage.setItem('language', this.currentLanguage);
  }
}
