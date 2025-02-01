import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ThemeService} from "./pages/home/theme/theme.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  currentLanguage: string = 'it';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'it']);
    this.translate.setDefaultLang('it');
    const savedLang = localStorage.getItem('language');
    this.currentLanguage = savedLang ? savedLang : 'it';
    this.translate.use(this.currentLanguage);
  }
}
