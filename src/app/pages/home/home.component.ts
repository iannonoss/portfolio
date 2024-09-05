import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
export class HomeComponent implements OnInit {
  @ViewChild('portfolio') portfolio!: ElementRef;
  public email: string = 'iannonemattia7@gmail.com';
  public responsiveOn: boolean | undefined;

  ngOnInit(): void {
    this.responsiveOn = window?.innerWidth >= 768;
  }

  viewPortfolio() {
    this.portfolio.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
