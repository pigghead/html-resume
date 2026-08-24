import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({behavior: 'smooth'})
  }
}
