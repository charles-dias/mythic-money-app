import { Injectable } from '@angular/core';
import { MenuItem } from '@shared/interfaces/menu-interface';
import { routes } from '@app/app.routes';
import { AppRoutes, ValidRoute } from '@shared/types/routes.types';

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
