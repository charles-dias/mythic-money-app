// Optional: Create a service to manage menu items
import { Injectable } from '@angular/core';
import {
  AppRoutes,
  MenuItem,
  ValidRoute,
} from '@app/shared/models/menu-item.model';
import { routes } from '@app/app.routes';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  getMenuItems(): MenuItem[] {
    const validRoutes = routes
      .filter(
        (route): route is ValidRoute =>
          typeof route.path === 'string' &&
          route.path !== '**' &&
          route.path !== ''
      )
      .map((route) => `/${route.path}` as AppRoutes);

    return validRoutes.map((route) => ({
      label: this.formatLabel(route),
      route,
    }));
  }

  private formatLabel(route: string): string {
    return route
      .replace('/', '')
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
