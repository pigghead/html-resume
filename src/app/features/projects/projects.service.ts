import { Injectable } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs';

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
            map(data => data.sort((a, b) =>
                new Date(b.date ?? '').getTime() - new Date(a.date ?? '').getTime()
            ).map((project, index) => ({...project, id: index, date: project.date ? project.date + '-01' : undefined})

            )),
            tap(data => this.cache = data)
        );
    }
}