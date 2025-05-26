// Configuração das rotas da aplicação
export const routes = {
  home: "/",
  notFound: "*",
} as const;

// Tipo para as rotas (útil para TypeScript)
export type RouteKey = keyof typeof routes;
export type RoutePath = (typeof routes)[RouteKey];
