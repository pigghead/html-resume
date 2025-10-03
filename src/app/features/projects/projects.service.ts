import { Injectable } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs';

export interface Skill {name: string; category: string;}
export interface Project {
    id: number;
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

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {
    private cache: Project[] | null = null;
    constructor(private http: HttpClient) {};

    getProjects(forceReload = false): Observable<Project[]> {
        if(this.cache && !forceReload) {
            return of(this.cache)
        }

        return this.http.get<Project[]>('/projects.json').pipe(
            tap(data => this.cache = data)
        );
    }
}