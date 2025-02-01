import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkThemeClass = 'dark-theme';

  enableDarkTheme() {
    document.body.classList.add(this.darkThemeClass);
  }

  disableDarkTheme() {
    document.body.classList.remove(this.darkThemeClass);
  }

  toggleTheme(isDarkMode: boolean) {
    if (isDarkMode) {
      this.enableDarkTheme();
    } else {
      this.disableDarkTheme();
    }
    // Salva il tema scelto nel localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.enableDarkTheme();
    }
  }
}

