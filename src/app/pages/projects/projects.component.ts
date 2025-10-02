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

  protected techFilters: string[] = ['All', 'AI', 'Machine Learning', 'Angular', 'Java', 'Python'];
  protected activeFilter: string = 'All';
  private searchTerm: string = '';

  ngOnInit(): void {
    // Ordena a lista principal de projetos, priorizando IA
    this.allProjects = [...projectsData.projects].sort((a, b) => {
      if (a.ai_focus && !b.ai_focus) return -1;
      if (!a.ai_focus && b.ai_focus) return 1;
      return 0;
    });
    this.updateDisplayedProjects();
  }

  /**
   * Aplica o filtro de tecnologia a partir de um clique de botão.
   * @param tech A tecnologia para filtrar.
   */
  applyFilter(tech: string): void {
    this.activeFilter = tech;
    this.updateDisplayedProjects();
  }

  /**
   * Atualiza o termo de busca a partir do input do usuário.
   * @param event O evento de teclado.
   */
  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
    this.updateDisplayedProjects();
  }

  /**
   * Lógica centralizada que atualiza os projetos exibidos com base
   * no filtro de botão ativo e no termo de busca.
   */
  private updateDisplayedProjects(): void {
    let projectsToFilter = this.allProjects;

    if (this.activeFilter !== 'All') {
      projectsToFilter = projectsToFilter.filter((project) =>
        project.techs.some(
          (t) => t.toLowerCase() === this.activeFilter.toLowerCase()
        )
      );
    }

    if (this.searchTerm.trim() !== '') {
      const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
      projectsToFilter = projectsToFilter.filter((project) =>
        project.techs.some((tech) =>
          tech.toLowerCase().includes(lowerCaseSearchTerm)
        )
      );
    }

    this.filteredProjects = projectsToFilter;
  }
}