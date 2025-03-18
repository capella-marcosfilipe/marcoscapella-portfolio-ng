import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: false,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() title: string = 'CODING PROJECT';
  @Input() link: string = '#';
  @Input() thumbnail: string = '../../../../assets/images/miscthumb.png';
}
