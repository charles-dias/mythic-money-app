import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes } from '@angular/router';
import { routes } from '../app.routes';

// Helper type to extract route paths
type ExtractRouteParams<T> = T extends `${infer Path}/:${infer Param}`
  ? Path | `${Path}/${string}`
  : T;

// Extract valid routes from the Routes type
type ValidRoute = Route & { path: string };

// Create union type of all possible routes
type AppRoutes = ExtractRouteParams<`/${NonNullable<ValidRoute['path']>}`>;

interface MenuItem {
  label: string;
  route: AppRoutes;
  icon?: string;
}

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css',
})
export class NavHeaderComponent {
  constructor(private menuService: MenuService) {
    this.menuItems = this.menuService.getMenuItems();
  }

  @Input() title = 'My App';

  isMenuOpen = false;
  menuItems: MenuItem[];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}

// Optional: Create a service to manage menu items
import { Injectable } from '@angular/core';

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
