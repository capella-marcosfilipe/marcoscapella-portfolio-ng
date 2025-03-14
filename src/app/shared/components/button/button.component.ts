import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = 'Click here';
  @Input() url: string = '#';
  @Input() variant: 'filled' | 'outline' = 'filled';
}
