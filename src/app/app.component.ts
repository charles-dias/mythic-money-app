import { Component } from '@angular/core';
import { NavHeaderComponent } from '@app/nav-header/nav-header.component';
import { HomeComponent } from '@app/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavHeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
