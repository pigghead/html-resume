import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Carousel } from '../carousel/carousel';  
import { Modal } from '../../shared/modal/modal';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, Carousel, Modal],
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})

export class ProjectsComponent {
  Projects = 
  [
    {
      id: 1, 
      name: "Spray Bot", 
      subtitle: "Python Development", 
      image: "images/spraybot.png", 
      description: "Discord bot created in Discord.py to use with peers."
    },
    {
      id: 2, 
      name: "Business Scraper", 
      subtitle: "Full-Stack Application",
      image: "images/540x900_a.png", 
      description: "Retrieve desired business information from custom draw .KML files."
    },
    {
      id: 3,
      name: "To do App",
      image: "images/540x900.png",
      description: "This is a description"
    },
    {
      id: 4,
      name: "Ecommerce Application",
      image: "images/540x900_a.png",
      description: "This is a description"
    },
    {
      id: 5,
      name: "Application Name",
      image: "images/540x900.png",
      description: "This is a description"
    },
    {
      id: 6,
      name: "Application Name",
      image: "images/540x900_a.png",
      description: "This is a description"
    }
  ]

  selectedProject?: any = null;

  openModal(project: any) {
    this.selectedProject = project;
    document.body.classList.add('modal-open');
  }

  closeModal() {
    this.selectedProject = null;
    document.body.classList.remove('modal-open');
  }
}
