import { Component, OnInit } from '@angular/core';
import projectsData from '../../../assets/contents/projects.json';

interface Project {
  title: string;
  description: string;
  techs: string[];
  link: string;
  thumbnail: string;
  ai_focus?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  protected allProjects: Project[] = projectsData.projects;
  protected filteredProjects: Project[] = [];

  protected techFilters: string[] = ['All', 'AI', 'Angular', 'Java', 'Python'];
  protected activeFilter: string = 'All';

  ngOnInit(): void {
    // Sort main project list.
    this.allProjects.sort((a, b) => {
      if (a.ai_focus && !b.ai_focus) return -1;
      if (!a.ai_focus && b.ai_focus) return 1;
      return 0;
    });

    this.applyFilter('All');
  }

  applyFilter(tech: string): void {
    this.activeFilter = tech;

    if (tech === 'All') {
      this.filteredProjects = this.allProjects;
    } else {
      this.filteredProjects = this.allProjects.filter((project) =>
        project.techs.some((t) =>
          t.toLowerCase().includes(tech.toLowerCase())
        )
      );
    }
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value.toLowerCase();

    this.applyFilter(this.activeFilter);

    if (searchTerm.trim() !== '') {
      this.filteredProjects = this.filteredProjects.filter((project) =>
        project.techs.some((tech) =>
          tech.toLowerCase().includes(searchTerm)
        )
      );
    }
  }
}
