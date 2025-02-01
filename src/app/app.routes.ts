import { Routes } from '@angular/router';
import { HomeComponent } from '@app/home/home.component';
import { WidgetComponent } from '@app/widget/widget.component';
import { AppComponent } from '@app/app.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AppComponent },
  { path: 'widget-component', component: WidgetComponent },
];
