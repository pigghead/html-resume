import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { AboutComponent } from './features/about/about';
import { ProjectsComponent } from './features/projects/projects';
import { Resume } from './features/resume/resume';
import { ContactComponent } from "./features/contact/contact";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: Resume },
  { path: 'contact', component: ContactComponent }
];
