// shared/types/routes.types.ts
import { Route } from '@angular/router';

// Helper type para extrair parâmetros de rota
type ExtractRouteParams<T> = T extends `${infer Path}/:${infer Param}`
  ? Path | `${Path}/${string}`
  : T;

// Tipo para rotas válidas
export type ValidRoute = Route & { path: string };

// Union type para todas as rotas possíveis
export type AppRoutes = ExtractRouteParams<`/${NonNullable<
  ValidRoute['path']
>}`>;
