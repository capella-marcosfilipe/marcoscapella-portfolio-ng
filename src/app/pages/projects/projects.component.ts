import { Component } from '@angular/core';

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
export class ProjectsComponent {
  thumbnailsFolder: string = '../../../../assets/images/';

  projects: Project[] = projectsData.projects;
}
