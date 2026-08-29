import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ModalCarousel } from '../modal-carousel/modal-carousel';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ModalCarousel, DatePipe],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal {
  @Input() project: any;
  @Input() projectIndex: number = 0;
  @Input() projectCount: number = 0;

  @Output() close = new EventEmitter<void>();
  @Output() previousProject = new EventEmitter<void>();
  @Output() nextProject = new EventEmitter<void>();
  
  faGithub = faGithub;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faXmark= faXmark;

  onClose() {
    //console.log("sending a close emit to parent")
    this.close.emit();
  }

  // handle esc key
  @HostListener('document:keydown.escape')
  handleEscape(): void {
    this.onClose();
  }

  onPreviousProject(): void {
    this.previousProject.emit();
  }

  onNextProject(): void {
    this.nextProject.emit();
  }
}
