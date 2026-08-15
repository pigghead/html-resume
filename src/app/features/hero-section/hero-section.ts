import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-section',
  imports: [FontAwesomeModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSectionComponent {
  faCode = faCode;
  faFeatherPointed = faFeatherPointed;

  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({behavior: 'smooth'})
  }
}
