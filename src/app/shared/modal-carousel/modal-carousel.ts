import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-carousel',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './modal-carousel.html',
  styleUrls: ['./modal-carousel.scss']
})
export class ModalCarousel {
  faChevronCircleLeft = faChevronLeft;
  faChevronCircleRight = faChevronRight;
  currentIndex: number = 0;

  @Input() modalImages: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['modalImages']) {
      this.currentIndex = 0;
    }
  }

  getActiveSlide(index: number): string {
    return index === this.currentIndex ? 'active' : 'hidden'
  }

  nextSlide() {
    console.log("next slide!: ",this.currentIndex);
    if(this.currentIndex < this.modalImages.length-1) this.currentIndex++;
  }

  prevSlide() {
    console.log("previous slide!");
    if(this.currentIndex > 0) this.currentIndex--;
  }
}
