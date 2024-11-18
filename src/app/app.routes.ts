import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WidgetComponent } from './widget/widget.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AppComponent },
  { path: 'widget-component', component: WidgetComponent },
];
