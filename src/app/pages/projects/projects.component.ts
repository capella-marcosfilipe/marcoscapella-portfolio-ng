import { Component, OnInit } from '@angular/core';
import projectsData from '../../../assets/contents/projects.json';

interface Project {
  title: string;
  description: string;
  techs: string[];
  link: string;
  thumbnail: string;
}

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  protected projects: Project[] = projectsData.projects;
  protected filteredProjects: Project[] = [];

  ngOnInit(): void {
    this.filteredProjects = this.feedProjects();
  }

  protected feedProjects(techsFilter: string[] = ['']): Project[] {
    if (techsFilter.length === 0 || techsFilter[0].trim() === '') {
      return this.projects;
    }

    return this.projects.filter((project) =>
      techsFilter.some((filter) =>
        project.techs.some((tech) =>
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      )
    );
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.filteredProjects = this.feedProjects([input.value]);
  }
}
