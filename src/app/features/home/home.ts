import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section';

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
