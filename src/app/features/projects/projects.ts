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
      id: 0,
      name: "Portfolio",
      subtitle: "Frontend Development",
      date: "September 2025",
      image: "images/540x900.png",
      modalImages: ["images/portfolio/HOME.png", "images/portfolio/Project Cards 1.png", "images/portfolio/Project Cards 2.png",
                    "images/portfolio/Topic Chips.png"
      ],
      description: "Showcase of various projects & professional experience",
      extendedDesc: "",
      skills: [
                {name:"Typescript",category:"lang-skills"},
                {name:"Angular",category:"frontend-skills"},
                {name:"Cloudflare",category:"other-skills"},
                {name:"Azure",category:"backend-skills"},
                {name:"Github Actions",category:"tools-skills"}
      ]
    },
    {
      id: 1, 
      name: "Spray Bot", 
      subtitle: "Python Development",
      date: "May 2024", 
      image: "images/spraybot.png",
      modalImages: ["images/250x140_a.png","images/250x140_b.png","images/250x140_c.png"], 
      description: "Discord bot created in Discord.py to use with peers.",
      extendedDesc: "Using Discord.py, implemented a bot to be used in discord servers with various functions. \
                    Firstly, there is a slash command that allows a user to target another user, in which \
                    Spray bot will send a custom message, tagging the targeted user. The second function allows \
                    a user to initiate a slash command that causes the bot to join an active Discord call, play an \
                    audio, and leave the call afterwards.",
      skills: [
                {name:"Python", category:"lang-skills"},
                {name:"APIs", category:"backend-skills"}
      ]
    },
    {
      id: 2, 
      name: "Business Scraper", 
      subtitle: "Full-Stack Application",
      date: "February 2024",
      image: "images/540x900_a.png", 
      modalImages: ["images/scraper/results.png","images/scraper/kml_test.png"],
      description: "Retrieve desired business information from custom draw .KML files.",
      extendedDesc: "Users upload a .KML file, known as a shapefile, which contains the coordinates for the \
                    vertices of a custom made shape. This program subdivides this larger shape by inserting radii \
                    throughout the large shape, then drawing circles to ensure the area is completely covered with \
                    minimal overlap from the circles. The coordinates of the these radii plus the diameter of each \
                    circle is then used as parameters for the Google Places API, and business information is \
                    retrieved in steps. This information is presented in a .CSV format to users, and users can \
                    select or omit which information to include.",
      skills: [
                {name:"Python", category:"lang-skills"}, 
                {name:"APIs", category:"backend-skills"}, 
                {name:"React",category:"frontend-skills"}, 
                {name:"C#/.NET",category:"lang-skills"}
      ]
    },
    {
      id: 3,
      name: "To do App",
      subtitle: "Full-Stack Application", 
      date: "",
      image: "images/540x900.png",
      modalImages: ["images/250x140_a.png","images/250x140_b.png","images/250x140_c.png"],
      description: "An application that tracks user submitted tasks",
      extendedDesc: "This full-stack application tracks tasks submitted by users and allows everyone to view \
                    one another's tasks. Made in the classical MERN stack.",
      skills: [
                {name:"MongoDb",category:"backend-skills"}, 
                {name:"Express.js",category:"backend-skills"}, 
                {name:"React",category:"frontend-skills"}, 
                {name:"Nodejs",category:"backend-skills"}, 
                {name:"Javascript",category:"lang-skills"}
              ]
    },
    {
      id: 4,
      name: "Ecommerce Application",
      subtitle: "Full-Stack Application", 
      date: "April 2025",
      image: "images/540x900_a.png",
      modalImages: ["images/250x140_a.png","images/250x140_b.png","images/250x140_c.png"],
      description: "Study on Jeffrey Palermo's onion architecture.",
      extendedDesc: "",
      skills: [
                {name:"C#",category:"lang-skills"}
      ]
    },
    {
      id: 5,
      name: "Movie Review App",
      subtitle: "Full-Stack Application", 
      date: "October 2023",
      image: "images/540x900.png",
      modalImages: ["images/250x140_a.png","images/250x140_b.png","images/250x140_c.png"],
      description: "Users explore a webpage of movies and leave reviews.",
      extendedDesc: "Created a simple html, css, javascript webpage. Explored accessing the Movie Databse api. \
                    Deployed a database on MongoDb to collect reviews about a movie, including a user's name \
                    and the content of their review. CRUD testing was done using Postman.",
      skills: [
                {name:"HTML",category:"lang-skills"}, 
                {name:"CSS",category:"lang-skills"}, 
                {name:"Javascript",category:"lang-skills"}, 
                {name:"MongoDb",category:"backend-skills"}
      ]
    },
    {
      id: 6,
      name: "Github API Query",
      subtitle: "Full-Stack Application",
      date: "November 2021", 
      image: "images/540x900_a.png",
      modalImages: ["images/250x140_a.png","images/250x140_b.png","images/250x140_c.png"],
      description: "Queries against the github api to find user information.",
      extendedDesc: "",
      skills: [
                {name:"HTML",category:"lang-skills"}, 
                {name:"Javascript",category:"lang-skills"}, 
                {name:"APIs",category:"backend-skills"}
              ]
    },
    {
      id: 7,
      name: "Image compression",
      subtitle: "ML Image Compression",
      date: "May 2021",
      image: "images/540x900.png",
      modalImages: ["images/250x140_a.png","images/250x140_b.png","images/250x140_c.png"],
      description: "Downscales a submitted image to 80x60.",
      extendedDesc: "",
      skills: [
                {name:"Python",category:"lang-skills"}
      ]
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
