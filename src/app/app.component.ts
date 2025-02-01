import { Component } from '@angular/core';
import { NavHeaderComponent } from '@shared/components/nav-header/nav-header.component';
import { HomeComponent } from '@features/home/components/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavHeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
