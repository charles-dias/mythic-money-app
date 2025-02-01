import { Component } from '@angular/core';
import { WidgetComponent } from '@shared/components/widget/components/widget.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WidgetComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  widgetData = [
    { value: 100, label: 'Total Limit', type: 'limit' },
    { value: 20, label: 'Weekly Limit', type: 'limit' },
    { value: 50, label: 'Total Spent', type: 'spent' },
    { value: 10, label: 'Weekly Spent', type: 'spent' },
  ];
}
