import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section';
import { AboutComponent } from '../about/about';
import { ProjectsComponent } from '../projects/projects';

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, AboutComponent, ProjectsComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
