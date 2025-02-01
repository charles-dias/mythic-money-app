// shared/interfaces/menu.interface.ts
import { AppRoutes } from '@shared/types/routes.types';

export interface MenuItem {
  label: string;
  route: AppRoutes;
  icon?: string;
}
