# Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.2.

Can be found at https://www.justin-armstrong.com

# Summary
## Project Goal
My personal portfolio built with **Angular**  to showcase projects through a dynamic, interactive UI. 
Includes the use of modals, image carousels, and skill tags

## Data Model 
Projects are defined in Typescript/ Json format.
Each entry includes various information about the project:

```
interface Skill {name: string; category: string;}
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
```

- Example project entry
```
{
    "id": 1,
    "name": "Spray Bot",
    "subtitle": "Python Development",
    "date": "May 2024",
    "image": "images/spraybot.png",
    "modalImages": [
        "images/250x140_a.png",
        "images/250x140_b.png",
        "images/250x140_c.png"
    ],
    "description": "Discord bot created in Discord.py to use with peers.",
    "extendedDesc": "Using Discord.py, implemented a bot to be used in discord servers with various functions. Firstly, there is a slash command that allows a user to target another user, in which Spray bot will send a custom message, tagging the targeted user. The second function allows a user to initiate a slash command that causes the bot to join an active Discord call, play an audio, and leave the call afterwards.",
    "skills": [
        {"name": "Python", "category": "lang-skills"},
        {"name": "APIs", "category": "backend-skills"}
    ],
    "githubLink": "https://github.com/pigghead/spray-bot"
}
```

## Service
- Fetches & caches project data
```
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
```

## UI Componenets
**Project Cards**
- Display an image, project title, technologies topic/ summary
- Click 'learn more' to open a modal with additional details

**Modal Component**
- Shows a more in depth project description, a carousel of images, and
    chips for relevant skills, technologies, and tools used in the 
    project
- Skill chip iteration:
```
<div class="skills">
    <span 
    class="modal-skill-chip roboto-mono-font" 
    [ngClass]="skill.category"
    *ngFor="let skill of project.skills">
        {{ skill.name }}
    </span>
</div>
```

**Link Handling**
- Link disabled if no link provided in project profile:
```
    <a class="link raleway-font" [href]="project.githubLink" [class.disable]="!project.githubLink">
    <fa-icon [icon]="faGithub" size="xl"></fa-icon>
    </a>
```

## Deployment
- Hosting on **Azure Blob Storage**
    - Hosts the angular frontend
    - Automated via **Github Actions** which checks out the repo, builds the angular project +
        generates hashed Css filenames, and pushes updates
- Cloudflare Cdn
    - Manages Dns & routing
    - Provides caching, Ssl, and Cdn acceleration
    - Site accessible from: [justin-armstrong.com](justin-armstrong.com) by pointing the domain
        to the Azure blob storage

## Current State
- UI displays projects with working modals & carousels
- Deployment pipeline running with Azure

## Next Steps/ Ideas
- Project filtering (by category/skill)
- Improve animations
- Optimize images for performance
- Contact form via Azure App Function
