import { Routes } from '@angular/router';
import { HomeComponent } from '@features/home/components/home.component';
import { WidgetComponent } from '@features/widget/components/widget.component';
import { AppComponent } from '@app/app.component';
import { ExpenseFormComponent } from './features/expenses/components/expense-form/expense-form.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      label: 'Home',
      icon: 'home-icon',
      order: 0,
    },
  },
  {
    path: 'expenses/new',
    component: ExpenseFormComponent,
    data: {
      label: 'New expense',
      icon: 'expense-icon',
      order: 1,
    },
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
