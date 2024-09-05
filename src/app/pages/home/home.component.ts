import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgxTypedJsModule} from "ngx-typed-js";

;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgxTypedJsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('portfolio') portfolio!: ElementRef;
  public email: string = 'iannonemattia7@gmail.com';

  viewPortfolio() {
    this.portfolio.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
