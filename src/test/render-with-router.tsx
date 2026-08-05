import type { ReactNode } from "react";
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { render } from "@testing-library/react";

Object.defineProperty(window, "scrollTo", {
  configurable: true,
  value: () => undefined,
});

export async function renderWithRouter(ui: ReactNode, initialPath = "/") {
  const rootRoute = createRootRoute({ component: () => <Outlet /> });
  const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => ui,
  });
  const fallbackRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "$",
    component: () => ui,
  });
  const router = createRouter({
    routeTree: rootRoute.addChildren([testRoute, fallbackRoute]),
    history: createMemoryHistory({ initialEntries: [initialPath] }),
  });

  await router.load();

  return { router, ...render(<RouterProvider router={router} />) };
}
