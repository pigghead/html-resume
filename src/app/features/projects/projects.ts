import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ProjectsService } from './projects.service';
import { Carousel } from '../carousel/carousel';  
import { Modal } from '../../shared/modal/modal';

interface Skill {name: string; category: string;}
export interface Project {
  id?: number;
  name: string;
  subtitle?: string;
  date?: string;
  image?: string;
  modalImages?: string[];
  description: string;
  extendedDesc: string;
  skills?: Skill[];
  githubLink?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, Carousel, Modal],
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})

export class ProjectsComponent implements OnInit {
  Projects: Project[] = [];
  selectedProject?: Project | null = null;

  constructor(private projectsSerivice: ProjectsService) {}

  ngOnInit(): void {
    this.projectsSerivice.getProjects().subscribe({
      next: data => this.Projects = data,
      error: err => console.error('Failed to load projects: ', err)
    });
  }

  openModal(project: any): void {
    this.selectedProject = project;
    //document.body.classList.add('modal-open');
  }

  closeModal(): void {
    this.selectedProject = null;
    //document.body.classList.remove('modal-open');
  }

  previousProject(): void {
    if(!this.selectedProject || !this.Projects.length) return;

    const currentIndex = this.Projects.indexOf(this.selectedProject);

    const previousIndex = (currentIndex - 1 + this.Projects.length) % this.Projects.length;

    this.selectedProject = this.Projects[previousIndex];
  }

  nextProject(): void {
    if(!this.selectedProject || !this.Projects.length) return;

    const currentIndex = this.Projects.indexOf(this.selectedProject);

    const nextIndex = (currentIndex + 1) % this.Projects.length;

    this.selectedProject = this.Projects[nextIndex];
  }

  get selectedProjectIndex(): number {
    return this.selectedProject ? this.Projects.indexOf(this.selectedProject) : 0;
  }
}
