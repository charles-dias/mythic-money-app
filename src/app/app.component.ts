import { Component } from '@angular/core';
import { NavHeaderComponent } from '@shared/components/nav-header/nav-header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavHeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {}
