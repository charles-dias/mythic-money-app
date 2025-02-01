import { Routes } from '@angular/router';
import { HomeComponent } from '@features/home/components/home.component';
import { WidgetComponent } from '@features/widget/components/widget.component';
import { AppComponent } from '@app/app.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AppComponent },
  { path: 'widget-component', component: WidgetComponent },
];
