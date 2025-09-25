import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  imports: [FontAwesomeModule, CommonModule, ProjectCardComponent],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss'
})
export class Carousel {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  @Input() items: any[] = [];

  currentIndex: number = 0;

  nextSlide(): void {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
    }
    //this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  previousSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    //this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;  
  }

  getSlideClass(index: number): string {
    if (index === this.currentIndex) return 'active';

    if (this.currentIndex > 0 && index === this.currentIndex - 1) return 'prev';

    if (this.currentIndex > 0 && index === this.currentIndex - 2) return 'prev-2';

    if (this.currentIndex < this.items.length - 1 && index === this.currentIndex + 1) return 'next';

    if (this.currentIndex < this.items.length - 1 && index === this.currentIndex + 2) return 'next-2';

    if (index < this.currentIndex - 2) return 'hidden-left';

    if (index > this.currentIndex + 1) return 'hidden-right';

    return 'hidden';
  }
}
