import { Component } from '@angular/core';

import experienceData from '../../../assets/contents/experiences.json';

interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface AcadExperience {
  institution: string;
  course: string;
  period: string;
}

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  workExperience: WorkExperience[] = experienceData.work_experience;
  acadExperience: AcadExperience[] = experienceData.academic_experience;
}
