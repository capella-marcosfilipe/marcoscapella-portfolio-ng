import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: false,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  thumbnailsFolder: string = '../../../../assets/images/';

  @Input() title: string = 'CODING PROJECT';
  @Input() link: string = '#';
  @Input() thumbnail: string = '';
  @Input() techs: string[] = ['Web', 'Dev'];

  defaultImage: string = this.thumbnailsFolder + 'default-backend.jpg';

  get imageUrl(): string {
    return this.thumbnail && this.thumbnail.trim() !== ''
      ? this.thumbnailsFolder + this.thumbnail
      : this.defaultImage;
  }
}
