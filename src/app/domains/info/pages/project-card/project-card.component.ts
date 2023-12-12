import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../../../shared/models/project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
}