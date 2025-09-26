import { Component, Input } from '@angular/core';
import { Carousel } from '../carousel/carousel';  

@Component({
  selector: 'app-projects',
  imports: [Carousel],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})

export class ProjectsComponent {
  Projects = [
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
      image: "images/540x900_a.png", 
      description: "This is a description"
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
}
