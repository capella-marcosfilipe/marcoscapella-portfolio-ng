import { Component } from '@angular/core';

import experienceData from '../../../assets/contents/experiences.json';

interface ProfessionalExperience {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface TechResidency {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface Extracurriculum {
  institution: string;
  activity: string;
  period: string;
}

interface Education {
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
  education: Education[] = experienceData.education;
  extracurriculum: Extracurriculum[] = experienceData.extracurriculum;
  techResidency: TechResidency[] = experienceData.tech_residency;
  professionalExperience: ProfessionalExperience[] = experienceData.professional_experience;
}
