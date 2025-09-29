import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal {
  @Input() project: any;
  @Output() close = new EventEmitter<void>();

  onClose() {
    console.log("sending a close emit to parent")
    this.close.emit();
  }
}
