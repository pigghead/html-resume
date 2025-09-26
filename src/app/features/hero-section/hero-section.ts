import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSectionComponent {
  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({behavior: 'smooth'})
  }
}
