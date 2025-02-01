import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface WidgetData {
  value: number;
  label: string;
  type: string;
}

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
