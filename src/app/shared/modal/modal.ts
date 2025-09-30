import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ModalCarousel } from '../modal-carousel/modal-carousel';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ModalCarousel],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal {
  @Input() project: any;
  @Output() close = new EventEmitter<void>();
  faGithub = faGithub;

  onClose() {
    //console.log("sending a close emit to parent")
    this.close.emit();
  }
}
