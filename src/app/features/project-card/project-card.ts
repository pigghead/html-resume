import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})

export class ProjectCardComponent {
  @Input() project!: any;
  @Output() learnMore = new EventEmitter<any>();

  onLearnMore(): void {
    this.learnMore.emit(this.project);
  }
}
