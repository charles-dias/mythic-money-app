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
      .sort((a, b) => (a.data?.['order'] || 0) - (b.data?.['order'] || 0))
      .map((route) => ({
        label: route.data?.['label'] || this.formatLabel(route.path),
        route: `/${route.path}` as AppRoutes,
        icon: route.data?.['icon'],
      }));

    return validRoutes;
  }

  // Seu método formatLabel atual continua o mesmo,
  // mas agora só será usado quando não houver label customizado
  private formatLabel(route: string): string {
    return route
      .replace('/', '')
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
