import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WidgetData } from '@app/shared/interfaces/widget.interface';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
})
export class WidgetComponent {
  @Input() data: WidgetData[] = [];
}
