import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {NgFor, NgIf, NgOptimizedImage} from "@angular/common";

export interface Images {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-image-gallery-modal',
  templateUrl: './image-gallery-modal.component.html',
  styleUrls: ['./image-gallery-modal.component.scss'],
  imports: [
    NgIf,
    NgFor,
    NgOptimizedImage,
  ],
  standalone: true
})
export class ImageGalleryModalComponent implements OnChanges {
  @Input() images: Array<Images> | undefined;
  lightboxOpen = false;
  selectedPhoto: { src: string; alt: string } | null = null;

  constructor() {
  }

  openLightbox(photo: { src: string; alt: string }): void {
    this.lightboxOpen = true;
    this.selectedPhoto = photo;
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    this.selectedPhoto = null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // @ts-ignore
    this.images = changes?.images?.currentValue ?? this.images;
  }
}
