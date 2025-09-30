import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-carousel',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './modal-carousel.html',
  styleUrls: ['./modal-carousel.scss']
})
export class ModalCarousel {
  faChevronCircleLeft = faChevronCircleLeft;
  faChevronCircleRight = faChevronCircleRight;
  currentIndex: number = 0;

  @Input() modalImages: string[] = [];

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
