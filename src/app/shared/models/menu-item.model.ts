import { Route } from '@angular/router';

// Helper type to extract route paths
type ExtractRouteParams<T> = T extends `${infer Path}/:${infer Param}`
  ? Path | `${Path}/${string}`
  : T;

// Extract valid routes from the Routes type
export type ValidRoute = Route & { path: string };

// Create union type of all possible routes
export type AppRoutes = ExtractRouteParams<`/${NonNullable<
  ValidRoute['path']
>}`>;

export interface MenuItem {
  label: string;
  route: AppRoutes;
  icon?: string;
}
