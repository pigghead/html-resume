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

  openModal(project: any) {
    this.selectedProject = project;
    document.body.classList.add('modal-open');
  }

  closeModal() {
    this.selectedProject = null;
    document.body.classList.remove('modal-open');
  }
}
