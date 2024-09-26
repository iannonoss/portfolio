import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgxTypedJsModule} from "ngx-typed-js";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {GalleriaModule} from "primeng/galleria";
import {ImageGalleryModalComponent} from "../../modals/image-gallery-modal/image-gallery-modal.component";
import {AccordionModule} from "primeng/accordion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SkeletonModule} from "primeng/skeleton";
import {ChipModule} from "primeng/chip";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgxTypedJsModule,
    GalleriaModule,
    ImageGalleryModalComponent,
    AccordionModule,
    SkeletonModule,
    ChipModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  @ViewChild('portfolio') portfolio!: ElementRef;
  public email: string = 'iannonemattia7@gmail.com';
  public responsiveOn: boolean | undefined;
  public devFest2024Photos = [{src: './devFest/IMG_7273.png', alt: 'badge'},{src: './devFest/IMG_7257.png', alt: 'location'},{src: './devFest/IMG_7254.png', alt: 'schedule'}];


  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.responsiveOn = window?.innerWidth >= 768;
  }

  viewPortfolio() {
    this.portfolio.nativeElement.scrollIntoView({behavior: 'smooth'});
  }
}
