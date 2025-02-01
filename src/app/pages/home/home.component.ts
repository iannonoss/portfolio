import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgxTypedJsModule} from "ngx-typed-js";
import {GalleriaModule} from "primeng/galleria";
import {ImageGalleryModalComponent} from "../../modals/image-gallery-modal/image-gallery-modal.component";
import {AccordionModule} from "primeng/accordion";
import {SkeletonModule} from "primeng/skeleton";
import {ChipModule} from "primeng/chip";
import {RouterLink} from "@angular/router";
import {Events} from "./models/events-model";
import {catchError, of, Subscription, tap} from "rxjs";
import {PagesFacade} from "../pages.facade";
import {HttpClientModule} from "@angular/common/http";
import {ThemeSwitcherComponent} from "./theme/theme-switcher/theme-switcher.component";
import {TranslatePipe, TranslateService} from "@ngx-translate/core";

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
    HttpClientModule,
    ThemeSwitcherComponent,
    TranslatePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('portfolio') portfolio!: ElementRef;
  @ViewChild('experience') experience!: ElementRef;
  @ViewChild('specialEvents') specialEvents!: ElementRef;
  public email: string = 'iannonemattia7@gmail.com';
  public devFest2024Photos = [{src: './devFest/IMG_7273.png', alt: 'badge'}, {
    src: './devFest/IMG_7257.png',
    alt: 'location'
  }, {src: './devFest/IMG_7254.png', alt: 'schedule'}];
  public eventJson: Events | undefined;
  public subscriptions: Subscription[] = [];

  constructor(private pagesFacade: PagesFacade, public translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.getEvents();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public viewPortfolio() {
    this.portfolio.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  public viewExperience() {
    this.experience.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  public viewEvents() {
    this.specialEvents.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  public getLabelDynamic(object: any, fieldName: string): string {
    return object?.[`${fieldName}_${this.translateService?.currentLang}`] ?? '';
  }

  private getEvents(): void {
    const sb = this.pagesFacade.getEventsData().pipe(
      tap((events: Events) => {
        this.eventJson = events;
      }),
      catchError((error) => {
        console.error('Error fetching events:', error);
        return of(null);
      })
    ).subscribe();
    this.subscriptions.push(sb);
  }
}
