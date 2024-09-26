import {Component, OnInit} from "@angular/core";
import {NgFor, NgIf, NgOptimizedImage} from "@angular/common";


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
export class ImageGalleryModalComponent {

  constructor() {
  }

  public images: any[] = [];
}
